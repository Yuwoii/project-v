import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Contact Us</h1>
        <p className="font-vietnam text-lg text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Get in touch with us to book a table, 
          plan private events, or ask any questions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <FaPhone className="mx-auto text-[--color-primary] text-2xl mb-4" />
          <h3 className="font-playfair text-xl mb-2">Phone</h3>
          <p className="font-vietnam">(123) 456-7890</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <FaEnvelope className="mx-auto text-[--color-primary] text-2xl mb-4" />
          <h3 className="font-playfair text-xl mb-2">Email</h3>
          <p className="font-vietnam">info@nha-hang-viet.com</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <FaMapMarkerAlt className="mx-auto text-[--color-primary] text-2xl mb-4" />
          <h3 className="font-playfair text-xl mb-2">Location</h3>
          <p className="font-vietnam">123 Vietnamese Street<br />City, State 12345</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647043276541!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center p-6 bg-[--color-primary]/5 rounded-lg">
        <h2 className="font-playfair text-2xl mb-4">Hours of Operation</h2>
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