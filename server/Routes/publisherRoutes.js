const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth')
const {
  applyPublisher,
  getAllApplications,
  updateApplicationStatus,
  getPublisherById
} = require('../Controllers/publisherController');
const checkRole = require('../Middleware/checkRole');

// Submit a new publisher application
router.post('/apply',auth,checkRole('reader') ,applyPublisher); 

// Get all publisher applications (admin only)
router.get('/applications',auth, getAllApplications);   

// Update application status (admin only)
router.put('/applications/:id', auth, updateApplicationStatus);  



// Get a specific publisher by ID
router.get('/publisher/:id', auth, getPublisherById);


module.exports = router;
