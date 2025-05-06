const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
require('dotenv').config(); 

const app = express();
const BACKEND_A_URL = 'https://backend-a.example.com/ping';

app.get('/ping', (req, res) => {
  console.log('📥 Backend B recibió ping');
  res.send('Pong from B');
});

// Cron job: cada 5 minutos y 10 segundos (no exacto para evitar colisión)
cron.schedule('*/5 * * * *', async () => {
  setTimeout(async () => {
    try {
      const res = await axios.get("https://botd-e34u.onrender.com/bot/ping")
      console.log('✅ Backend B envió ping a Backend A:', res.data);
    } catch (err) {
      console.error('❌ Error en Backend B al pingear A:', err.message);
    }
  }, 10000); // espera 10 segundos antes de hacer el ping
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Backend B corriendo en ${process.env.PORT}`);
});