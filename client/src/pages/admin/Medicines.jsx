import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, Edit2, Trash2, Search, X, Upload, Download, FileSpreadsheet,
  Package as PackageIcon, LayoutDashboard, ShoppingCart, Pill, CheckCircle, AlertCircle
} from 'lucide-react';
import api from '../../services/api';
import toast from 'react-hot-toast';

// Admin Sidebar
const AdminSidebar = ({ active }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { id: 'medicines', label: 'Medicines', path: '/admin/medicines', icon: Pill },
    { id: 'categories', label: 'Categories', path: '/admin/categories', icon: PackageIcon },
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

// Medicine Modal for Add/Edit with Autocomplete
const MedicineModal = ({ isOpen, onClose, medicine, categories, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    salts: '',
    description: '',
    dosage: '',
    price: '',
    discountType: 'none',
    discountValue: 0,
    category: '',
    manufacturer: '',
    image: '',
    requiresPrescription: false,
    stock: 100,
    isActive: true
  });
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchingRef, setSearchingRef] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (medicine) {
      setFormData({
        name: medicine.name || '',
        salts: medicine.salts || '',
        description: medicine.description || '',
        dosage: medicine.dosage || '',
        price: medicine.price || '',
        discountType: medicine.discountType || 'none',
        discountValue: medicine.discountValue || 0,
        category: medicine.category?._id || medicine.category || '',
        manufacturer: medicine.manufacturer || '',
        image: medicine.image || '',
        requiresPrescription: medicine.requiresPrescription || false,
        stock: medicine.stock || 100,
        isActive: medicine.isActive !== false
      });
    } else {
      setFormData({
        name: '',
        salts: '',
        description: '',
        dosage: '',
        price: '',
        discountType: 'none',
        discountValue: 0,
        category: '', // Empty - user must select a category
        manufacturer: '',
        image: '',
        requiresPrescription: false,
        stock: 100,
        isActive: true
      });
    }
    setSuggestions([]);
    setShowSuggestions(false);
  }, [medicine, categories, isOpen]);

  // Search medicine reference database
  const searchMedicineReference = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    setSearchingRef(true);
    try {
      const response = await api.get(`/medicines/search-reference?q=${encodeURIComponent(query)}`);
      if (response.data.success) {
        setSuggestions(response.data.suggestions);
        setShowSuggestions(response.data.suggestions.length > 0);
        setSelectedIndex(-1);
      }
    } catch (error) {
      console.error('Error searching reference:', error);
    } finally {
      setSearchingRef(false);
    }
  };

  // Handle name input change with debounced search
  const handleNameChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, name: value });
    
    // Clear existing debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    // Debounce the search
    debounceRef.current = setTimeout(() => {
      searchMedicineReference(value);
    }, 300);
  };

  // Handle suggestion selection - auto-fill all fields
  const handleSelectSuggestion = (suggestion) => {
    // Find category by name match
    const matchedCategory = categories.find(
      cat => cat.name.toLowerCase() === suggestion.category?.toLowerCase()
    );
    
    setFormData({
      ...formData,
      name: suggestion.name,
      salts: suggestion.salts || '',
      description: suggestion.description || '',
      dosage: suggestion.dosage || '',
      manufacturer: suggestion.manufacturer || '',
      price: suggestion.suggestedPrice || '',
      // Keep existing category if no match, otherwise use matched
      category: matchedCategory?._id || formData.category
    });
    
    setShowSuggestions(false);
    setSuggestions([]);
    toast.success('Medicine details auto-filled! Review and adjust as needed.');
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving medicine:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-navy-500">
            {medicine ? 'Edit Medicine' : 'Add New Medicine'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name with Autocomplete */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medicine Name * 
              <span className="text-xs text-primary-600 ml-2">
                💡 Type to auto-fill from database
              </span>
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={formData.name}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 pr-10"
                placeholder="Start typing medicine name..."
                required
                autoComplete="off"
              />
              {searchingRef && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            
            {/* Autocomplete Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div 
                ref={suggestionsRef}
                className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-72 overflow-y-auto"
              >
                <div className="px-3 py-2 bg-primary-50 border-b text-xs text-primary-700 font-medium">
                  🔍 {suggestions.length} matches found - Click to auto-fill all details
                </div>
                {suggestions.map((sug, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectSuggestion(sug)}
                    className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 hover:bg-primary-50 transition-colors ${
                      selectedIndex === index ? 'bg-primary-100' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-navy-500">{sug.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{sug.salts}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{sug.manufacturer}</span>
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">{sug.category}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-primary-600">
                        ${sug.suggestedPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Salts (Composition) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salt Composition *</label>
            <textarea
              value={formData.salts}
              onChange={(e) => setFormData({ ...formData, salts: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows="2"
              placeholder="e.g., Paracetamol 500mg, Caffeine 65mg"
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
              rows="2"
            />
          </div>

          {/* Dosage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dosage Instructions</label>
            <input
              type="text"
              value={formData.dosage}
              onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g., 1 tablet twice daily"
            />
          </div>

          {/* Category - Prominent Selection */}
          <div className="bg-primary-50 p-4 rounded-xl border-2 border-primary-200">
            <label className="block text-sm font-semibold text-primary-700 mb-2">
              📁 Select Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border-2 border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white font-medium"
              required
            >
              <option value="">-- Choose a category --</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>
                  {cat.icon || '💊'} {cat.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-primary-600 mt-1">Medicine will be displayed under this category</p>
          </div>

          {/* Price and Discount */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (CAD) *</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
              <select
                value={formData.discountType}
                onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="none">No Discount</option>
                <option value="percentage">Percentage</option>
                <option value="flat">Flat Amount</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount Value</label>
              <input
                type="number"
                step="0.01"
                value={formData.discountValue}
                onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={formData.discountType === 'none'}
              />
            </div>
          </div>

          {/* Manufacturer and Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
              <input
                type="text"
                value={formData.manufacturer}
                onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
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
          </div>

          {/* Checkboxes */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.requiresPrescription}
                onChange={(e) => setFormData({ ...formData, requiresPrescription: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">Requires Prescription</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">Active (visible to customers)</span>
            </label>
          </div>

          {/* Submit Button */}
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
              {loading ? 'Saving...' : (medicine ? 'Update Medicine' : 'Add Medicine')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// CSV Import Modal
const ImportModal = ({ isOpen, onClose, onSuccess, categories }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.csv')) {
        toast.error('Please select a CSV file');
        return;
      }
      setFile(selectedFile);
      setResults(null);
    }
  };

  const handleImport = async () => {
    if (!file) {
      toast.error('Please select a CSV file');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await api.post('/medicines/import', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResults(data.results);
      if (data.imported > 0) {
        toast.success(`Successfully imported ${data.imported} medicines!`);
        onSuccess();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Import failed');
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    window.open('http://localhost:5000/api/medicines/template', '_blank');
  };

  const handleClose = () => {
    setFile(null);
    setResults(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-xl">
              <FileSpreadsheet className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-500">Bulk Import Medicines</h2>
              <p className="text-sm text-gray-500">Upload a CSV file to add multiple medicines</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!results ? (
          <>
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">📋 CSV Format Instructions</h3>
              <p className="text-sm text-blue-700 mb-2">Your CSV must have these columns:</p>
              <div className="text-xs text-blue-600 font-mono bg-blue-100 p-2 rounded overflow-x-auto">
                name, salts, price, category, manufacturer, description, dosage, stock
              </div>
              <p className="text-sm text-blue-700 mt-2">
                <strong>Required:</strong> name, salts, price, category, manufacturer, description<br/>
                <strong>Optional:</strong> dosage, stock, requiresPrescription, discountType, discountValue, image<br/>
                <strong>Available categories:</strong> {categories.map(c => c.name).join(', ')}
              </p>
            </div>

            {/* Download Template */}
            <button
              onClick={downloadTemplate}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-colors mb-4"
            >
              <Download className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Download CSV Template</span>
            </button>

            {/* File Upload */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                file ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-primary-400'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />
              {file ? (
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div className="text-left">
                    <p className="font-medium text-green-700">{file.name}</p>
                    <p className="text-sm text-green-600">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Click to upload CSV file</p>
                  <p className="text-sm text-gray-400 mt-1">or drag and drop</p>
                </>
              )}
            </div>

            {/* Import Button */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                disabled={!file || loading}
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Importing...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Import Medicines
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          /* Results View */
          <div>
            {/* Summary */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-green-50 rounded-xl p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-700">{results.success.length}</p>
                <p className="text-sm text-green-600">Imported</p>
              </div>
              <div className="flex-1 bg-red-50 rounded-xl p-4 text-center">
                <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-700">{results.errors.length}</p>
                <p className="text-sm text-red-600">Failed</p>
              </div>
            </div>

            {/* Success List */}
            {results.success.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-green-700 mb-2">✅ Successfully Imported:</h3>
                <div className="max-h-32 overflow-y-auto bg-green-50 rounded-lg p-3">
                  {results.success.map((item, i) => (
                    <p key={i} className="text-sm text-green-600">Row {item.row}: {item.name}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Error List */}
            {results.errors.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-red-700 mb-2">❌ Failed to Import:</h3>
                <div className="max-h-40 overflow-y-auto bg-red-50 rounded-lg p-3">
                  {results.errors.map((item, i) => (
                    <div key={i} className="text-sm text-red-600 mb-1">
                      <strong>Row {item.row} ({item.name}):</strong> {item.error}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleClose}
              className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const AdminMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [medicinesRes, categoriesRes] = await Promise.all([
        api.get('/medicines'),
        api.get('/categories')
      ]);
      setMedicines(medicinesRes.data.medicines || []);
      setCategories(categoriesRes.data.categories || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingMedicine) {
        await api.put(`/medicines/${editingMedicine._id}`, formData);
        toast.success('Medicine updated successfully');
      } else {
        await api.post('/medicines', formData);
        toast.success('Medicine added successfully');
      }
      fetchData();
      setEditingMedicine(null);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save medicine');
      throw error;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this medicine?')) return;
    
    try {
      await api.delete(`/medicines/${id}`);
      toast.success('Medicine deleted successfully');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete medicine');
    }
  };

  const openEditModal = (medicine) => {
    setEditingMedicine(medicine);
    setShowModal(true);
  };

  const openAddModal = () => {
    setEditingMedicine(null);
    setShowModal(true);
  };

  // Filter medicines
  const filteredMedicines = medicines.filter(med => {
    const matchesSearch = !searchQuery || 
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.salts.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || med.category?._id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar active="medicines" />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-navy-500">Medicines</h1>
            <p className="text-gray-600">Manage your medicine inventory</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowImportModal(true)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50"
            >
              <Upload className="w-5 h-5" />
              Bulk Import
            </button>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              <Plus className="w-5 h-5" />
              Add Medicine
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Medicines Table */}
        {loading ? (
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading medicines...</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMedicines.map(medicine => (
                  <tr key={medicine._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={medicine.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100'}
                          alt={medicine.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{medicine.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1 max-w-xs">{medicine.salts}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {medicine.category?.name || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium">${medicine.price?.toFixed(2)}</p>
                      {medicine.discountValue > 0 && (
                        <p className="text-xs text-green-600">
                          {medicine.discountType === 'percentage' 
                            ? `${medicine.discountValue}% off` 
                            : `$${medicine.discountValue} off`}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${medicine.stock < 10 ? 'text-red-500' : 'text-gray-900'}`}>
                        {medicine.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        medicine.isActive 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {medicine.isActive ? 'Active' : 'Inactive'}
                      </span>
                      {medicine.requiresPrescription && (
                        <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          ℞
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => openEditModal(medicine)}
                        className="p-2 text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(medicine._id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredMedicines.length === 0 && (
              <div className="text-center py-12">
                <Pill className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No medicines found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      <MedicineModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingMedicine(null);
        }}
        medicine={editingMedicine}
        categories={categories}
        onSave={handleSave}
      />

      {/* CSV Import Modal */}
      <ImportModal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        onSuccess={fetchData}
        categories={categories}
      />
    </div>
  );
};

export default AdminMedicines;
