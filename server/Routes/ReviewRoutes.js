const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/ReviewController');
const authenticateToken = require('../Middleware/auth');

// إضافة مراجعة جديدة
router.post('/add', authenticateToken, reviewController.addReview); 

// الحصول على مراجعات لمحتوى معين
router.get('/reviews/:content_id', reviewController.getReviewsByContent);

// حذف مراجعة
router.delete('/reviews/:id', authenticateToken, reviewController.deleteReview);

// إضافة رد على مراجعة
router.post('/reviews/:review_id/replies',authenticateToken, reviewController.addReplyToReview);

// حذف رد على مراجعة
router.delete('/reviews/:review_id/replies/:reply_id', authenticateToken, reviewController.deleteReply);

module.exports = router;
