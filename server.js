const express = require("express");
const chatRoute = require("./api/chat");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Route untuk API chatbot
app.use("/api/chat", chatRoute);

// Serve file statis (index.html dan lainnya)
app.use(express.static(path.join(__dirname)));

// Route utama ke halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Jalankan server di 0.0.0.0 agar bisa diakses publik (bukan hanya localhost)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server jalan di http://0.0.0.0:${PORT}`);
});
