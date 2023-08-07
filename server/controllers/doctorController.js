const express = require('express');
const Doctor = require('../models/Doctor');

// Create a new doctor
exports.createDoctor = async (req, res) => {
    const doctor = new Doctor(req.body);
    try {
        await doctor.save();
        res.status(201).send({ doctor });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.send(doctors);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a doctor by id
exports.getDoctorById = async (req, res) => {
    const _id = req.params.id;
    try {
        const doctor = await Doctor.findById(_id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a doctor by id
exports.updateDoctor = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'specialization', 'experience'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(404).send();
        }
        res.send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a doctor by id
exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
};