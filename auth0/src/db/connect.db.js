import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.CLUSTER_USER_NAME}:${process.env.CLUSTER_USER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log(
      `Database Connection Successful\nData Base Host : ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Data Base Connection Failed\n Error : ${error}`);
    process.exit(1);
  }
};
