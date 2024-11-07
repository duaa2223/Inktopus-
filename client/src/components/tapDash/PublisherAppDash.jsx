
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const PublisherApplications = () => {
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/application/applications', {
//         withCredentials: true,
//       });
//       setPublisherApps(response.data);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (appId, newStatus) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/application/applications/${appId}`,
//         {
//           status: newStatus,
//           adminNotes: `Status updated to ${newStatus}`
//         },
//         {
//           withCredentials: true
//         }
//       );

//       if (response.data.message === 'Application updated successfully') {
//         setPublisherApps(prevApps => 
//           prevApps.map(app => 
//             app._id === appId 
//               ? { ...app, status: newStatus } 
//               : app
//           )
//         );
//       }
//     } catch (err) {
//       console.error('Error updating application:', err);
//       setError(err.response?.data?.message || 'Failed to update status');
//     }
//   };

//   const getStatusButtons = (app) => {
//     switch (app.status) {
//       case 'pending':
//         return (
//           <div className="flex gap-2">
//             <button
//               onClick={() => handleStatusUpdate(app._id, 'approved')}
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Approve
//             </button>
//             <button
//               onClick={() => handleStatusUpdate(app._id, 'rejected')}
//               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             >
//               Reject
//             </button>
//           </div>
//         );
//       case 'approved':
//         return (
//           <button
//             onClick={() => handleStatusUpdate(app._id, 'rejected')}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Change to Rejected
//           </button>
//         );
//       case 'rejected':
//         return (
//           <button
//             onClick={() => handleStatusUpdate(app._id, 'approved')}
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Change to Approved
//           </button>
//         );
//       default:
//         return null;
//     }
//   };

//   const filteredPublisherApps = publisherApps.filter(app => 
//     (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (statusFilter === 'all' || app.status === statusFilter)
//   );

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="text-red-500 p-4">{error}</div>;

//   return (
//     <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
//       <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Publisher Applications</h1>
      
//       <div className="flex gap-4 mb-6">
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="w-[180px] p-2 border rounded-md bg-white"
//         >
//           <option value="all">All Statuses</option>
//           <option value="pending">Pending</option>
//           <option value="approved">Approved</option>
//           <option value="rejected">Rejected</option>
//         </select>
        
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-grow p-2 border rounded-md"
//         />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredPublisherApps.map((app) => (
//               <tr key={app._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.user?.username}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.user?.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.yearsOfExperience} years</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     app.status === 'approved' ? 'bg-green-100 text-green-800' :
//                     app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {getStatusButtons(app)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublisherApplications;
////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const PublisherApplications = () => {
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/application/applications', {
//         withCredentials: true,
//       });
//       setPublisherApps(response.data);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (appId, newStatus) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/application/applications/${appId}`,
//         {
//           status: newStatus,
//           adminNotes: `Status updated to ${newStatus}`
//         },
//         {
//           withCredentials: true
//         }
//       );

//       if (response.data.message === 'Application updated successfully') {
//         setPublisherApps(prevApps => 
//           prevApps.map(app => 
//             app._id === appId 
//               ? { ...app, status: newStatus } 
//               : app
//           )
//         );
//       }
//     } catch (err) {
//       console.error('Error updating application:', err);
//       setError(err.response?.data?.message || 'Failed to update status');
//     }
//   };

//   const ActionButton = ({ onClick, variant, children }) => {
//     const baseClasses = "text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
//     const variants = {
//       approve: "bg-[#4CAF50] hover:bg-[#45a049] text-white focus:ring-green-500",
//       reject: "bg-[#8D493A] hover:bg-[#7a3e32] text-white focus:ring-[#8D493A]"
//     };

//     return (
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         className={`${baseClasses} ${variants[variant]}`}
//         onClick={onClick}
//       >
//         {children}
//       </motion.button>
//     );
//   };

//   const filteredPublisherApps = publisherApps.filter(app => 
//     (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (statusFilter === 'all' || app.status === statusFilter)
//   );

//   if (loading) return (
//     <div className="flex items-center justify-center min-h-screen bg-[#F8EDE3]">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8D493A]"></div>
//     </div>
//   );

//   if (error) return (
//     <div className="p-4 bg-red-100 text-red-700 rounded-lg">
//       {error}
//     </div>
//   );

//   return (
    
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-6 py-4 bg-[#D0B8A8]">
//           <h1 className="text-2xl font-bold text-[#8D493A]">Publisher Applications</h1>
//         </div>
        
//         <div className="p-6 space-y-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="sm:w-48 p-2 border border-[#DFD3C3] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//             >
//               <option value="all">All Statuses</option>
//               <option value="pending">Pending</option>
//               <option value="approved">Approved</option>
//               <option value="rejected">Rejected</option>
//             </select>
            
//             <input
//               type="text"
//               placeholder="Search by name or email"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 p-2 border border-[#DFD3C3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//             />
//           </div>

//           <div className="overflow-x-auto rounded-lg border border-[#DFD3C3]">
//             <table className="min-w-full divide-y divide-[#DFD3C3]">
//               <thead className="bg-[#F8EDE3]">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-[#8D493A] uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-[#8D493A] uppercase tracking-wider">Email</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-[#8D493A] uppercase tracking-wider">Experience</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-[#8D493A] uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-[#8D493A] uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-[#DFD3C3]">
//                 {filteredPublisherApps.map((app) => (
//                   <motion.tr 
//                     key={app._id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.user?.username}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.user?.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.yearsOfExperience} years</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                         app.status === 'approved' ? 'bg-green-100 text-green-800' :
//                         app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                         'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {app.status === 'approved' ? (
//                         <ActionButton 
//                           variant="reject" 
//                           onClick={() => handleStatusUpdate(app._id, 'rejected')}
//                         >
//                           Reject
//                         </ActionButton>
//                       ) : (
//                         <ActionButton 
//                           variant="approve" 
//                           onClick={() => handleStatusUpdate(app._id, 'approved')}
//                         >
//                           Approve
//                         </ActionButton>
//                       )}
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
   
//   );
// };

// export default PublisherApplications;
////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const PublisherApplications = () => {
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/application/applications', {
//         withCredentials: true,
//       });
//       setPublisherApps(response.data);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (appId, newStatus) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/application/applications/${appId}`,
//         {
//           status: newStatus,
//           adminNotes: `Status updated to ${newStatus}`
//         },
//         {
//           withCredentials: true
//         }
//       );

//       if (response.data.message === 'Application updated successfully') {
//         setPublisherApps(prevApps => 
//           prevApps.map(app => 
//             app._id === appId 
//               ? { ...app, status: newStatus } 
//               : app
//           )
//         );
//       }
//     } catch (err) {
//       console.error('Error updating application:', err);
//       setError(err.response?.data?.message || 'Failed to update status');
//     }
//   };

//   const ActionButton = ({ onClick, variant, children }) => {
//     return (
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         className="px-4 py-2 rounded-lg bg-[#72392C] text-white hover:bg-[#8D493A] transition-colors"
//         onClick={onClick}
//       >
//         {children}
//       </motion.button>
//     );
//   };

//   const filteredPublisherApps = publisherApps.filter(app => 
//     (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (statusFilter === 'all' || app.status === statusFilter)
//   );

//   if (loading) return (
//     <div className="flex items-center justify-center min-h-screen bg-[#F6EEE6]">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#72392C]"></div>
//     </div>
//   );

//   if (error) return (
//     <div className="p-4 bg-red-100 text-red-700 rounded-lg"> 
//       {error}
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Publisher Applications</h2>

//       <div className="flex justify-between mb-6">
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
//         >
//           <option value="all">All Statuses</option>
//           <option value="pending">Pending</option>
//           <option value="approved">Approved</option>
//           <option value="rejected">Rejected</option>
//         </select>
        
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
//         />
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">NAME</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">EMAIL</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">EXPERIENCE</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">STATUS</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[#EDE1D7]">
//             {filteredPublisherApps.map((app) => (
//               <motion.tr 
//                 key={app._id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="hover:bg-[#F6EEE6] transition-colors"
//               >
//                 <td className="px-6 py-4 text-[#72392C]">{app.user?.username}</td>
//                 <td className="px-6 py-4 text-[#72392C]">{app.user?.email}</td>
//                 <td className="px-6 py-4 text-[#72392C]">{app.yearsOfExperience} years</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-sm bg-[#EDE1D7] text-[#72392C]">
//                     {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <ActionButton 
//                     variant={app.status === 'approved' ? 'reject' : 'approve'}
//                     onClick={() => handleStatusUpdate(app._id, app.status === 'approved' ? 'rejected' : 'approved')}
//                   >
//                     {app.status === 'approved' ? 'Reject' : 'Approve'}
//                   </ActionButton>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublisherApplications;
/////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const PublisherApplications = () => {
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/api/application/applications', {
//         withCredentials: true,
//       });
//       setPublisherApps(response.data);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (appId, newStatus) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/application/applications/${appId}`,
//         {
//           status: newStatus,
//           adminNotes: `Status updated to ${newStatus}`
//         },
//         {
//           withCredentials: true
//         }
//       );

//       if (response.data.message === 'Application updated successfully') {
//         setPublisherApps(prevApps => 
//           prevApps.map(app => 
//             app._id === appId 
//               ? { ...app, status: newStatus } 
//               : app
//           )
//         );
//       }
//     } catch (err) {
//       console.error('Error updating application:', err);
//       setError(err.response?.data?.message || 'Failed to update status');
//     }
//   };

//   const ActionButton = ({ onClick, variant, children }) => {
//     return (
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         className={`px-4 py-2 rounded-lg text-white transition-colors ${
//           children === 'Approve' 
//             ? 'bg-green-600 hover:bg-green-700' 
//             : 'bg-red-600 hover:bg-red-700'
//         }`}
//         onClick={onClick}
//       >
//         {children}
//       </motion.button>
//     );
//   };

//   const filteredPublisherApps = publisherApps.filter(app => 
//     (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (statusFilter === 'all' || app.status === statusFilter)
//   );

//   if (loading) return (
//     <div className="flex items-center justify-center min-h-screen bg-[#F6EEE6]">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#72392C]"></div>
//     </div>
//   );

//   if (error) return (
//     <div className="p-4 bg-red-100 text-red-700 rounded-lg"> 
//       {error}
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Publisher Applications</h2>

//       <div className="flex justify-between mb-6">
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
//         >
//           <option value="all">All Statuses</option>
//           <option value="pending">Pending</option>
//           <option value="approved">Approved</option>
//           <option value="rejected">Rejected</option>
//         </select>
        
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
//         />
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">NAME</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">EMAIL</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">EXPERIENCE</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">STATUS</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[#EDE1D7]">
//             {filteredPublisherApps.map((app) => (
//               <motion.tr 
//                 key={app._id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="hover:bg-[#F6EEE6] transition-colors"
//               >
//                 <td className="px-6 py-4 text-[#72392C]">{app.user?.username}</td>
//                 <td className="px-6 py-4 text-[#72392C]">{app.user?.email}</td>
//                 <td className="px-6 py-4 text-[#72392C]">{app.yearsOfExperience} years</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-sm ${
//                     app.status === 'approved'
//                       ? 'bg-green-100 text-green-800'
//                       : app.status === 'rejected'
//                       ? 'bg-red-100 text-red-800'
//                       : 'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <ActionButton 
//                     variant={app.status === 'approved' ? 'reject' : 'approve'}
//                     onClick={() => handleStatusUpdate(app._id, app.status === 'approved' ? 'rejected' : 'approved')}
//                   >
//                     {app.status === 'approved' ? 'Reject' : 'Approve'}
//                   </ActionButton>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublisherApplications;
////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PublisherApplications = () => {
  const [publisherApps, setPublisherApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [appsPerPage] = useState(5); // عدد التطبيقات لكل صفحة
  const totalPages = Math.ceil(publisherApps.length / appsPerPage); // حساب إجمالي الصفحات

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/application/applications', {
        withCredentials: true,
      });
      setPublisherApps(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (appId, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/application/applications/${appId}`,
        {
          status: newStatus,
          adminNotes: `Status updated to ${newStatus}`
        },
        {
          withCredentials: true
        }
      );

      if (response.data.message === 'Application updated successfully') {
        // تحديث الحالة فقط للعنصر المحدد
        setPublisherApps(prevApps => 
          prevApps.map(app => 
            app._id === appId 
              ? { ...app, status: newStatus } 
              : app
          )
        );
      }
    } catch (err) {
      console.error('Error updating application:', err);
      setError(err.response?.data?.message || 'Failed to update status');
    }
  };

  const ActionButton = ({ onClick, variant, children }) => {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded-lg text-white transition-colors ${
          children === 'Approve' 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-red-600 hover:bg-red-700'
        }`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  };

  const filteredPublisherApps = publisherApps.filter(app => 
    (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || app.status === statusFilter)
  );

  // تحديد التطبيقات الحالية بناءً على الصفحة الحالية
  const indexOfLastApp = currentPage * appsPerPage;
  const indexOfFirstApp = indexOfLastApp - appsPerPage;
  const currentApps = filteredPublisherApps.slice(indexOfFirstApp, indexOfLastApp);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#F6EEE6]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#72392C]"></div>
    </div>
  );

  if (error) return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg"> 
      {error}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Publisher Applications</h2>

      <div className="flex justify-between mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">NAME</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">EMAIL</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">EXPERIENCE</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">STATUS</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE1D7]">
            {currentApps.map((app) => (
              <motion.tr 
                key={app._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-[#F6EEE6] transition-colors"
              >
                <td className="px-6 py-4 text-[#72392C]">{app.user?.username}</td>
                <td className="px-6 py-4 text-[#72392C]">{app.user?.email}</td>
                <td className="px-6 py-4 text-[#72392C]">{app.yearsOfExperience} years</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    app.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : app.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ActionButton 
                    variant={app.status === 'approved' ? 'reject' : 'approve'}
                    onClick={() => handleStatusUpdate(app._id, app.status === 'approved' ? 'rejected' : 'approved')}
                  >
                    {app.status === 'approved' ? 'Reject' : 'Approve'}
                  </ActionButton>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? 'bg-[#EDE1D7] text-[#72392C] cursor-not-allowed'
                : 'bg-[#72392C] text-white hover:bg-[#8D493A]'
            } transition-colors`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-[#72392C] text-white'
                  : 'bg-[#EDE1D7] text-[#72392C] hover:bg-[#CCAB9A]'
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? 'bg-[#EDE1D7] text-[#72392C] cursor-not-allowed'
                : 'bg-[#72392C] text-white hover:bg-[#8D493A]'
            } transition-colors`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
};

export default PublisherApplications;
