// imports
const express = require('express');

// rest object
const app = express();

// routes 
app.get("/", (req, res) => {
  res.send("<h1>Welcome to FINAL PROJECT PART 1</h1>")
});

// listen
app.listen(3000, () => {
  console.log("Node Server Running on port 3000");
});