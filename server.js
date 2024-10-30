// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const authenticateRoutes = require('./routes/authenticateRoutes');
const trackingRoutes = require('./routes/trackingRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authenticateRoutes);
app.use('/trackings', trackingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
