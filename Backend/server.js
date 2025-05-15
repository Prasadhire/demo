require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
