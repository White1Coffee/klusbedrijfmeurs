const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

// Importeer de database connectie zodat deze meteen opstart
const pool = require('./config/db'); 

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware instellen
app.use(cors()); // Zorgt ervoor dat de React frontend met deze API mag praten
app.use(express.json()); // Zorgt ervoor dat de server JSON-data kan begrijpen 

// --- API ROUTES --- 

// 1. Simpele test route om te kijken of de server leeft
app.get('/', (req, res) => {
res.json({
status: "Online",
message: "Welkom bij de API van Klusbedrijf Meurs!"
});
}); 

// 2. Test route om data uit de database te halen (Must Have check)
app.get('/api/test-db', async (req, res) => {
try {
const result = await pool.query('SELECT NOW()');
res.json({ message: "Connectie met DB werkt!", timestamp: result.rows });
} catch (err) {
console.error(err);
res.status(500).json({ error: "Database connectie mislukt in route." });
}
}); 

// Server starten
app.listen(PORT, () => {
  console.log(`✅ Server draait succesvol op poort: http://localhost:${PORT}`);
});