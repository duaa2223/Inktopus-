// routes/contactRoute.js
const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/ContactUsController');

router.post('/contact', contactController.submitContact);
router.get('/contact-messages', contactController.getMessages);
// Delete message
router.delete('/contact-messages/:id', contactController.deleteMessage);
module.exports = router;