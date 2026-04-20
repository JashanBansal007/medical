import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import api from '../services/api';
import CategoryCard from '../components/CategoryCard';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/categories');
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter categories based on search
  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-primary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-white text-center mb-4">
            Browse by Category
          </h1>
          <p className="text-primary-100 text-center max-w-2xl mx-auto">
            Select a category to explore our collection of authentic Indian medicines
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-saffron-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <p className="text-gray-600 mb-8 text-center">
          {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} available
        </p>

        {/* Categories Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="card p-0 animate-pulse overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCategories.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map(category => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No categories found</h3>
            <p className="text-gray-500 mb-6">Try a different search term</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="btn-outline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-saffron-50 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
            Looking for a specific medicine?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Click on any category above to browse individual medicines. You can search by medicine name 
            or salt composition within each category. Hover over any medicine to see its salt composition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Authentic Indian medicines
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
              Delivered to Canada
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Quality assured
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
