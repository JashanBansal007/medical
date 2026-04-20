import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Eye, Pill, Truck, CheckCircle,
  Clock, XCircle, LayoutDashboard, ShoppingCart, ChevronDown
} from 'lucide-react';
import api from '../../services/api';
import toast from 'react-hot-toast';

const AdminSidebar = ({ active }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { id: 'medicines', label: 'Medicines', icon: Pill, path: '/admin/medicines' },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
  ];

  return (
    <div className="w-64 bg-navy-500 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-white font-bold text-xl">DesiMeds Admin</h1>
        <p className="text-navy-200 text-sm">Management Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                active === item.id
                  ? 'bg-white text-navy-500'
                  : 'text-navy-200 hover:bg-navy-400'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link to="/" className="flex items-center gap-3 px-4 py-3 text-navy-200 hover:bg-navy-400 rounded-xl transition-colors mt-auto">
        ← Back to Store
      </Link>
    </div>
  );
};

const OrderDetailModal = ({ order, isOpen, onClose, onUpdate }) => {
  const [status, setStatus] = useState(order?.status || 'pending');
  const [trackingNumber, setTrackingNumber] = useState(order?.trackingNumber || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (order) {
      setStatus(order.status);
      setTrackingNumber(order.trackingNumber || '');
    }
  }, [order]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await api.put(`/admin/orders/${order._id}`, {
        status,
        trackingNumber: trackingNumber || undefined
      });
      toast.success('Order updated');
      onUpdate();
      onClose();
    } catch (error) {
      toast.error('Failed to update order');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !order) return null;

  const statusOptions = [
    { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
    { value: 'confirmed', label: 'Confirmed', color: 'bg-blue-100 text-blue-700' },
    { value: 'processing', label: 'Processing', color: 'bg-blue-100 text-blue-700' },
    { value: 'shipped', label: 'Shipped', color: 'bg-purple-100 text-purple-700' },
    { value: 'in_transit', label: 'In Transit', color: 'bg-indigo-100 text-indigo-700' },
    { value: 'delivered', label: 'Delivered', color: 'bg-green-100 text-green-700' },
    { value: 'cancelled', label: 'Cancelled', color: 'bg-red-100 text-red-700' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-navy-500">Order #{order.orderNumber}</h2>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer Info */}
          <div>
            <h3 className="font-semibold text-navy-500 mb-3">Customer Details</h3>
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <p><span className="text-gray-500">Name:</span> {order.user?.name || 'N/A'}</p>
              <p><span className="text-gray-500">Email:</span> {order.user?.email || 'N/A'}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-semibold text-navy-500 mb-3">Shipping Address</h3>
            <div className="bg-gray-50 rounded-xl p-4">
              <p>{order.shippingAddress?.fullName}</p>
              <p>{order.shippingAddress?.addressLine1}</p>
              {order.shippingAddress?.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
              <p>{order.shippingAddress?.city}, {order.shippingAddress?.province} {order.shippingAddress?.postalCode}</p>
              <p>{order.shippingAddress?.country}</p>
              <p className="mt-2"><span className="text-gray-500">Phone:</span> {order.shippingAddress?.phone}</p>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold text-navy-500 mb-3">Order Items</h3>
            <div className="space-y-3">
              {order.items?.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
                  <div>
                    <p className="font-medium">{item.package?.name || 'Package'}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${order.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>${order.shippingCost?.toFixed(2)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-${order.discount?.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span className="text-primary-500">${order.total?.toFixed(2)} CAD</span>
            </div>
          </div>

          {/* Prescription */}
          {order.prescriptionUrl && (
            <div>
              <h3 className="font-semibold text-navy-500 mb-3">Prescription</h3>
              <a 
                href={order.prescriptionUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                View Uploaded Prescription
              </a>
            </div>
          )}

          {/* Update Status */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-navy-500 mb-3">Update Order</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
                >
                  {statusOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Speed Post Tracking Number
                </label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                  placeholder="e.g., EE123456789IN"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none font-mono"
                />
              </div>
            </div>
            
            {/* Speed Post Info Box */}
            <div className="mt-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Truck className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-orange-800">Speed Post Tracking Instructions</p>
                  <ol className="mt-2 text-orange-700 space-y-1 list-decimal list-inside">
                    <li>Ship the order via Speed Post at your local post office</li>
                    <li>Get the tracking number from the Speed Post receipt</li>
                    <li>Enter the tracking number above (format: EE123456789IN)</li>
                    <li>Change status to "Shipped" and save</li>
                  </ol>
                  <p className="mt-2 text-orange-600">
                    Customer will see a "Track on India Post" button to track live updates
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleUpdate}
              disabled={loading}
              className="mt-4 w-full bg-primary-500 text-white py-3 rounded-xl hover:bg-primary-600 disabled:opacity-50"
            >
              {loading ? 'Updating...' : 'Update Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchOrders();
  }, [currentPage, statusFilter]);

  const fetchOrders = async () => {
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
        ...(statusFilter && { status: statusFilter })
      });
      
      const { data } = await api.get(`/admin/orders?${params}`);
      setOrders(data.orders);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'processing': return <PackageIcon className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'confirmed': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'shipped': return 'bg-purple-100 text-purple-700';
      case 'in_transit': return 'bg-indigo-100 text-indigo-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = !search || 
      order.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      order.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      order.user?.email?.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar active="orders" />
      
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-navy-500 mb-8">Order Management</h1>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by order ID, customer name, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Order</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Total</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.map(order => (
                    <tr key={order._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-navy-500">{order.orderNumber}</p>
                        {order.trackingNumber && (
                          <p className="text-xs text-gray-500">Track: {order.trackingNumber}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium">{order.user?.name || 'N/A'}</p>
                        <p className="text-sm text-gray-500">{order.user?.email}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString('en-CA')}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {order.items?.length || 0} items
                      </td>
                      <td className="px-6 py-4 font-medium">
                        ${order.total?.toFixed(2)} CAD
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs capitalize ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 hover:bg-gray-100 rounded-lg text-primary-500"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredOrders.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No orders found
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <OrderDetailModal
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onUpdate={fetchOrders}
      />
    </div>
  );
};

export default Orders;
