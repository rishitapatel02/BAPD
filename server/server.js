const express = require("express");
const db = require("./config/db");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("BAPD Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
