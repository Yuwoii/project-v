import ReservationForm from '../components/ReservationForm';

export default function ReservationsPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Reservations</h1>
        <p className="font-vietnam text-lg text-gray-600 max-w-2xl mx-auto">
          Join us for an authentic Vietnamese dining experience. For parties larger 
          than 8, please contact us directly.
        </p>
      </div>

      {/* Reservation Form Section */}
      <div className="max-w-2xl mx-auto">
        <ReservationForm />
      </div>

      {/* Additional Information */}
      <div className="max-w-2xl mx-auto mt-16 p-6 bg-[--color-primary]/5 rounded-lg">
        <h2 className="font-playfair text-2xl mb-4 text-center">Dining Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-vietnam font-medium mb-2">Weekdays</h3>
            <p className="text-sm">Lunch: 11:30 AM - 2:30 PM</p>
            <p className="text-sm">Dinner: 5:30 PM - 10:00 PM</p>
          </div>
          <div>
            <h3 className="font-vietnam font-medium mb-2">Weekends</h3>
            <p className="text-sm">Brunch: 10:30 AM - 3:00 PM</p>
            <p className="text-sm">Dinner: 5:30 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
} 