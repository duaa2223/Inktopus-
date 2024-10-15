const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const adminMiddleware = require('../middleware/adminMiddleware');
const auth = require('../Middleware/auth')
const {
  applyPublisher,
  getAllApplications,
  updateApplicationStatus
} = require('../Controllers/publisherController');

// Submit a new publisher application
router.post('/apply',auth, applyPublisher);  

// Get all publisher applications (admin only)
router.get('/applications',auth, getAllApplications);

// Update application status (admin only)
router.patch('/applications/:id', auth, updateApplicationStatus);

module.exports = router;
