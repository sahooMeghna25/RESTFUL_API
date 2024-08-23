const express = require("express");
require("./DB/db");
const Student = require("./MODEL/student");
const app = express();
const port = process.env.PORT || 3030;

app.post("/", (req, res) => {
  res.send("Student Information Created");
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
