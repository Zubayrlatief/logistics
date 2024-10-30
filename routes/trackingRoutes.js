// routes/trackingRoutes.js
const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');
const { verifyToken } = require('../middlewares/authenticateMiddleware');

router.post('/', verifyToken, trackingController.createTracking);
router.patch('/:id', verifyToken, trackingController.updateTrackingStatus);
router.get('/', verifyToken, trackingController.getTrackings);

module.exports = router;
