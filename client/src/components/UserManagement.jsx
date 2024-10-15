// // components/UserManagement.js
// import  { useState, useEffect } from 'react';
// import { Button } from '../components/ui/UIComponents';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       // Simulating API call
//       const response = [
//         { _id: 1, username: 'user1', email: 'user1@example.com', role: 'user', isActivated: true },
//         { _id: 2, username: 'user2', email: 'user2@example.com', role: 'admin', isActivated: true },
//         { _id: 3, username: 'user3', email: 'user3@example.com', role: 'user', isActivated: false },
//       ];
//       setUsers(response);
//     } catch (err) {
//       setError('Failed to fetch users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUserStatusUpdate = (userId, isActive) => {
//     console.log(`Updating user ${userId} status to ${isActive}`);
//     setUsers(users.map(user => 
//       user._id === userId ? { ...user, isActivated: isActive } : user
//     ));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
//       <h1 className="text-3xl font-bold text-[#8D493A] mb-6">User Management</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-[#D0B8A8] text-[#8D493A]">
//               <th className="p-2">Username</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">Role</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="border-b border-[#D0B8A8]">
//                 <td className="p-2">{user.username}</td>
//                 <td className="p-2">{user.email}</td>
//                 <td className="p-2">{user.role}</td>
//                 <td className="p-2">{user.isActivated ? 'Active' : 'Inactive'}</td>
//                 <td className="p-2">
//                   <Button
//                     onClick={() => handleUserStatusUpdate(user._id, !user.isActivated)}
//                     variant={user.isActivated ? "destructive" : "default"}
//                   >
//                     {user.isActivated ? 'Deactivate' : 'Activate'}
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;
////////////////////////////////////////////////
import { Button, Card } from '../components/ui/UIComponents'; // افتراض أنك استوردت الـ Button و Card في ملف آخر

const UsersTab = ({ users, handleUserStatusUpdate }) => {
  return (
    <Card title="User Management" description="Manage user accounts and roles">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D0B8A8] text-[#8D493A]">
              <th className="p-2">Username</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b border-[#D0B8A8]">
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.isActivated ? 'Active' : 'Inactive'}</td>
                <td className="p-2">
                  <Button
                    onClick={() => handleUserStatusUpdate(user._id, !user.isActivated)}
                    variant={user.isActivated ? "destructive" : "default"}
                  >
                    {user.isActivated ? 'Deactivate' : 'Activate'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UsersTab;
