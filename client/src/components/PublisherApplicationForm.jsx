// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
// import axios from 'axios';

// const PublisherApplicationForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     bio: '',
//     yearsOfExperience: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const response = await axios.post('/api/publisher/apply', formData);
//       console.log('Application submitted:', response.data);
//       onClose();
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred while submitting your application');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AlertDialog open={isOpen} onOpenChange={onClose}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Publisher Application</AlertDialogTitle>
//           <AlertDialogDescription>
//             Please fill out the form below to apply as a publisher.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <Textarea
//             name="bio"
//             placeholder="Tell us about yourself and your publishing experience"
//             value={formData.bio}
//             onChange={handleChange}
//             required
//           />
//           <Input
//             name="yearsOfExperience"
//             type="number"
//             placeholder="Years of Experience"
//             value={formData.yearsOfExperience}
//             onChange={handleChange}
//             required
//           />
//           {error && <p className="text-red-500">{error}</p>}
//           <AlertDialogFooter>
//             <AlertDialogAction asChild>
//               <Button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? 'Submitting...' : 'Submit Application'}
//               </Button>
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </form>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default PublisherApplicationForm;
//////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';

// const PublisherApplicationForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     bio: '',
//     yearsOfExperience: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');
  
//     try {
//       const response = await fetch('http://localhost:5000/api/application/apply', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           bio: formData.bio, 
//           yearsOfExperience: formData.yearsOfExperience 
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       console.log('Application submitted:', formData);
//       onClose();
//     } catch (error) {
//       setError('An error occurred while submitting your application: ' + error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">Publisher Application</h2>
//         <p className="mb-4">Please fill out the form below to apply as a publisher.</p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="bio" className="block mb-1">Bio</label>
//             <textarea
//               id="bio"
//               name="bio"
//               placeholder="Tell us about yourself and your publishing experience"
//               value={formData.bio}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="yearsOfExperience" className="block mb-1">Years of Experience</label>
//             <input
//               id="yearsOfExperience"
//               name="yearsOfExperience"
//               type="number"
//               placeholder="Years of Experience"
//               value={formData.yearsOfExperience}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PublisherApplicationForm;
////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormModal,
  Button
} from '../components/SharedFormComponant/Forms'; // تأكد من تحديث المسار الصحيح للمكونات

const PublisherApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    bio: '',
    yearsOfExperience: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/application/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      const data = await response.json();
      setSuccess(true);
      setTimeout(() => {
        onClose();
       
      }, 2000);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message || 'An error occurred while submitting your application');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <FormModal onClose={onClose}>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#8D493A] mb-4">Success!</h2>
          <p className="text-sm text-gray-600 mb-4">
            Application submitted successfully! Redirecting...
          </p>
        </div>
      </FormModal>
    );
  }

  return (
    <FormModal onClose={onClose}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#8D493A]">Publisher Application</h2>
        <Button 
          variant="secondary" 
          onClick={onClose}
          className="!px-2 !py-1"
        >
          ✕
        </Button>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100/80 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel required>Bio</FormLabel>
          <FormTextarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tell us about your publishing experience..."
          />
        </FormGroup>

        <FormGroup>
          <FormLabel required>Years of Experience</FormLabel>
          <FormInput
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            min="0"
            placeholder="Enter your years of experience"
          />
        </FormGroup>

        <div className="flex gap-3 mt-6">
          <Button
            variant="secondary"
            type="button"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="flex-1"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default PublisherApplicationForm;