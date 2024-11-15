// import React, { useState, useEffect } from 'react';
// import { Button } from '../ui/UIComponents';

// const SpecializationForm = ({ colleges, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     college: '',
//     academic_year: ''
//   });
  
//   const [academicYears, setAcademicYears] = useState([]);

//   useEffect(() => {
//     if (formData.college) {
//       fetchAcademicYears(formData.college);
//     }
//   }, [formData.college]);

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/academic-years/${collegeId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAcademicYears(data);
//       } else {
//         console.error('Failed to fetch academic years');
//       }
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => {
//       const newData = { ...prev, [name]: value };
//       // Reset academic_year when college changes
//       if (name === 'college') {
//         newData.academic_year = '';
//       }
//       return newData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/specializations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         const newSpecialization = await response.json();
//         if (onSubmit) onSubmit(newSpecialization);
//         onClose();
//       } else {
//         const errorData = await response.json();
//         console.error('Error adding specialization:', errorData.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold text-[#8D493A] mb-4">Add Specialization</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name (English):
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name (Arabic):
//             </label>
//             <input
//               type="text"
//               name="nameAr"
//               value={formData.nameAr}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               College:
//             </label>
//             <select
//               name="college"
//               value={formData.college}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             >
//               <option value="">Select College</option>
//               {colleges.map((college) => (
//                 <option key={college._id} value={college._id}>
//                   {college.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Academic Year:
//             </label>
//             <select
//               name="academic_year"
//               value={formData.academic_year}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//               disabled={!formData.college}
//             >
//               <option value="">Select Academic Year</option>
//               {academicYears.map((year) => (
//                 <option key={year._id} value={year._id}>
//                   {year.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description:
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               rows="3"
//             />
//           </div>

//           <div className="flex justify-end space-x-2 pt-4">
//             <Button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="bg-[#8D493A] hover:bg-[#7A3E32] text-white"
//             >
//               Add Specialization
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SpecializationForm;
////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Button } from '../ui/UIComponents';

// const SpecializationForm = ({ colleges, onClose, onSubmit, editData }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     college: '',
//     academic_year: ''
//   });
  
//   const [academicYears, setAcademicYears] = useState([]);

//   useEffect(() => {
//     if (editData) {
//       setFormData({
//         name: editData.name || '',
//         nameAr: editData.nameAr || '',
//         description: editData.description || '',
//         college: editData.college || '',
//         academic_year: editData.academic_year || ''
//       });
//     }
//   }, [editData]);

//   useEffect(() => {
//     if (formData.college) {
//       fetchAcademicYears(formData.college);
//     }
//   }, [formData.college]);

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/academic-years/${collegeId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAcademicYears(data);
//       } else {
//         console.error('Failed to fetch academic years');
//       }
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => {
//       const newData = { ...prev, [name]: value };
//       // Reset academic_year when college changes
//       if (name === 'college') {
//         newData.academic_year = '';
//       }
//       return newData;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);  // Just pass the formData to parent component
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold text-[#8D493A] mb-4">
//           {editData ? 'Edit Specialization' : 'Add Specialization'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name (English):
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name (Arabic):
//             </label>
//             <input
//               type="text"
//               name="nameAr"
//               value={formData.nameAr}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               College:
//             </label>
//             <select
//               name="college"
//               value={formData.college}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//             >
//               <option value="">Select College</option>
//               {colleges.map((college) => (
//                 <option key={college._id} value={college._id}>
//                   {college.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Academic Year:
//             </label>
//             <select
//               name="academic_year"
//               value={formData.academic_year}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//               disabled={!formData.college}
//             >
//               <option value="">Select Academic Year</option>
//               {academicYears.map((year) => (
//                 <option key={year._id} value={year._id}>
//                   {year.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description:
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               rows="3"
//             />
//           </div>

//           <div className="flex justify-end space-x-2 pt-4">
//             <Button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="bg-[#8D493A] hover:bg-[#7A3E32] text-white"
//             >
//               {editData ? 'Update' : 'Add'} Specialization
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SpecializationForm;
////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Button, FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormModal } from '../SharedFormComponant/Forms';

// const SpecializationForm = ({ colleges, onClose, onSubmit, editData }) => {
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   nameAr: '',
//   //   description: '',
//   //   college: '',
//   //   academic_year: ''
//   // });
  
//   // const [academicYears, setAcademicYears] = useState([]);

//   // useEffect(() => {
//   //   if (editData) {
//   //     setFormData({
//   //       name: editData.name || '',
//   //       nameAr: editData.nameAr || '',
//   //       description: editData.description || '',
//   //       college: editData.college || '',
//   //       academic_year: editData.academic_year || ''
//   //     });
//   //   }
//   // }, [editData]);
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     college: '',
//     academic_year: '',
//     ...(editData || {})
//   });
  
//   const [academicYears, setAcademicYears] = useState([]);

//   useEffect(() => {
//     if (editData) {
//       setFormData({
//         name: editData.name || '',
//         nameAr: editData.nameAr || '',
//         description: editData.description || '',
//         college: editData.college || '',
//         academic_year: editData.academic_year || ''
//       });
//     }
//   }, [editData]);


//   useEffect(() => {
//     if (formData.college) {
//       fetchAcademicYears(formData.college);
//     }
//   }, [formData.college]);

//   const fetchAcademicYears = async (collegeId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/academic-years/${collegeId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAcademicYears(data);
//       } else {
//         console.error('Failed to fetch academic years');
//       }
//     } catch (error) {
//       console.error('Error fetching academic years:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => {
//       const newData = { ...prev, [name]: value };
//       // Reset academic_year when college changes
//       if (name === 'college') {
//         newData.academic_year = '';
//       }
//       return newData;
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onSubmit(formData);  // Just pass the formData to parent component
//   // };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };


  
//   return (
//     <FormModal onClose={onClose}>
//       <h2 className="text-xl font-bold text-[#8D493A] mb-4">
//         {editData ? 'Edit Specialization' : 'Add Specialization'}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <FormGroup>
//           <FormLabel required>Name (English):</FormLabel>
//           <FormInput
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel required>Name (Arabic):</FormLabel>
//           <FormInput
//             type="text"
//             name="nameAr"
//             value={formData.nameAr}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel required>College:</FormLabel>
//           <FormSelect
//             name="college"
//             value={formData.college}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select College</option>
//             {colleges.map((college) => (
//               <option key={college._id} value={college._id}>
//                 {college.name}
//               </option>
//             ))}
//           </FormSelect>
//         </FormGroup>

//         <FormGroup>
//           <FormLabel required>Academic Year:</FormLabel>
//           <FormSelect
//             name="academic_year"
//             value={formData.academic_year}
//             onChange={handleChange}
//             required
//             disabled={!formData.college}
//           >
//             <option value="">Select Academic Year</option>
//             {academicYears.map((year) => (
//               <option key={year._id} value={year._id}>
//                 {year.name}
//               </option>
//             ))}
//           </FormSelect>
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Description:</FormLabel>
//           <FormTextarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="3"
//           />
//         </FormGroup>

//         <div className="flex justify-end space-x-2 pt-4">
//           <Button type="button" onClick={onClose} variant="secondary">
//             Cancel
//           </Button>
//           <Button type="submit" variant="primary">
//             {editData ? 'Update' : 'Add'} Specialization
//           </Button>
//         </div>
//       </form>
//     </FormModal>
//   );
// };

// export default SpecializationForm;
///////////////////////////////////////////////////////////////////////////////////////////////////
import  { useState, useEffect } from 'react';
import { Button, FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormModal } from '../SharedFormComponant/Forms';

const SpecializationForm = ({ colleges, onClose, onSubmit, editData }) => {
  // تبسيط إدارة الحالة الأولية
  const [formData, setFormData] = useState({
    name: '',
    // nameAr: '',
    // description: '',
    college: '',
    academic_year: ''
  });
  
  const [academicYears, setAcademicYears] = useState([]);

  // تحديث البيانات عند فتح النموذج للتعديل
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        nameAr: editData.nameAr || '',
        description: editData.description || '',
        college: editData.college || '',
        academic_year: editData.academic_year || ''
      });
      
      // جلب السنوات الدراسية مباشرة إذا كان هناك كلية محددة
      if (editData.college) {
        fetchAcademicYears(editData.college);
      }
    }
  }, [editData]);

  // جلب السنوات الدراسية عند تغيير الكلية
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
      // إعادة تعيين السنة الدراسية عند تغيير الكلية
      if (name === 'college' && value !== prev.college) {
        newData.academic_year = '';
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormModal onClose={onClose}>
      <h2 className="text-xl font-bold text-[#8D493A] mb-4">
        {editData ? 'Edit Specialization' : 'Add Specialization'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel required>Name (English):</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
{/* 
        <FormGroup>
          <FormLabel required>Name (Arabic):</FormLabel>
          <FormInput
            type="text"
            name="nameAr"
            value={formData.nameAr}
            onChange={handleChange}
            required
          />
        </FormGroup> */}

        <FormGroup>
          <FormLabel required>College:</FormLabel>
          <FormSelect
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          >
            <option value="">Select College</option>
            {colleges.map((college) => (
              <option key={college._id} value={college._id}>
                {college.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel required>Academic Year:</FormLabel>
          <FormSelect
            name="academic_year"
            value={formData.academic_year}
            onChange={handleChange}
            required
            disabled={!formData.college}
          >
            <option value="">Select Academic Year</option>
            {academicYears.map((year) => (
              <option key={year._id} value={year._id}>
                {year.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        {/* <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormTextarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </FormGroup> */}

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {editData ? 'Update' : 'Add'} Specialization
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default SpecializationForm;