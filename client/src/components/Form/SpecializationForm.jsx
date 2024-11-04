import React, { useState, useEffect } from 'react';
import { Button } from '../ui/UIComponents';

const SpecializationForm = ({ colleges, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    description: '',
    college: '',
    academic_year: ''
  });
  
  const [academicYears, setAcademicYears] = useState([]);

  useEffect(() => {
    if (formData.college) {
      fetchAcademicYears(formData.college);
    }
  }, [formData.college]);

  const fetchAcademicYears = async (collegeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/academic-years/${collegeId}`);
      if (response.ok) {
        const data = await response.json();
        setAcademicYears(data);
      } else {
        console.error('Failed to fetch academic years');
      }
    } catch (error) {
      console.error('Error fetching academic years:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // Reset academic_year when college changes
      if (name === 'college') {
        newData.academic_year = '';
      }
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/specializations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const newSpecialization = await response.json();
        if (onSubmit) onSubmit(newSpecialization);
        onClose();
      } else {
        const errorData = await response.json();
        console.error('Error adding specialization:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#8D493A] mb-4">Add Specialization</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name (English):
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name (Arabic):
            </label>
            <input
              type="text"
              name="nameAr"
              value={formData.nameAr}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College:
            </label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
              required
            >
              <option value="">Select College</option>
              {colleges.map((college) => (
                <option key={college._id} value={college._id}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Academic Year:
            </label>
            <select
              name="academic_year"
              value={formData.academic_year}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
              required
              disabled={!formData.college}
            >
              <option value="">Select Academic Year</option>
              {academicYears.map((year) => (
                <option key={year._id} value={year._id}>
                  {year.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
              rows="3"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#8D493A] hover:bg-[#7A3E32] text-white"
            >
              Add Specialization
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecializationForm;