// models/trackingModel.js
const db = require('../config/db');

const Tracking = {
  create: (tracking) => 
    db.query(
      'INSERT INTO trackings (Description, freightload, destination, location, user_id, status) VALUES (?, ?, ?, ?, ?, ?)', 
      [tracking.description, tracking.freightload, tracking.destination, tracking.location, tracking.user_id, tracking.status]
    ),
  
  updateStatus: (id, status) => 
    db.query(
      'UPDATE trackings SET status = ? WHERE id = ?', 
      [status, id]
    ),
  
  getAllByUserId: (userId) => 
    db.query(
      'SELECT * FROM trackings WHERE user_id = ?', 
      [userId]
    ),

  deleteById: (id) => 
    db.query(
      'DELETE FROM trackings WHERE id = ?', 
      [id]
    ),
};

module.exports = Tracking;
