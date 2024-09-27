const College = require('../Models/CollegeModel');

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const AcademicYear = require('../Models/AcademicYearModel');

exports.getAcademicYearsByCollege = async (req, res) => {
  try {
    const { collegeId } = req.params;
    const academicYears = await AcademicYear.find({ college: collegeId });
    res.status(200).json(academicYears);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
