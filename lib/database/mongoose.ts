import mongoose, { Mongoose } from "mongoose";

const MONGOOSE_URL = process.env.MONGOOSE_URL;

interface MongooseConnection {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { connection: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.connection) return cached.connection;

  if (!MONGOOSE_URL) throw new Error("Mongoose URL is not defined!");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGOOSE_URL, {
      dbName: "ImageAI",
      bufferCommands: false,
    });

  cached.connection = await cached.promise;

  return cached.connection;
};
