// import React from 'react';

// const UserManagementTab = ({ users = [], onStatusUpdate }) => {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">User Management</h2>
      
//       <div className="flex justify-between mb-6">
//         <select className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none">
//           <option value="all">All Roles</option>
//           <option value="user">Users</option>
//           <option value="publisher">Publishers</option>
//           <option value="admin">Admins</option>
//         </select>
        
//         <input
//           type="search"
//           placeholder="Search by username or email"
//           className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
//         />
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">USERNAME</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">EMAIL</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">ROLE</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">STATUS</th>
//               <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[#EDE1D7]">
//             {users.map((user) => (
//               <tr 
//                 key={user._id} 
//                 className="hover:bg-[#F6EEE6] transition-colors"
//               >
//                 <td className="px-6 py-4 text-[#72392C]">{user.username}</td>
//                 <td className="px-6 py-4 text-[#72392C]">{user.email}</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full text-sm bg-[#EDE1D7] text-[#72392C]">
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-sm ${
//                     user.isActivated 
//                       ? 'bg-[#EDE1D7] text-[#72392C]'
//                       : 'bg-[#EDE1D7] text-[#72392C]'
//                   }`}>
//                     {user.isActivated ? 'Active' : 'Inactive'}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => onStatusUpdate(user._id, !user.isActivated)}
//                     className="px-4 py-2 rounded-lg bg-[#72392C] text-white hover:bg-[#8D493A] transition-colors"
//                   >
//                     {user.isActivated ? 'Deactivate' : 'Activate'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagementTab;
/////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';

const UserManagementTab = ({ users = [], onStatusUpdate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const itemsPerPage = 10;

  useEffect(() => {
    const filtered = users.filter(user => {
      const matchesSearch = 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = selectedRole === 'all' || user.role === selectedRole;
      
      return matchesSearch && matchesRole;
    });
    
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, selectedRole]);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">User Management</h2>
      
      <div className="flex justify-between mb-6">
        <select 
          className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="reader">Readers</option>
          <option value="publisher">Publishers</option>
          <option value="admin">Admins</option>
        </select>
        
        <input
          type="search"
          placeholder="Search by username or email"
          className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">USERNAME</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">EMAIL</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">ROLE</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">STATUS</th>
              <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EDE1D7]">
            {currentUsers.map((user) => (
              <tr 
                key={user._id} 
                className="hover:bg-[#F6EEE6] transition-colors"
              >
                <td className="px-6 py-4 text-[#72392C]">{user.username}</td>
                <td className="px-6 py-4 text-[#72392C]">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-[#EDE1D7] text-[#72392C]">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    user.isActivated 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.isActivated ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onStatusUpdate(user._id, !user.isActivated)}
                    className={`px-4 py-2 rounded-lg text-white transition-colors ${
                      user.isActivated
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {user.isActivated ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
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
};

export default UserManagementTab;