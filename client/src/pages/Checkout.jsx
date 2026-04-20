import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, AlertCircle, Truck, CreditCard, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import toast from 'react-hot-toast';

const provinces = [
  { code: 'ON', name: 'Ontario' },
  { code: 'QC', name: 'Quebec' },
  { code: 'BC', name: 'British Columbia' },
  { code: 'AB', name: 'Alberta' },
  { code: 'MB', name: 'Manitoba' },
  { code: 'SK', name: 'Saskatchewan' },
  { code: 'NS', name: 'Nova Scotia' },
  { code: 'NB', name: 'New Brunswick' },
  { code: 'NL', name: 'Newfoundland and Labrador' },
  { code: 'PE', name: 'Prince Edward Island' },
  { code: 'NT', name: 'Northwest Territories' },
  { code: 'YT', name: 'Yukon' },
  { code: 'NU', name: 'Nunavut' }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, refreshCart } = useCart();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [shippingCost, setShippingCost] = useState(null);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [prescriptionUrl, setPrescriptionUrl] = useState('');
  const [uploadingPrescription, setUploadingPrescription] = useState(false);

  const [address, setAddress] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    province: 'ON',
    postalCode: '',
    country: 'Canada'
  });

  const requiresPrescription = cart.items?.some(item => item.medicine?.requiresPrescription);

  useEffect(() => {
    if (cart.items?.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  useEffect(() => {
    if (address.province) {
      calculateShipping();
    }
  }, [address.province, cart.itemCount]);

  const calculateShipping = async () => {
    try {
      const { data } = await api.post('/orders/shipping', {
        province: address.province,
        itemCount: cart.itemCount
      });
      setShippingCost(data.shipping.cost);
      setEstimatedDelivery(data.shipping.estimatedDelivery);
    } catch (error) {
      console.error('Error calculating shipping:', error);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handlePrescriptionUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setPrescriptionFile(file);
    setUploadingPrescription(true);

    try {
      const formData = new FormData();
      formData.append('prescription', file);

      const { data } = await api.post('/orders/upload-prescription', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setPrescriptionUrl(data.url);
      toast.success('Prescription uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload prescription');
      setPrescriptionFile(null);
    } finally {
      setUploadingPrescription(false);
    }
  };

  const validateForm = () => {
    if (!address.fullName || !address.phone || !address.street || 
        !address.city || !address.province || !address.postalCode) {
      toast.error('Please fill in all address fields');
      return false;
    }

    if (requiresPrescription && !prescriptionUrl) {
      toast.error('Please upload a prescription for required items');
      return false;
    }

    return true;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error('Failed to load payment gateway. Please try again.');
        setLoading(false);
        return;
      }

      // Create order
      const { data } = await api.post('/orders/checkout', {
        shippingAddress: address,
        prescriptionUrl: prescriptionUrl || undefined
      });

      // Configure Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'DesiMeds Canada',
        description: `Order #${data.orderNumber}`,
        order_id: data.razorpayOrderId,
        handler: async function (response) {
          try {
            // Verify payment on server
            const verifyRes = await api.post('/orders/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: data.orderId
            });

            if (verifyRes.data.success) {
              toast.success('Payment successful!');
              refreshCart();
              navigate(`/order-confirmation/${data.orderId}`);
            }
          } catch (error) {
            toast.error('Payment verification failed');
          }
        },
        prefill: {
          name: address.fullName,
          email: user?.email,
          contact: address.phone
        },
        notes: {
          shipping_address: `${address.street}, ${address.city}, ${address.province} ${address.postalCode}`
        },
        theme: {
          color: '#0D4F4F'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            toast.error('Payment cancelled');
          }
        }
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      const message = error.response?.data?.message || 'Checkout failed. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const total = (cart.subtotal || 0) + (shippingCost || 0);

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center text-gray-600 hover:text-primary-500 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Cart
        </button>

        <h1 className="font-display text-3xl font-bold text-navy-500 mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-navy-500 mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary-500" />
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={address.fullName}
                    onChange={handleAddressChange}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={address.phone}
                    onChange={handleAddressChange}
                    className="input-field"
                    placeholder="+1 (416) 555-0123"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleAddressChange}
                    className="input-field"
                    placeholder="123 Main Street, Unit 4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="input-field"
                    placeholder="Toronto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Province *
                  </label>
                  <select
                    name="province"
                    value={address.province}
                    onChange={handleAddressChange}
                    className="input-field"
                  >
                    {provinces.map(p => (
                      <option key={p.code} value={p.code}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleAddressChange}
                    className="input-field"
                    placeholder="M5V 2T6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value="Canada"
                    disabled
                    className="input-field bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Prescription Upload */}
            {requiresPrescription && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold text-navy-500 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Prescription Required
                </h2>
                <p className="text-gray-600 mb-4">
                  Some items in your cart require a valid prescription. Please upload a clear photo or PDF of your prescription.
                </p>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                  {prescriptionFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📄</span>
                      <div className="text-left">
                        <p className="font-medium text-gray-700">{prescriptionFile.name}</p>
                        <p className="text-sm text-green-600">Uploaded successfully</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drag & drop your prescription or click to browse
                      </p>
                      <p className="text-sm text-gray-400">
                        Supports: JPEG, PNG, PDF (Max 5MB)
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handlePrescriptionUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={uploadingPrescription}
                  />
                </div>
              </div>
            )}

            {/* Customs Notice */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex gap-3">
                <span className="text-xl">🛃</span>
                <div>
                  <p className="font-medium text-blue-800">Customs & Import Duties</p>
                  <p className="text-sm text-blue-700 mt-1">
                    As the recipient, you are responsible for any customs duties, taxes, or fees 
                    imposed by Canadian authorities. These are not included in your order total.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-display text-xl font-semibold text-navy-500 mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {cart.items?.map(item => (
                  <div key={item._id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.medicine?.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100'}
                        alt={item.medicine?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700 line-clamp-1">
                        {item.medicine?.name}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-primary-500">
                        ${item.itemTotal?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cart.subtotal?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shippingCost !== null ? (
                    <span>${shippingCost.toFixed(2)}</span>
                  ) : (
                    <span className="text-sm">Calculating...</span>
                  )}
                </div>
                {estimatedDelivery && (
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Est. Delivery</span>
                    <span>{estimatedDelivery}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary-500">${total.toFixed(2)} CAD</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading || (requiresPrescription && !prescriptionUrl)}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay Now
                  </>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                Secure checkout powered by Razorpay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
