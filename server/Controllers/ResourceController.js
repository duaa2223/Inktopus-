
const College = require('../Models/CollegeModel');
const AcademicYear = require('../Models/AcademicYearModel');
const Specialization = require('../Models/SpecializationModel'); 
///////////////////////////////////////////////////////////////////
exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find({ isActive: true }).sort({ name: 1 });
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching colleges', error: error.message });
  }
};
//////////////////////////////////////////////////////////////////////
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

// إضافة كلية جديدة///////////////////////////////////////////////////
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
//اضافة مرحله ///////////////////////////////////////////////////////
exports.createAcademicYear = async (req, res) => {
  try {
    const { name, nameAr, imageUrl, description, college, order } = req.body;

    // التحقق من وجود سنة دراسية بنفس الترتيب في نفس الكلية
    const existingWithOrder = await AcademicYear.findOne({
      college,
      order
    });

    if (existingWithOrder) {
      return res.status(400).json({
        success: false,
        message: `يوجد بالفعل سنة دراسية بالترتيب ${order} في هذه الكلية`
      });
    }

    // التحقق من وجود سنة دراسية بنفس الاسم في نفس الكلية
    const existingWithName = await AcademicYear.findOne({
      college,
      $or: [
        { name: name },
        { nameAr: nameAr }
      ]
    });

    if (existingWithName) {
      return res.status(400).json({
        success: false,
        message: 'يوجد بالفعل سنة دراسية بنفس الاسم في هذه الكلية'
      });
    }

    // إنشاء السنة الدراسية الجديدة
    const academicYear = new AcademicYear({
      name,
      nameAr,
      imageUrl,
      description,
      college,
      order,
      isActive: true
    });

    const savedAcademicYear = await academicYear.save();

    res.status(201).json({
      success: true,
      data: savedAcademicYear,
      message: 'تمت إضافة السنة الدراسية بنجاح'
    });

  } catch (error) {
    console.error('Error in createAcademicYear:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'حدث خطأ أثناء إنشاء السنة الدراسية'
    });
  }
};
///////////////////////////////////////////////////////////////////

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


// دالة لتعديل تخصص/////////////////////////////////////////////////////////////
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

// دالة لحذف تخصص//////////////////////////////////////////////////////////////
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

// دالة لعرض جميع التخصصات///////////////////////////////////////////////////
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
//جلب تخصص///////////////////////////////////////////////////////////
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

//جلب مرحله/////////////////////////////////////////////////////////
exports.getAcademicYearsByCollege = async (req, res) => {
  const { collegeId } = req.params;
  
  try {
    // تحقق من وجود الكلية
    const college = await College.findById(collegeId);
    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    // جلب المراحل الدراسية المرتبطة بالكلية
    const academicYears = await AcademicYear.find({ college: collegeId })
      .sort({ name: 1 }); // ترتيب حسب الاسم تصاعدياً

    res.status(200).json(academicYears);
  } catch (error) {
    console.error('Error fetching academic years:', error);
    res.status(500).json({ 
      message: 'Error fetching academic years', 
      error: error.message 
    });
  }
};

//حذف كلية////////////////////////////////////////////////////////////
exports.deleteCollege = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. حذف جميع التخصصات المرتبطة بالكلية
    await Specialization.deleteMany({ college: id });

    // 2. حذف جميع المراحل الدراسية المرتبطة بالكلية
    await AcademicYear.deleteMany({ college: id });

    // 3. حذف الكلية نفسها
    const deletedCollege = await College.findByIdAndDelete(id);

    if (!deletedCollege) {
      return res.status(404).json({ message: 'College not found' });
    }

    res.status(200).json({ message: 'College deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting college', error: error.message });
  }
}

//حذف مرحله////////////////////////////////////////////////////////////////

exports.deleteAcademicYear = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. حذف جميع التخصصات المرتبطة بهذه المرحلة الدراسية
    await Specialization.deleteMany({ academic_year: id });

    // 2. حذف المرحلة الدراسية نفسها
    const deletedYear = await AcademicYear.findByIdAndDelete(id);

    if (!deletedYear) {
      return res.status(404).json({ message: 'Academic year not found' });
    }

    res.status(200).json({ message: 'Academic year deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting academic year', error: error.message });
  }
};
//تحديث كليه//////////////////////////////////////////////////////////
exports.updateCollege = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nameAr, imageUrl, description } = req.body;

    // Find the college and update it
    const updatedCollege = await College.findByIdAndUpdate(
      id,
      { name, nameAr, imageUrl, description },
      { new: true } // This option returns the updated document
    );

    if (!updatedCollege) {
      return res.status(404).json({ message: 'College not found' });
    }

    res.status(200).json(updatedCollege);
  } catch (error) {
    res.status(500).json({ message: 'Error updating college', error: error.message });
  }
};
//تحديث مرحله////////////////////////////////////////////////////////////
exports.updateAcademicYear = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nameAr, imageUrl, description, college, order } = req.body;

    const updatedYear = await AcademicYear.findByIdAndUpdate(
      id,
      { name, nameAr, imageUrl, description, college, order },
      { new: true }
    );

    if (!updatedYear) {
      return res.status(404).json({ message: 'Academic year not found' });
    }

    res.status(200).json(updatedYear);
  } catch (error) {
    res.status(500).json({ message: 'Error updating academic year', error: error.message });
  }
};