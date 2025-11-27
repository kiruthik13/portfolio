import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: String,
  position: String,
  message: String,
  image: String,
});

export default mongoose.model('Testimonial', testimonialSchema); 