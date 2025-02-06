'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion?: string;
  specialRequests?: string;
}

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: 'success',
        message: 'Reservation request received! We will confirm shortly via email.',
      });
      // Optional: Reset form
      // setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-vietnam text-sm mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-vietnam text-sm mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-vietnam text-sm mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="block font-vietnam text-sm mb-2">
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block font-vietnam text-sm mb-2">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block font-vietnam text-sm mb-2">
            Time *
          </label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          >
            <option value="">Select a time</option>
            {/* Lunch times */}
            {['11:30', '12:00', '12:30', '13:00', '13:30', '14:00'].map(time => (
              <option key={time} value={`${time}`}>
                {time}
              </option>
            ))}
            {/* Dinner times */}
            {['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(
              time => (
                <option key={time} value={`${time}`}>
                  {time}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label htmlFor="occasion" className="block font-vietnam text-sm mb-2">
          Special Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
          focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
        >
          <option value="">Select an occasion (optional)</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business Dinner</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block font-vietnam text-sm mb-2">
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
          focus:ring-2 focus:ring-[--color-secondary] font-vietnam"
          placeholder="Any dietary restrictions or special requests?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[--color-primary] text-white py-3 rounded-md font-vietnam
        hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request Reservation'}
      </button>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  );
} 