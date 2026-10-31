const mongoose = require("mongoose");
const { mongodbUri } = require("./config");

// mongodb connection :

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodbUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;