import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-primary-100">
            Last updated: January 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to DesiMeds Canada. By accessing our website and making purchases, you agree 
                to be bound by these Terms and Conditions. Please read them carefully before using 
                our services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                DesiMeds Canada is a platform that facilitates the purchase of medicine packages 
                from licensed Indian pharmacies for delivery to customers in Canada. We are not 
                a pharmacy ourselves but act as an intermediary service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                2. Eligibility
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You must be at least 18 years old to make purchases</li>
                <li>You must provide accurate personal and shipping information</li>
                <li>You must have a valid Canadian shipping address</li>
                <li>You are responsible for ensuring imported products comply with Canadian laws</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                3. Products & Pricing
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All prices are displayed in Canadian Dollars (CAD)</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Product images are for illustration purposes; actual packaging may vary</li>
                <li>Product availability is not guaranteed until order confirmation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                4. Prescription Medicines
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Certain medicine packages require a valid prescription. By uploading a prescription:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>You confirm it is a genuine prescription from a licensed healthcare provider</li>
                <li>The prescription is intended for your personal use or someone under your care</li>
                <li>We reserve the right to verify prescriptions and refuse orders if verification fails</li>
                <li>Uploading false or fraudulent prescriptions is illegal and will result in order cancellation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                5. Orders & Payment
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Orders are confirmed only after successful payment</li>
                <li>We accept credit/debit cards through Stripe payment gateway</li>
                <li>Full payment is required at the time of order; no COD available</li>
                <li>We reserve the right to cancel orders that appear fraudulent</li>
                <li>Order modifications are limited once processing begins</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                6. Shipping & Delivery
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Shipping costs are calculated based on destination and added at checkout</li>
                <li>Risk of loss transfers to you upon handover to shipping carrier</li>
                <li>We are not responsible for delays caused by customs, weather, or carrier issues</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                7. Customs & Import Regulations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Important:</strong> International shipments are subject to customs laws of Canada.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>You are responsible for all import duties, taxes, and customs fees</li>
                <li>We are not responsible if packages are delayed or seized by customs</li>
                <li>We cannot provide customs value declarations other than actual product value</li>
                <li>Certain products may be restricted or prohibited for import</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                8. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Products are for personal use only, not for resale</li>
                <li>We do not provide medical advice; consult your healthcare provider</li>
                <li>We are not liable for adverse reactions or side effects from products</li>
                <li>Our liability is limited to the amount paid for your order</li>
                <li>We are not liable for indirect, consequential, or punitive damages</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                9. User Accounts
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You are responsible for maintaining account security</li>
                <li>You must notify us immediately of unauthorized access</li>
                <li>We reserve the right to suspend or terminate accounts</li>
                <li>Providing false information may result in account termination</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                10. Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by the laws of India. Any disputes shall be subject 
                to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                12. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms, please contact:
              </p>
              <ul className="mt-4 text-gray-600">
                <li><strong>Email:</strong> jashanbansal1010@gmail.com</li>
                <li><strong>Address:</strong> 123 Healthcare Lane, Mumbai, Maharashtra 400001, India</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex justify-center gap-4">
            <Link to="/refund-policy" className="text-primary-500 hover:underline">
              Refund Policy →
            </Link>
            <Link to="/faq" className="text-primary-500 hover:underline">
              FAQ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
