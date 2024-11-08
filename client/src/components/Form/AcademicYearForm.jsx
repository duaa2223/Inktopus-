// import { useState } from 'react';
// import { Button } from '../ui/UIComponents';

// const AcademicYearForm = ({ colleges, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     imageUrl: '',
//     college: '',
//     order: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/academic-years', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         const newAcademicYear = await response.json();
//         if (onSubmit) onSubmit(newAcademicYear);
//         onClose();
//       } else {
//         const errorData = await response.json();
//         console.error('Error adding academic year:', errorData.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold text-[#8D493A] mb-4">Add Academic Year</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
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
//               Name (English):
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//               disabled={!formData.college}
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
//               disabled={!formData.college}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Order:
//             </label>
//             <input
//               type="number"
//               name="order"
//               value={formData.order}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               required
//               min="1"
//               disabled={!formData.college}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Image URL:
//             </label>
//             <input
//               type="text"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:ring-2 focus:ring-[#8D493A]"
//               disabled={!formData.college}
//             />
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
//               disabled={!formData.college}
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
//               disabled={!formData.college}
//             >
//               Add Academic Year
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AcademicYearForm;
///////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { 
//   FormGroup, 
//   FormLabel, 
//   FormInput, 
//   FormSelect, 
//   FormTextarea, 
//   FormModal,
//   Button 
// } from '../SharedFormComponant/Forms';

// const AcademicYearForm = ({ colleges, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     imageUrl: '',
//     college: '',
//     order: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/academic-years', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });
  
//       const data = await response.json();
      
//       if (!response.ok) {
//         throw new Error(data.message || 'حدث خطأ أثناء إضافة السنة الدراسية');
//       }
  
//       onSubmit(data.data);
//       onClose();
//     } catch (error) {
//       console.error('Error adding academic year:', error.message);
//       // يمكنك إضافة إشعار للمستخدم هنا
//     }
//   };
//   return (
//     <FormModal onClose={onClose}>
//       <h2 className="text-lg font-bold text-[#8D493A] mb-4">Add Academic Year</h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
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
//           <FormLabel required>Name (English):</FormLabel>
//           <FormInput
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             disabled={!formData.college}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel required>Name (Arabic):</FormLabel>
//           <FormInput
//             name="nameAr"
//             value={formData.nameAr}
//             onChange={handleChange}
//             required
//             disabled={!formData.college}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel required>Order:</FormLabel>
//           <FormInput
//             type="number"
//             name="order"
//             value={formData.order}
//             onChange={handleChange}
//             required
//             min="1"
//             disabled={!formData.college}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Image URL:</FormLabel>
//           <FormInput
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             disabled={!formData.college}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Description:</FormLabel>
//           <FormTextarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="2"
//             disabled={!formData.college}
//           />
//         </FormGroup>

//         <div className="flex justify-end space-x-2 pt-4">
//           <Button
//             type="button"
//             variant="secondary"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             variant="primary"
//             disabled={!formData.college}
//           >
//             Add Academic Year
//           </Button>
//         </div>
//       </form>
//     </FormModal>
//   );
// };

// export default AcademicYearForm;
/////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import {
//   FormGroup,
//   FormLabel,
//   FormInput,
//   FormSelect,
//   FormTextarea,
//   FormModal,
//   Button
// } from '../SharedFormComponant/Forms';

// const AcademicYearForm = ({ colleges, onClose, onSubmit, editData = null }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     nameAr: '',
//     description: '',
//     imageUrl: '',
//     college: '',
//     order: '',
//     ...editData
//   });
//   useEffect(() => {
//     if (editData) {
//       setFormData({
//         name: editData.name || '',
//         nameAr: editData.nameAr || '',
//         description: editData.description || '',
//         imageUrl: editData.imageUrl || '',
//         college: editData.college || '',
//         order: editData.order || '',
//       });
//     }
//   }, [editData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <FormModal onClose={onClose}>
//       <h2 className="text-xl font-bold text-[#8D493A] mb-4">
//         {editData ? 'Edit Academic Year' : 'Add Academic Year'}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
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
//           <FormLabel required>Order:</FormLabel>
//           <FormInput
//             type="number"
//             name="order"
//             value={formData.order}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Image URL:</FormLabel>
//           <FormInput
//             type="text"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//           />
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
//             {editData ? 'Update' : 'Add'} Academic Year
//           </Button>
//         </div>
//       </form>
//     </FormModal>
//   );
// };


// export default AcademicYearForm;

import React, { useState, useEffect } from 'react';
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormModal,
  Button
} from '../SharedFormComponant/Forms';

const AcademicYearForm = ({ colleges, onClose, onSubmit, editData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    description: '',
    imageUrl: '',
    college: '',
    order: '',
  });

  useEffect(() => {
    if (editData) {
      // Set college ID explicitly from editData
      setFormData({
        name: editData.name || '',
        nameAr: editData.nameAr || '',
        description: editData.description || '',
        imageUrl: editData.imageUrl || '',
        college: editData.college || colleges[0]?._id || '', // Fallback to first college if not provided
        order: editData.order || '',
      });
    } else {
      // Set default college when adding new
      setFormData(prev => ({
        ...prev,
        college: colleges[0]?._id || ''
      }));
    }
  }, [editData, colleges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure college ID is included in submission
    const submissionData = {
      ...formData,
      college: formData.college || colleges[0]?._id
    };
    onSubmit(submissionData);
  };

  return (
    <FormModal onClose={onClose}>
      <h2 className="text-xl font-bold text-[#8D493A] mb-4">
        {editData ? 'Edit Academic Year' : 'Add Academic Year'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <FormLabel required>Name (English):</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel required>Name (Arabic):</FormLabel>
          <FormInput
            type="text"
            name="nameAr"
            value={formData.nameAr}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel required>Order:</FormLabel>
          <FormInput
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Image URL:</FormLabel>
          <FormInput
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormTextarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </FormGroup>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {editData ? 'Update' : 'Add'} Academic Year
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default AcademicYearForm;