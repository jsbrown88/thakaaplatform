const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Route to get all doctors
router.get('/', doctorController.getAllDoctors);

// Route to get a specific doctor by id
router.get('/:id', doctorController.getDoctorById);

// Route to create a new doctor
router.post('/', doctorController.createDoctor);

// Route to update a doctor by id
router.put('/:id', doctorController.updateDoctor);

// Route to delete a doctor by id
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;