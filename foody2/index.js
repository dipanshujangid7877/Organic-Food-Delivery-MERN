const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const { connectDB } = require("./db/dbconnection.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || process.env.port || 5000;
let dbStatus = "connecting";
const CLIENT_URLS = (process.env.CLIENT_URLS || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || CLIENT_URLS.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Foody API is running",
    endpoints: ["/health", "/products", "/register", "/login"],
  });
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    status: "ok",
    database: dbStatus,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/", require("./src/routs/user_validation.js"));
app.use("/", require("./src/routs/products.js"));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Foody API listening on http://localhost:${PORT}`);
});

connectDB()
  .then(() => {
    dbStatus = "connected";
  })
  .catch((error) => {
    dbStatus = "disconnected";
    console.error("API started, but database is unavailable:", error.message);
  });
