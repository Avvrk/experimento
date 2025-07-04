const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/ping", (req, res) => {
  setTimeout(async () => {
    await axios.get("https://botd-e34u.onrender.com/ping");
  }, 5 * 60 * 1000);
  res.send('pong');
});

app.listen(process.env.PORT, () => {
  console.log(`Puerto: ${process.env.PORT}`);
});
