import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = '919855229009';
    const message = 'Hello! I have a question about DesiMeds Canada.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-primary-100 max-w-xl mx-auto">
            Have questions? We're here to help. Reach out through any of the channels below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-2">For general inquiries</p>
                  <a href="mailto:jashanbansal1010@gmail.com" className="text-primary-500 hover:underline">
                    jashanbansal1010@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-2">For quick support (Hindi/English)</p>
                  <button 
                    onClick={openWhatsApp}
                    className="text-green-500 hover:underline"
                  >
                    +91 98552 29009
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-saffron-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm mb-2">Mon-Sat, 9AM-6PM IST</p>
                  <a href="tel:+919855229009" className="text-saffron-500 hover:underline">
                    +91 98552 29009
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Kapil Medical Hall,<br />
                    In front of Emergency Gate,<br />
                    Civil Hospital, Rampura Phul,<br />
                    District Bathinda, Punjab, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM IST<br />
                    <span className="text-gray-400">(Closed on Indian holidays)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="product">Product Question</option>
                    <option value="refund">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Please describe your inquiry in detail..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Help */}
            <div className="mt-8 bg-primary-50 rounded-2xl p-6">
              <h3 className="font-semibold text-navy-500 mb-4">Quick Help</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/faq" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-2xl">❓</span>
                  <div>
                    <p className="font-medium text-navy-500">FAQ</p>
                    <p className="text-sm text-gray-500">Find quick answers</p>
                  </div>
                </a>
                <a href="/track-order" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-medium text-navy-500">Track Order</p>
                    <p className="text-sm text-gray-500">Check order status</p>
                  </div>
                </a>
                <a href="/refund-policy" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-medium text-navy-500">Refund Policy</p>
                    <p className="text-sm text-gray-500">Return guidelines</p>
                  </div>
                </a>
                <button onClick={openWhatsApp} className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow text-left">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-medium text-navy-500">Live Chat</p>
                    <p className="text-sm text-gray-500">WhatsApp support</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
