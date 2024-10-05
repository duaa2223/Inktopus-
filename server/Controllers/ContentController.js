// const Content = require('../Models/AddContentModel');
// const College = require('../Models/CollegeModel');
// const AcademicYear = require('../Models/AcademicYearModel');

// // إضافة محتوى جديد
// exports.createContent = async (req, res) => {
//   try {
//     const { title, author, description, cover_image, price, file_url, content_type, college, academic_year } = req.body;

//     // التحقق من الكلية والسنة الجامعية
//     const collegeExists = await College.findById(college);
//     const academicYearExists = await AcademicYear.findById(academic_year);

//     if (!collegeExists || !academicYearExists) {
//       return res.status(400).json({ message: 'Invalid college or academic year' });
//     }

//     const newContent = new Content({
//       title,
//       author,
//       description,
//       cover_image,
//       price,
//       file_url,
//       content_type,
//       college,
//       academic_year
//     });

//     await newContent.save();
//     res.status(201).json(newContent);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // استعراض جميع المحتويات
// exports.getAllContents = async (req, res) => {
//   const userId= req.user;
//   try {
//     const contents = await Content.find({isDeleted:false}).populate('college').populate('academic_year');
//     res.status(200).json(contents);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // تحديث محتوى
// exports.updateContent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, author, description, cover_image, price, file_url, content_type, college, academic_year } = req.body;

//     // التحقق من الكلية والسنة الجامعية
//     const collegeExists = await College.findById(college);
//     const academicYearExists = await AcademicYear.findById(academic_year);

//     if (!collegeExists || !academicYearExists) {
//       return res.status(400).json({ message: 'Invalid college or academic year' });
//     }

//     const updatedContent = await Content.findByIdAndUpdate(id, {
//       title,
//       author,
//       description,
//       cover_image,
//       price,
//       file_url,
//       content_type,
//       college,
//       academic_year
//     }, { new: true });

//     if (!updatedContent) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     res.status(200).json(updatedContent);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // حذف ناعم للمحتوى
// exports.softDeleteContent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedContent = await Content.findByIdAndUpdate(
//       id, 
//       { isDeleted: true },
//       { new: true, runValidators: true }
//     );

//     if (!updatedContent) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     res.status(200).json({ message: 'Content deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // استعراض المحتويات مع دعم الفلاتر
// exports.getFilteredContents = async (req, res) => {
//   try {
//     const { college, academic_year, specialization, content_type } = req.query;

//     // بناء الاستعلام
//     let query = { isDeleted: false };

//     if (college) query.college = college;
//     if (academic_year) query.academic_year = academic_year;
//     if (specialization) query.specialization = specialization;
//     if (content_type) query.content_type = content_type;

//     const contents = await Content.find(query).populate('college').populate('academic_year');
//     res.status(200).json(contents);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
///////////////////////////////////////////////////////////////////////////
const Content = require('../Models/AddContentModel');
const College = require('../Models/CollegeModel');
const AcademicYear = require('../Models/AcademicYearModel');
const Specialization = require('../Models/SpecializationModel'); // تأكد من أن المسار صحيح


// exports.createContent = async (req, res) => {
//   try {
//     const { title, titleAr, author, description, cover_image, price, file_url, content_type, college, academic_year, specialization } = req.body;

//     const [collegeExists, academicYearExists] = await Promise.all([
//       College.findById(college),
//       AcademicYear.findById(academic_year)
//     ]);

//     if (!collegeExists || !academicYearExists) {
//       return res.status(400).json({ message: 'Invalid college or academic year' });
//     }

//     const newContent = new Content({
//       title,
//       titleAr,
//       author,
//       description,
//       cover_image,
//       price,
//       file_url,
//       content_type,
//       college,
//       academic_year,
//       specialization
//     });

//     await newContent.save();
//     res.status(201).json(newContent);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating content', error: error.message });
//   }
// };
////////////////////////////////////////////////////////

// exports.createContent = async (req, res) => {

//   try {
//     const { title, titleAr, author, description, cover_image, price, file_url, content_type, college, academic_year, specialization } = req.body;
//     console.log('Request Body:', req.body);

//     const [collegeExists, academicYearExists] = await Promise.all([
//       College.findById(college),
//       AcademicYear.findById(academic_year)
//     ]);

//     if (!collegeExists || !academicYearExists) {
//       return res.status(400).json({ message: 'Invalid college or academic year' });
//     }

//     // تحقق من وجود التخصص
//     const specializationExists = await Specialization.findById(specialization);
//     console.log('Specialization Exists:', specializationExists);

//     if (!specializationExists) {
//       return res.status(400).json({ message: 'Invalid specialization' });
//     }



