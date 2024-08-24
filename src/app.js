const express = require("express");
require("./DB/db");
const Student = require("./MODEL/student");
const app = express();
const port = process.env.PORT || 3030;

//middleware
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Welcome To the Page");
});

//create new user
app.post("/students", (req, res) => {
  console.log(req.body);

  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send("Student created Succesfully");
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

//Read the student data

app.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
