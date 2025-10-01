const express = require('express');
const sampleRoutes = require('./sampleRoutes');

const router = express.Router();
router.use('/samples', sampleRoutes);

module.exports = router;