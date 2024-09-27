const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true
  },
  Authorname: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    required: true
  },
  link: {
    type: String, 
    required: true,
  },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Habit', HabitSchema);
