const Content = require('../Models/AddContentModel');
const College = require('../Models/CollegeModel');
const AcademicYear = require('../Models/AcademicYearModel');

// إضافة محتوى جديد
exports.createContent = async (req, res) => {
  try {
    const { title, author, description, cover_image, price, file_url, content_type, college, academic_year } = req.body;

    // التحقق من الكلية والسنة الجامعية
    const collegeExists = await College.findById(college);
    const academicYearExists = await AcademicYear.findById(academic_year);

    if (!collegeExists || !academicYearExists) {
      return res.status(400).json({ message: 'Invalid college or academic year' });
    }

    const newContent = new Content({
      title,
      author,
      description,
      cover_image,
      price,
      file_url,
      content_type,
      college,
      academic_year
    });

    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// استعراض جميع المحتويات
exports.getAllContents = async (req, res) => {
  const userId= req.user;
  try {
    const contents = await Content.find({isDeleted:false}).populate('college').populate('academic_year');
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// تحديث محتوى
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, cover_image, price, file_url, content_type, college, academic_year } = req.body;

    // التحقق من الكلية والسنة الجامعية
    const collegeExists = await College.findById(college);
    const academicYearExists = await AcademicYear.findById(academic_year);

    if (!collegeExists || !academicYearExists) {
      return res.status(400).json({ message: 'Invalid college or academic year' });
    }

    const updatedContent = await Content.findByIdAndUpdate(id, {
      title,
      author,
      description,
      cover_image,
      price,
      file_url,
      content_type,
      college,
      academic_year
    }, { new: true });

    if (!updatedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// حذف ناعم للمحتوى
exports.softDeleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContent = await Content.findByIdAndUpdate(
      id, 
      { isDeleted: true },
      { new: true, runValidators: true }
    );

    if (!updatedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// استعراض المحتويات مع دعم الفلاتر
exports.getFilteredContents = async (req, res) => {
  try {
    const { college, academic_year, specialization, content_type } = req.query;

    // بناء الاستعلام
    let query = { isDeleted: false };

    if (college) query.college = college;
    if (academic_year) query.academic_year = academic_year;
    if (specialization) query.specialization = specialization;
    if (content_type) query.content_type = content_type;

    const contents = await Content.find(query).populate('college').populate('academic_year');
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
