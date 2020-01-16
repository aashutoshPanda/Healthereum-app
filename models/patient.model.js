const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    doctorList: { type: [String], default: [] },
    location: { type: String, required: true },
    googleData: { type: Object, default: {} }
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
