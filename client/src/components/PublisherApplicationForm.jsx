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
import React, { useState } from 'react';

const PublisherApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    bio: '',
    yearsOfExperience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/api/application/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          bio: formData.bio, 
          yearsOfExperience: formData.yearsOfExperience 
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      console.log('Application submitted:', formData);
      onClose();
    } catch (error) {
      setError('An error occurred while submitting your application: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Publisher Application</h2>
        <p className="mb-4">Please fill out the form below to apply as a publisher.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="bio" className="block mb-1">Bio</label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself and your publishing experience"
              value={formData.bio}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="yearsOfExperience" className="block mb-1">Years of Experience</label>
            <input
              id="yearsOfExperience"
              name="yearsOfExperience"
              type="number"
              placeholder="Years of Experience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublisherApplicationForm;
