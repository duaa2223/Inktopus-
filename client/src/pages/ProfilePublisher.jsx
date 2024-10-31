// import React, { useState } from 'react';

// const UploadContentForm = () => {
//   const [contentData, setContentData] = useState({
//     title: '',
//     description: '',
//     college: '',
//     academicYear: '',
//     // باقي الحقول
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/publisher/createContent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(contentData),
//       });

//       if (response.ok) {
//         alert('Content uploaded successfully');
//       } else {
//         alert('Error uploading content');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={contentData.title}
//         onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
//         placeholder="Title"
//       />
//       {/* باقي الحقول */}
//       <button type="submit">Upload Content</button>
//     </form>
//   );
// };

// export default UploadContentForm;
/////////////////////////////////////////////////////
// import React, { useState } from 'react';

// const UploadContentForm = () => {
//   const [contentData, setContentData] = useState({
//     title: '',
//     titleAr: '',
//     author: '',
//     description: '',
//     cover_image: '',
//     price: '',
//     file_url: '',
//     content_type: '',
//     college: '',
//     academicYear: '',
//     specialization: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('66f6c93a26eba2ec51a20889', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // لضمان إرسال الكوكيز مع الطلب
//         body: JSON.stringify(contentData),
//       });

//       if (response.ok) {
//         alert('Content uploaded successfully');
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={contentData.title}
//         onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         value={contentData.titleAr}
//         onChange={(e) => setContentData({ ...contentData, titleAr: e.target.value })}
//         placeholder="Arabic Title"
//         required
//       />
//       <input
//         type="text"
//         value={contentData.author}
//         onChange={(e) => setContentData({ ...contentData, author: e.target.value })}
//         placeholder="Author"
//         required
//       />
//       <textarea
//         value={contentData.description}
//         onChange={(e) => setContentData({ ...contentData, description: e.target.value })}
//         placeholder="Description"
//         required
//       />
//       {/* <input
//         type="text"
//         value={contentData.cover_image}
//         onChange={(e) => setContentData({ ...contentData, cover_image: e.target.value })}
//         placeholder="Cover Image URL"
//       /> */}
//       <input
//         type="number"
//         value={contentData.price}
//         onChange={(e) => setContentData({ ...contentData, price: e.target.value })}
//         placeholder="Price"
//       />
//       {/* <input
//         type="text"
//         value={contentData.file_url}
//         onChange={(e) => setContentData({ ...contentData, file_url: e.target.value })}
//         placeholder="File URL"
//         required
//       /> */}
//       <input
//         type="text"
//         value={contentData.content_type}
//         onChange={(e) => setContentData({ ...contentData, content_type: e.target.value })}
//         placeholder="Content Type"
//         required
//       />
//       <input
//         type="text"
//         value={contentData.college}
//         onChange={(e) => setContentData({ ...contentData, college: e.target.value })}
//         placeholder="College ID"
//         required
//       />
//       <input
//         type="text"
//         value={contentData.academicYear}
//         onChange={(e) => setContentData({ ...contentData, academicYear: e.target.value })}
//         placeholder="Academic Year ID"
//         required
//       />
//       {/* <input
//         type="text"
//         value={contentData.specialization}
//         onChange={(e) => setContentData({ ...contentData, specialization: e.target.value })}
//         placeholder="Specialization ID"
//         required
//       /> */}
//       <button type="submit">Upload Content</button>
//     </form>
//   );
// };

// export default UploadContentForm;
//////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const PublishBookForm = () => {
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);

//   const fetchColleges = async () => {
//     const response = await axios.get('/api/colleges'); // يجب أن تحدد المسار الصحيح لواجهة برمجة التطبيقات
//     setColleges(response.data);
//     console.log(colleges); // يجب أن يسجل مصفوفة

//   };

//   const fetchAcademicYears = async (collegeId) => {
//     const response = await axios.get(`/api/academic-years/${collegeId}`);
//     setAcademicYears(response.data);
//   };

//   const fetchSpecializations = async (collegeId) => {
//     const response = await axios.get(`/api/specializations?college=${collegeId}`);
//     setSpecializations(response.data);
//   };

//   useEffect(() => {
//     fetchColleges();
//   }, []);

//   return (
//     <Formik
//       initialValues={{
//         title: '',
//         titleAr: '',
//         author: '',
//         description: '',
//         cover_image: '',
//         price: '',
//         file_url: '',
//         content_type: '',
//         college: '',
//         academic_year: '',
//         specialization: '', // هذا الاختيار اختياري
//       }}
//       onSubmit={async (values) => {
//         try {
//           await axios.post('/api/contents', values);
//           alert('Book published successfully!');
//         } catch (error) {
//           console.error('Error publishing book:', error);
//         }
//       }}
//     >
//       {({ setFieldValue }) => (
//         <Form>
//           <div>
//             <label>Title:</label>
//             <Field name="title" type="text" />
//             <ErrorMessage name="title" component="div" />
//           </div>

//           <div>
//             <label>Title (Arabic):</label>
//             <Field name="titleAr" type="text" />
//             <ErrorMessage name="titleAr" component="div" />
//           </div>

//           <div>
//             <label>Author:</label>
//             <Field name="author" type="text" />
//             <ErrorMessage name="author" component="div" />
//           </div>

//           <div>
//             <label>Description:</label>
//             <Field name="description" as="textarea" />
//             <ErrorMessage name="description" component="div" />
//           </div>

//           <div>
//             <label>Cover Image URL:</label>
//             <Field name="cover_image" type="text" />
//             <ErrorMessage name="cover_image" component="div" />
//           </div>

//           <div>
//             <label>Price:</label>
//             <Field name="price" type="number" />
//             <ErrorMessage name="price" component="div" />
//           </div>

//           <div>
//             <label>File URL:</label>
//             <Field name="file_url" type="text" />
//             <ErrorMessage name="file_url" component="div" />
//           </div>

//           <div>
//             <label>Content Type:</label>
//             <Field name="content_type" type="text" />
//             <ErrorMessage name="content_type" component="div" />
//           </div>

//           <div>
//             <label>College:</label>
//             <Field as="select" name="college" onChange={async (e) => {
//               const collegeId = e.target.value;
//               setFieldValue("college", collegeId);
//               await fetchAcademicYears(collegeId);
//               await fetchSpecializations(collegeId);
//             }}>
//               <option value="">Select College</option>
//               {colleges.map(college => (
//                 <option key={college._id} value={college._id}>{college.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="college" component="div" />
//           </div>

//           <div>
//             <label>Academic Year:</label>
//             <Field as="select" name="academic_year" onChange={(e) => setFieldValue("academic_year", e.target.value)}>
//               <option value="">Select Academic Year</option>
//               {academicYears.map(year => (
//                 <option key={year._id} value={year._id}>{year.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="academic_year" component="div" />
//           </div>

//           <div>
//             <label>Specialization (Optional):</label>
//             <Field as="select" name="specialization" onChange={(e) => setFieldValue("specialization", e.target.value)}>
//               <option value="">Select Specialization (Optional)</option>
//               {specializations.map(spec => (
//                 <option key={spec._id} value={spec._id}>{spec.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="specialization" component="div" />
//           </div>

//           <button type="submit">Publish Book</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default PublishBookForm;
////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const PublishBookForm = () => {
//   const [colleges, setColleges] = useState([]); // تأكد من أن القيم الابتدائية مصفوفة فارغة
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);

