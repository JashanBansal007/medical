import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar, Copy, ArrowRight } from 'lucide-react';
import api from '../services/api';
import toast from 'react-hot-toast';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      verifyPayment(sessionId);
    } else {
      fetchOrder();
    }
  }, [id, searchParams]);

  const verifyPayment = async (sessionId) => {
    try {
      const { data } = await api.post('/orders/verify-payment', {
        sessionId,
        orderId: id
      });
      setOrder(data.order);
    } catch (error) {
      console.error('Error verifying payment:', error);
      fetchOrder();
    } finally {
      setLoading(false);
    }
  };

  const fetchOrder = async () => {
    try {
      const { data } = await api.get(`/orders/${id}`);
      setOrder(data.order);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(order.orderNumber);
    toast.success('Order number copied!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your order...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order not found</h2>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-navy-500 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for your order. We'll send you updates via email.
          </p>
        </div>

        {/* Order Number */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="text-2xl font-bold text-navy-500">{order.orderNumber}</p>
            </div>
            <button
              onClick={copyOrderNumber}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              title="Copy order number"
            >
              <Copy className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-display text-lg font-semibold text-navy-500 mb-4">
            Order Status
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-500 rounded-full transition-all duration-500"
                    style={{ width: order.status === 'confirmed' ? '25%' : '10%' }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span className={order.status === 'confirmed' || order.status === 'processing' ? 'text-green-600 font-medium' : ''}>
                    Confirmed
                  </span>
                  <span>Processing</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Truck className="w-6 h-6 text-primary-500" />
              <div>
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="font-medium">{order.estimatedDelivery || '7-14 business days'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <Calendar className="w-6 h-6 text-saffron-500" />
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">
                  {new Date(order.createdAt).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-display text-lg font-semibold text-navy-500 mb-4">
            Order Items
          </h2>
          
          <div className="space-y-4">
            {order.items?.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-navy-500">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium text-primary-500">
                  ${(item.discountedPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${order.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${order.shippingCost?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-100">
              <span>Total</span>
              <span className="text-primary-500">${order.total?.toFixed(2)} CAD</span>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="font-display text-lg font-semibold text-navy-500 mb-4">
            Shipping Address
          </h2>
          <div className="text-gray-600">
            <p className="font-medium text-navy-500">{order.shippingAddress?.fullName}</p>
            <p>{order.shippingAddress?.street}</p>
            <p>
              {order.shippingAddress?.city}, {order.shippingAddress?.province} {order.shippingAddress?.postalCode}
            </p>
            <p>{order.shippingAddress?.country}</p>
            <p className="mt-2">{order.shippingAddress?.phone}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/my-orders" className="btn-outline flex items-center justify-center gap-2">
            View All Orders
          </Link>
          <Link to="/shop" className="btn-primary flex items-center justify-center gap-2">
            Continue Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Notice */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
          <p className="text-sm text-blue-700">
            📧 A confirmation email has been sent to your registered email address.
            <br />
            Use your order number to track your shipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
