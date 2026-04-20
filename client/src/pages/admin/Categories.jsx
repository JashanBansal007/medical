import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, Edit2, Trash2, X,
  Pill, LayoutDashboard, ShoppingCart, FolderOpen
} from 'lucide-react';
import api from '../../services/api';
import toast from 'react-hot-toast';

// Admin Sidebar
const AdminSidebar = ({ active }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { id: 'medicines', label: 'Medicines', path: '/admin/medicines', icon: Pill },
    { id: 'categories', label: 'Categories', path: '/admin/categories', icon: FolderOpen },
    { id: 'orders', label: 'Orders', path: '/admin/orders', icon: ShoppingCart },
  ];

  return (
    <div className="w-64 bg-navy-500 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-white font-bold text-xl">DesiMeds Admin</h1>
        <p className="text-navy-200 text-sm">Management Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              active === item.id
                ? 'bg-white text-navy-500'
                : 'text-navy-200 hover:bg-navy-400'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <Link to="/" className="flex items-center gap-3 px-4 py-3 text-navy-200 hover:bg-navy-400 rounded-xl transition-colors mt-auto">
        ← Back to Store
      </Link>
    </div>
  );
};

// Category Modal
const CategoryModal = ({ isOpen, onClose, category, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    icon: '💊',
    isActive: true
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || '',
        description: category.description || '',
        image: category.image || '',
        icon: category.icon || '💊',
        isActive: category.isActive !== false
      });
    } else {
      setFormData({
        name: '',
        description: '',
        image: '',
        icon: '💊',
        isActive: true
      });
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving category:', error);
    } finally {
      setLoading(false);
    }
  };

  const iconOptions = ['💊', '🦴', '❤️', '💉', '💇', '🫃', '🧠', '👁️', '🦷', '💪', '🩺', '🏥'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-navy-500">
            {category ? 'Edit Category' : 'Add New Category'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g., Bone & Joint"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows="3"
              placeholder="Brief description of this category"
            />
          </div>

          {/* Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map(icon => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon })}
                  className={`w-10 h-10 text-xl rounded-lg border-2 transition-colors ${
                    formData.icon === icon 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="https://example.com/image.jpg"
            />
            {formData.image && (
              <img 
                src={formData.image} 
                alt="Preview" 
                className="mt-2 w-full h-32 object-cover rounded-lg"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
          </div>

          {/* Active */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">Active (visible to customers)</span>
          </label>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50"
            >
              {loading ? 'Saving...' : (category ? 'Update' : 'Add Category')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Component
const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get('/categories');
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingCategory) {
        await api.put(`/categories/${editingCategory._id}`, formData);
        toast.success('Category updated successfully');
      } else {
        await api.post('/categories', formData);
        toast.success('Category added successfully');
      }
      fetchCategories();
      setEditingCategory(null);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save category');
      throw error;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category? This will fail if medicines exist in this category.')) return;
    
    try {
      await api.delete(`/categories/${id}`);
      toast.success('Category deleted successfully');
      fetchCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete category');
    }
  };

  const openEditModal = (category) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const openAddModal = () => {
    setEditingCategory(null);
    setShowModal(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar active="categories" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-navy-500">Categories</h1>
            <p className="text-gray-500">Manage medicine categories</p>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-primary-500 text-white px-4 py-2 rounded-xl hover:bg-primary-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Category
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="h-32 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No categories yet</h3>
            <p className="text-gray-500 mb-6">Create your first category to organize medicines</p>
            <button onClick={openAddModal} className="btn-primary">
              Add Category
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <div key={category._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative h-40">
                  <img
                    src={category.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400'}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                    <span className="text-2xl">{category.icon || '💊'}</span>
                  </div>
                  {!category.isActive && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Inactive
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy-500 mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{category.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.medicineCount || 0} medicines
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(category)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CategoryModal
        isOpen={showModal}
        onClose={() => { setShowModal(false); setEditingCategory(null); }}
        category={editingCategory}
        onSave={handleSave}
      />
    </div>
  );
};

export default AdminCategories;
