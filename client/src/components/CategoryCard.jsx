import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <span className="text-2xl">{category.icon || '💊'}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {category.description}
        </p>
        
        {/* Browse Button */}
        <div className="mt-4 flex items-center text-primary-500 font-medium text-sm">
          <span>Browse Medicines</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
