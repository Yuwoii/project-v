export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-6xl mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg font-vietnam">
          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information necessary for reservations and dining services, including:
              name, contact information, dietary preferences, and special occasion details. For 
              online orders, we collect delivery addresses and payment information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Your information helps us provide and improve our services, including:
              processing reservations, customizing your dining experience, sending promotional 
              offers (with your consent), and maintaining our guest records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We never sell your personal information. We may share your information with 
              service providers who assist in our operations (e.g., reservation systems, 
              payment processors) who are bound by confidentiality agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">4. Security Measures</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information. 
              Payment information is encrypted and processed through secure payment providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You may request access to your personal information, ask for corrections, or opt 
              out of marketing communications at any time. Contact us at privacy@nha-hang-viet.com 
              for assistance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 