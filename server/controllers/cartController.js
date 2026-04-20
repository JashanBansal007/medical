import Cart from '../models/Cart.js';
import Medicine from '../models/Medicine.js';

// @desc    Get user's cart
// @route   GET /api/cart
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id })
      .populate('items.medicine');

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    // Calculate totals
    let subtotal = 0;
    const items = cart.items.map(item => {
      const med = item.medicine;
      if (!med) return null;
      
      let price = med.price;
      if (med.discountType === 'percentage') {
        price = med.price - (med.price * med.discountValue / 100);
      } else if (med.discountType === 'flat') {
        price = Math.max(0, med.price - med.discountValue);
      }
      
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;

      return {
        _id: item._id,
        medicine: {
          _id: med._id,
          name: med.name,
          slug: med.slug,
          salts: med.salts,
          price: med.price,
          discountType: med.discountType,
          discountValue: med.discountValue,
          discountedPrice: price,
          image: med.image,
          requiresPrescription: med.requiresPrescription,
          stock: med.stock
        },
        quantity: item.quantity,
        itemTotal
      };
    }).filter(Boolean);

    res.json({
      success: true,
      cart: {
        items,
        itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
        subtotal: Math.round(subtotal * 100) / 100
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
export const addToCart = async (req, res) => {
  try {
    const { medicineId, quantity = 1 } = req.body;

    // Verify medicine exists and is active
    const medicine = await Medicine.findOne({ _id: medicineId, isActive: true });
    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: 'Medicine not found'
      });
    }

    // Check stock
    if (medicine.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough stock available'
      });
    }

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    // Check if item already in cart
    const existingItem = cart.items.find(
      item => item.medicine.toString() === medicineId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ medicine: medicineId, quantity });
    }

    await cart.save();

    // Return updated cart
    return getCart(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { itemId } = req.params;

    if (quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be at least 1'
      });
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }

    const item = cart.items.id(itemId);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    // Check stock
    const medicine = await Medicine.findById(item.medicine);
    if (medicine.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough stock available'
      });
    }

    item.quantity = quantity;
    await cart.save();

    return getCart(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }

    cart.items = cart.items.filter(
      item => item._id.toString() !== req.params.itemId
    );
    await cart.save();

    return getCart(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Clear cart
// @route   DELETE /api/cart
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      cart.items = [];
      await cart.save();
    }

    res.json({
      success: true,
      cart: {
        items: [],
        itemCount: 0,
        subtotal: 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
