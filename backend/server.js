// Import dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const authenticateToken = require('./middleware/authenticateToken');
// const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config({ path: "./config/.env" });

// Connect to MongoDB
connectDB();

const app = express();

// CORS setup
app.use(cors({
  origin: "http://localhost:5173", // Adjust for production as needed
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());
app.use(morgan("dev"));

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use("/dashboard",authenticateToken, require('./route/dashboard'));
app.use("/api", require('./route/auth'));
app.use("/auth", require('./route/resetPass'));


// Fallback route for Single Page Application (SPA)
// Uncomment if serving a front-end build during production
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 7500;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
