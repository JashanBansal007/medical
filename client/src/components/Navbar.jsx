import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut, Package, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-primary-500">DesiMeds</span>
              <span className="font-display text-2xl font-bold text-saffron-500"> Canada</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy-500 hover:text-primary-500 font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-navy-500 hover:text-primary-500 font-medium transition-colors">
              Shop
            </Link>
            <Link to="/track-order" className="text-navy-500 hover:text-primary-500 font-medium transition-colors">
              Track Order
            </Link>
            <Link to="/faq" className="text-navy-500 hover:text-primary-500 font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-navy-500 hover:text-primary-500 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-cream-200 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-navy-500" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cart.itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 hover:bg-cream-200 rounded-full transition-colors"
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-navy-500" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-medium text-navy-500 truncate">{user.name}</p>
                      <p className="text-sm text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/my-orders"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-cream-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-cream-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-navy-500 font-medium hover:text-primary-500 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary py-2 px-4 text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-navy-500" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-saffron-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cart.itemCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="w-6 h-6 text-navy-500" />
              ) : (
                <Menu className="w-6 h-6 text-navy-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-navy-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-navy-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/track-order"
              className="block py-2 text-navy-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Track Order
            </Link>
            <Link
              to="/faq"
              className="block py-2 text-navy-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-navy-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-100">
              {isAuthenticated ? (
                <>
                  <div className="py-2">
                    <p className="font-medium text-navy-500 truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate max-w-[200px]">{user.email}</p>
                  </div>
                  <Link
                    to="/my-orders"
                    className="block py-2 text-navy-500 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block py-2 text-red-500 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex space-x-3">
                  <Link
                    to="/login"
                    className="flex-1 text-center py-2 border border-primary-500 text-primary-500 rounded-full font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="flex-1 text-center py-2 bg-primary-500 text-white rounded-full font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
