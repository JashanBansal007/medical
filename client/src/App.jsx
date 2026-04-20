import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import PackageDetail from './pages/PackageDetail';
import CategoryDetail from './pages/CategoryDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import TrackOrder from './pages/TrackOrder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthCallback from './pages/AuthCallback';
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import MyOrders from './pages/MyOrders';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/Dashboard';
import AdminPackages from './pages/admin/Packages';
import AdminMedicines from './pages/admin/Medicines';
import AdminCategories from './pages/admin/Categories';
import AdminOrders from './pages/admin/Orders';
import AdminRoute from './components/AdminRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#1A365D',
                  color: '#fff',
                  borderRadius: '12px',
                },
                success: {
                  iconTheme: {
                    primary: '#48BB78',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#F56565',
                    secondary: '#fff',
                  },
                },
              }}
            />
            
            <Routes>
              {/* Admin Routes - No Navbar/Footer */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/medicines" element={<AdminRoute><AdminMedicines /></AdminRoute>} />
              <Route path="/admin/categories" element={<AdminRoute><AdminCategories /></AdminRoute>} />
              <Route path="/admin/packages" element={<AdminRoute><AdminPackages /></AdminRoute>} />
              <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
              
              {/* Auth Callback - No Navbar/Footer */}
              <Route path="/auth/callback" element={<AuthCallback />} />
              
              {/* Customer Routes - With Navbar/Footer */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/category/:slug" element={<CategoryDetail />} />
                      <Route path="/package/:id" element={<PackageDetail />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                      <Route path="/order-confirmation/:id" element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>} />
                      <Route path="/my-orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
                      <Route path="/track-order" element={<TrackOrder />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/refund-policy" element={<RefundPolicy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                  <WhatsAppButton />
                </>
              } />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
