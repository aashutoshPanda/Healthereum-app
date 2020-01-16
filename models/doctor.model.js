const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: Number, required: true },
    patientList: { type: [String], default: [] },
    location: { type: String, required: true },
    specialisations: { type: [String], default: [] },
    googleData: { type: Object, default: {} }
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
