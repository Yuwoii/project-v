export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-6xl mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg font-vietnam">
          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By dining at Nhà Hàng Việt or using our website, you agree to these Terms of Service. 
              These terms apply to all services, including dining, reservations, and online ordering.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">2. Reservations</h2>
            <p className="text-gray-600 mb-4">
              Reservations are held for 15 minutes past the scheduled time. After this period, 
              we may release your table to other guests. For groups of 6 or more, a credit card 
              is required to secure the reservation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">3. Cancellation Policy</h2>
            <p className="text-gray-600 mb-4">
              Please notify us at least 24 hours in advance if you need to cancel or modify your 
              reservation. For groups of 6 or more, cancellations within 24 hours may incur a 
              fee of $25 per person.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">4. Private Events</h2>
            <p className="text-gray-600 mb-4">
              Private event cancellations must be made 72 hours in advance. Cancellations within 
              this period will forfeit the deposit. Menu and guest count must be finalized 48 
              hours before the event.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">5. Gift Cards</h2>
            <p className="text-gray-600 mb-4">
              Gift cards are non-refundable and cannot be redeemed for cash. Lost or stolen 
              gift cards cannot be replaced. Gift cards expire 12 months from the date of purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 