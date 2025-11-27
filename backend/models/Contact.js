import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', contactSchema);