const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 🔹 Endpoint versi.json
app.get('/versi.json', (req, res) => {
  res.json({
    versi: "1.1",
    url: "https://github.com/natasyatanjaya2/updater-umum/raw/refs/heads/main/releases/latest/download/ProgramToko.exe",
    files: []
  });
});

// Jalankan server
app.listen(PORT, () => console.log(`✅ Server berjalan di ${PORT}`));
