
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
//         // تحديث حالة التطبيقات في الواجهة
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
//                   {app.status === 'pending' && (
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleStatusUpdate(app._id, 'approved')}
//                         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                       >
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => handleStatusUpdate(app._id, 'rejected')}
//                         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   )}
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

import { useState, useEffect } from 'react';
import axios from 'axios';

const PublisherApplications = () => {
  const [publisherApps, setPublisherApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

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

  const getStatusButtons = (app) => {
    switch (app.status) {
      case 'pending':
        return (
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusUpdate(app._id, 'approved')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={() => handleStatusUpdate(app._id, 'rejected')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Reject
            </button>
          </div>
        );
      case 'approved':
        return (
          <button
            onClick={() => handleStatusUpdate(app._id, 'rejected')}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Change to Rejected
          </button>
        );
      case 'rejected':
        return (
          <button
            onClick={() => handleStatusUpdate(app._id, 'approved')}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Change to Approved
          </button>
        );
      default:
        return null;
    }
  };

  const filteredPublisherApps = publisherApps.filter(app => 
    (app.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     app.user?.email?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || app.status === statusFilter)
  );

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Publisher Applications</h1>
      
      <div className="flex gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-[180px] p-2 border rounded-md bg-white"
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
          className="flex-grow p-2 border rounded-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPublisherApps.map((app) => (
              <tr key={app._id}>
                <td className="px-6 py-4 whitespace-nowrap">{app.user?.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{app.user?.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{app.yearsOfExperience} years</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    app.status === 'approved' ? 'bg-green-100 text-green-800' :
                    app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusButtons(app)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublisherApplications;