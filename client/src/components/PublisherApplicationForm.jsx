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
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Application submitted:', formData);
      onClose();
    } catch (error) {
      setError('An error occurred while submitting your application');
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
/////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';

// // Custom Button component
// const Button = ({ children, onClick, color = 'blue' }) => (
//   <button
//     className={`px-4 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//       color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500' :
//       color === 'green' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500' :
//       'bg-red-500 hover:bg-red-600 focus:ring-red-500'
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// // Custom Input component
// const Input = ({ placeholder, value, onChange }) => (
//   <input
//     type="text"
//     className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//   />
// );

// // Custom Select component
// const Select = ({ options, value, onChange }) => (
//   <select
//     className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//     value={value}
//     onChange={onChange}
//   >
//     {options.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.label}
//       </option>
//     ))}
//   </select>
// );

// // Custom Badge component
// const Badge = ({ children, color }) => (
//   <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
//     {children}
//   </span>
// );

// const mockData = [
//   { id: 1, username: 'Bonnie Green', email: 'bonnie@example.com', bio: 'Experienced publisher with 10 years in the industry', yearsOfExperience: 10, status: 'pending', submittedAt: '2023-04-23' },
//   { id: 2, username: 'Jese Leos', email: 'jese@example.com', bio: 'Newcomer with fresh ideas', yearsOfExperience: 2, status: 'approved', submittedAt: '2023-04-15' },
//   { id: 3, username: 'Lana Byrd', email: 'lana@example.com', bio: 'Specializing in children\'s books', yearsOfExperience: 5, status: 'rejected', submittedAt: '2023-04-18' },
//   { id: 4, username: 'Leslie Livingston', email: 'leslie@example.com', bio: 'Expert in digital publishing', yearsOfExperience: 8, status: 'pending', submittedAt: '2023-04-20' },
//   { id: 5, username: 'Robert Brown', email: 'robert@example.com', bio: 'Focusing on academic publications', yearsOfExperience: 15, status: 'approved', submittedAt: '2023-04-22' },
// ];

// const statusColors = {
//   pending: 'bg-yellow-100 text-yellow-800',
//   approved: 'bg-green-100 text-green-800',
//   rejected: 'bg-red-100 text-red-800'
// };

// const PublisherApplicationsDashboard = () => {
//   const [applications, setApplications] = useState(mockData);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredApplications = applications.filter(app => 
//     (filterStatus === 'all' || app.status === filterStatus) &&
//     (app.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.email.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const handleStatusUpdate = (id, newStatus) => {
//     setApplications(applications.map(app => 
//       app.id === id ? { ...app, status: newStatus } : app
//     ));
//   };

//   return (
//     <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Publisher Applications</h1>
      
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center space-x-4">
//           <Input
//             placeholder="Search by name or email"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Select
//             options={[
//               { value: 'all', label: 'All Status' },
//               { value: 'pending', label: 'Pending' },
//               { value: 'approved', label: 'Approved' },
//               { value: 'rejected', label: 'Rejected' },
//             ]}
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredApplications.map((app) => (
//               <tr key={app.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-medium text-gray-900">{app.username}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{app.email}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{app.yearsOfExperience} years</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <Badge color={statusColors[app.status]}>{app.status}</Badge>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                   <Button color="green" onClick={() => handleStatusUpdate(app.id, 'approved')}>Approve</Button>
//                   <Button color="red" onClick={() => handleStatusUpdate(app.id, 'rejected')}>Reject</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublisherApplicationsDashboard;