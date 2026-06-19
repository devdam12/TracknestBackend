const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    let uri = process.env.MONGODB_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/tracknest';
    
    if (process.env.MONGODB_PASSWORD) {
      uri = uri.replace('<password>', process.env.MONGODB_PASSWORD);
    }

    await mongoose.connect(uri);
    
    // Hide password in console logs for safety
    const safeUri = process.env.MONGODB_PASSWORD 
      ? uri.replace(process.env.MONGODB_PASSWORD, '****') 
      : uri;
      
    console.log(`MongoDB Connected: ${safeUri}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { connectDB };
