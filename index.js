const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://panda:pandalovesnode@cluster0-tvhes.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Mongo connected successfully");
  })
  .catch(err => console.log("first connection err", err));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const doctorRouter = require("./routes/doctor");
const patientRouter = require("./routes/patient");

app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