//   const fetchColleges = async () => {
//     try {
//       const response = await axios.get('/api/colleges');
//       setColleges(response.data);
//       console.log('Colleges:', response.data); // تأكد من أن البيانات المستلمة مصفوفة
//     } catch (error) {
//       console.error('Error fetching colleges:', error);
//     }
//   };

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await axios.get(`/api/academic-years/${collegeId}`);
//       setAcademicYears(response.data);
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   const fetchSpecializations = async (collegeId) => {
//     try {
//       const response = await axios.get(`/api/specializations?college=${collegeId}`);
//       setSpecializations(response.data);
//     } catch (error) {
//       console.error('Error fetching specializations:', error);
//     }
//   };

//   useEffect(() => {
//     fetchColleges();
//   }, []);

//   return (
//     <Formik
//       initialValues={{
//         title: '',
//         titleAr: '',
//         author: '',
//         description: '',
//         cover_image: '',
//         price: '',
//         file_url: '',
//         content_type: '',
//         college: '',
//         academic_year: '',
//         specialization: '', // هذا الاختيار اختياري
//       }}
//       onSubmit={async (values) => {
//         try {
//           await axios.post('/api/contents', values);
//           alert('Book published successfully!');
//         } catch (error) {
//           console.error('Error publishing book:', error);
//         }
//       }}
//     >
//       {({ setFieldValue }) => (
//         <Form>
//           <div>
//             <label>Title:</label>
//             <Field name="title" type="text" />
//             <ErrorMessage name="title" component="div" />
//           </div>

//           <div>
//             <label>Title (Arabic):</label>
//             <Field name="titleAr" type="text" />
//             <ErrorMessage name="titleAr" component="div" />
//           </div>

//           <div>
//             <label>Author:</label>
//             <Field name="author" type="text" />
//             <ErrorMessage name="author" component="div" />
//           </div>

//           <div>
//             <label>Description:</label>
//             <Field name="description" as="textarea" />
//             <ErrorMessage name="description" component="div" />
//           </div>

//           <div>
//             <label>Cover Image URL:</label>
//             <Field name="cover_image" type="text" />
//             <ErrorMessage name="cover_image" component="div" />
//           </div>

//           <div>
//             <label>Price:</label>
//             <Field name="price" type="number" />
//             <ErrorMessage name="price" component="div" />
//           </div>

//           <div>
//             <label>File URL:</label>
//             <Field name="file_url" type="text" />
//             <ErrorMessage name="file_url" component="div" />
//           </div>

//           <div>
//             <label>Content Type:</label>
//             <Field name="content_type" type="text" />
//             <ErrorMessage name="content_type" component="div" />
//           </div>

//           <div>
//             <label>College:</label>
//             <Field as="select" name="college" onChange={async (e) => {
//               const collegeId = e.target.value;
//               setFieldValue("college", collegeId);
//               await fetchAcademicYears(collegeId);
//               await fetchSpecializations(collegeId);
//             }}>
//               <option value="">Select College</option>
//               {Array.isArray(colleges) && colleges.map(college => ( // تحقق مما إذا كانت colleges مصفوفة
//                 <option key={college._id} value={college._id}>{college.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="college" component="div" />
//           </div>

//           <div>
//             <label>Academic Year:</label>
//             <Field as="select" name="academic_year" onChange={(e) => setFieldValue("academic_year", e.target.value)}>
//               <option value="">Select Academic Year</option>
//               {academicYears.map(year => (
//                 <option key={year._id} value={year._id}>{year.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="academic_year" component="div" />
//           </div>

//           <div>
//             <label>Specialization (Optional):</label>
//             <Field as="select" name="specialization" onChange={(e) => setFieldValue("specialization", e.target.value)}>
//               <option value="">Select Specialization (Optional)</option>
//               {specializations.map(spec => (
//                 <option key={spec._id} value={spec._id}>{spec.name}</option>
//               ))}
//             </Field>
//             <ErrorMessage name="specialization" component="div" />
//           </div>

//           <button type="submit">Publish Book</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default PublishBookForm;
/////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, Graduation, School } from 'lucide-react';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// const PublisherProfile = () => {
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//   const [contentForm, setContentForm] = useState({
//     title: '',
//     titleAr: '',
//     author: '',
//     author_info: '',
//     description: '',
//     price: 0,
//     content_type: 'book',
//   });

//   useEffect(() => {
//     // Fetch colleges from API
//     fetchColleges();
//   }, []);

//   const fetchColleges = async () => {
//     // Simulated API call
//     const response = await fetch('/api/colleges');
//     const data = await response.json();
//     setColleges(data);
//   };

//   const fetchAcademicYears = async (collegeId) => {
//     // Simulated API call
//     const response = await fetch(`/api/academic-years/${collegeId}`);
//     const data = await response.json();
//     setAcademicYears(data);
//   };

//   const fetchSpecializations = async (collegeId, yearId) => {
//     // Simulated API call
//     const response = await fetch(`/api/specializations/${collegeId}/${yearId}`);
//     const data = await response.json();
//     setSpecializations(data);
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setIsCollegeModalOpen(false);
//     fetchAcademicYears(college._id);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setIsYearModalOpen(false);
//     fetchSpecializations(selectedCollege._id, year._id);
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setContentForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log({
//       ...contentForm,
//       college: selectedCollege?._id,
//       academic_year: selectedYear?._id,
//       specialization: selectedSpecialization?._id,
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Publisher Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <Button onClick={() => setIsCollegeModalOpen(true)} className="h-24">
//           <School className="mr-2" />
//           {selectedCollege ? selectedCollege.name : 'Select College'}
//         </Button>
//         <Button onClick={() => setIsYearModalOpen(true)} className="h-24" disabled={!selectedCollege}>
//           <Graduation className="mr-2" />
//           {selectedYear ? selectedYear.name : 'Select Academic Year'}
//         </Button>
//         <Button onClick={() => setIsSpecModalOpen(true)} className="h-24" disabled={!selectedYear}>
//           <Book className="mr-2" />
//           {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input name="title" placeholder="Title" onChange={handleInputChange} required />
//         <Input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required />
//         <Input name="author" placeholder="Author" onChange={handleInputChange} required />
//         <Textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} />
//         <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input name="price" type="number" placeholder="Price" onChange={handleInputChange} required />
//         <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//           <option value="book">Book</option>
//           <option value="article">Article</option>
//         </select>
//         <Button type="submit" className="w-full">Submit Content</Button>
//       </form>

//       {/* College Selection Modal */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isCollegeModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isCollegeModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select College</CardHeader>
//           <CardContent>
//             {colleges.map(college => (
//               <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//                 {college.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Academic Year Selection Modal */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isYearModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isYearModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Academic Year</CardHeader>
//           <CardContent>
//             {academicYears.map(year => (
//               <Button key={year._id} onClick={() => handleYearSelect(year)} className="w-full mb-2">
//                 {year.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Specialization Selection Modal */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isSpecModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isSpecModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Specialization</CardHeader>
//           <CardContent>
//             {specializations.map(spec => (
//               <Button key={spec._id} onClick={() => handleSpecializationSelect(spec)} className="w-full mb-2">
//                 {spec.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default PublisherProfile;
///////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, School } from 'lucide-react'; // تأكد من أن Graduation متاحة في مكتبتك

// // مكونات بطاقة مبسطة
// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
// );
// const CardHeader = ({ children }) => <h2 className="text-xl font-bold mb-2">{children}</h2>;
// const CardContent = ({ children }) => <div>{children}</div>;

// // مكون زر مبسط
// const Button = ({ children, onClick, className, disabled }) => (
//   <button
//     onClick={onClick}
//     className={`bg-blue-500 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} ${className}`}
//     disabled={disabled}
//   >
//     {children}
//   </button>
// );

// // مكون إدخال مبسط
// const Input = ({ name, placeholder, onChange, required, type = 'text' }) => (
//   <input
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     required={required}
//     type={type}
//     className="w-full p-2 border rounded"
//   />
// );

// // مكون منطقة نص مبسط
// const Textarea = ({ name, placeholder, onChange }) => (
//   <textarea
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     className="w-full p-2 border rounded"
//   ></textarea>
// );

// const PublisherProfile = () => {
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  
//   // قم بتحميل الكليات والأعوام الأكاديمية والتخصصات من المصدر المناسب هنا
//   const colleges = []; // أضف بيانات الكليات هنا
//   const academicYears = []; // أضف بيانات الأعوام الأكاديمية هنا
//   const specializations = []; // أضف بيانات التخصصات هنا

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // معالجة الإرسال
//   };

//   const handleInputChange = (e) => {
//     // معالجة تغيير الإدخال
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setIsCollegeModalOpen(false);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setIsYearModalOpen(false);
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Publisher Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <Button onClick={() => setIsCollegeModalOpen(true)} className="h-24">
//           <School className="mr-2" />
//           {selectedCollege ? selectedCollege.name : 'Select College'}
//         </Button>
//         <Button onClick={() => setIsYearModalOpen(true)} className="h-24" disabled={!selectedCollege}>
//           {/* استخدم أيقونة بديلة إذا كانت Graduation غير متاحة */}
//           <span className="mr-2">{selectedYear ? selectedYear.name : 'Select Academic Year'}</span>
//         </Button>
//         <Button onClick={() => setIsSpecModalOpen(true)} className="h-24" disabled={!selectedYear}>
//           <Book className="mr-2" />
//           {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input name="title" placeholder="Title" onChange={handleInputChange} required />
//         <Input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required />
//         <Input name="author" placeholder="Author" onChange={handleInputChange} required />
//         <Textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} />
//         <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input name="price" type="number" placeholder="Price" onChange={handleInputChange} required />
//         <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//           <option value="book">Book</option>
//           <option value="article">Article</option>
//         </select>
//         <Button type="submit" className="w-full">Submit Content</Button>
//       </form>

//       {/* نافذة اختيار الكلية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isCollegeModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isCollegeModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select College</CardHeader>
//           <CardContent>
//             {colleges.map(college => (
//               <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//                 {college.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار السنة الأكاديمية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isYearModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isYearModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Academic Year</CardHeader>
//           <CardContent>
//             {academicYears.map(year => (
//               <Button key={year._id} onClick={() => handleYearSelect(year)} className="w-full mb-2">
//                 {year.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار التخصص */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isSpecModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isSpecModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Specialization</CardHeader>
//           <CardContent>
//             {specializations.map(spec => (
//               <Button key={spec._id} onClick={() => handleSpecializationSelect(spec)} className="w-full mb-2">
//                 {spec.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default PublisherProfile;
/////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, School } from 'lucide-react'; // تأكد من أن Graduation متاحة في مكتبتك
// import axios from 'axios'; // تأكد من أنك قمت بتثبيت axios

// // مكونات بطاقة مبسطة
// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
// );
// const CardHeader = ({ children }) => <h2 className="text-xl font-bold mb-2">{children}</h2>;
// const CardContent = ({ children }) => <div>{children}</div>;

// // مكون زر مبسط
// const Button = ({ children, onClick, className, disabled }) => (
//   <button
//     onClick={onClick}
//     className={`bg-blue-500 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} ${className}`}
//     disabled={disabled}
//   >
//     {children}
//   </button>
// );

// // مكون إدخال مبسط
// const Input = ({ name, placeholder, onChange, required, type = 'text' }) => (
//   <input
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     required={required}
//     type={type}
//     className="w-full p-2 border rounded"
//   />
// );

// // مكون منطقة نص مبسط
// const Textarea = ({ name, placeholder, onChange }) => (
//   <textarea
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     className="w-full p-2 border rounded"
//   ></textarea>
// );

// const PublisherProfile = () => {
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  
//   const [colleges, setColleges] = useState([]); // تأكد من أن القيمة الافتراضية مصفوفة  // تخزين بيانات الكليات
//   const [academicYears, setAcademicYears] = useState([]); // تخزين بيانات الأعوام الأكاديمية
//   const [specializations, setSpecializations] = useState([]); // تخزين بيانات التخصصات

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         console.log(response.data); // تحقق من البيانات
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };
//     {Array.isArray(colleges) && colleges.map(college => (
//       <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//         {college.name}
//       </Button>
//     ))}
        

//     const fetchAcademicYears = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/academic-years/:collegeId'); // استبدل هذا بالمسار الصحيح لواجهة برمجة التطبيقات
//         setAcademicYears(response.data);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//       }
//     };

//     const fetchSpecializations = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/specializations'); // استبدل هذا بالمسار الصحيح لواجهة برمجة التطبيقات
//         setSpecializations(response.data);
//       } catch (error) {
//         console.error('Error fetching specializations:', error);
//       }
//     };

//     fetchColleges();
//     fetchAcademicYears();
//     fetchSpecializations();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // معالجة الإرسال
//   };

//   const handleInputChange = (e) => {
//     // معالجة تغيير الإدخال
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setIsCollegeModalOpen(false);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setIsYearModalOpen(false);
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Publisher Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <Button onClick={() => setIsCollegeModalOpen(true)} className="h-24">
//           <School className="mr-2" />
//           {selectedCollege ? selectedCollege.name : 'Select College'}
//         </Button>
//         <Button onClick={() => setIsYearModalOpen(true)} className="h-24" disabled={!selectedCollege}>
//           <span className="mr-2">{selectedYear ? selectedYear.name : 'Select Academic Year'}</span>
//         </Button>
//         <Button onClick={() => setIsSpecModalOpen(true)} className="h-24" disabled={!selectedYear}>
//           <Book className="mr-2" />
//           {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input name="title" placeholder="Title" onChange={handleInputChange} required />
//         <Input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required />
//         <Input name="author" placeholder="Author" onChange={handleInputChange} required />
//         <Textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} />
//         <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input name="price" type="number" placeholder="Price" onChange={handleInputChange} required />
//         <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//           <option value="book">Book</option>
//           <option value="article">Article</option>
//         </select>
//         <Button type="submit" className="w-full">Submit Content</Button>
//       </form>

//       {/* نافذة اختيار الكلية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isCollegeModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isCollegeModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select College</CardHeader>
//           <CardContent>
//   {Array.isArray(colleges) && colleges.length > 0 ? (
//     colleges.map(college => (
//       <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//         {college.name}
//       </Button>
//     ))
//   ) : (
//     <p>No colleges available.</p> // نص بديل إذا لم تكن هناك كليات
//   )}
// </CardContent>

//         </Card>
//       </motion.div>

//       {/* نافذة اختيار السنة الأكاديمية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isYearModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isYearModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Academic Year</CardHeader>
//           <CardContent>
//             {academicYears.map(year => (
//               <Button key={year._id} onClick={() => handleYearSelect(year)} className="w-full mb-2">
//                 {year.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار التخصص */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isSpecModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isSpecModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Specialization</CardHeader>
//           <CardContent>
//             {specializations.map(spec => (
//               <Button key={spec._id} onClick={() => handleSpecializationSelect(spec)} className="w-full mb-2">
//                 {spec.name}
//               </Button>
//             ))}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default PublisherProfile;

////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, School } from 'lucide-react';
// import axios from 'axios';

// // مكونات بطاقة مبسطة
// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
// );
// const CardHeader = ({ children }) => <h2 className="text-xl font-bold mb-2">{children}</h2>;
// const CardContent = ({ children }) => <div>{children}</div>;

// // مكون زر مبسط
// const Button = ({ children, onClick, className, disabled }) => (
//   <button
//     onClick={onClick}
//     className={`bg-blue-500 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} ${className}`}
//     disabled={disabled}
//   >
//     {children}
//   </button>
// );

// // مكون إدخال مبسط
// const Input = ({ name, placeholder, onChange, required, type = 'text' }) => (
//   <input
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     required={required}
//     type={type}
//     className="w-full p-2 border rounded"
//   />
// );

// // مكون منطقة نص مبسطة
// const Textarea = ({ name, placeholder, onChange }) => (
//   <textarea
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     className="w-full p-2 border rounded"
//   ></textarea>
// );

// const PublisherProfile = () => {
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  
//   const [colleges, setColleges] = useState([]); 
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//       setAcademicYears(response.data);
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         console.log(response.data);
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     const fetchSpecializations = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/specializations');
//         setSpecializations(response.data);
//       } catch (error) {
//         console.error('Error fetching specializations:', error);
//       }
//     };

//     fetchColleges();
//     fetchSpecializations();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleInputChange = (e) => {
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setIsCollegeModalOpen(false);
//     fetchAcademicYears(college._id); // استدعاء fetchAcademicYears بعد اختيار الكلية
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setIsYearModalOpen(false);
    
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Publisher Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <Button onClick={() => setIsCollegeModalOpen(true)} className="h-24">
//           <School className="mr-2" />
//           {selectedCollege ? selectedCollege.name : 'Select College'}
//         </Button>
//         <Button onClick={() => setIsYearModalOpen(true)} className="h-24" disabled={!selectedCollege}>
//           <span className="mr-2">{selectedYear ? selectedYear.name : 'Select Academic Year'}</span>
//         </Button>
//         <Button onClick={() => setIsSpecModalOpen(true)} className="h-24" disabled={!selectedYear}>
//           <Book className="mr-2" />
//           {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input name="title" placeholder="Title" onChange={handleInputChange} required />
//         <Input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required />
//         <Input name="author" placeholder="Author" onChange={handleInputChange} required />
//         <Textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} />
//         <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input name="price" type="number" placeholder="Price" onChange={handleInputChange} required />
//         <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//           <option value="book">Book</option>
//           <option value="article">Article</option>
//         </select>
//         <Button type="submit" className="w-full">Submit Content</Button>
//       </form>

//       {/* نافذة اختيار الكلية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isCollegeModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isCollegeModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select College</CardHeader>
//           <CardContent>
//             {Array.isArray(colleges) && colleges.length > 0 ? (
//               colleges.map(college => (
//                 <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//                   {college.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No colleges available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار السنة الأكاديمية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isYearModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isYearModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Academic Year</CardHeader>
//           <CardContent>
//             {Array.isArray(academicYears) && academicYears.length > 0 ? (
//               academicYears.map(year => (
//                 <Button key={year._id} onClick={() => handleYearSelect(year)} className="w-full mb-2">
//                   {year.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No academic years available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار التخصص */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isSpecModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isSpecModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Specialization</CardHeader>
//           <CardContent>
//             {Array.isArray(specializations) && specializations.length > 0 ? (
//               specializations.map(spec => (
//                 <Button key={spec._id} onClick={() => handleSpecializationSelect(spec)} className="w-full mb-2">
//                   {spec.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No specializations available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default PublisherProfile;
////////////////////////////////////////////////////////////////// work old design 
// import  { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, School } from 'lucide-react';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // للتعامل مع الكوكيز


// // مكونات بطاقة مبسطة
// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
// );

// const CardHeader = ({ children }) => <h2 className="text-xl font-bold mb-2">{children}</h2>;

// const CardContent = ({ children }) => <div>{children}</div>;

// // مكون زر مبسط
// const Button = ({ children, onClick, className, disabled }) => (
//   <button
//     onClick={onClick}
//     className={`bg-blue-500 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} ${className}`}
//     disabled={disabled}
//   >
//     {children}
//   </button>
// );

// // مكون إدخال مبسط
// const Input = ({ name, placeholder, onChange, required, type = 'text' }) => (
//   <input
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     required={required}
//     type={type}
//     className="w-full p-2 border rounded"
//   />
// );

// // مكون منطقة نص مبسطة
// const Textarea = ({ name, placeholder, onChange }) => (
//   <textarea
//     name={name}
//     placeholder={placeholder}
//     onChange={onChange}
//     className="w-full p-2 border rounded"
//   ></textarea>
// );

// const PublisherProfile = () => {
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  
//   const [colleges, setColleges] = useState([]); 
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//       setAcademicYears(response.data);
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);
//   useEffect(() => {
//     const fetchSpecializations = async () => {
//         console.log("Selected College:", selectedCollege);
//         console.log("Selected Year:", selectedYear);
//         if (selectedCollege && selectedYear) {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/specializations/college/${selectedCollege._id}/year/${selectedYear._id}`);
//                 console.log('Fetched Specializations:', response.data); // للتحقق من البيانات المسترجعة
//                 setSpecializations(response.data);
//             } catch (error) {
//                 console.error('Error fetching specializations:', error);
//             }
//         }
//     };
//     fetchSpecializations();
// }, [selectedCollege, selectedYear]);



// const handleSubmit = async (e) => {
//     e.preventDefault();

//     // جمع البيانات من الإدخالات
//     const formData = {
//         title: e.target.title.value,
//         titleAr: e.target.titleAr.value,
//         author: e.target.author.value,
//         author_info: e.target.author_info.value,
//         description: e.target.description.value,
//         price: e.target.price.value,
//         content_type: e.target.content_type.value,
//         college: selectedCollege ? selectedCollege._id : null,
//         academic_year: selectedYear ? selectedYear._id : null,
//         specialization: selectedSpecialization ? selectedSpecialization._id : null,
//     };

//     // التحقق من البيانات المطلوبة
//     if (!formData.college || !formData.academic_year || !formData.specialization) {
//         alert('Please select College, Academic Year, and Specialization.');
//         return;
//     }

//     try {
//         // الحصول على التوكن من الكوكيز
//         const token = Cookies.get('token'); // assuming the token is saved under 'token'

//         // إرسال الطلب إلى الخادم باستخدام axios مع إضافة الـ headers و withCredentials
//         const response = await axios.post('http://localhost:5000/api/content/add', formData, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             withCredentials: true, // إضافة withCredentials هنا
//         });

//         console.log('Form submitted successfully:', response.data);
//         alert('Content submitted successfully!');
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('Failed to submit content. Please try again.');
//     }
// };




//   const handleInputChange = (e) => {
//     // قم بتنفيذ أي عمليات هنا عند تغيير الإدخال
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setIsCollegeModalOpen(false);
//     fetchAcademicYears(college._id); // استدعاء fetchAcademicYears بعد اختيار الكلية
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setIsYearModalOpen(false);
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Publisher Profile</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <Button onClick={() => setIsCollegeModalOpen(true)} className="h-24">
//           <School className="mr-2" />
//           {selectedCollege ? selectedCollege.name : 'Select College'}
//         </Button>
//         <Button onClick={() => setIsYearModalOpen(true)} className="h-24" disabled={!selectedCollege}>
//           <span className="mr-2">{selectedYear ? selectedYear.name : 'Select Academic Year'}</span>
//         </Button>
//         <Button onClick={() => setIsSpecModalOpen(true)} className="h-24" disabled={!selectedYear}>
//           <Book className="mr-2" />
//           {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
//         </Button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Input name="title" placeholder="Title" onChange={handleInputChange} required />
//         <Input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required />
//         <Input name="author" placeholder="Author" onChange={handleInputChange} required />
//         <Textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} />
//         <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input name="price" type="number" placeholder="Price" onChange={handleInputChange} required />
//         <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//           <option value="book">Book</option>
//           <option value="article">Article</option>
//         </select>
//         <Button type="submit" className="w-full">Submit Content</Button>
//       </form>

//       {/* نافذة اختيار الكلية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isCollegeModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isCollegeModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select College</CardHeader>
//           <CardContent>
//             {Array.isArray(colleges) && colleges.length > 0 ? (
//               colleges.map(college => (
//                 <Button key={college._id} onClick={() => handleCollegeSelect(college)} className="w-full mb-2">
//                   {college.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No colleges available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار السنة الأكاديمية */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isYearModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isYearModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Academic Year</CardHeader>
//           <CardContent>
//             {Array.isArray(academicYears) && academicYears.length > 0 ? (
//               academicYears.map(year => (
//                 <Button key={year._id} onClick={() => handleYearSelect(year)} className="w-full mb-2">
//                   {year.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No academic years available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* نافذة اختيار التخصص */}
//       <motion.div
//         className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isSpecModalOpen ? '' : 'hidden'}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isSpecModalOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card className="w-96 max-h-[80vh] overflow-y-auto">
//           <CardHeader>Select Specialization</CardHeader>
//           <CardContent>
//             {Array.isArray(specializations) && specializations.length > 0 ? (
//               specializations.map(spec => (
//                 <Button key={spec._id} onClick={() => handleSpecializationSelect(spec)} className="w-full mb-2">
//                   {spec.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No specializations available.</p>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default PublisherProfile;
///////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, User, Mail, Pen, Upload, FileText, Eye, Download, Plus } from 'lucide-react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Swal from 'sweetalert2';
// import Button from '@mui/material/Button'; // استيراد Button من Material-UI

// // Simplified components (Card, Button, Input, Textarea) remain the same

// const PublisherProfile = () => {
//   const [user, setUser] = useState(null);
//   const [contents, setContents] = useState([]);
//   const [isContentFormOpen, setIsContentFormOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);

//   useEffect(() => {
//     fetchUserData();
//     fetchUserContents();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/user/profile', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const fetchUserContents = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/content/user', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContents(response.data);
//     } catch (error) {
//       console.error('Error fetching user contents:', error);
//     }
//   };

//   const handleProfileImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('profileImage', file);
//       try {
//         const token = Cookies.get('token');
//         await axios.post('http://localhost:5000/api/user/upload-profile-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setProfileImage(URL.createObjectURL(file));
//         Swal.fire('Success', 'Profile image uploaded successfully', 'success');
//       } catch (error) {
//         console.error('Error uploading profile image:', error);
//         Swal.fire('Error', 'Failed to upload profile image', 'error');
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-[#8D493A]">Publisher Profile</h1>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfileImageUpload}
//               className="hidden"
//               id="profile-image-upload"
//             />
//             <label htmlFor="profile-image-upload" className="cursor-pointer">
//               <div className="w-24 h-24 rounded-full bg-[#DFD3C3] flex items-center justify-center overflow-hidden">
//                 {profileImage || user?.profilePicture ? (
//                   <img src={profileImage || user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <User size={40} className="text-[#8D493A]" />
//                 )}
//               </div>
//               <div className="absolute bottom-0 right-0 bg-[#D0B8A8] rounded-full p-1">
//                 <Upload size={16} className="text-[#8D493A]" />
//               </div>
//             </label>
//           </motion.div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <User className="mr-2" /> {user?.username}
//             </p>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <Mail className="mr-2" /> {user?.email}
//             </p>
//             <p className="flex items-center text-[#8D493A]">
//               <Pen className="mr-2" /> {user?.yearsOfExperience} years of experience
//             </p>
//           </div>
//           <div>
//             <p className="text-[#8D493A] mb-2">
//               <strong>Bio:</strong> {user?.bio || 'No bio available'}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-[#8D493A]">Published Content</h2>
//           <Button
//             onClick={() => setIsContentFormOpen(true)}
//             className="bg-[#D0B8A8] text-[#8D493A] hover:bg-[#8D493A] hover:text-[#F8EDE3]"
//           >
//             <Plus size={20} className="mr-2" /> Add New Content
//           </Button>
//         </div>
//         {contents.map((content) => (
//           <motion.div
//             key={content._id}
//             whileHover={{ scale: 1.02 }}
//             className="bg-[#DFD3C3] rounded-lg p-4 mb-4 shadow-md"
//           >
//             <h3 className="text-xl font-semibold text-[#8D493A] mb-2">{content.title}</h3>
//             <p className="text-[#8D493A] mb-2">{content.description}</p>
//             <div className="flex justify-between items-center text-sm text-[#8D493A]">
//               <span className="flex items-center">
//                 <Eye size={16} className="mr-1" /> {content.views} views
//               </span>
//               <span className="flex items-center">
//                 <Download size={16} className="mr-1" /> {content.downloads} downloads
//               </span>
//               <span>{content.content_type}</span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {isContentFormOpen && (
//         <ContentSubmissionForm
//           isOpen={isContentFormOpen}
//           onClose={() => setIsContentFormOpen(false)}
//           onSubmitSuccess={() => {
//             setIsContentFormOpen(false);
//             fetchUserContents();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// const ContentSubmissionForm = ({ isOpen, onClose, onSubmitSuccess }) => {
//   // ... (existing state and functions)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all fields
//     if (!title || !titleAr || !author || !description || !price || !content_type || !selectedCollege || !selectedYear || !selectedSpecialization) {
//       Swal.fire('Error', 'Please fill in all required fields', 'error');
//       return;
//     }

//     // ... (existing form submission logic)

//     try {
//       // ... (existing axios post request)

//       Swal.fire('Success', 'Content submitted successfully!', 'success');
//       onSubmitSuccess();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       Swal.fire('Error', 'Failed to submit content. Please try again.', 'error');
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
//         className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//       >
//         <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Add New Content</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* ... (existing form fields) */}
          
//           {/* New fields */}
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="cover-image-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#D0B8A8] border-dashed rounded-lg cursor-pointer bg-[#DFD3C3] hover:bg-[#D0B8A8]">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <Upload className="w-10 h-10 mb-3 text-[#8D493A]" />
//                 <p className="mb-2 text-sm text-[#8D493A]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                 <p className="text-xs text-[#8D493A]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//               </div>
//               <input id="cover-image-upload" type="file" className="hidden" />
//             </label>
//           </div>
          
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#D0B8A8] border-dashed rounded-lg cursor-pointer bg-[#DFD3C3] hover:bg-[#D0B8A8]">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <FileText className="w-10 h-10 mb-3 text-[#8D493A]" />
//                 <p className="mb-2 text-sm text-[#8D493A]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                 <p className="text-xs text-[#8D493A]">PDF, EPUB, or MOBI (MAX. 100MB)</p>
//               </div>
//               <input id="file-upload" type="file" className="hidden" />
//             </label>
//           </div>

//           <Button type="submit" className="w-full bg-[#8D493A] text-[#F8EDE3] hover:bg-[#D0B8A8] hover:text-[#8D493A]">
//             Submit Content
//           </Button>
//         </form>
//         <Button onClick={onClose} className="mt-4 w-full bg-[#DFD3C3] text-[#8D493A] hover:bg-[#D0B8A8]">
//           Close
//         </Button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PublisherProfile;
/////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, User, Mail, Pen, Upload, FileText, Eye, Download, Plus, School } from 'lucide-react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import Swal from 'sweetalert2';

// const Button = ({ children, onClick, className }) => (
//   <button
//     onClick={onClick}
//     className={`px-4 py-2 rounded ${className}`}
//   >
//     {children}
//   </button>
// );

// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
//     {children}
//   </div>
// );
// const PublisherProfile = () => {
//   const [user, setUser] = useState(null);
//   const [contents, setContents] = useState([]);
//   const [isContentFormOpen, setIsContentFormOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   // const [colleges, setColleges] = useState([]);
//   // const [academicYears, setAcademicYears] = useState([]);
//   // const [specializations, setSpecializations] = useState([]);
//  // الحالة لتتبع الفتح/الإغلاق للنوافذ المنبثقة
//  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//  const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
//  const [selectedCollege, setSelectedCollege] = useState(null);
//  const [selectedYear, setSelectedYear] = useState(null);
//  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

//  // الحالة لتخزين البيانات المسترجعة
//  const [colleges, setColleges] = useState([]); 
//  const [academicYears, setAcademicYears] = useState([]);
//  const [specializations, setSpecializations] = useState([]);

//   useEffect(() => {
//     fetchUserData();
//     fetchUserContents();
//     fetchColleges();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/user/profile', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const fetchUserContents = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/content/user', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContents(response.data);
//     } catch (error) {
//       console.error('Error fetching user contents:', error);
//     }
//   };

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

//   const handleProfileImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('profileImage', file);
//       try {
//         const token = Cookies.get('token');
//         await axios.post('http://localhost:5000/api/user/upload-profile-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setProfileImage(URL.createObjectURL(file));
//         Swal.fire('Success', 'Profile image uploaded successfully', 'success');
//       } catch (error) {
//         console.error('Error uploading profile image:', error);
//         Swal.fire('Error', 'Failed to upload profile image', 'error');
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-[#8D493A]">Publisher Profile</h1>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfileImageUpload}
//               className="hidden"
//               id="profile-image-upload"
//             />
//             <label htmlFor="profile-image-upload" className="cursor-pointer">
//               <div className="w-24 h-24 rounded-full bg-[#DFD3C3] flex items-center justify-center overflow-hidden">
//                 {profileImage || user?.profilePicture ? (
//                   <img src={profileImage || user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <User size={40} className="text-[#8D493A]" />
//                 )}
//               </div>
//               <div className="absolute bottom-0 right-0 bg-[#D0B8A8] rounded-full p-1">
//                 <Upload size={16} className="text-[#8D493A]" />
//               </div>
//             </label>
//           </motion.div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <User className="mr-2" /> {user?.username}
//             </p>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <Mail className="mr-2" /> {user?.email}
//             </p>
//             <p className="flex items-center text-[#8D493A]">
//               <Pen className="mr-2" /> {user?.yearsOfExperience} years of experience
//             </p>
//           </div>
//           <div>
//             <p className="text-[#8D493A] mb-2">
//               <strong>Bio:</strong> {user?.bio || 'No bio available'}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-[#8D493A]">Published Content</h2>
//           <Button
//             onClick={() => setIsContentFormOpen(true)}
//             className="bg-[#D0B8A8] text-[#8D493A] hover:bg-[#8D493A] hover:text-[#F8EDE3]"
//           >
//             <Plus size={20} className="mr-2" /> Add New Content
//           </Button>
//         </div>
//         {contents.map((content) => (
//           <motion.div
//             key={content._id}
//             whileHover={{ scale: 1.02 }}
//             className="bg-[#DFD3C3] rounded-lg p-4 mb-4 shadow-md"
//           >
//             <h3 className="text-xl font-semibold text-[#8D493A] mb-2">{content.title}</h3>
//             <p className="text-[#8D493A] mb-2">{content.description}</p>
//             <div className="flex justify-between items-center text-sm text-[#8D493A]">
//               <span className="flex items-center">
//                 <Eye size={16} className="mr-1" /> {content.views} views
//               </span>
//               <span className="flex items-center">
//                 <Download size={16} className="mr-1" /> {content.downloads} downloads
//               </span>
//               <span>{content.content_type}</span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {isContentFormOpen && (
//         <ContentSubmissionForm
//           isOpen={isContentFormOpen}
//           onClose={() => setIsContentFormOpen(false)}
//           onSubmitSuccess={() => {
//             setIsContentFormOpen(false);
//             fetchUserContents();
//           }}
//           colleges={colleges}
//           fetchAcademicYears={fetchAcademicYears}
//           fetchSpecializations={fetchSpecializations}
//         />
//       )}
//     </div>
//   );
// };

// const ContentSubmissionForm = ({ isOpen, onClose, onSubmitSuccess, colleges, fetchAcademicYears, fetchSpecializations }) => {
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
//   });
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [coverImage, setCoverImage] = useState(null);
//   const [contentFile, setContentFile] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleCollegeChange = async (e) => {
//     const collegeId = e.target.value;
//     setFormData(prevState => ({
//       ...prevState,
//       college: collegeId,
//       academic_year: '',
//       specialization: ''
//     }));
//     const years = await fetchAcademicYears(collegeId);
//     setAcademicYears(years);
//   };

//   const handleYearChange = async (e) => {
//     const yearId = e.target.value;
//     setFormData(prevState => ({
//       ...prevState,
//       academic_year: yearId,
//       specialization: ''
//     }));
//     const specs = await fetchSpecializations(formData.college, yearId);
//     setSpecializations(specs);
//   };

//   const handleFileUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (type === 'cover') {
//         setCoverImage(file);
//       } else if (type === 'content') {
//         setContentFile(file);
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.title || !formData.titleAr || !formData.author || !formData.description || !formData.price || !formData.content_type || !formData.college || !formData.academic_year || !formData.specialization) {
//       Swal.fire('Error', 'Please fill in all required fields', 'error');
//       return;
//     }

//     const submitFormData = new FormData();
//     Object.keys(formData).forEach(key => submitFormData.append(key, formData[key]));
//     if (coverImage) submitFormData.append('cover_image', coverImage);
//     if (contentFile) submitFormData.append('content_file', contentFile);

//     try {
//       const token = Cookies.get('token');
//       await axios.post('http://localhost:5000/api/content/add', submitFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`
//         }
//       });

//       Swal.fire('Success', 'Content submitted successfully!', 'success');
//       onSubmitSuccess();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       Swal.fire('Error', 'Failed to submit content. Please try again.', 'error');
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
//         className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//       >
//         <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Add New Content</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="title" placeholder="Title" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <input name="author" placeholder="Author" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} className="w-full p-2 border rounded"></textarea>
//           <textarea name="description" placeholder="Description" onChange={handleInputChange} required className="w-full p-2 border rounded"></textarea>
//           <input name="price" type="number" placeholder="Price" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//             <option value="book">Book</option>
//             <option value="article">Article</option>
//           </select>
//           <select name="college" onChange={handleCollegeChange} required className="w-full p-2 border rounded">
//             <option value="">Select College</option>
//             {colleges.map(college => (
//               <option key={college._id} value={college._id}>{college.name}</option>
//             ))}
//           </select>
//           <select name="academic_year" onChange={handleYearChange} required className="w-full p-2 border rounded">
//             <option value="">Select Academic Year</option>
//             {academicYears.map(year => (
//               <option key={year._id} value={year._id}>{year.name}</option>
//             ))}
//           </select>
//           <select name="specialization" onChange={handleInputChange} required className="w-full p-2 border rounded">
//             <option value="">Select Specialization</option>
//             {specializations.map(spec => (
//               <option key={spec._id} value={spec._id}>{spec.name}</option>
//             ))}
//           </select>
          
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="cover-image-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#D0B8A8] border-dashed rounded-lg cursor-pointer bg-[#DFD3C3] hover:bg-[#D0B8A8]">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <Upload className="w-10 h-10 mb-3 text-[#8D493A]" />
//                 <p className="mb-2 text-sm text-[#8D493A]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                 <p className="text-xs text-[#8D493A]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//               </div>
//               <input id="cover-image-upload" type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'cover')} />
//             </label>
//           </div>
          
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#D0B8A8] border-dashed rounded-lg cursor-pointer bg-[#DFD3C3] hover:bg-[#D0B8A8]">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <FileText className="w-10 h-10 mb-3 text-[#8D493A]" />
//                 <p className="mb-2 text-sm text-[#8D493A]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                 <p className="text-xs text-[#8D493A]">PDF, EPUB, or MOBI (MAX. 100MB)</p>
//               </div>
//               <input id="file-upload" type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'content')} />
//             </label>
//           </div>

//           <Button type="submit" className="w-full bg-[#8D493A] text-[#F8EDE3] hover:bg-[#D0B8A8] hover:text-[#8D493A]">
//             Submit Content
//           </Button>
//         </form>
//         <Button onClick={onClose} className="mt-4 w-full bg-[#DFD3C3] text-[#8D493A] hover:bg-[#D0B8A8]">
//           Close
//         </Button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PublisherProfile;
/////////////////////////////////////////////////////////////////////////////////new design not work
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Book, User, Mail, Pen, Upload, FileText, Eye, Download, Plus, School, CheckCircle } from 'lucide-react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// const Button = ({ children, onClick, className, disabled }) => (
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={onClick}
//     className={`px-4 py-2 rounded ${className}`}
//     disabled={disabled}
//   >
//     {children}
//   </motion.button>
// );

// const Card = ({ children, className }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     className={`bg-white shadow-md rounded-lg p-4 ${className}`}
//   >
//     {children}
//   </motion.div>
// );

// const PublisherProfile = () => {
//   const [user, setUser] = useState(null);
//   const [contents, setContents] = useState([]);
//   const [isContentFormOpen, setIsContentFormOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedSpecialization, setSelectedSpecialization] = useState(null);
//   const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
//   const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//   const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

//   useEffect(() => {
//     fetchUserData();
//     fetchUserContents();
//     fetchColleges();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/user/profile', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       Swal.fire('Error', 'Failed to fetch user data', 'error');
//     }
//   };

//   const fetchUserContents = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.get('http://localhost:5000/api/content/user', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setContents(response.data);
//     } catch (error) {
//       console.error('Error fetching user contents:', error);
//       Swal.fire('Error', 'Failed to fetch user contents', 'error');
//     }
//   };

//   const fetchColleges = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/colleges');
//       setColleges(response.data);
//     } catch (error) {
//       console.error('Error fetching colleges:', error);
//       Swal.fire('Error', 'Failed to fetch colleges', 'error');
//     }
//   };

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//       throw error;
//     }
//   };

//   const fetchSpecializations = async (collegeId, yearId) => {
//     try {
//       console.log('جاري إرسال طلب للحصول على التخصصات:', collegeId, yearId);
//       const response = await axios.get(`http://localhost:5000/api/specializations/college/${collegeId}/year/${yearId}`);
//       console.log('الاستجابة من الخادم:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('خطأ في جلب التخصصات:', error);
//       throw error;
//     }
//   };


//   const handleProfileImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('profileImage', file);
//       try {
//         const token = Cookies.get('token');
//         await axios.post('http://localhost:5000/api/user/upload-profile-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setProfileImage(URL.createObjectURL(file));
//         Swal.fire('Success', 'Profile image uploaded successfully', 'success');
//       } catch (error) {
//         console.error('Error uploading profile image:', error);
//         Swal.fire('Error', 'Failed to upload profile image', 'error');
//       }
//     }
//   };

//   const handleCollegeSelect = (college) => {
//     setSelectedCollege(college);
//     setSelectedYear(null);
//     setSelectedSpecialization(null);
//     setIsCollegeModalOpen(false);
//     fetchAcademicYears(college._id);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     setSelectedSpecialization(null);
//     setIsYearModalOpen(false);
//     fetchSpecializations(selectedCollege._id, year._id);
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-[#8D493A]">Publisher Profile</h1>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfileImageUpload}
//               className="hidden"
//               id="profile-image-upload"
//             />
//             <label htmlFor="profile-image-upload" className="cursor-pointer">
//               <div className="w-24 h-24 rounded-full bg-[#DFD3C3] flex items-center justify-center overflow-hidden">
//                 {profileImage || user?.profilePicture ? (
//                   <img src={profileImage || user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <User size={40} className="text-[#8D493A]" />
//                 )}
//               </div>
//               <div className="absolute bottom-0 right-0 bg-[#D0B8A8] rounded-full p-1">
//                 <Upload size={16} className="text-[#8D493A]" />
//               </div>
//             </label>
//           </motion.div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <User className="mr-2" /> {user?.username}
//             </p>
//             <p className="flex items-center text-[#8D493A] mb-2">
//               <Mail className="mr-2" /> {user?.email}
//             </p>
//             <p className="flex items-center text-[#8D493A]">
//               <Pen className="mr-2" /> {user?.yearsOfExperience} years of experience
//             </p>
//           </div>
//           <div>
//             <p className="text-[#8D493A] mb-2">
//               <strong>Bio:</strong> {user?.bio || 'No bio available'}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="bg-[#F8EDE3] rounded-lg shadow-lg p-6 mb-8"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-[#8D493A]">Published Content</h2>
//           <Button
//             onClick={() => setIsContentFormOpen(true)}
//             className="bg-[#D0B8A8] text-[#8D493A] hover:bg-[#8D493A] hover:text-[#F8EDE3]"
//           >
//             <Plus size={20} className="mr-2" /> Add New Content
//           </Button>
//         </div>
//         <AnimatePresence>
//           {contents.map((content) => (
//             <motion.div
//               key={content._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-[#DFD3C3] rounded-lg p-4 mb-4 shadow-md"
//             >
//               <h3 className="text-xl font-semibold text-[#8D493A] mb-2">{content.title}</h3>
//               <p className="text-[#8D493A] mb-2">{content.description}</p>
//               <div className="flex justify-between items-center text-sm text-[#8D493A]">
//                 <span className="flex items-center">
//                   <Eye size={16} className="mr-1" /> {content.views} views
//                 </span>
//                 <span className="flex items-center">
//                   <Download size={16} className="mr-1" /> {content.downloads} downloads
//                 </span>
//                 <span>{content.content_type}</span>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {isContentFormOpen && (
//         <ContentSubmissionForm
//           isOpen={isContentFormOpen}
//           onClose={() => setIsContentFormOpen(false)}
//           onSubmitSuccess={() => {
//             setIsContentFormOpen(false);
//             fetchUserContents();
//           }}
//           colleges={colleges}
//           fetchAcademicYears={fetchAcademicYears}
//           fetchSpecializations={fetchSpecializations}
//           selectedCollege={selectedCollege}
//           selectedYear={selectedYear}
//           selectedSpecialization={selectedSpecialization}
//           setSelectedCollege={setSelectedCollege}
//           setSelectedYear={setSelectedYear}
//           setSelectedSpecialization={setSelectedSpecialization}
//           isCollegeModalOpen={isCollegeModalOpen}
//           setIsCollegeModalOpen={setIsCollegeModalOpen}
//           isYearModalOpen={isYearModalOpen}
//           setIsYearModalOpen={setIsYearModalOpen}
//           isSpecModalOpen={isSpecModalOpen}
//           setIsSpecModalOpen={setIsSpecModalOpen}
//           handleCollegeSelect={handleCollegeSelect}
//           handleYearSelect={handleYearSelect}
//           handleSpecializationSelect={handleSpecializationSelect}
//         />
//       )}
//     </div>
//   );
// };

// const ContentSubmissionForm = ({ 
//   isOpen, 
//   onClose, 
//   onSubmitSuccess, 
//   colleges, 
//   fetchAcademicYears, 
//   fetchSpecializations,
//   selectedCollege,
//   selectedYear,
//   selectedSpecialization,
//   setSelectedCollege,
//   setSelectedYear,
//   setSelectedSpecialization,
//   isCollegeModalOpen,
//   setIsCollegeModalOpen,
//   isYearModalOpen,
//   setIsYearModalOpen,
//   isSpecModalOpen,
//   setIsSpecModalOpen,
// }) => {
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     titleAr: '',
//     author: '',
//     author_info: '',
//     description: '',
//     price: '',
//     content_type: 'book',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleCollegeSelect = async (college) => {
//     setSelectedCollege(college);
//     setSelectedYear(null);
//     setSelectedSpecialization(null);
//     setIsCollegeModalOpen(false);
    
//     try {
//       const years = await fetchAcademicYears(college._id);
//       setAcademicYears(years);
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//       Swal.fire('Error', 'Failed to fetch academic years', 'error');
//     }
//   };

//   const handleYearSelect = async (year) => {
//     setSelectedYear(year);
//     setSelectedSpecialization(null);
//     setIsYearModalOpen(false);
    
//     if (!selectedCollege) {
//       console.error('No college selected');
//       Swal.fire('Error', 'Please select a college first', 'error');
//       return;
//     }

//     try {
//       const specs = await fetchSpecializations(selectedCollege._id, year._id);
//       setSpecializations(specs);
//     } catch (error) {
//       console.error('Error fetching specializations:', error);
//       Swal.fire('Error', 'Failed to fetch specializations', 'error');
//     }
//   };

//   const handleSpecializationSelect = (spec) => {
//     setSelectedSpecialization(spec);
//     setIsSpecModalOpen(false);
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     console.log('Form Data:', formData);
//     console.log('Selected College:', selectedCollege);
//     console.log('Selected Year:', selectedYear);
//     console.log('Selected Specialization:', selectedSpecialization);
  
//     if (!formData.title || !formData.titleAr || !formData.author || !formData.description || !formData.price || !formData.content_type) {
//       Swal.fire('Error', 'Please fill in all required fields', 'error');
//       return;
//     }
  
//     // if (!selectedCollege || !selectedYear || !selectedSpecialization) {
//     //   Swal.fire('Error', 'Please select college, year, and specialization', 'error');
//     //   return;
//     // }
  
//     const submitFormData = new FormData();
//     Object.keys(formData).forEach(key => submitFormData.append(key, formData[key]));
//     submitFormData.append('college', selectedCollege._id);
//     submitFormData.append('academic_year', selectedYear._id);
//     submitFormData.append('specialization', selectedSpecialization._id);
  
//     // Log the final form data
//     for (let [key, value] of submitFormData.entries()) {
//       console.log(key, value);
//     }
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/content/add', submitFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true,
//       });
  
//       console.log('Server Response:', response.data);
  
//       Swal.fire('Success', 'Content submitted successfully!', 'success');
//       onSubmitSuccess();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       console.error('Error response:', error.response?.data);
//       Swal.fire('Error', error.response?.data?.message || 'Failed to submit content. Please try again.', 'error');
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
//         className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//       >
//         <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Add New Content</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="title" placeholder="Title" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <input name="titleAr" placeholder="العنوان بالعربية" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <input name="author" placeholder="Author" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <textarea name="author_info" placeholder="Author Info" onChange={handleInputChange} className="w-full p-2 border rounded"></textarea>
//           <textarea name="description" placeholder="Description" onChange={handleInputChange} required className="w-full p-2 border rounded"></textarea>
//           <input name="price" type="number" placeholder="Price" onChange={handleInputChange} required className="w-full p-2 border rounded" />
//           <select name="content_type" onChange={handleInputChange} className="w-full p-2 border rounded">
//             <option value="book">Book</option>
//             <option value="article">Article</option>
//           </select>
          
//           <SelectionBox
//             title="Select College"
//             selectedItem={selectedCollege}
//             onOpenModal={() => setIsCollegeModalOpen(true)}
//             disabled={false}
//           />
//           <SelectionBox
//             title="Select Academic Year"
//             selectedItem={selectedYear}
//             onOpenModal={() => setIsYearModalOpen(true)}
//             disabled={!selectedCollege}
//           />
//           <SelectionBox
//             title="Select Specialization"
//             selectedItem={selectedSpecialization}
//             onOpenModal={() => setIsSpecModalOpen(true)}
//             disabled={!selectedYear}
//           />
// {/*           
//           <FileUploadBox
//             id="cover-image-upload"
//             icon={<Upload className="w-10 h-10 mb-3 text-[#8D493A]" />}
//             title="Upload Cover Image"
//             description="SVG, PNG, JPG or GIF (MAX. 800x400px)"
//             onChange={(e) => handleFileUpload(e, 'cover')}
//           />
          
//           <FileUploadBox
//             id="file-upload"
//             icon={<FileText className="w-10 h-10 mb-3 text-[#8D493A]" />}
//             title="Upload Content File"
//             description="PDF, EPUB, or MOBI (MAX. 100MB)"
//             onChange={(e) => handleFileUpload(e, 'content')}
//           /> */}

//           <Button type="submit" className="w-full bg-[#8D493A] text-[#F8EDE3] hover:bg-[#D0B8A8] hover:text-[#8D493A]">
//             Submit Content
//           </Button>
//         </form>
//         <Button onClick={onClose} className="mt-4 w-full bg-[#DFD3C3] text-[#8D493A] hover:bg-[#D0B8A8]">
//           Close
//         </Button>
//       </motion.div>

//       <SelectionModal
//         isOpen={isCollegeModalOpen}
//         onClose={() => setIsCollegeModalOpen(false)}
//         title="اختر الكلية"
//         items={colleges || []}
//         onSelect={handleCollegeSelect}
//       />
//       <SelectionModal
//         isOpen={isYearModalOpen}
//         onClose={() => setIsYearModalOpen(false)}
//         title="اختر السنة الدراسية"
//         items={academicYears}
//         onSelect={handleYearSelect}
//       />
//       <SelectionModal
//         isOpen={isSpecModalOpen}
//         onClose={() => setIsSpecModalOpen(false)}
//         title="اختر التخصص"
//         items={specializations}
//         onSelect={handleSpecializationSelect}
//       />
//     </motion.div>
//   );
// };

// const SelectionBox = ({ title, selectedItem, onOpenModal, disabled }) => (
//   <motion.button
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     onClick={onOpenModal}
//     disabled={disabled}
//     className={`w-full p-4 text-left bg-white border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out ${
//       disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
//     }`}
//   >
//     {selectedItem ? (
//       <div className="flex items-center">
//         <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//         <span>{selectedItem.name}</span>
//       </div>
//     ) : (
//       <span className="text-gray-500">{title}</span>
//     )}
//   </motion.button>
// );

// const SelectionModal = ({ isOpen, onClose, title, items = [], onSelect }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           className="bg-white rounded-lg p-6 w-full max-w-md"
//         >
//           <h3 className="text-xl font-semibold mb-4">{title}</h3>
//           <div className="max-h-60 overflow-y-auto">
//             {items.length > 0 ? (
//               items.map((item) => (
//                 <motion.button
//                   key={item._id}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => onSelect(item)}
//                   className="w-full p-2 mb-2 text-left bg-gray-100 hover:bg-gray-200 rounded transition duration-150 ease-in-out"
//                 >
//                   {item.name}
//                 </motion.button>
//               ))
//             ) : (
//               <p className="text-gray-500">No items available</p>
//             )}
//           </div>
//           <Button onClick={onClose} className="mt-4 w-full bg-red-500 text-white hover:bg-red-600">
//             Close
//           </Button>
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// // const FileUploadBox = ({ id, icon, title, description, onChange }) => (
// //   <div className="flex items-center justify-center w-full">
// //     <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#D0B8A8] border-dashed rounded-lg cursor-pointer bg-[#DFD3C3] hover:bg-[#D0B8A8]">
// //       <div className="flex flex-col items-center justify-center pt-5 pb-6">
// //         {icon}
// //         <p className="mb-2 text-sm text-[#8D493A]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
// //         <p className="text-xs text-[#8D493A]">{description}</p>
// //       </div>
// //       <input id={id} type="file" className="hidden" onChange={onChange} />
// //     </label>
// //   </div>
// // );

// export default PublisherProfile;
///////////////////////////////////////////////////////////////////////////////////////////////
// import  { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Book, Mail, Pen } from 'lucide-react';
// import axios from 'axios';
// import AddContentForm from '../components/ContentForm';

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);
//   const [showAddContent, setShowAddContent] = useState(false);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/users/profile', { withCredentials: true });
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (!user) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4 bg-[#F8EDE3]">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#DFD3C3] rounded-lg shadow-lg p-6 mb-6"
//       >
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-3xl font-bold text-[#8D493A]">Publisher Profile</h1>
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-[#D0B8A8] rounded-full p-2"
//           >
//             {user.profilePicture ? (
//               <img src={user.profilePicture} alt="Profile" className="w-16 h-16 rounded-full" />
//             ) : (
//               <div className="w-16 h-16 rounded-full bg-[#8D493A] flex items-center justify-center text-white text-2xl">
//                 {user.username.charAt(0).toUpperCase()}
//               </div>
//             )}
//           </motion.div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex items-center">
//             <Mail className="mr-2 text-[#8D493A]" />
//             <span>{user.email}</span>
//           </div>
//           <div className="flex items-center">
//             <Pen className="mr-2 text-[#8D493A]" />
//             <span>{user.yearsOfExperience} years of experience</span>
//           </div>
//         </div>
        
//         <div className="mt-4">
//           <h2 className="text-xl font-semibold text-[#8D493A] mb-2">Bio</h2>
//           <p>{user.bio || 'No bio available'}</p>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="bg-[#DFD3C3] rounded-lg shadow-lg p-6"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-[#8D493A]">Published Content</h2>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#8D493A] text-white px-4 py-2 rounded-lg"
//             onClick={() => setShowAddContent(true)}
//           >
//             Add New Content
//           </motion.button>
//         </div>
        
//         {user.publishedBooks.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {user.publishedBooks.map((book, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//                 className="bg-[#F8EDE3] rounded-lg p-4 shadow"
//               >
//                 <Book className="mb-2 text-[#8D493A]" />
//                 <h3 className="font-semibold">{book.title}</h3>
//                 <p className="text-sm text-gray-600">{book.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No published content yet.</p>
//         )}
//       </motion.div>

//       {showAddContent && (
//         <AddContentForm onClose={() => setShowAddContent(false)} />
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Pen } from 'lucide-react';
import axios from 'axios';
import AddContentForm from '../components/Form/ContentForm';
import PublishedContent from '../components/Puplisher/PublishedContent';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [showAddContent, setShowAddContent] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-[#F8EDE3] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#DFD3C3] rounded-lg shadow-lg p-6 mb-6 mt-[7rem]"
      >
        <div className="flex items-center justify-between mb-4  ">
          <h1 className="text-3xl font-bold text-[#8D493A]">Publisher Profile</h1>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#D0B8A8] rounded-full p-2"
          >
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[#8D493A] flex items-center justify-center text-white text-2xl">
                {user.username.charAt(0).toUpperCase()}
              </div>
            )}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Mail className="mr-2 text-[#8D493A]" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Pen className="mr-2 text-[#8D493A]" />
            <span>{user.yearsOfExperience} years of experience</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#8D493A] mb-2">Bio</h2>
          <p>{user.bio || 'No bio available'}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex justify-end mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8D493A] text-white px-4 py-2 rounded-lg"
            onClick={() => setShowAddContent(true)}
          >
            Add New Content
          </motion.button>
        </div>
        
        <PublishedContent />
      </motion.div>

      {showAddContent && (
        <AddContentForm onClose={() => setShowAddContent(false)} />
      )}
    </div>
  );
};

export default ProfilePage;