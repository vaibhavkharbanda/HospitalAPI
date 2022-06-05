const express = require('express');
const DoctorController = require('../controllers/doctor');
const router = express.Router();

router.post('/register', DoctorController.CreateDoctor); //route for registering a new doctor
router.post('/login', DoctorController.DoctorLogin); //route for login in a doctor

module.exports = router;