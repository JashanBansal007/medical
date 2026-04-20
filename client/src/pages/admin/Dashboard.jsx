import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Pill, ShoppingCart, Users, LogOut, 
  TrendingUp, DollarSign, Clock, CheckCircle 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const AdminSidebar = ({ active }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

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

      <Link to="/" className="flex items-center gap-3 px-4 py-3 text-navy-200 hover:bg-navy-400 rounded-xl transition-colors">
        ← Back to Store
      </Link>
      
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 text-navy-200 hover:bg-navy-400 rounded-xl transition-colors mt-2"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await api.get('/admin/stats');
      setStats(data.stats);
      setRecentOrders(data.recentOrders);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { 
      label: 'Total Revenue', 
      value: `$${stats?.totalRevenue?.toFixed(2) || '0.00'}`, 
      icon: DollarSign, 
      color: 'bg-green-500' 
    },
    { 
      label: 'Total Orders', 
      value: stats?.totalOrders || 0, 
      icon: ShoppingCart, 
      color: 'bg-blue-500' 
    },
    { 
      label: 'Pending Orders', 
      value: stats?.pendingOrders || 0, 
      icon: Clock, 
      color: 'bg-yellow-500' 
    },
    { 
      label: 'Delivered', 
      value: stats?.deliveredOrders || 0, 
      icon: CheckCircle, 
      color: 'bg-primary-500' 
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar active="dashboard" />
      
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-navy-500 mb-8">Dashboard</h1>

        {loading ? (
          <div className="animate-pulse space-y-8">
            <div className="grid grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-navy-500">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-navy-500">Recent Orders</h2>
                  <Link to="/admin/orders" className="text-primary-500 text-sm hover:underline">
                    View All
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-navy-500">{order.orderNumber}</p>
                        <p className="text-sm text-gray-500">{order.user?.name || 'N/A'}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-primary-500">${order.total?.toFixed(2)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medicine Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy-500 mb-6">Medicine Overview</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Active Medicines</span>
                      <span className="font-medium">{stats?.activeMedicines || 0}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-primary-500 rounded-full" 
                        style={{ width: `${((stats?.activeMedicines || 0) / (stats?.totalMedicines || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total Medicines</span>
                      <span className="font-medium">{stats?.totalMedicines || 0}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Processing Orders</span>
                      <span className="font-medium">{stats?.processingOrders || 0}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/admin/medicines" 
                  className="block mt-6 text-center py-3 bg-primary-50 text-primary-500 rounded-xl font-medium hover:bg-primary-100 transition-colors"
                >
                  Manage Medicines
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
