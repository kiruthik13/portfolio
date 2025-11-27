import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-black dark:text-white">Contact</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded">Thank you for your message!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border rounded text-lg"
              rows={5}
              required
            />
            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition">Send</button>
          </form>
        )}
      </motion.div>
    </section>
  );
} 