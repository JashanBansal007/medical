import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, loading } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      // Remove item when quantity goes below 1
      await removeFromCart(itemId);
      return;
    }
    await updateQuantity(itemId, newQuantity);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/checkout');
    } else {
      navigate('/checkout');
    }
  };

  // Check if any medicine requires prescription
  const requiresPrescription = cart.items?.some(item => item.medicine?.requiresPrescription);

  if (cart.items?.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-navy-500 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any medicines yet.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-navy-500 mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items?.map(item => {
              const medicine = item.medicine;
              if (!medicine) return null;
              
              // Calculate discounted price
              let displayPrice = medicine.price;
              if (medicine.discountType === 'percentage' && medicine.discountValue) {
                displayPrice = medicine.price - (medicine.price * medicine.discountValue / 100);
              } else if (medicine.discountType === 'flat' && medicine.discountValue) {
                displayPrice = medicine.price - medicine.discountValue;
              }
              const hasDiscount = displayPrice < medicine.price;
              
              return (
                <div key={item._id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={medicine.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200'}
                        alt={medicine.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-navy-500 line-clamp-1">
                            {medicine.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {medicine.manufacturer || 'Generic'}
                          </p>
                          {medicine.requiresPrescription && (
                            <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
                              <AlertCircle className="w-3 h-3" />
                              Prescription required
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          disabled={loading}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={loading}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={loading || item.quantity >= (medicine.stock || 100)}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          {hasDiscount ? (
                            <>
                              <p className="font-bold text-primary-500">
                                ${(displayPrice * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-sm text-gray-400 line-through">
                                ${(medicine.price * item.quantity).toFixed(2)}
                              </p>
                            </>
                          ) : (
                            <p className="font-bold text-primary-500">
                              ${item.itemTotal?.toFixed(2) || (medicine.price * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-display text-xl font-semibold text-navy-500 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.itemCount} items)</span>
                  <span>${cart.subtotal?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-primary-500">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Estimated Total</span>
                  <span className="text-primary-500">${cart.subtotal?.toFixed(2)} CAD</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  + shipping & applicable taxes
                </p>
              </div>

              {requiresPrescription && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-700">
                      Some items require a prescription. You'll need to upload it at checkout.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/shop"
                className="block text-center text-primary-500 hover:underline mt-4"
              >
                Continue Shopping
              </Link>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                  <span>🔒 Secure</span>
                  <span>💳 Razorpay</span>
                  <span>🚚 Tracked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customs Notice */}
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🛃</span>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                Important: Customs & Import Duties
              </h3>
              <p className="text-sm text-blue-700">
                International shipments may be subject to import duties and taxes, 
                which are the responsibility of the customer. These charges are determined 
                by your local customs authority and are not included in the order total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
