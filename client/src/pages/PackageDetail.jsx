import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, AlertCircle, Check, ChevronLeft, Minus, Plus, Package, Clock, Shield, Truck } from 'lucide-react';
import api from '../services/api';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const PackageDetail = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart, loading: cartLoading } = useCart();

  useEffect(() => {
    fetchPackage();
  }, [id]);

  const fetchPackage = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/packages/${id}`);
      setPkg(data.package);
    } catch (error) {
      console.error('Error fetching package:', error);
      toast.error('Failed to load package details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const result = await addToCart(pkg._id, quantity);
    if (result.needsAuth) {
      // Redirect to login would happen via toast message
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-200 rounded-3xl"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Package not found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = pkg.discountType !== 'none' && pkg.discountValue > 0;
  const discountedPrice = hasDiscount
    ? pkg.discountType === 'percentage'
      ? pkg.price - (pkg.price * pkg.discountValue / 100)
      : Math.max(0, pkg.price - pkg.discountValue)
    : pkg.price;

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-8">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-lg">
              <img
                src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800'}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {hasDiscount && (
                <span className="badge badge-discount text-lg px-4 py-2">
                  {pkg.discountType === 'percentage'
                    ? `${pkg.discountValue}% OFF`
                    : `$${pkg.discountValue} OFF`}
                </span>
              )}
              {pkg.requiresPrescription && (
                <span className="badge badge-prescription flex items-center gap-1 px-4 py-2">
                  <AlertCircle className="w-4 h-4" />
                  Prescription Required
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-sm font-medium text-primary-500 uppercase tracking-wider">
              {pkg.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-500 mt-2 mb-4">
              {pkg.name}
            </h1>

            {/* Rating - only show if there are actual reviews */}
            {pkg.ratings?.count > 0 && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.round(pkg.ratings?.average) ? 'fill-saffron-400 text-saffron-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {pkg.ratings?.average?.toFixed(1)} ({pkg.ratings.count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mb-6">
              {hasDiscount ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary-500">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${pkg.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">CAD</span>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary-500">
                    ${pkg.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">CAD</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {pkg.description}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <Package className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-500">Contains</p>
                  <p className="font-medium">{pkg.medicines?.length || 0} medicines</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <Clock className="w-6 h-6 text-saffron-500" />
                <div>
                  <p className="text-sm text-gray-500">Expiry</p>
                  <p className="font-medium">{pkg.expiryInfo}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <Truck className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Delivery</p>
                  <p className="font-medium">7-14 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <Shield className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className={`font-medium ${pkg.stock > 10 ? 'text-green-600' : 'text-orange-500'}`}>
                    {pkg.stock > 10 ? 'In Stock' : `Only ${pkg.stock} left`}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 rounded-l-full transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(pkg.stock, quantity + 1))}
                  className="p-3 hover:bg-gray-100 rounded-r-full transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={cartLoading || pkg.stock === 0}
                className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ShoppingCart className="w-5 h-5" />
                {pkg.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            {/* Health Conditions */}
            {pkg.healthConditions?.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Helps with:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.healthConditions.map((condition, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              {['description', 'medicines', 'usage'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'medicines' ? 'Medicines Included' : tab === 'usage' ? 'Usage Instructions' : 'Description'}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">{pkg.description}</p>
                <h4 className="font-display text-lg font-semibold text-navy-500 mb-3">Ingredients</h4>
                <p className="text-gray-600">{pkg.ingredients}</p>
              </div>
            )}

            {activeTab === 'medicines' && (
              <div className="grid md:grid-cols-2 gap-4">
                {pkg.medicines?.map((medicine, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-500">{medicine.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">Dosage: {medicine.dosage}</p>
                        <p className="text-sm text-gray-500">Quantity: {medicine.quantity} units</p>
                        {medicine.description && (
                          <p className="text-sm text-gray-600 mt-2">{medicine.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="font-display text-lg font-semibold text-navy-500 mb-4">
                  How to Use This Package
                </h4>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {pkg.usageInstructions}
                </p>
                
                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800">Important Notice</p>
                      <p className="text-sm text-amber-700 mt-1">
                        Always consult with a healthcare professional before starting any new medication. 
                        This package is not a substitute for professional medical advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