//     // إضافة معرف الناشر (Publisher) من الجلسة أو JWT
// if (!req.user || !req.user.id) {
//   console.log('User object:', req.user);  // إضافة هذا السطر للتصحيح
//   return res.status(401).json({ message: 'User not authenticated' });
// }

//     const publisher = req.user.id; // تأكد أن المعرف صحيح حسب نظام المصادقة لديك
// console.log('puplisher',publisher)
//     const newContent = new Content({
//       title,
//       titleAr,
//       author,
//       description,
//       cover_image,
//       price,
//       file_url,
//       content_type,
//       college,
//       academic_year,
//       specialization,
//       publisher // إضافة معرف الناشر
//     });

//     await newContent.save();
//     res.status(201).json(newContent);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating content', error: error.message });
//   }
// };
// // for get content for specific puplisher 
// exports.getPublisherContents = async (req, res) => {
//   try {
//     const publisherId = req.user.id; // تأكد من أخذ معرف الناشر من المصادقة

//     const contents = await Content.find({ publisher: publisherId, isDeleted: false, isActive: true })
//       .populate('college', 'name nameAr')
//       .populate('academic_year', 'name nameAr')
//       .select('-file_url');

//     res.status(200).json(contents);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching publisher contents', error: error.message });
//   }
// };
////////////////////////////////////////////////////
exports.createContent = async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // تصحيح الإخراج
    const { title, titleAr, author, description, cover_image, price, file_url, content_type, college, academic_year, specialization } = req.body;

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
      publisher
    });

    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    console.error('Error:', error);  // تصحيح الإخراج
    res.status(500).json({ message: 'Error creating content', error: error.message });
  }
};

/////////////////////////////////////////////////

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
// للتعديل من دون التحقق من دور 
// exports.updateContent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     if (updateData.college || updateData.academic_year) {
//       const [collegeExists, academicYearExists] = await Promise.all([
//         College.findById(updateData.college),
//         AcademicYear.findById(updateData.academic_year)
//       ]);

//       if (!collegeExists || !academicYearExists) {
//         return res.status(400).json({ message: 'Invalid college or academic year' });
//       }
//     }

//     const updatedContent = await Content.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

//     if (!updatedContent) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     res.status(200).json(updatedContent);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating content', error: error.message });
//   }
// };
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
// الحذف بدون دور 
// exports.softDeleteContent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedContent = await Content.findByIdAndUpdate(
//       id, 
//       { isDeleted: true },
//       { new: true, runValidators: true }
//     );

//     if (!updatedContent) {
//       return res.status(404).json({ message: 'Content not found' });
//     }

//     res.status(200).json({ message: 'Content deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting content', error: error.message });
//   }
// };
//// يتم التحقق من الدور الادمن والناشر 
exports.softDeleteContent = async (req, res) => {
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

    // حذف المحتوى (soft delete)
    const updatedContent = await Content.findByIdAndUpdate(
      id, 
      { isDeleted: true ,isActive: false}, // تحديث حالة الحذف
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: 'Content deleted successfully', updatedContent });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content', error: error.message });
  }
};


// exports.getFilteredContents = async (req, res) => {
//   try {
//     const { college, academic_year, specialization, content_type, page = 1, limit = 10 } = req.query;

//     let query = { isDeleted: false, isActive: true };

//     if (college) query.college = college;
//     if (academic_year) query.academic_year = academic_year;
//     if (specialization) query.specialization = specialization;
//     if (content_type) query.content_type = content_type;

//     const totalContents = await Content.countDocuments(query);
//     const totalPages = Math.ceil(totalContents / limit);

//     const contents = await Content.find(query)
//       .populate('college', 'name nameAr')
//       .populate('academic_year', 'name nameAr')
//       .select('-file_url')
//       .skip((page - 1) * limit)
//       .limit(Number(limit))
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       contents,
//       currentPage: page,
//       totalPages,
//       totalContents
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching filtered contents', error: error.message });
//   }
// };

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



exports.getBookDetails = async (req, res) => {
  try {
    const { id } = req.params; // الحصول على معرف الكتاب من الرابط
    
    // البحث عن الكتاب بواسطة الـ ID الخاص به
    const book = await Content.findById(id)
      .populate('college', 'name nameAr') // جلب معلومات الكلية
      .populate('academic_year', 'name nameAr') // جلب معلومات السنة الأكاديمية
      .select('-isDeleted'); // تجاهل حقل isDeleted

    // التحقق من وجود الكتاب
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // إرجاع بيانات الكتاب كاستجابة
    res.status(200).json(book);
  } catch (error) {
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
