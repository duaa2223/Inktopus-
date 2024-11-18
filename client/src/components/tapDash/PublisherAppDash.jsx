
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
  const [appsPerPage] = useState(5);
  const totalPages = Math.ceil(publisherApps.length / appsPerPage);

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

  const ActionButton = ({ onClick, variant, children }) => {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`px-2 py-1 md:px-4 md:py-2 rounded-lg text-white text-sm md:text-base transition-colors ${
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
    <div className="space-y-6 p-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#8D493A] mb-6">Publisher Applications</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none w-full md:w-auto"
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
          className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none w-full"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <div className="min-w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium text-sm md:text-base">NAME</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium text-sm md:text-base hidden md:table-cell">EMAIL</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium text-sm md:text-base hidden lg:table-cell">EXPERIENCE</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium text-sm md:text-base">STATUS</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium text-sm md:text-base">ACTIONS</th>
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
                  <td className="px-4 md:px-6 py-4 text-[#72392C] text-sm md:text-base">
                    <div className="flex flex-col md:flex-row">
                      <span>{app.user?.username}</span>
                      <span className="md:hidden text-xs text-gray-500">{app.user?.email}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-[#72392C] text-sm md:text-base hidden md:table-cell">{app.user?.email}</td>
                  <td className="px-4 md:px-6 py-4 text-[#72392C] text-sm md:text-base hidden lg:table-cell">{app.yearsOfExperience} years</td>
                  <td className="px-4 md:px-6 py-4">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                      app.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : app.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
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
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base ${
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
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base ${
                currentPage === index + 1
                  ? 'bg-[#72392C] text-white'
                  : 'bg-[#EDE1D7] text-[#72392C] hover:bg-[#CCAB9A]'
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base ${
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
};

export default PublisherApplications;