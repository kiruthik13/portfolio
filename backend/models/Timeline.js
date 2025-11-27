import mongoose from 'mongoose';

const timelineSchema = new mongoose.Schema({
  year: String,
  title: String,
  location: String,
  description: String,
});

export default mongoose.model('Timeline', timelineSchema); 