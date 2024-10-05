// const College = require('../Models/CollegeModel');

// exports.getAllColleges = async (req, res) => {
//   try {
//     const colleges = await College.find();
//     res.status(200).json(colleges);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const AcademicYear = require('../Models/AcademicYearModel');

// exports.getAcademicYearsByCollege = async (req, res) => {
//   try {
//     const { collegeId } = req.params;
//     const academicYears = await AcademicYear.find({ college: collegeId });
//     res.status(200).json(academicYears);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
////////////////////////////////////////////////////////////////////
const College = require('../Models/CollegeModel');
const AcademicYear = require('../Models/AcademicYearModel');
const Specialization = require('../Models/SpecializationModel'); 

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find({ isActive: true }).sort({ name: 1 });
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching colleges', error: error.message });
  }
};

exports.getAcademicYearsByCollege = async (req, res) => {
  try {
    const { collegeId } = req.params;
    const college = await College.findById(collegeId);
    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }
    const academicYears = await AcademicYear.find({ college: collegeId, isActive: true }).sort({ order: 1 });
    res.status(200).json(academicYears);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching academic years', error: error.message });
  }
};

// إضافة كلية جديدة
exports.createCollege = async (req, res) => {
  try {
    const { name, nameAr, imageUrl, description } = req.body;
    const newCollege = new College({ name, nameAr, imageUrl, description });
    await newCollege.save();
    res.status(201).json(newCollege);
  } catch (error) {
    res.status(400).json({ message: 'Error creating college', error: error.message });
  }
};

// إضافة سنة دراسية جديدة
exports.createAcademicYear = async (req, res) => {
  try {
    const { name, nameAr, imageUrl, description, college, order } = req.body;
    const newAcademicYear = new AcademicYear({ name, nameAr, imageUrl, description, college, order });
    await newAcademicYear.save();
    res.status(201).json(newAcademicYear);
  } catch (error) {
    res.status(400).json({ message: 'Error creating academic year', error: error.message });
  }
};

//////////////////////////////

// دالة لإضافة تخصص جديد
exports.createSpecialization = async (req, res) => {
  const { name, college, academic_year } = req.body; // جلب البيانات من الطلب
  console.log(req.body); // طباعة البيانات المرسلة لرؤية ما يتم تمريره

  try {
    // التحقق من صحة معرف الكلية والسنة الأكاديمية
    const collegeExists = await College.findById(college);
    const yearExists = await AcademicYear.findById(academic_year);

    if (!collegeExists) {
      return res.status(400).json({ message: "Invalid college" });
    }

    if (!yearExists) {
      return res.status(400).json({ message: "Invalid academic year" });
    }

    // إنشاء تخصص جديد
    const newSpecialization = new Specialization({
      name,
      college,
      academic_year
    });

    await newSpecialization.save(); // حفظ التخصص الجديد في قاعدة البيانات
    res.status(201).json(newSpecialization);
  } catch (error) {
    res.status(500).json({ message: 'Error adding specialization', error: error.message });
  }
};


// دالة لتعديل تخصص
exports.updateSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, college } = req.body;

    // تحقق من وجود التخصص
    const specialization = await Specialization.findById(id);
    if (!specialization) {
      return res.status(404).json({ message: 'Specialization not found' });
    }

    // تحقق من وجود الكلية
    const collegeExists = await College.findById(college);
    if (!collegeExists) {
      return res.status(400).json({ message: 'Invalid college' });
    }

    specialization.name = name || specialization.name;
    specialization.college = college || specialization.college;

    await specialization.save();
    res.status(200).json(specialization);
  } catch (error) {
    res.status(500).json({ message: 'Error updating specialization', error: error.message });
  }
};

// دالة لحذف تخصص
exports.deleteSpecialization = async (req, res) => {
  try {
    const { id } = req.params;

    const specialization = await Specialization.findByIdAndDelete(id);
    if (!specialization) {
      return res.status(404).json({ message: 'Specialization not found' });
    }

    res.status(200).json({ message: 'Specialization deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting specialization', error: error.message });
  }
};

// دالة لعرض جميع التخصصات
exports.getAllSpecializations = async (req, res) => {
  try {
    const specializations = await Specialization.find()
    .populate('college')
    .populate('academic_year'); // يمكنك إضافة populate لأي حقل آخر إذا لزم الأمر
    res.status(200).json(specializations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specializations', error: error.message });
  }
};

// exports.getSpecializationsByCollegeAndYear = async (req, res) => {
//   const { collegeId, yearId } = req.params; // استخدم الكلية والسنة من البارامترات

//   try {
//     // تحقق من أن الكلية موجودة
//     const college = await College.findById(collegeId);
//     if (!college) {
//       return res.status(404).json({ message: 'Invalid college' });
//     }

//     // تحقق من أن السنة الأكاديمية موجودة
//     const academicYear = await AcademicYear.findById(yearId);
//     if (!academicYear) {
//       return res.status(404).json({ message: 'Invalid academic year' });
//     }

//     // البحث باستخدام الفلاتر
//     const specializations = await Specialization.find({ 
//       college: collegeId,
//       academic_year: yearId
//     })
//     .populate('college')
//     .populate('academic_year'); // تضمين معلومات الكلية والسنة الأكاديمية

//     if (!specializations || specializations.length === 0) {
//       return res.status(404).json({ message: 'No specializations found for the given college and year.' });
//     }

//     res.status(200).json(specializations);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching specializations', error: error.message });
//   }
// };
// دالة لإرجاع التخصصات بناءً على الكلية والسنة الأكاديمية
// exports.getSpecializationsByCollegeAndYear = async (req, res) => {
//   // console.log('Route hit!');
//   try {
//     const { collegeId, yearId } = req.params;

//     // تحقق من وجود الكلية والسنة الأكاديمية
//     // const collegeExists = await College.findById(collegeId);
//     console.log('collegeId:', collegeId); // للتأكد من أن الـ ID صحيح
//     const college = await College.findOne({ _id: collegeId });
//     if (!college) {
//       console.log('College not found with ID:', collegeId);
//       return res.status(404).json({ message: 'Invalid college' });
//     }
    
//     const academicYear = await AcademicYear.findOne({ _id: yearId });
//     if (!academicYear) {
//       console.log('Academic year not found with ID:', yearId);
//       return res.status(404).json({ message: 'Invalid academic year' });
//     }
    
//     // استرجاع التخصصات بناءً على الكلية والسنة الأكاديمية
//     const specializations = await Specialization.find({
//       college: collegeId,
//       academic_year: yearId,
//     });

//     res.status(200).json(specializations);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching specializations', error: error.message });
//   }
// };
exports.getSpecializationsByCollegeAndYear = async (req, res) => {
  const { collegeId, yearId } = req.params;

  try {
    // تحقق من أن الكلية موجودة
    const college = await College.findById(collegeId);
    if (!college) {
      return res.status(404).json({ message: 'Invalid college' });
    }

    // تحقق من أن السنة الأكاديمية موجودة
    const academicYear = await AcademicYear.findById(yearId);
    if (!academicYear) {
      return res.status(404).json({ message: 'Invalid academic year' });
    }

    // البحث باستخدام الفلاتر
    const specializations = await Specialization.find({ 
      college: collegeId,
      academic_year: yearId
    })
    .populate('college')
    .populate('academic_year');

    if (!specializations || specializations.length === 0) {
      return res.status(404).json({ message: 'No specializations found for the given college and year.' });
    }

    res.status(200).json(specializations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specializations', error: error.message });
  }
};
