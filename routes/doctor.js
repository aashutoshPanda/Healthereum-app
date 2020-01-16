const router = require("express").Router();

let Doctor = require("../models/doctor.model");

router.route("/").get((req, res) => {
  console.log("doc doc");
  Doctor.find()
    .then(Doctors => res.json(Doctors))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log("data", req.body);
  const name = req.body.name;
  const degree = req.body.degree;
  const experience = Number(req.body.experience);
  const patientList = req.body.patientList;
  const location = req.body.location;
  const specialisations = req.body.specialisations;
  const googleData = req.body.googleData;
  const newDoctor = new Doctor({
    name,
    degree,
    experience,
    patientList,
    location,
    specialisations,
    googleData
  });

  newDoctor
    .save()
    .then(() => res.json("Doctor added !"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Doctor.findById(req.params.id)
    .then(Doctor => {
      res.json(Doctor);
    })
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("delted the Doctor");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Doctor.findById(req.params.id)
    .then(Doctor => {
      Doctor.name = req.body.name;
      Doctor.degree = req.body.degree;
      Doctor.experience = Number(req.body.experience);
      Doctor.patientList = req.body.patientList;
      Doctor.location = req.body.location;
      Doctor.specialisations = req.body.specialisations;
      Doctor.googleData = req.body.googleData;
      Doctor.save()
        .then(() => res.json("Doctor updated !"))
        .catch(err => res.status(400).json("Err"));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
