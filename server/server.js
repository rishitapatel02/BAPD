const express = require("express");
const db = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("BAPD Backend is Running!");
});
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
