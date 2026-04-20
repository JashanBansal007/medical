import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import MedicineCard from '../components/MedicineCard';

const CategoryDetail = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchCategoryAndMedicines();
  }, [slug]);

  const fetchCategoryAndMedicines = async () => {
    try {
      setLoading(true);
      
      // Fetch category details
      const categoryRes = await api.get(`/categories/slug/${slug}`);
      const categoryData = categoryRes.data;
      setCategory(categoryData);
      
      // Fetch medicines in this category
      const medicinesRes = await api.get(`/medicines/category/${categoryData._id}`);
      setMedicines(medicinesRes.data.medicines || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort medicines
  const getFilteredMedicines = () => {
    let filtered = [...medicines];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(m => 
        m.name.toLowerCase().includes(query) ||
        m.salts.toLowerCase().includes(query) ||
        (m.manufacturer && m.manufacturer.toLowerCase().includes(query))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredMedicines = getFilteredMedicines();

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading medicines...</p>
        </div>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The category you\'re looking for doesn\'t exist.'}</p>
          <Link 
            to="/shop" 
            className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Banner */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={category.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200'}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-primary-500/50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link to="/shop" className="hover:text-white">Shop</Link>
                <span>/</span>
                <span className="text-white">{category.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{category.icon || '💊'}</span>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
                  <p className="text-white/90 text-lg">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filters Bar */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search medicines by name or salt..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-gray-600 text-sm">
                {filteredMedicines.length} medicine{filteredMedicines.length !== 1 ? 's' : ''} found
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Medicines Grid */}
          {filteredMedicines.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMedicines.map(medicine => (
                <MedicineCard key={medicine._id} medicine={medicine} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No medicines found</h3>
              <p className="text-gray-600">
                {searchQuery 
                  ? `No medicines matching "${searchQuery}" in this category.`
                  : 'No medicines available in this category yet.'}
              </p>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-primary-500 font-medium hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Hover over medicines to see salt composition</h4>
                <p className="text-gray-600 text-sm">
                  Knowing the salt composition helps you understand what's in your medicine. 
                  Medicines marked with <span className="bg-red-500 text-white text-xs px-1 rounded">℞ Required</span> need a valid prescription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CategoryDetail;
