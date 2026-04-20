import Razorpay from 'razorpay';
import crypto from 'crypto';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Medicine from '../models/Medicine.js';
import { calculateShipping, getEstimatedDelivery } from '../utils/shipping.js';

// Initialize Razorpay lazily to prevent startup errors
let razorpay = null;
const getRazorpay = () => {
  if (!razorpay) {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error('Razorpay API keys not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env');
    }
    razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });
  }
  return razorpay;
};

// @desc    Calculate shipping for address
// @route   POST /api/orders/shipping
export const calculateShippingCost = async (req, res) => {
  try {
    const { province, itemCount } = req.body;
    const shipping = calculateShipping(province, itemCount);
    const estimatedDelivery = getEstimatedDelivery(province);

    res.json({
      success: true,
      shipping: {
        ...shipping,
        estimatedDelivery
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create Razorpay order
// @route   POST /api/orders/checkout
export const createCheckoutSession = async (req, res) => {
  try {
    const { shippingAddress, prescriptionUrl } = req.body;

    // Get user's cart
    const cart = await Cart.findOne({ user: req.user._id })
      .populate('items.medicine');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    // Check if prescription required
    const requiresPrescription = cart.items.some(
      item => item.medicine?.requiresPrescription
    );
    if (requiresPrescription && !prescriptionUrl) {
      return res.status(400).json({
        success: false,
        message: 'Prescription is required for some items in your cart'
      });
    }

    // Calculate totals
    let subtotal = 0;
    const orderItems = [];

    for (const item of cart.items) {
      const medicine = item.medicine;
      if (!medicine || !medicine.isActive) continue;

      let price = medicine.price;
      if (medicine.discountType === 'percentage') {
        price = medicine.price - (medicine.price * medicine.discountValue / 100);
      } else if (medicine.discountType === 'flat') {
        price = Math.max(0, medicine.price - medicine.discountValue);
      }

      const itemTotal = price * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        medicine: medicine._id,
        name: medicine.name,
        price: medicine.price,
        discountedPrice: price,
        quantity: item.quantity
      });
    }

    // Calculate shipping
    const shipping = calculateShipping(
      shippingAddress.province,
      orderItems.reduce((sum, item) => sum + item.quantity, 0)
    );

    const total = subtotal + shipping.cost;

    // Create order in database (pending payment)
    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      shippingAddress,
      subtotal: Math.round(subtotal * 100) / 100,
      shippingCost: shipping.cost,
      total: Math.round(total * 100) / 100,
      prescriptionUrl,
      prescriptionRequired: requiresPrescription,
      estimatedDelivery: getEstimatedDelivery(shippingAddress.province),
      status: 'pending',
      paymentStatus: 'pending'
    });

    // Create Razorpay order (amount in paise - smallest currency unit)
    // Convert CAD to INR for Razorpay (approximate rate, you can use live rates)
    const amountInINR = Math.round(total * 62 * 100); // CAD to INR (approx 62 rate) * 100 for paise
    
    const razorpayOrder = await getRazorpay().orders.create({
      amount: amountInINR,
      currency: 'INR',
      receipt: order.orderNumber,
      notes: {
        orderId: order._id.toString(),
        customerEmail: req.user.email
      }
    });

    // Save Razorpay order ID to our order
    order.razorpayOrderId = razorpayOrder.id;
    await order.save();

    res.json({
      success: true,
      orderId: order._id,
      orderNumber: order.orderNumber,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      totalCAD: total,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Verify Razorpay payment
// @route   POST /api/orders/verify-payment
export const verifyPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      orderId 
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed'
      });
    }

    // Update order
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    order.paymentStatus = 'paid';
    order.razorpayPaymentId = razorpay_payment_id;
    order.razorpaySignature = razorpay_signature;
    order.status = 'confirmed';
    await order.save();

    // Clear user's cart
    await Cart.findOneAndUpdate(
      { user: order.user },
      { items: [] }
    );

    // Update stock
    for (const item of order.items) {
      await Medicine.findByIdAndUpdate(item.medicine, {
        $inc: { stock: -item.quantity }
      });
    }

    res.json({
      success: true,
      message: 'Payment verified successfully',
      order
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get user's orders
// @route   GET /api/orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single order
// @route   GET /api/orders/:id
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('items.medicine');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Track order by order number (public)
// @route   GET /api/orders/track/:orderNumber
export const trackOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      orderNumber: req.params.orderNumber.toUpperCase()
    }).select('orderNumber status statusHistory estimatedDelivery trackingNumber createdAt');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found. Please check your order number.'
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ============ ADMIN CONTROLLERS ============

// @desc    Get all orders (Admin) - Only paid orders
// @route   GET /api/admin/orders
export const getAllOrders = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    // Only show paid orders in admin dashboard
    let query = { paymentStatus: 'paid' };
    if (status) query.status = status;

    const skip = (Number(page) - 1) * Number(limit);
    const orders = await Order.find(query)
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Order.countDocuments(query);

    res.json({
      success: true,
      count: orders.length,
      total,
      pages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update order status (Admin)
// @route   PUT /api/admin/orders/:id
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, trackingNumber, note } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    if (status) order.status = status;
    if (trackingNumber) order.trackingNumber = trackingNumber;
    if (note) {
      order.statusHistory.push({
        status: order.status,
        note,
        date: new Date()
      });
    }

    await order.save();

    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get dashboard stats (Admin) - Only paid orders
// @route   GET /api/admin/stats
export const getDashboardStats = async (req, res) => {
  try {
    // Only count paid orders
    const paidFilter = { paymentStatus: 'paid' };
    
    const totalOrders = await Order.countDocuments(paidFilter);
    const pendingOrders = await Order.countDocuments({ ...paidFilter, status: 'pending' });
    const processingOrders = await Order.countDocuments({ ...paidFilter, status: 'processing' });
    const deliveredOrders = await Order.countDocuments({ ...paidFilter, status: 'delivered' });
    
    const revenueResult = await Order.aggregate([
      { $match: { paymentStatus: 'paid' } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);
    const totalRevenue = revenueResult[0]?.total || 0;

    const totalMedicines = await Medicine.countDocuments();
    const activeMedicines = await Medicine.countDocuments({ isActive: true });

    // Only show paid orders in recent orders
    const recentOrders = await Order.find(paidFilter)
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      stats: {
        totalOrders,
        pendingOrders,
        processingOrders,
        deliveredOrders,
        totalRevenue: Math.round(totalRevenue * 100) / 100,
        totalMedicines,
        activeMedicines
      },
      recentOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
