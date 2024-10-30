// controllers/trackingController.js
const Tracking = require('../models/trackingModel');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.createTracking = async (req, res) => {
  const { description, status, location } = req.body;
  const userId = req.user.id;
  try {
    await Tracking.create({ description, status, location, user_id: userId });
    res.status(201).json({ message: 'Tracking created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tracking' });
  }
};

exports.updateTrackingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await Tracking.updateStatus(id, status);
    res.json({ message: 'Tracking status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};

exports.getTrackings = async (req, res) => {
  const userId = req.user.id;
  try {
    const [trackings] = await Tracking.getAllByUserId(userId);
    res.json(trackings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve trackings' });
  }
};
