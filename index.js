const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DBConnect success"))
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("Backend server is running!");
});
