// models/trackingModel.js
const db = require('../config/db');

const Tracking = {
  create: (tracking) => db.query('INSERT INTO trackings (description, status, location, user_id) VALUES (?, ?, ?, ?)', [tracking.description, tracking.status, tracking.location, tracking.user_id]),
  updateStatus: (id, status) => db.query('UPDATE trackings SET status = ? WHERE id = ?', [status, id]),
  getAllByUserId: (userId) => db.query('SELECT * FROM trackings WHERE user_id = ?', [userId]),
};

module.exports = Tracking;
