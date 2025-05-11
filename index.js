const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/ping", (req, res) => {
  res.end();
  setTimeout(async () => {
    await axios.get("https://botd-e34u.onrender.com/ping");
  }, 5 * 60 * 1000);
});

app.listen(process.env.PORT, () => {
  console.log(`Puerto: ${process.env.PORT}`);
});
