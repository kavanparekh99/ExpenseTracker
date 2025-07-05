import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense_tracker?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
