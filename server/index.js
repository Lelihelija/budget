const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

// start express server on port 3002
app.listen(3002, () => {
  console.log("server started on port 3002");
});