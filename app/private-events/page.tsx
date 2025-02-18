export default function PrivateEventsPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Private Events</h1>
        <p className="font-vietnam text-lg text-gray-600 max-w-2xl mx-auto">
          Create unforgettable memories with an authentic Vietnamese dining experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="font-playfair text-2xl">Event Spaces</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-vietnam font-medium">Main Dining Room</h3>
              <p className="text-gray-600">Capacity: Up to 40 guests</p>
            </div>
            <div>
              <h3 className="font-vietnam font-medium">Private Room</h3>
              <p className="text-gray-600">Capacity: Up to 20 guests</p>
            </div>
            <div>
              <h3 className="font-vietnam font-medium">Garden Patio</h3>
              <p className="text-gray-600">Capacity: Up to 30 guests (seasonal)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-playfair text-2xl">Event Types</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Corporate Events</li>
            <li>Birthday Celebrations</li>
            <li>Wedding Rehearsals</li>
            <li>Family Gatherings</li>
            <li>Business Meetings</li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-[--color-primary]/5 rounded-lg">
        <h2 className="font-playfair text-2xl mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          For private event inquiries, please contact our events team:
        </p>
        <div className="text-center">
          <p className="font-vietnam">events@nha-hang-viet.com</p>
          <p className="font-vietnam">(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
} 