const router = require("express").Router();

let Patient = require("../models/patient.model");
router.route("/").get((req, res) => {
  Patient.find()
    .then(Patients => res.json(Patients))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const sex = req.body.sex;
  const doctorList = req.body.doctorList;
  const location = req.body.location;
  const googleData = req.body.googleData;
  const newPatient = new Patient({
    name,
    sex,
    age,
    doctorList,
    location,
    googleData
  });

  newPatient
    .save()
    .then(() => res.json("Patient added !"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Patient.findById(req.params.id)
    .then(Patient => {
      res.json(Patient);
    })
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("delted the Patient");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Patient.findById(req.params.id)
    .then(Patient => {
      Patient.name = req.body.name;
      Patient.age = Number(req.body.age);
      Patient.doctorList = req.body.doctorList;
      Patient.location = req.body.location;
      Patient.googleData = req.body.googleData;
      Patient.save()
        .then(() => res.json("Patient updated !"))
        .catch(err => res.status(400).json("Err"));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
