import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AddContentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    titleAr: '',
    author: '',
    author_info: '',
    description: '',
    price: '',
    content_type: 'book',
    college: '',
    academic_year: '',
    specialization: ''
  });

  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/colleges');
      setColleges(response.data);
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };

  const fetchAcademicYears = async (collegeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
      setAcademicYears(response.data);
    } catch (error) {
      console.error('Error fetching academic years:', error);
    }
  };

  const fetchSpecializations = async (collegeId, yearId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/specializations/college/${collegeId}/year/${yearId}`);
      setSpecializations(response.data);
    } catch (error) {
      console.error('Error fetching specializations:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'college') {
      fetchAcademicYears(value);
      setFormData(prev => ({ ...prev, academic_year: '', specialization: '' }));
    } else if (name === 'academic_year') {
      fetchSpecializations(formData.college, value);
      setFormData(prev => ({ ...prev, specialization: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/content/add', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Content submitted successfully:', response.data);
      onClose();
    } catch (error) {
      console.error('Error submitting content:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Add New Content</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            name="titleAr"
            value={formData.titleAr}
            onChange={handleInputChange}
            placeholder="العنوان بالعربية"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <textarea
            name="author_info"
            value={formData.author_info}
            onChange={handleInputChange}
            placeholder="Author Info"
            className="w-full p-2 border rounded bg-white"
          ></textarea>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border rounded bg-white"
          ></textarea>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border rounded bg-white"
            required
          />
          <select
            name="content_type"
            value={formData.content_type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-white"
          >
            <option value="book">Book</option>
            <option value="article">Article</option>
          </select>
          <select
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-white"
            required
          >
            <option value="">Select College</option>
            {colleges.map(college => (
              <option key={college._id} value={college._id}>{college.name}</option>
            ))}
          </select>
          <select
            name="academic_year"
            value={formData.academic_year}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-white"
            required
            disabled={!formData.college}
          >
            <option value="">Select Academic Year</option>
            {academicYears.map(year => (
              <option key={year._id} value={year._id}>{year.name}</option>
            ))}
          </select>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-white"
            required
            disabled={!formData.academic_year}
          >
            <option value="">Select Specialization</option>
            {specializations.map(spec => (
              <option key={spec._id} value={spec._id}>{spec.name}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#8D493A] text-white px-4 py-2 rounded"
            >
              Submit Content
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onClose}
              className="bg-[#D0B8A8] text-[#8D493A] px-4 py-2 rounded"
            >
              Close
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddContentForm;