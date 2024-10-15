// import React, { useState, useEffect } from 'react';

// const Input = ({ placeholder, value, onChange, className }) => (
//   <input
//     type="text"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     className={`px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent ${className}`}
//   />
// );

// const Select = ({ value, onChange, options }) => (
//   <select
//     value={value}
//     onChange={onChange}
//     className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//   >
//     {options.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.label}
//       </option>
//     ))}
//   </select>
// );

// const Button = ({ children, onClick, variant = 'default', className }) => (
//   <button
//     className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//       variant === 'destructive'
//         ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
//         : 'bg-[#8D493A] text-white hover:bg-[#7A3E32] focus:ring-[#8D493A]'
//     } ${className}`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// const PublisherApplications = () => {
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       // Simulating publisher applications data
//       setPublisherApps([
//         { id: 1, name: 'John Doe', email: 'john@example.com', company: 'ABC Publishing', experience: '5 years', status: 'pending' },
//         { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Books', experience: '3 years', status: 'approved' },
//         { id: 3, name: 'Bob Johnson', email: 'bob@example.com', company: 'Best Reads', experience: '7 years', status: 'rejected' },
//       ]);
//     } catch (err) {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePublisherAppStatus = async (appId, newStatus) => {
//     // Implement API call to update status
//     console.log(`Updating application ${appId} to ${newStatus}`);
//     setPublisherApps(publisherApps.map(app => 
//       app.id === appId ? { ...app, status: newStatus } : app
//     ));
//   };

//   const filteredPublisherApps = publisherApps.filter(app => 
//     (app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//      app.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
//     (statusFilter === 'all' || app.status === statusFilter)
//   );

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
//       <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Publisher Applications</h1>
//       <p className="text-gray-600 mb-6">This is a list of latest publisher applications</p>
      
//       <div className="flex space-x-4 mb-6">
//         <Select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           options={[
//             { value: 'all', label: 'Filter by status' },
//             { value: 'pending', label: 'Pending' },
//             { value: 'approved', label: 'Approved' },
//             { value: 'rejected', label: 'Rejected' },
//           ]}
//         />
//         <Input
//           placeholder="Search by name or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-grow"
//         />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredPublisherApps.map((app) => (
//               <tr key={app.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.company}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{app.experience}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     app.status === 'approved' ? 'bg-green-100 text-green-800' :
//                     app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {app.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {app.status === 'pending' && (
//                     <>
//                       <Button
//                         onClick={() => handlePublisherAppStatus(app.id, 'approved')}
//                         className="mr-2"
//                       >
//                         Approve
//                       </Button>
//                       <Button
//                         onClick={() => handlePublisherAppStatus(app.id, 'rejected')}
//                         variant="destructive"
//                       >
//                         Reject
//                       </Button>
//                     </>
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
//////////////////////////////////////////////////////////////////////////////////////////////
// components/PublisherApplications.js
import  { useState, useEffect } from 'react';
import { Input, Select, Button } from '../components/ui/UIComponents';

const PublisherApplications = () => {
  const [publisherApps, setPublisherApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulating publisher applications data
      setPublisherApps([
        { id: 1, name: 'John Doe', email: 'john@example.com', company: 'ABC Publishing', experience: '5 years', status: 'pending' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Books', experience: '3 years', status: 'approved' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', company: 'Best Reads', experience: '7 years', status: 'rejected' },
      ]);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handlePublisherAppStatus = async (appId, newStatus) => {
    console.log(`Updating application ${appId} to ${newStatus}`);
    setPublisherApps(publisherApps.map(app => 
      app.id === appId ? { ...app, status: newStatus } : app
    ));
  };

  const filteredPublisherApps = publisherApps.filter(app => 
    (app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     app.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || app.status === statusFilter)
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Publisher Applications</h1>
      <p className="text-gray-600 mb-6">This is a list of latest publisher applications</p>
      
      <div className="flex space-x-4 mb-6">
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={[
            { value: 'all', label: 'Filter by status' },
            { value: 'pending', label: 'Pending' },
            { value: 'approved', label: 'Approved' },
            { value: 'rejected', label: 'Rejected' },
          ]}
        />
        <Input
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPublisherApps.map((app) => (
              <tr key={app.id}>
                <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{app.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{app.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">{app.experience}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    app.status === 'approved' ? 'bg-green-100 text-green-800' :
                    app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {app.status === 'pending' && (
                    <>
                      <Button
                        onClick={() => handlePublisherAppStatus(app.id, 'approved')}
                        className="mr-2"
                      >
                        Approve
                      </Button>
                      <Button
                        onClick={() => handlePublisherAppStatus(app.id, 'rejected')}
                        variant="destructive"
                      >
                        Reject
                      </Button>
                    </>
                  )}
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