import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Refund & Return Policy
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
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At DesiMeds Canada, customer satisfaction is our priority. Due to the nature of 
                pharmaceutical products and international shipping regulations, our refund and 
                return policies are designed to protect both you and our business while ensuring 
                fair treatment.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Eligible for Refund
              </h2>
              <p className="text-gray-600 mb-4">You may be eligible for a refund in the following cases:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Damaged Products:</strong> If medicines arrive damaged or broken during transit</li>
                <li><strong>Wrong Items:</strong> If you receive different products than what you ordered</li>
                <li><strong>Expired Products:</strong> If medicines received have already expired or are close to expiry (less than 6 months)</li>
                <li><strong>Missing Items:</strong> If your order is incomplete or items are missing</li>
                <li><strong>Non-Delivery:</strong> If your order is not delivered within 30 days of estimated delivery date</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Not Eligible for Refund
              </h2>
              <p className="text-gray-600 mb-4">Refunds cannot be processed in the following cases:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Change of mind after purchase</li>
                <li>Products that have been opened, used, or tampered with</li>
                <li>Packages delayed due to customs clearance (duties unpaid)</li>
                <li>Incorrect address provided by customer leading to non-delivery</li>
                <li>Products not working as expected (medicines affect individuals differently)</li>
                <li>Packages refused by customer upon delivery</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                How to Request a Refund
              </h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-3">
                <li>
                  <strong>Contact Us Within 48 Hours:</strong> Report any issues within 48 hours of 
                  receiving your order. Email us at jashanbansal1010@gmail.com or use our WhatsApp support.
                </li>
                <li>
                  <strong>Provide Documentation:</strong> Include your order number, photos/videos of 
                  the issue, and a clear description of the problem.
                </li>
                <li>
                  <strong>Await Review:</strong> Our team will review your request within 2-3 business days.
                </li>
                <li>
                  <strong>Receive Resolution:</strong> If approved, refunds are processed within 5-7 
                  business days to your original payment method.
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Refund Amount
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Full Refund:</strong> For our errors (wrong items, damaged goods, non-delivery) - includes product cost and shipping</li>
                <li><strong>Partial Refund:</strong> For partially damaged orders - only affected items refunded</li>
                <li><strong>No Shipping Refund:</strong> In cases where return is due to customer error, shipping charges are non-refundable</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Returns Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Due to pharmaceutical regulations and hygiene concerns, we <strong>cannot accept returns</strong> 
                of medicines once they have been delivered. This policy protects all our customers from 
                receiving potentially compromised products.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For eligible refund cases, you do not need to return the products. Instead, we may 
                ask you to dispose of them safely or provide photographic evidence of the issue.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Customs & Duties
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for packages held, seized, or delayed by customs authorities. 
                Any customs duties, taxes, or fees imposed by Canadian authorities are the responsibility 
                of the customer and are non-refundable by us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Refund Processing Time
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>Bank Processing:</strong> Additional 2-5 business days may apply depending on your bank</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-navy-500 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions regarding refunds or returns, please contact our support team:
              </p>
              <ul className="mt-4 text-gray-600">
                <li><strong>Email:</strong> jashanbansal1010@gmail.com</li>
                <li><strong>WhatsApp:</strong> +91 98552 29009</li>
                <li><strong>Response Time:</strong> Within 24 hours</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <Link to="/faq" className="text-primary-500 hover:underline">
              View FAQ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
