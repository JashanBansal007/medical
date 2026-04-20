import { Link } from 'react-router-dom';
import { ShoppingCart, Star, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PackageCard = ({ pkg }) => {
  const { addToCart, loading } = useCart();

  const hasDiscount = pkg.discountType !== 'none' && pkg.discountValue > 0;
  
  const discountedPrice = hasDiscount
    ? pkg.discountType === 'percentage'
      ? pkg.price - (pkg.price * pkg.discountValue / 100)
      : Math.max(0, pkg.price - pkg.discountValue)
    : pkg.price;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await addToCart(pkg._id, 1);
  };

  return (
    <Link to={`/package/${pkg.slug || pkg._id}`} className="block">
      <div className="card overflow-hidden group h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
          <img
            src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'}
            alt={pkg.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {hasDiscount && (
              <span className="badge badge-discount">
                {pkg.discountType === 'percentage'
                  ? `${pkg.discountValue}% OFF`
                  : `$${pkg.discountValue} OFF`}
              </span>
            )}
            {pkg.requiresPrescription && (
              <span className="badge badge-prescription flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Rx Required
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Category */}
          <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">
            {pkg.category}
          </span>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-navy-500 mt-1 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {pkg.name}
          </h3>

          {/* Rating - only show if there are actual reviews */}
          {pkg.ratings?.count > 0 && (
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
              <span className="text-sm font-medium text-navy-500">
                {pkg.ratings?.average?.toFixed(1)}
              </span>
              <span className="text-sm text-gray-400">
                ({pkg.ratings.count} reviews)
              </span>
            </div>
          )}

          {/* Medicines count */}
          <p className="text-sm text-gray-500 mb-4">
            {pkg.medicines?.length || 0} medicines included
          </p>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-auto">
            <div>
              {hasDiscount ? (
                <>
                  <span className="text-lg font-bold text-primary-500">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${pkg.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-primary-500">
                  ${pkg.price.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-gray-400 block">CAD</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={loading || pkg.stock === 0}
              className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
