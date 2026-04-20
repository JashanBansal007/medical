import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const faqData = [
  {
    category: 'Ordering & Payment',
    questions: [
      {
        q: 'How do I place an order?',
        a: 'Simply browse our packages, add items to your cart, and proceed to checkout. You\'ll need to create an account or sign in, provide your Canadian shipping address, and complete the payment through our secure Razorpay payment gateway.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), UPI, Net Banking, and wallets through Razorpay, our secure payment processor. All transactions are processed securely. We do not offer Cash on Delivery (COD).'
      },
      {
        q: 'Is my payment information secure?',
        a: 'Absolutely. We use Razorpay, one of India\'s most trusted payment processors with PCI DSS compliance. Your card details are never stored on our servers and all transactions are encrypted using industry-standard SSL technology.'
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Once an order is placed and payment is confirmed, modifications are limited. Please contact our support team within 2 hours of placing your order if you need to make changes. After the order enters processing, cancellations may not be possible.'
      }
    ]
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping to most Canadian provinces takes 7-14 business days. Remote areas (Northern Territories) may take 14-21 business days. Delivery times start from when your order is dispatched, not when it\'s placed.'
      },
      {
        q: 'Do you ship to all Canadian provinces?',
        a: 'Yes! We deliver to all 10 provinces and 3 territories across Canada. Shipping costs vary based on your location and are calculated at checkout.'
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order is shipped, you\'ll receive a tracking number via email. You can also track your order anytime using the "Track Order" feature on our website with your order number.'
      },
      {
        q: 'What if my package is delayed or lost?',
        a: 'International shipments can sometimes face delays due to customs processing. If your package is significantly delayed or appears lost, contact our support team with your order number and we\'ll investigate immediately.'
      }
    ]
  },
  {
    category: 'Customs & Duties',
    questions: [
      {
        q: 'Will I need to pay customs duties?',
        a: 'Yes, as the importer, you are responsible for any customs duties, import taxes, or fees imposed by Canadian customs authorities. These charges are not included in your order total and will need to be paid upon delivery or clearance.'
      },
      {
        q: 'How much are customs duties?',
        a: 'Customs duties vary depending on the type and value of products. Typically, personal-use medications may be exempt or charged minimal duties. We recommend checking with Canada Border Services Agency (CBSA) for specific rates.'
      },
      {
        q: 'Are there any items that cannot be imported?',
        a: 'Some controlled substances and prescription medications may require additional documentation or may be restricted. All our packages comply with export regulations, but final clearance is subject to Canadian customs.'
      }
    ]
  },
  {
    category: 'Products & Prescriptions',
    questions: [
      {
        q: 'Are your medicines authentic?',
        a: 'Yes, all our medicines are sourced from licensed manufacturers in India with proper CDSCO (Central Drugs Standard Control Organisation) certifications. We work only with reputable pharmaceutical companies.'
      },
      {
        q: 'Do I need a prescription?',
        a: 'Some packages contain prescription medicines and require a valid prescription. During checkout, you\'ll be prompted to upload a prescription if required. We accept prescriptions from licensed healthcare providers.'
      },
      {
        q: 'What is the expiry date on medicines?',
        a: 'All medicines are guaranteed to have a minimum of 12-18 months validity from the dispatch date. Expiry information is clearly mentioned on each package and individual medicine.'
      },
      {
        q: 'Can I get a refund if medicines don\'t work for me?',
        a: 'Medicines affect individuals differently based on various factors. We cannot guarantee specific results. However, if you receive damaged or expired products, we offer full refunds. See our Refund Policy for details.'
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'Due to the nature of pharmaceutical products, we cannot accept returns for opened or used medicines. Returns are only accepted for damaged, wrong, or expired products received. Contact us within 48 hours of delivery.'
      },
      {
        q: 'How do I request a refund?',
        a: 'Contact our support team with your order number, photos of the issue, and a description of the problem. We\'ll review your request and process eligible refunds within 5-7 business days.'
      },
      {
        q: 'Do you refund shipping charges?',
        a: 'If the error is on our part (wrong item, damaged goods), we refund the full amount including shipping. For other cases, shipping charges are non-refundable.'
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredFAQ = searchTerm
    ? faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
               q.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqData;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-100 mb-8">
            Find answers to common questions about ordering, shipping, and more
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-saffron-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredFAQ.map((category, categoryIndex) => (
          <div key={category.category} className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-navy-500 mb-6">
              {category.category}
            </h2>

            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-navy-500 pr-4">{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed animate-fade-in">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No questions found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Still have questions? */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-navy-500 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Reach out via WhatsApp or email.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
