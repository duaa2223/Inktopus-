const Review = require('../Models/ReviewModel');

// إضافة مراجعة جديدة
exports.addReview = async (req, res) => {
  try {
    const { content, rating, content_id } = req.body;
    const author = req.user._id; // افترض أن المستخدم مسجل دخوله

    const newReview = new Review({ content, rating, content_id, author });
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// الحصول على مراجعات لمحتوى معين
exports.getReviewsByContent = async (req, res) => {
  try {
    const { content_id } = req.params;
    const reviews = await Review.find({ content_id }).populate('author', 'name'); // Populate to get author details

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حذف مراجعة
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// إضافة رد على مراجعة
exports.addReplyToReview = async (req, res) => {
  try {
    const { review_id } = req.params;
    const { content } = req.body;
    const author = req.user._id; // افترض أن المستخدم مسجل دخوله

    const review = await Review.findById(review_id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.replies.push({ content, author });
    await review.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حذف رد على مراجعة
exports.deleteReply = async (req, res) => {
  try {
    const { review_id, reply_id } = req.params;
    const review = await Review.findById(review_id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.replies.id(reply_id).remove();
    await review.save();

    res.status(200).json({ message: 'Reply deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
