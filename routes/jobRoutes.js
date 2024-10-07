const express = require('express');
const { recommendJobs } = require('../controllers/jobController');
const router = express.Router();

router.post('/recommendations', recommendJobs);

module.exports = router;
