const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Online",
    message: "Welkom bij de API van Klusbedrijf Meurs!"
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Connectie met DB werkt!",
      timestamp: result.rows
    });
  } catch (err) {
    console.error("Database fout:", err);
    res.status(500).json({
      error: "Database connectie mislukt in route."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
