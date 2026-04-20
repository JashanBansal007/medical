import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, HeadphonesIcon, PiggyBank } from 'lucide-react';
import api from '../services/api';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const categoriesRes = await api.get('/categories');
      setCategories(categoriesRes.data.categories || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[90vh] flex items-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-saffron-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-saffron-100 text-saffron-600 rounded-full text-sm font-medium mb-6">
                🇮🇳 Trusted Indian Medicines → 🇨🇦 Delivered to Canada
              </span>
              <h1 className="section-title mb-6 leading-tight">
                Healthcare{' '}
                <span className="text-gradient">Reimagined</span>{' '}
                for NRIs in Canada
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Access affordable, high-quality Indian medicines delivered right to your doorstep in Canada. 
                Save up to <span className="font-bold text-primary-500">70%</span> compared to Canadian pharmacy prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="btn-primary flex items-center gap-2">
                  Browse Categories <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/faq" className="btn-outline">
                  Learn More
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">Licensed</span> Indian Pharmacy
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">Fast</span> Canada Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
                  alt="Healthcare professional"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-500">Licensed Pharmacy</p>
                    <p className="text-sm text-gray-500">CDSCO Certified</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">💊</span>
                  <div>
                    <p className="font-bold text-2xl text-primary-500">70%</p>
                    <p className="text-xs text-gray-500">Average Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Order From Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Order From Us?</h2>
            <p className="section-subtitle">
              We bridge the gap between quality Indian healthcare and the Canadian diaspora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center group hover:bg-primary-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                <PiggyBank className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                Save Up to 70%
              </h3>
              <p className="text-gray-600 group-hover:text-primary-100 transition-colors">
                Indian generic medicines at fraction of Canadian prices without compromising quality
              </p>
            </div>

            <div className="card p-8 text-center group hover:bg-primary-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-saffron-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                <Shield className="w-8 h-8 text-saffron-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 group-hover:text-primary-100 transition-colors">
                All medicines sourced from licensed manufacturers with proper certifications
              </p>
            </div>

            <div className="card p-8 text-center group hover:bg-primary-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                <Truck className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                Fast Shipping
              </h3>
              <p className="text-gray-600 group-hover:text-primary-100 transition-colors">
                Delivery across Canada within 7-14 business days with tracking
              </p>
            </div>

            <div className="card p-8 text-center group hover:bg-primary-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                <HeadphonesIcon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                Expert Support
              </h3>
              <p className="text-gray-600 group-hover:text-primary-100 transition-colors">
                Hindi & English support available 7 days a week via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="section-title mb-2">Browse by Category</h2>
              <p className="text-gray-600">Find medicines for your health needs</p>
            </div>
            <Link to="/shop" className="btn-outline mt-4 md:mt-0 flex items-center gap-2">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="card p-0 animate-pulse overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-5">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 6).map(category => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Save on Your Medications?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience quality Indian medicines delivered to Canada at affordable prices. 
            Start shopping today and discover the DesiMeds difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-secondary flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="bg-white text-primary-500 px-6 py-3 rounded-full font-medium hover:bg-cream-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
