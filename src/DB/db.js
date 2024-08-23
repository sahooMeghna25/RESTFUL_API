const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/studentapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected Succesfully");
  })
  .catch(() => {
    console.log("No Connection");
  });
