import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, Edit2, Trash2, Search, Filter, X,
  Package as PackageIcon, DollarSign, Percent
} from 'lucide-react';
import api from '../../services/api';
import toast from 'react-hot-toast';

// Import sidebar from Dashboard
const AdminSidebar = ({ active }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/admin' },
    { id: 'packages', label: 'Packages', path: '/admin/packages' },
    { id: 'orders', label: 'Orders', path: '/admin/orders' },
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
            <PackageIcon className="w-5 h-5" />
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

const PackageModal = ({ isOpen, onClose, package: pkg, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    medicines: [{ name: '', dosage: '', quantity: 1 }],
    ingredients: '',
    usageInstructions: '',
    price: '',
    discountType: 'none',
    discountValue: 0,
    category: '',
    healthConditions: [],
    requiresPrescription: false,
    expiryInfo: '',
    stock: 100,
    isActive: true
  });
  const [loading, setLoading] = useState(false);
  const [healthConditionInput, setHealthConditionInput] = useState('');

  useEffect(() => {
    if (pkg) {
      setFormData({
        ...pkg,
        ingredients: pkg.ingredients?.join(', ') || '',
        usageInstructions: pkg.usageInstructions?.join('. ') || '',
      });
    } else {
      setFormData({
        name: '',
        description: '',
        medicines: [{ name: '', dosage: '', quantity: 1 }],
        ingredients: '',
        usageInstructions: '',
        price: '',
        discountType: 'none',
        discountValue: 0,
        category: '',
        healthConditions: [],
        requiresPrescription: false,
        expiryInfo: '',
        stock: 100,
        isActive: true
      });
    }
  }, [pkg]);

  const handleAddMedicine = () => {
    setFormData({
      ...formData,
      medicines: [...formData.medicines, { name: '', dosage: '', quantity: 1 }]
    });
  };

  const handleRemoveMedicine = (index) => {
    setFormData({
      ...formData,
      medicines: formData.medicines.filter((_, i) => i !== index)
    });
  };

  const handleMedicineChange = (index, field, value) => {
    const updated = [...formData.medicines];
    updated[index][field] = value;
    setFormData({ ...formData, medicines: updated });
  };

  const handleAddHealthCondition = () => {
    if (healthConditionInput.trim()) {
      setFormData({
        ...formData,
        healthConditions: [...formData.healthConditions, healthConditionInput.trim()]
      });
      setHealthConditionInput('');
    }
  };

  const handleRemoveHealthCondition = (index) => {
    setFormData({
      ...formData,
      healthConditions: formData.healthConditions.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        ...formData,
        ingredients: formData.ingredients.split(',').map(s => s.trim()).filter(Boolean),
        usageInstructions: formData.usageInstructions.split('.').map(s => s.trim()).filter(Boolean),
        price: parseFloat(formData.price),
        discountValue: parseFloat(formData.discountValue) || 0,
        stock: parseInt(formData.stock)
      };

      if (pkg) {
        await api.put(`/admin/packages/${pkg._id}`, submitData);
        toast.success('Package updated successfully');
      } else {
        await api.post('/admin/packages', submitData);
        toast.success('Package created successfully');
      }
      
      onSave();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const categories = [
    'Diabetes Care',
    'Heart Health',
    'Digestive Health',
    'Immunity Boost',
    'Pain Relief',
    'Skin Care',
    'Respiratory',
    'Women\'s Health',
    'Men\'s Health',
    'General Wellness'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-navy-500">
            {pkg ? 'Edit Package' : 'Add New Package'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
              rows={3}
              required
            />
          </div>

          {/* Medicines */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Medicines Included *</label>
            {formData.medicines.map((med, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Medicine Name"
                  value={med.name}
                  onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Dosage"
                  value={med.dosage}
                  onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                  className="w-32 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  required
                />
                <input
                  type="number"
                  placeholder="Qty"
                  value={med.quantity}
                  onChange={(e) => handleMedicineChange(index, 'quantity', parseInt(e.target.value))}
                  className="w-20 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  min="1"
                  required
                />
                {formData.medicines.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMedicine(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMedicine}
              className="mt-2 text-primary-500 text-sm hover:underline"
            >
              + Add Another Medicine
            </button>
          </div>

          {/* Ingredients & Usage */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients (comma-separated)</label>
              <textarea
                value={formData.ingredients}
                onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                rows={2}
                placeholder="Ashwagandha, Turmeric, Ginger..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usage Instructions (period-separated)</label>
              <textarea
                value={formData.usageInstructions}
                onChange={(e) => setFormData({ ...formData, usageInstructions: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                rows={2}
                placeholder="Take 1 tablet daily. After meals."
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (CAD) *</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
              <select
                value={formData.discountType}
                onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
              >
                <option value="none">No Discount</option>
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
              <div className="relative">
                {formData.discountType === 'percentage' ? (
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                ) : (
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                )}
                <input
                  type="number"
                  step="0.01"
                  value={formData.discountValue}
                  onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                  disabled={formData.discountType === 'none'}
                />
              </div>
            </div>
          </div>

          {/* Health Conditions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={healthConditionInput}
                onChange={(e) => setHealthConditionInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddHealthCondition())}
                placeholder="e.g., Diabetes, Blood Pressure..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <button
                type="button"
                onClick={handleAddHealthCondition}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.healthConditions.map((condition, index) => (
                <span key={index} className="px-3 py-1 bg-primary-50 text-primary-500 rounded-full text-sm flex items-center gap-1">
                  {condition}
                  <button type="button" onClick={() => handleRemoveHealthCondition(index)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Info</label>
              <input
                type="text"
                value={formData.expiryInfo}
                onChange={(e) => setFormData({ ...formData, expiryInfo: e.target.value })}
                placeholder="e.g., 12 months"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <div className="flex items-end gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.requiresPrescription}
                  onChange={(e) => setFormData({ ...formData, requiresPrescription: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Requires Prescription</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Active</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50"
            >
              {loading ? 'Saving...' : pkg ? 'Update Package' : 'Create Package'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data } = await api.get('/packages');
      setPackages(data.packages);
    } catch (error) {
      toast.error('Failed to fetch packages');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    
    try {
      await api.delete(`/admin/packages/${id}`);
      toast.success('Package deleted');
      fetchPackages();
    } catch (error) {
      toast.error('Failed to delete package');
    }
  };

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryFilter || pkg.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(packages.map(p => p.category))];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar active="packages" />
      
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-navy-500">Package Management</h1>
          <button
            onClick={() => { setEditingPackage(null); setModalOpen(true); }}
            className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Package
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search packages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Packages Table */}
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Package</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Discount</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPackages.map(pkg => (
                  <tr key={pkg._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                          <PackageIcon className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <p className="font-medium text-navy-500">{pkg.name}</p>
                          <p className="text-sm text-gray-500">{pkg.medicines?.length || 0} medicines</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{pkg.category}</td>
                    <td className="px-6 py-4">
                      {pkg.discountType !== 'none' ? (
                        <div>
                          <span className="line-through text-gray-400 text-sm">${pkg.price?.toFixed(2)}</span>
                          <span className="block font-medium text-primary-500">${pkg.discountedPrice?.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="font-medium">${pkg.price?.toFixed(2)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {pkg.discountType === 'percentage' && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{pkg.discountValue}% OFF</span>
                      )}
                      {pkg.discountType === 'fixed' && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">${pkg.discountValue} OFF</span>
                      )}
                      {pkg.discountType === 'none' && <span className="text-gray-400">-</span>}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`${pkg.stock < 10 ? 'text-red-500' : 'text-gray-600'}`}>
                        {pkg.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        pkg.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {pkg.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => { setEditingPackage(pkg); setModalOpen(true); }}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 mr-2"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(pkg._id)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPackages.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No packages found
              </div>
            )}
          </div>
        )}
      </div>

      <PackageModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingPackage(null); }}
        package={editingPackage}
        onSave={fetchPackages}
      />
    </div>
  );
};

export default Packages;
