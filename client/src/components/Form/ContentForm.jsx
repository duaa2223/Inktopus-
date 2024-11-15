// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const AddContentForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     titleAr: '',
//     author: '',
//     author_info: '',
//     description: '',
//     price: '',
//     content_type: 'book',
//     college: '',
//     academic_year: '',
//     specialization: '',
//     file_url: '' 
//   });

//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);

//   useEffect(() => {
//     fetchColleges();
//   }, []);

//   const fetchColleges = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/colleges');
//       setColleges(response.data);
//     } catch (error) {
//       console.error('Error fetching colleges:', error);
//     }
//   };

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//       setAcademicYears(response.data);
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   const fetchSpecializations = async (collegeId, yearId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/specializations/college/${collegeId}/year/${yearId}`);
//       setSpecializations(response.data);
//     } catch (error) {
//       console.error('Error fetching specializations:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === 'college') {
//       fetchAcademicYears(value);
//       setFormData(prev => ({ ...prev, academic_year: '', specialization: '' }));
//     } else if (name === 'academic_year') {
//       fetchSpecializations(formData.college, value);
//       setFormData(prev => ({ ...prev, specialization: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/content/add', formData, {
//         withCredentials: true,
//         headers: { 'Content-Type': 'application/json' }
//       });
//       console.log('Content submitted successfully:', response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error submitting content:', error);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
//       >
//         <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Add New Content</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleInputChange}
//             placeholder="Title"
//             className="w-full p-2 border rounded bg-white"
//             required
//           />
//           <input
//             name="titleAr"
//             value={formData.titleAr}
//             onChange={handleInputChange}
//             placeholder="العنوان بالعربية"
//             className="w-full p-2 border rounded bg-white"
//             required
//           />
//           <input
//             name="author"
//             value={formData.author}
//             onChange={handleInputChange}
//             placeholder="Author"
//             className="w-full p-2 border rounded bg-white"
//             required
//           />
//           <textarea
//             name="author_info"
//             value={formData.author_info}
//             onChange={handleInputChange}
//             placeholder="Author Info"
//             className="w-full p-2 border rounded bg-white"
//           ></textarea>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Description"
//             className="w-full p-2 border rounded bg-white"
//           ></textarea>
//           <input
//             name="price"
//             type="number"
//             value={formData.price}
//             onChange={handleInputChange}
//             placeholder="Price"
//             className="w-full p-2 border rounded bg-white"
//             required
//           />


//           <input
//             name="file_url"  // إضافة هذا السطر
//             value={formData.file_url}  // إضافة هذا السطر
//             onChange={handleInputChange}  // إضافة هذا السطر
//             placeholder="رابط الكتاب"  // إضافة هذا السطر
//             className="w-full p-2 border rounded bg-white"  // إضافة هذا السطر
//             required  // إضافة هذا السطر
//           />

//           <select
//             name="content_type"
//             value={formData.content_type}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded bg-white"
//           >
//             <option value="book">Book</option>
//             <option value="article">Article</option>
//           </select>
//           <select
//             name="college"
//             value={formData.college}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded bg-white"
//             required
//           >
//             <option value="">Select College</option>
//             {colleges.map(college => (
//               <option key={college._id} value={college._id}>{college.name}</option>
//             ))}
//           </select>
//           <select
//             name="academic_year"
//             value={formData.academic_year}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded bg-white"
//             required
//             disabled={!formData.college}
//           >
//             <option value="">Select Academic Year</option>
//             {academicYears.map(year => (
//               <option key={year._id} value={year._id}>{year.name}</option>
//             ))}
//           </select>
//           <select
//             name="specialization"
//             value={formData.specialization}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded bg-white"
//             required
//             disabled={!formData.academic_year}
//           >
//             <option value="">Select Specialization</option>
//             {specializations.map(spec => (
//               <option key={spec._id} value={spec._id}>{spec.name}</option>
//             ))}
//           </select>
//           <div className="flex justify-end space-x-2">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="bg-[#8D493A] text-white px-4 py-2 rounded"
//             >
//               Submit Content
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="button"
//               onClick={onClose}
//               className="bg-[#D0B8A8] text-[#8D493A] px-4 py-2 rounded"
//             >
//               Close
//             </motion.button>
//           </div>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AddContentForm;
///////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { X } from 'lucide-react';

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
    specialization: '',
    file_url: '',
    cover_image: '',
    additional_images: [],
    promo_videos: [],
  });

  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [newVideo, setNewVideo] = useState('');
  const [errors, setErrors] = useState({});

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

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddImage = () => {
    if (!newImage) {
      setErrors(prev => ({ ...prev, image: 'Please enter an image URL' }));
      return;
    }
    if (!validateUrl(newImage)) {
      setErrors(prev => ({ ...prev, image: 'Please enter a valid URL' }));
      return;
    }
    if (formData.additional_images.length >= 4) {
      setErrors(prev => ({ ...prev, image: 'Maximum 4 additional images allowed' }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      additional_images: [...prev.additional_images, newImage]
    }));
    setNewImage('');
    setErrors(prev => ({ ...prev, image: null }));
  };

  const handleAddVideo = () => {
    if (!newVideo) {
      setErrors(prev => ({ ...prev, video: 'Please enter a video URL' }));
      return;
    }
    if (!validateUrl(newVideo)) {
      setErrors(prev => ({ ...prev, video: 'Please enter a valid URL' }));
      return;
    }
    if (formData.promo_videos.length >= 2) {
      setErrors(prev => ({ ...prev, video: 'Maximum 2 promo videos allowed' }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      promo_videos: [...prev.promo_videos, newVideo]
    }));
    setNewVideo('');
    setErrors(prev => ({ ...prev, video: null }));
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      additional_images: prev.additional_images.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveVideo = (index) => {
    setFormData(prev => ({
      ...prev,
      promo_videos: prev.promo_videos.filter((_, i) => i !== index)
    }));
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
          <div className="space-y-4">
            {/* Basic Information */}
            <div className="space-y-4">
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
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 border rounded bg-white"
              />
            </div>

            {/* Media Links */}
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg space-y-4">
                <h3 className="font-medium text-[#8D493A]">Media Links</h3>
                
                <input
                  name="file_url"
                  value={formData.file_url}
                  onChange={handleInputChange}
                  placeholder="رابط الكتاب"
                  className="w-full p-2 border rounded"
                  required
                />

                <input
                  name="cover_image"
                  value={formData.cover_image}
                  onChange={handleInputChange}
                  placeholder="رابط صورة الغلاف"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Other Fields */}
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
          </div>
          
          <div className="p-4 bg-white rounded-lg space-y-4">
            <h3 className="font-medium text-[#8D493A]">Additional Images (Optional)</h3>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="bg-[#8D493A] text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
              <div className="space-y-2">
                {formData.additional_images.map((url, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
                    <span className="flex-1 truncate">{url}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Promo Videos Section */}
          <div className="p-4 bg-white rounded-lg space-y-4">
            <h3 className="font-medium text-[#8D493A]">Promo Videos (Optional)</h3>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newVideo}
                  onChange={(e) => setNewVideo(e.target.value)}
                  placeholder="Enter video URL"
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={handleAddVideo}
                  className="bg-[#8D493A] text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
              {errors.video && (
                <p className="text-red-500 text-sm">{errors.video}</p>
              )}
              <div className="space-y-2">
                {formData.promo_videos.map((url, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
                    <span className="flex-1 truncate">{url}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveVideo(index)}
                      className="text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

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