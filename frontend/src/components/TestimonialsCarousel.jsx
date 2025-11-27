import { useState } from 'react';

const mockTestimonials = [
  {
    name: 'Alice',
    position: 'Product Manager',
    message: 'Kiruthik is a fantastic developer! Highly recommended.',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Bob',
    position: 'CTO',
    message: 'Delivered our project on time with great quality.',
    image: 'https://via.placeholder.com/80',
  },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const testimonial = mockTestimonials[idx];

  function prev() {
    setIdx((idx - 1 + mockTestimonials.length) % mockTestimonials.length);
  }
  function next() {
    setIdx((idx + 1) % mockTestimonials.length);
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
      <img src={testimonial.image} alt={testimonial.name} className="mx-auto rounded-full w-20 h-20 mb-4" />
      <div className="font-bold text-lg">{testimonial.name}</div>
      <div className="text-blue-600 dark:text-blue-300 text-sm mb-2">{testimonial.position}</div>
      <div className="italic mb-4">"{testimonial.message}"</div>
      <div className="flex justify-center gap-4">
        <button onClick={prev} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Prev</button>
        <button onClick={next} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Next</button>
      </div>
    </div>
  );
} 