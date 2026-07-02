const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.set("bufferCommands", false);

exports.connectDB = async () => {
  const mongoUrl =
    process.env.MONGO_URL || process.env.Mongo_URL || "mongodb://127.0.0.1:27017/foody";

  try {
    const conn = await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: Number(process.env.DB_TIMEOUT_MS) || 5000,
    });
    console.log(`Database connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};
