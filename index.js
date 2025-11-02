// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working fine ✅" });
});

// Route: simulate
const simulateRoutes = require("./routes/simulate");
app.use("/api/simulate", simulateRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
