const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB Connnection Success');
  } catch (error) {
    console.log('MongoDB Connnection Failed ');
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
