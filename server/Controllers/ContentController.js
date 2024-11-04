
const Content = require('../Models/AddContentModel');
const College = require('../Models/CollegeModel');
const AcademicYear = require('../Models/AcademicYearModel');
const Specialization = require('../Models/SpecializationModel'); // تأكد من أن المسار صحيح

exports.createContent = async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // تصحيح الإخراج
    const { title, titleAr, author, description, cover_image, price, file_url, content_type, college, academic_year, specialization, additional_images,promo_videos } = req.body;

    const [collegeExists, academicYearExists] = await Promise.all([
      College.findById(college),
      AcademicYear.findById(academic_year)
    ]);

    if (!collegeExists || !academicYearExists) {
      return res.status(400).json({ message: 'Invalid college or academic year' });
    }

    const specializationExists = await Specialization.findById(specialization);
    console.log('Specialization Exists:', specializationExists);  // تصحيح الإخراج
    if (!specializationExists) {
      return res.status(400).json({ message: 'Invalid specialization' });
    }

    if (!req.user || !req.user.id) {
      console.log('User object:', req.user);  // تصحيح الإخراج
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const publisher = req.user.id;
    console.log('Publisher ID:', publisher);  // تصحيح الإخراج

    const newContent = new Content({
      title,
      titleAr,
      author,
      description,
      cover_image,
      price,
      file_url,
      content_type,
      college,
      academic_year,
      specialization,
      publisher,
      additional_images,
      promo_videos      
    });

    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    console.error('Error:', error);  // تصحيح الإخراج
    res.status(500).json({ message: 'Error creating content', error: error.message });
  }
};


exports.getAllContents = async (req, res) => {
  try {
    const contents = await Content.find({ isDeleted: false, isActive: true })
      .populate('college', 'name nameAr')
      .populate('academic_year', 'name nameAr')
      .select('-file_url'); // ال تقم بإرجاع رابط الملف في قائمة المحتويات
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contents', error: error.message });
  }
};
// الذي يستطيع التعديل الناشر فقط 
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // التحقق من أن المستخدم الحالي هو الناشر
    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    if (content.publisher.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this content' });
    }

    if (updateData.college || updateData.academic_year) {
      const [collegeExists, academicYearExists] = await Promise.all([
        College.findById(updateData.college),
        AcademicYear.findById(updateData.academic_year)
      ]);

      if (!collegeExists || !academicYearExists) {
        return res.status(400).json({ message: 'Invalid college or academic year' });
      }
    }

    const updatedContent = await Content.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating content', error: error.message });
  }
};

//// يتم التحقق من الدور الادمن والناشر 
// exports.softDeleteContent = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     // العثور على المحتوى بواسطة ID
//     const content = await Content.findById(id);

//     if (!content) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     // التحقق مما إذا كان المستخدم هو الناشر أو إذا كان أدمن
//     if (req.user.id !== content.publisher.toString() && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Unauthorized to delete this content' });
//     }

//     // حذف المحتوى (soft delete)
//     const updatedContent = await Content.findByIdAndUpdate(
//       id, 
//       { isDeleted: true ,isActive: false}, // تحديث حالة الحذف
//       { new: true, runValidators: true }
//     );

//     res.status(200).json({ message: 'Content deleted successfully', updatedContent });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting content', error: error.message });
//   }
// };

exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    
    // العثور على المحتوى بواسطة ID
    const content = await Content.findById(id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    // التحقق مما إذا كان المستخدم هو الناشر أو إذا كان أدمن
    if (req.user.id !== content.publisher.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized to delete this content' });
    }
    
    // حذف المحتوى (حذف تام)
    await Content.findByIdAndDelete(id);
    
    res.status(200).json({ 
      message: 'Content deleted successfully'
    });
    
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting content', 
      error: error.message 
    });
  }
};


exports.getFilteredContents = async (req, res) => {
  try {
    const { collegeId, yearId } = req.params; // استخدم المعلمات هنا
    const { specialization, content_type, page = 1, limit = 10 } = req.query;

    let query = { isDeleted: false, isActive: true };

    if (collegeId) query.college = collegeId;
    if (yearId) query.academic_year = yearId;
    if (specialization) query.specialization = specialization;
    if (content_type) query.content_type = content_type;
    
    const totalContents = await Content.countDocuments(query);
    const totalPages = Math.ceil(totalContents / limit);

    const contents = await Content.find(query)
      .populate('college', 'name nameAr')
      .populate('academic_year', 'name nameAr')
      .select('-file_url')
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.status(200).json({
      contents,
      currentPage: page,
      totalPages,
      totalContents
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching filtered contents', error: error.message });
  }
};



// exports.getBookDetails = async (req, res) => {
//   try {
//     const { id } = req.params; // الحصول على معرف الكتاب من الرابط
    
//     // البحث عن الكتاب بواسطة الـ ID الخاص به
//     const book = await Content.findById(id)
//       .populate('college', 'name nameAr') // جلب معلومات الكلية
//       .populate('academic_year', 'name nameAr') // جلب معلومات السنة الأكاديمية
//       .select('-isDeleted'); // تجاهل حقل isDeleted

//     // التحقق من وجود الكتاب
//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     // إرجاع بيانات الكتاب كاستجابة
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching book details', error: error.message });
//   }
// };
exports.getBookDetails = async (req, res) => {
  try {
    const { id } = req.params;
    
    const book = await Content.findById(id)
      .populate('college', 'name nameAr')
      .populate('academic_year', 'name nameAr')
      .select('-isDeleted')
      .select('title titleAr description author price cover_image additional_images promo_videos content_type author_info'); // تأكد من تضمين جميع الحقول المطلوبة

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // للتحقق من البيانات
    console.log('Book details:', {
      additional_images: book.additional_images,
      promo_videos: book.promo_videos
    });

    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book details:', error);
    res.status(500).json({ message: 'Error fetching book details', error: error.message });
  }
};


//محتوى لناشر معين 
exports.getPublisherContents = async (req, res) => {
  try {
    // افتراض أن المستخدم مسجل دخول وله معرف ID
    const publisherId = req.user.id;

    // جلب المحتويات المنشورة من قبل الناشر
    const contents = await Content.find({ publisher: publisherId, isDeleted: false })
      .populate('college', 'name nameAr')
      .populate('academic_year', 'name nameAr')
      .populate('specialization', 'name nameAr') // جلب معلومات التخصص
      .select('-file_url') // عدم إرجاع رابط الملف 
      .sort({ createdAt: -1 }); // ترتيب المحتويات حسب الأحدث

    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publisher contents', error: error.message });
  }
};
