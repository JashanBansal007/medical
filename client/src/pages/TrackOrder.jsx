import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';
import api from '../services/api';

const statusSteps = [
  { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
  { key: 'processing', label: 'Processing', icon: Package },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: MapPin }
];

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      setError('Please enter an order number');
      return;
    }

    setLoading(true);
    setError('');
    setOrder(null);

    try {
      const { data } = await api.get(`/orders/track/${orderNumber.trim()}`);
      setOrder(data.order);
    } catch (err) {
      setError(err.response?.data?.message || 'Order not found. Please check your order number.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIndex = (status) => {
    const index = statusSteps.findIndex(s => s.key === status);
    return index >= 0 ? index : 0;
  };

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-500 mb-4">
            Track Your Order
          </h1>
          <p className="text-gray-600">
            Enter your order number to see the current status of your shipment
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter order number (e.g., DM1234ABCD)"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
              className="w-full pl-12 pr-32 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none shadow-lg"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}
        </form>

        {/* Order Details */}
        {order && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
            <div className="bg-primary-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-100 text-sm">Order Number</p>
                  <p className="text-2xl font-bold">{order.orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-100 text-sm">Status</p>
                  <p className="text-lg font-semibold capitalize">
                    {order.status.replace('_', ' ')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between relative">
                  {/* Progress Line */}
                  <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(getStatusIndex(order.status) / (statusSteps.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                  
                  {statusSteps.map((step, index) => {
                    const isCompleted = index <= getStatusIndex(order.status);
                    const Icon = step.icon;
                    
                    return (
                      <div key={step.key} className="relative z-10 flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <p className={`mt-2 text-xs font-medium ${
                          isCompleted ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {step.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-medium">
                      {new Date(order.createdAt).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Est. Delivery</p>
                    <p className="font-medium">{order.estimatedDelivery || '7-14 business days'}</p>
                  </div>
                </div>
              </div>

              {/* Tracking Number */}
              {order.trackingNumber && (
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Speed Post Tracking Number</p>
                      <p className="text-lg font-mono text-blue-800">{order.trackingNumber}</p>
                    </div>
                    <a
                      href={`https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Track on India Post
                    </a>
                  </div>
                  <p className="text-xs text-blue-600 mt-2">
                    Copy the tracking number and paste it on India Post website for live updates
                  </p>
                </div>
              )}

              {/* Status History */}
              {order.statusHistory?.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-navy-500 mb-4">Status History</h3>
                  <div className="space-y-3">
                    {order.statusHistory.map((history, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-gray-700 capitalize">
                            {history.status.replace('_', ' ')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(history.date).toLocaleString('en-CA')}
                          </p>
                          {history.note && (
                            <p className="text-sm text-gray-600 mt-1">{history.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Can't find your order?{' '}
            <a href="/contact" className="text-primary-500 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
