const Book = require('../Models/Habit');
//creat book 
exports.createBook = async (req, res) => {
  try {
    const { Authorname,bookname, description, category, tags, link } = req.body;

    // إنشاء كتاب جديد باستخدام البيانات المدخلة
    const newBook = new Book({ //creat doc from model Book 
      Authorname,
      bookname,
      description,
      category,
      tags,
      link,
    });

    // حفظ الكتاب في قاعدة البيانات
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add Habit
// exports.addHabit = async (req, res) => {
//   try {
//     const newHabit = new Habit(req.body);
//     const habit = await newHabit.save();
//     res.json(habit);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Get All Habits
exports.getBooks = async (req, res) => { 
  try {
    const books = await Book.find({isDeleted:false});
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//get habites with fillter 
// عرض جميع العادات مع إمكانية التصفية حسب الفئة أو العلامات
exports.getBookssfillter = async (req, res) => {
  try {
    const { category, tags } = req.query;

    // إعداد استعلام التصفية
    let query = {};

    // التصفية حسب الفئة إذا كانت موجودة
    if (category) {
      query.category = category;
    }

    // التصفية حسب العلامات إذا كانت موجودة
    if (tags) {
      query.tags = { $in: tags.split(',') };
    }

    const fillterbook = await Book.find(query,{ isDeleted: false });
    res.status(200).json(fillterbook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Habit
exports.updateBook = async (req, res) => {
  try {
    const upbook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(upbook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//complate
exports.complateBook = async (req, res) => {
  try {
    const checkbook = await Book.findByIdAndUpdate(req.params.id, { isCompleted: true }, { new: true });
    res.json({ message: 'Habit marked as completed', checkbook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Habit (Soft Delete)
exports.deleteBook = async (req, res) => {
  try {
    const dbook = await Book.findByIdAndUpdate(
      req.params.id, 
      { isDeleted: true }, // استخدام isDeleted بدل isCompleted لتمييز الكتب المحذوفة
      { new: true }
    );

    if (!dbook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book marked as deleted', dbook });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
