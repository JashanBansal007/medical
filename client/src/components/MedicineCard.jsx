import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MedicineCard = ({ medicine }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Calculate discounted price
  const getDiscountedPrice = () => {
    if (!medicine.discountType || medicine.discountType === 'none' || !medicine.discountValue) {
      return null;
    }
    if (medicine.discountType === 'percentage') {
      return medicine.price - (medicine.price * medicine.discountValue / 100);
    }
    if (medicine.discountType === 'flat') {
      return medicine.price - medicine.discountValue;
    }
    return null;
  };

  const discountedPrice = getDiscountedPrice();

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    setAddingToCart(true);
    try {
      await addToCart(medicine._id, 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Image with discount badge */}
      <div className="relative h-40 bg-gray-50">
        <img
          src={medicine.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'}
          alt={medicine.name}
          className="w-full h-full object-cover"
        />
        
        {/* Discount Badge */}
        {medicine.discountValue > 0 && (
          <div className="absolute top-2 left-2 bg-saffron-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {medicine.discountType === 'percentage' 
              ? `${medicine.discountValue}% OFF` 
              : `$${medicine.discountValue} OFF`}
          </div>
        )}

        {/* Prescription Badge */}
        {medicine.requiresPrescription && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            ℞ Required
          </div>
        )}

        {/* Salts Tooltip */}
        {showTooltip && medicine.salts && (
          <div className="absolute bottom-0 left-0 right-0 bg-primary-500/95 backdrop-blur-sm text-white p-3 transform transition-all duration-300">
            <p className="text-xs font-semibold mb-1">Salt Composition:</p>
            <p className="text-xs opacity-90">{medicine.salts}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 min-h-[40px]">
          {medicine.name}
        </h3>

        {/* Manufacturer */}
        <p className="text-xs text-gray-500 mb-2">
          {medicine.manufacturer || 'Generic'}
        </p>

        {/* Dosage */}
        <p className="text-xs text-gray-600 mb-3 line-clamp-1">
          {medicine.dosage}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary-500">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${medicine.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-primary-500">
                ${medicine.price.toFixed(2)}
              </span>
            )}
            <span className="text-xs text-gray-500 block">CAD</span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={addingToCart || medicine.stock === 0}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 
              ${medicine.stock === 0 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-primary-500 text-white hover:bg-primary-600 active:scale-95'
              }`}
          >
            {addingToCart ? (
              <span className="flex items-center gap-1">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </span>
            ) : medicine.stock === 0 ? (
              'Out of Stock'
            ) : (
              'Add'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
