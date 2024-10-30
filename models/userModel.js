// models/userModel.js
const db = require('../config/db');

const User = {
  findByEmail: (email) => db.query('SELECT * FROM users WHERE email = ?', [email]),
  create: (user) => db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password])
};

module.exports = User;
