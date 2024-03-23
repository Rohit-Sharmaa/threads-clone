import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //To avoid warnings in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MonogDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
