import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4, // Force IPv4 to avoid DNS resolution issues on some local networks
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error details:', {
      message: err.message,
      code: err.code,
      hostname: err.hostname,
      syscall: err.syscall
    });
    process.exit(1);
  }
};