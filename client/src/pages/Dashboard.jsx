// import { useState, useEffect } from 'react';
// import PublisherApplicationForm from '../components/PublisherApplicationForm';

// // مكونات بسيطة
// const Tab = ({ children, isActive, onClick }) => (
//   <button
//     className={`px-4 py-2 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// const Card = ({ children, title, description }) => (
//   <div className="border rounded-lg p-4 mb-4">
//     <h3 className="text-xl font-bold">{title}</h3>
//     <p className="text-gray-600 mb-2">{description}</p>
//     {children}
//   </div>
// );

// const Button = ({ children, onClick, variant = 'default' }) => (
//   <button
//     className={`px-4 py-2 rounded ${
//       variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');
//   const [users, setUsers] = useState([]);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [content, setContent] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [isPublisherFormOpen, setIsPublisherFormOpen] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     // محاكاة جلب البيانات
//     setTimeout(() => {
//       setUsers([{ _id: 1, username: 'user1', email: 'user1@example.com', role: 'user', isActivated: true }]);
//       setColleges([{ _id: 1, name: 'كلية الهندسة' }]);
//       setAcademicYears([{ _id: 1, name: '2023-2024' }]);
//       setSpecializations([{ _id: 1, name: 'هندسة البرمجيات' }]);
//       setContent([{ _id: 1, title: 'كتاب البرمجة', content_type: 'book', author: 'محمد', college: { name: 'كلية الهندسة' } }]);
//       setLoading(false);
//     }, 1000);
//   };

//   const handleUserStatusUpdate = (userId, isActive) => {
//     // محاكاة تحديث حالة المستخدم
//     console.log(`تحديث حالة المستخدم ${userId} إلى ${isActive}`);
//     fetchData();
//   };

//   const handleContentDelete = (contentId) => {
//     // محاكاة حذف المحتوى
//     console.log(`حذف المحتوى ${contentId}`);
//     fetchData();
//   };

//   if (loading) return <div className="flex items-center justify-center h-screen">جاري التحميل...</div>;
//   if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800">لوحة تحكم المسؤول</h1>

//       <div className="mb-4">
//         <Tab isActive={activeTab === 'users'} onClick={() => setActiveTab('users')}>المستخدمون</Tab>
//         <Tab isActive={activeTab === 'publisher-apps'} onClick={() => setActiveTab('publisher-apps')}>طلبات الناشرين</Tab>
//         <Tab isActive={activeTab === 'academic'} onClick={() => setActiveTab('academic')}>الهيكل الأكاديمي</Tab>
//         <Tab isActive={activeTab === 'content'} onClick={() => setActiveTab('content')}>المحتوى</Tab>
//         <Tab isActive={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>الإحصائيات</Tab>
//       </div>

//       {activeTab === 'users' && (
//         <Card title="إدارة المستخدمين" description="إدارة حسابات وأدوار المستخدمين">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th>اسم المستخدم</th>
//                 <th>البريد الإلكتروني</th>
//                 <th>الدور</th>
//                 <th>الحالة</th>
//                 <th>الإجراءات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.isActivated ? 'نشط' : 'غير نشط'}</td>
//                   <td>
//                     <Button
//                       onClick={() => handleUserStatusUpdate(user._id, !user.isActivated)}
//                       variant={user.isActivated ? "destructive" : "default"}
//                     >
//                       {user.isActivated ? 'إلغاء التنشيط' : 'تنشيط'}
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Card>
//       )}

//       {activeTab === 'publisher-apps' && (
//         <div>
//           <Button onClick={() => setIsPublisherFormOpen(true)}>فتح نموذج طلب الناشر</Button>
//           <PublisherApplicationForm isOpen={isPublisherFormOpen} onClose={() => setIsPublisherFormOpen(false)} />
//         </div>
//       )}

//       {activeTab === 'academic' && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card title="الكليات" description="إدارة الكليات">
//             <Button>إضافة كلية</Button>
//             <ul>
//               {colleges.map((college) => (
//                 <li key={college._id}>{college.name}</li>
//               ))}
//             </ul>
//           </Card>
//           <Card title="السنوات الدراسية" description="إدارة السنوات الدراسية">
//             <Button>إضافة سنة دراسية</Button>
//             <ul>
//               {academicYears.map((year) => (
//                 <li key={year._id}>{year.name}</li>
//               ))}
//             </ul>
//           </Card>
//           <Card title="التخصصات" description="إدارة التخصصات">
//             <Button>إضافة تخصص</Button>
//             <ul>
//               {specializations.map((spec) => (
//                 <li key={spec._id}>{spec.name}</li>
//               ))}
//             </ul>
//           </Card>
//         </div>
//       )}

//       {activeTab === 'content' && (
//         <Card title="إدارة المحتوى" description="إدارة الكتب والمقالات">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th>العنوان</th>
//                 <th>النوع</th>
//                 <th>المؤلف</th>
//                 <th>الكلية</th>
//                 <th>الإجراءات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {content.map((item) => (
//                 <tr key={item._id}>
//                   <td>{item.title}</td>
//                   <td>{item.content_type}</td>
//                   <td>{item.author}</td>
//                   <td>{item.college.name}</td>
//                   <td>
//                     <Button
//                       onClick={() => handleContentDelete(item._id)}
//                       variant="destructive"
//                     >
//                       حذف
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Card>
//       )}

//       {activeTab === 'stats' && (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <Card title="إجمالي المستخدمين">
//             <div className="text-2xl font-bold">{users.length}</div>
//           </Card>
//           <Card title="إجمالي المحتوى">
//             <div className="text-2xl font-bold">{content.length}</div>
//           </Card>
//           <Card title="إجمالي الكليات">
//             <div className="text-2xl font-bold">{colleges.length}</div>
//           </Card>
//           <Card title="إجمالي الكتب">
//             <div className="text-2xl font-bold">
//               {content.filter(item => item.content_type === 'book').length}
//             </div>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import PublisherApplicationForm from '../components/PublisherApplicationForm';
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Tab = ({ children, isActive, onClick }) => (
//   <button
//     className={`px-4 py-2 rounded-t-lg ${
//       isActive
//         ? 'bg-[#8D493A] text-[#F8EDE3]'
//         : 'bg-[#D0B8A8] text-[#8D493A] hover:bg-[#DFD3C3]'
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// const Card = ({ children, title, description }) => (
//   <div className="bg-[#F8EDE3] rounded-lg p-4 mb-4 shadow-md">
//     <h3 className="text-xl font-bold text-[#8D493A]">{title}</h3>
//     <p className="text-[#8D493A] mb-2">{description}</p>
//     {children}
//   </div>
// );

// const Button = ({ children, onClick, variant = 'default' }) => (
//   <button
//     className={`px-4 py-2 rounded ${
//       variant === 'destructive'
//         ? 'bg-red-500 text-[#F8EDE3] hover:bg-red-600'
//         : 'bg-[#8D493A] text-[#F8EDE3] hover:bg-[#7A3E32]'
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');
//   const [users, setUsers] = useState([]);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [content, setContent] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [isPublisherFormOpen, setIsPublisherFormOpen] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     // Simulating data fetching
//     setTimeout(() => {
//       setUsers([{ _id: 1, username: 'user1', email: 'user1@example.com', role: 'user', isActivated: true }]);
//       setColleges([{ _id: 1, name: 'Engineering College' }]);
//       setAcademicYears([{ _id: 1, name: '2023-2024' }]);
//       setSpecializations([{ _id: 1, name: 'Software Engineering' }]);
//       setContent([{ _id: 1, title: 'Programming Book', content_type: 'book', author: 'John Doe', college: { name: 'Engineering College' } }]);
//       setLoading(false);
//     }, 1000);
//   };

//   const handleUserStatusUpdate = (userId, isActive) => {
//     console.log(`Updating user ${userId} status to ${isActive}`);
//     fetchData();
//   };

//   const handleContentDelete = (contentId) => {
//     console.log(`Deleting content ${contentId}`);
//     fetchData();
//   };

//   if (loading) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3]">Loading...</div>;
//   if (error) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3] text-red-500">{error}</div>;

//   const productivityData = [
//     { name: 'Mon', research: 4, design: 2 },
//     { name: 'Tue', research: 3, design: 1 },
//     { name: 'Wed', research: 2, design: 3 },
//     { name: 'Thu', research: 4, design: 4 },
//     { name: 'Fri', research: 3, design: 2 },
//     { name: 'Sat', research: 1, design: 1 },
//     { name: 'Sun', research: 2, design: 3 },
//   ];
//   return (
//     <div className="min-h-screen bg-[#DFD3C3] p-4">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-64 bg-[#F8EDE3] rounded-lg p-4 mr-4">
//           <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Dashboard</h2>
//           <ul>
//             <li className="mb-2">
//               <button
//                 className={`w-full text-left p-2 rounded ${
//                   activeTab === 'users' ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
//                 }`}
//                 onClick={() => setActiveTab('users')}
//               >
//                 Users
//               </button>
//             </li>
//             <li className="mb-2">
//               <button
//                 className={`w-full text-left p-2 rounded ${
//                   activeTab === 'publisher-apps' ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
//                 }`}
//                 onClick={() => setActiveTab('publisher-apps')}
//               >
//                 Publisher Applications
//               </button>
//             </li>
//             <li className="mb-2">
//               <button
//                 className={`w-full text-left p-2 rounded ${
//                   activeTab === 'academic' ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
//                 }`}
//                 onClick={() => setActiveTab('academic')}
//               >
//                 Academic Structure
//               </button>
//             </li>
//             <li className="mb-2">
//               <button
//                 className={`w-full text-left p-2 rounded ${
//                   activeTab === 'content' ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
//                 }`}
//                 onClick={() => setActiveTab('content')}
//               >
//                 Content
//               </button>
//             </li>
//             <li className="mb-2">
//               <button
//                 className={`w-full text-left p-2 rounded ${
//                   activeTab === 'stats' ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
//                 }`}
//                 onClick={() => setActiveTab('stats')}
//               >
//                 Statistics
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1">
//           <div className="bg-[#F8EDE3] rounded-lg p-4 mb-4">
//             <h1 className="text-3xl font-bold text-[#8D493A] mb-4">Admin Dashboard</h1>

//             {activeTab === 'users' && (
//               <Card title="User Management" description="Manage user accounts and roles">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-[#D0B8A8] text-[#8D493A]">
//                         <th className="p-2">Username</th>
//                         <th className="p-2">Email</th>
//                         <th className="p-2">Role</th>
//                         <th className="p-2">Status</th>
//                         <th className="p-2">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {users.map((user) => (
//                         <tr key={user._id} className="border-b border-[#D0B8A8]">
//                           <td className="p-2">{user.username}</td>
//                           <td className="p-2">{user.email}</td>
//                           <td className="p-2">{user.role}</td>
//                           <td className="p-2">{user.isActivated ? 'Active' : 'Inactive'}</td>
//                           <td className="p-2">
//                             <Button
//                               onClick={() => handleUserStatusUpdate(user._id, !user.isActivated)}
//                               variant={user.isActivated ? "destructive" : "default"}
//                             >
//                               {user.isActivated ? 'Deactivate' : 'Activate'}
//                             </Button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Card>
//             )}

//             {activeTab === 'publisher-apps' && (
//               <div>
//                 {/* <Button onClick={() => setIsPublisherFormOpen(true)}>Open Publisher Application Form</Button> */}
//                 <PublisherApplicationForm isOpen={isPublisherFormOpen} onClose={() => setIsPublisherFormOpen(false)} />
//               </div>
//             )}

//             {activeTab === 'academic' && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Card title="Colleges" description="Manage colleges">
//                   <Button>Add College</Button>
//                   <ul className="mt-2">
//                     {colleges.map((college) => (
//                       <li key={college._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{college.name}</li>
//                     ))}
//                   </ul>
//                 </Card>
//                 <Card title="Academic Years" description="Manage academic years">
//                   <Button>Add Academic Year</Button>
//                   <ul className="mt-2">
//                     {academicYears.map((year) => (
//                       <li key={year._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{year.name}</li>
//                     ))}
//                   </ul>
//                 </Card>
//                 <Card title="Specializations" description="Manage specializations">
//                   <Button>Add Specialization</Button>
//                   <ul className="mt-2">
//                     {specializations.map((spec) => (
//                       <li key={spec._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{spec.name}</li>
//                     ))}
//                   </ul>
//                 </Card>
//               </div>
//             )}

//             {activeTab === 'content' && (
//               <Card title="Content Management" description="Manage books and articles">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-[#D0B8A8] text-[#8D493A]">
//                         <th className="p-2">Title</th>
//                         <th className="p-2">Type</th>
//                         <th className="p-2">Author</th>
//                         <th className="p-2">College</th>
//                         <th className="p-2">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {content.map((item) => (
//                         <tr key={item._id} className="border-b border-[#D0B8A8]">
//                           <td className="p-2">{item.title}</td>
//                           <td className="p-2">{item.content_type}</td>
//                           <td className="p-2">{item.author}</td>
//                           <td className="p-2">{item.college.name}</td>
//                           <td className="p-2">
//                             <Button
//                               onClick={() => handleContentDelete(item._id)}
//                               variant="destructive"
//                             >
//                               Delete
//                             </Button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Card>
//             )}

//             {activeTab === 'stats' && (
//               <div>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                   <Card title="Total Users">
//                     <div className="text-2xl font-bold text-[#8D493A]">{users.length}</div>
//                   </Card>
//                   <Card title="Total Content">
//                     <div className="text-2xl font-bold text-[#8D493A]">{content.length}</div>
//                   </Card>
//                   <Card title="Total Colleges">
//                     <div className="text-2xl font-bold text-[#8D493A]">{colleges.length}</div>
//                   </Card>
//                   <Card title="Total Books">
//                     <div className="text-2xl font-bold text-[#8D493A]">
//                       {content.filter(item => item.content_type === 'book').length}
//                     </div>
//                   </Card>
//                 </div>
//                 <Card title="Productivity" description="Weekly productivity statistics">
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={productivityData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="research" fill="#8D493A" name="Research" />
//                       <Bar dataKey="design" fill="#D0B8A8" name="Design" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Card>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import  { useState, useEffect } from 'react';
// // import axios from 'axios';

// // Custom UI Components
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

// const Table = ({ children }) => (
//   <div className="overflow-x-auto">
//     <table className="min-w-full divide-y divide-gray-200">{children}</table>
//   </div>
// );

// const TableHeader = ({ children }) => (
//   <thead className="bg-gray-50">
//     <tr>{children}</tr>
//   </thead>
// );

// const TableBody = ({ children }) => (
//   <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }) => <tr>{children}</tr>;

// const TableHead = ({ children }) => (
//   <th
//     scope="col"
//     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//   >
//     {children}
//   </th>
// );

// const TableCell = ({ children }) => (
//   <td className="px-6 py-4 whitespace-nowrap">{children}</td>
// );

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('publisher-apps');
//   const [publisherApps, setPublisherApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   useEffect(() => {
//     fetchData();
//   }, [activeTab]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       if (activeTab === 'publisher-apps') {
//         // Simulating publisher applications data
//         setPublisherApps([
//           { id: 1, name: 'John Doe', email: 'john@example.com', company: 'ABC Publishing', experience: '5 years', status: 'pending' },
//           { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Books', experience: '3 years', status: 'approved' },
//           { id: 3, name: 'Bob Johnson', email: 'bob@example.com', company: 'Best Reads', experience: '7 years', status: 'rejected' },
//         ]);
//       }
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

//   if (loading) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3]">Loading...</div>;
//   if (error) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3] text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-[#DFD3C3] p-4">
//       <div className="bg-[#F8EDE3] rounded-lg p-6 shadow-lg">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Publisher Applications</h1>
//         <p className="text-gray-600 mb-6">This is a list of latest publisher applications</p>
        
//         <div className="flex space-x-4 mb-6">
//           <Select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             options={[
//               { value: 'all', label: 'Filter by status' },
//               { value: 'pending', label: 'Pending' },
//               { value: 'approved', label: 'Approved' },
//               { value: 'rejected', label: 'Rejected' },
//             ]}
//           />
//           <Input
//             placeholder="Search by name or email"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-grow"
//           />
//         </div>

//         <Table>
//           <TableHeader>
//             <TableHead>Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Company</TableHead>
//             <TableHead>Experience</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableHeader>
//           <TableBody>
//             {filteredPublisherApps.map((app) => (
//               <TableRow key={app.id}>
//                 <TableCell>{app.name}</TableCell>
//                 <TableCell>{app.email}</TableCell>
//                 <TableCell>{app.company}</TableCell>
//                 <TableCell>{app.experience}</TableCell>
//                 <TableCell>
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     app.status === 'approved' ? 'bg-green-100 text-green-800' :
//                     app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {app.status}
//                   </span>
//                 </TableCell>
//                 <TableCell>
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
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////// code work
import { useState, useEffect } from 'react';
import PublisherApplications from '../components/tapDash/PublisherAppDash';
import SpecializationForm from '../components/Form/SpecializationForm';
import AcademicYearForm from '../components/Form/AcademicYearForm';
import AcademicSection from '../components/tapDash/AcademicSection';
// Custom UI Components (keep these as they are)
const Tab = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-t-lg ${
      isActive
        ? 'bg-[#8D493A] text-[#F8EDE3]'
        : 'bg-[#D0B8A8] text-[#8D493A] hover:bg-[#DFD3C3]'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Card = ({ children, title, description }) => (
  <div className="bg-[#F8EDE3] rounded-lg p-4 mb-4 shadow-md">
    <h3 className="text-xl font-bold text-[#8D493A]">{title}</h3>
    <p className="text-[#8D493A] mb-2">{description}</p>
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'default' }) => (
  <button
    className={`px-4 py-2 rounded ${
      variant === 'destructive'
        ? 'bg-red-500 text-[#F8EDE3] hover:bg-red-600'
        : 'bg-[#8D493A] text-[#F8EDE3] hover:bg-[#7A3E32]'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAcademicYearModal, setShowAcademicYearModal] = useState(false);
  const [collegeData, setCollegeData] = useState({
    name: '',
    nameAr: '',
    imageUrl: '',
    description: '',
  });

  const [academicYearData, setAcademicYearData] = useState({
    name: '',
    nameAr: '',
    imageUrl: '',
    description: '',
    college: '',
    order: '',
  });

  const [showSpecializationModal, setShowSpecializationModal] = useState(false);
const [specializationData, setSpecializationData] = useState({
  name: '',
  nameAr: '',
  description: '',
  college: '',
});

const handleSpecializationChange = (e) => {
  const { name, value } = e.target;
  setSpecializationData({ ...specializationData, [name]: value });
};


  const handleAcademicYearChange = (e) => {
    const { name, value } = e.target;
    setAcademicYearData({ ...academicYearData, [name]: value });
  };
    
  const handleSpecializationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/specializations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(specializationData),
      });
      if (response.ok) {
        const newSpecialization = await response.json();
        console.log('Specialization added:', newSpecialization);
        setShowSpecializationModal(false);
        fetchData(); // تحديث البيانات لعرض التخصص الجديد
      } else {
        const errorData = await response.json();
        console.error('Error adding specialization:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  



const handleAcademicYearSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/academic-years', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(academicYearData),
    });
    if (response.ok) {
      const newAcademicYear = await response.json();
      console.log('Academic year added:', newAcademicYear);
      setShowAcademicYearModal(false);
      fetchData(); // تحديث البيانات لعرض السنة الأكاديمية الجديدة
    } else {
      const errorData = await response.json();
      console.error('Error adding academic year:', errorData.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collegeData),
      });
      if (response.ok) {
        const newCollege = await response.json();
        console.log('College added:', newCollege);
        // يمكنك تحديث الحالة الخاصة بالكلية هنا أو إغلاق النموذج
        setShowModal(false);
        // يمكنك استدعاء fetchData() لجلب البيانات المحدثة
      } else {
        const errorData = await response.json();
        console.error('Error adding college:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      // استرجاع المستخدمين من الـ API
      const usersResponse = await fetch('http://localhost:5000/api/users/users');
      const usersData = await usersResponse.json();
      setUsers(usersData); // تحديث حالة المستخدمين بالبيانات المسترجعة
  
      // استرجاع الكليات
      const collegesResponse = await fetch('http://localhost:5000/api/colleges');
      const collegesData = await collegesResponse.json();
      setColleges(collegesData); // تحديث حالة الكليات
  
      // // استرجاع الأعوام الأكاديمية
      // const academicYearsResponse = await fetch('http://localhost:5000/api/academicYears');
      // const academicYearsData = await academicYearsResponse.json();
      // setAcademicYears(academicYearsData); // تحديث حالة الأعوام الأكاديمية
  
      // استرجاع التخصصات
      const specializationsResponse = await fetch('http://localhost:5000/api/specializations');
      const specializationsData = await specializationsResponse.json();
      setSpecializations(specializationsData); // تحديث حالة التخصصات
  
      // استرجاع المحتوى
      const contentResponse = await fetch('http://localhost:5000/api/content/contents');
      const contentData = await contentResponse.json();
      setContent(contentData); // تحديث حالة المحتوى
  
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };
  const handleUserStatusUpdate = async (userId, isActive) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/users/${userId}/toggle-activation`,
        {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to update user status');
      }
  
      const data = await response.json();
      console.log('Status update successful:', data);
      
      // تحديث البيانات بعد نجاح العملية
      await fetchData();
  
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const handleContentDelete = (contentId) => {
    console.log(`Deleting content ${contentId}`);
    fetchData();
  };

  if (loading) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3]">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3] text-red-500">{error}</div>;

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <Card title="User Management" description="Manage user accounts and roles ">
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
      case 'publisher-apps':
        return <PublisherApplications />;
        case 'academic':
          return <AcademicSection />;
//       case 'academic':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//            <Card title="Colleges" description="Manage colleges">
//         <Button onClick={() => setShowModal(true)}>Add College</Button>
//         <ul className="mt-2">
//           {colleges.map((college) => (
//             <li key={college._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{college.name}</li>
//           ))}
//         </ul>

//         {/* نموذج إضافة كلية */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white rounded-lg p-6">
//               <h2 className="text-lg font-bold">Add College</h2>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name En"
//                   value={collegeData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="border p-2 rounded w-full mb-4"
//                 />
//                 <input
//                   type="text"
//                   name="nameAr"
//                   placeholder="Name Ar"
//                   value={collegeData.nameAr}
//                   onChange={handleInputChange}
//                   required
//                   className="border p-2 rounded w-full mb-4"
//                 />
//                 <input
//                   type="text"
//                   name="imageUrl"
//                   placeholder="Img Url"
//                   value={collegeData.imageUrl}
//                   onChange={handleInputChange}
//                   className="border p-2 rounded w-full mb-4"
//                 />
//                 <textarea
//                   name="description"
//                   placeholder="Description"
//                   value={collegeData.description}
//                   onChange={handleInputChange}
//                   className="border p-2 rounded w-full mb-4"
//                 />
//                 <Button type="submit">Add</Button>
//                 <Button onClick={() => setShowModal(false)}>Close</Button>
//               </form>
//             </div>
//           </div>
//         )}
//       </Card>
//       <Card title="Academic Years" description="Manage academic years">
//   <Button onClick={() => setShowAcademicYearModal(true)}>Add Academic Year</Button>
//   <ul className="mt-2">
//     {academicYears.map((year) => (
//       <li key={year._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{year.name}</li>
//     ))}
//   </ul>

//   {showAcademicYearModal && (
//     <AcademicYearForm
//       colleges={colleges}
//       onClose={() => setShowAcademicYearModal(false)}
//       onSubmit={() => {
//         setShowAcademicYearModal(false);
//         fetchData();
//       }}
//     />
//   )}
// </Card>
//             <Card title="Specializations" description="Manage specializations">
//   <Button onClick={() => setShowSpecializationModal(true)}>Add Specialization</Button>
//   <ul className="mt-2">
//     {specializations.map((spec) => (
//       <li key={spec._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{spec.name}</li>
//     ))}
//   </ul>

//   {showSpecializationModal && (
//     <SpecializationForm
//       colleges={colleges}
//       onClose={() => setShowSpecializationModal(false)}
//       onSubmit={() => {
//         setShowSpecializationModal(false);
//         fetchData();
//       }}
//     />
//   )}
// </Card>

//           </div>
//         );
      case 'content':
        return (
          <Card title="Content Management" description="Manage books and articles">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#D0B8A8] text-[#8D493A]">
                    <th className="p-2">Title</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Author</th>
                    <th className="p-2">College</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {content.map((item) => (
                    <tr key={item._id} className="border-b border-[#D0B8A8]">
                      <td className="p-2">{item.title}</td>
                      <td className="p-2">{item.content_type}</td>
                      <td className="p-2">{item.author}</td>
                      <td className="p-2">{item.college.name}</td>
                      <td className="p-2">
                        <Button
                          onClick={() => handleContentDelete(item._id)}
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );
      case 'stats':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Card title="Total Users">
                <div className="text-2xl font-bold text-[#8D493A]">{users.length}</div>
              </Card>
              <Card title="Total Content">
                <div className="text-2xl font-bold text-[#8D493A]">{content.length}</div>
              </Card>
              <Card title="Total Colleges">
                <div className="text-2xl font-bold text-[#8D493A]">{colleges.length}</div>
              </Card>
              <Card title="Total Books">
                <div className="text-2xl font-bold text-[#8D493A]">
                  {content.filter(item => item.content_type === 'book').length}
                </div>
              </Card>
            </div>
            <Card title="Productivity" description="Weekly productivity statistics">
              {/* Add your chart component here */}
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#DFD3C3] p-4 ">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#F8EDE3] rounded-lg p-4 mr-4 mt-32">
          <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Dashboard</h2>
          <ul>
            {['users', 'publisher-apps', 'academic', 'content', 'stats'].map((tab) => (
              <li key={tab} className="mb-2">
                <button
                  className={`w-full text-left p-2 rounded ${
                    activeTab === tab ? 'bg-[#8D493A] text-[#F8EDE3]' : 'text-[#8D493A] hover:bg-[#D0B8A8]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 ">
          <div className="bg-[#F8EDE3] rounded-lg p-4 mb-4 mt-32">
            <h1 className="text-3xl font-bold text-[#8D493A] mb-4">Admin Dashboard</h1>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
////////////////////////////////////////////////////////////////////////////
// Dashboard.js
// import { useState } from 'react';
// import Academic from '../components/ResourseDash';
// import Content from '../components/ContentDash';
// import Users from '../components/ContentDash'; 
// // import States from '../components/StatusDash'; 

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('academic');

//   return (
//     <div>
//       <div className="tabs">
//         <button onClick={() => setActiveTab('academic')}>Academic</button>
//         <button onClick={() => setActiveTab('content')}>Content</button>
//         <button onClick={() => setActiveTab('users')}>Users</button>
//         <button onClick={() => setActiveTab('states')}>States</button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'academic' && <Academic />}
//         {activeTab === 'content' && <Content />}
//         {activeTab === 'users' && <Users />}
//         {activeTab === 'states' && <States />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// Dashboard.js////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import Academic from '../components/ResourseDash';
// import Content from '../components/ContentDash';
// import Users from '../components/UserManagement'; // Assuming you have this component
// import States from '../components/StatusDash'; // Assuming you have this component

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('academic');

//   return (
//     <div>
//       <div className="tabs">
//         <button onClick={() => setActiveTab('academic')}>Academic</button>
//         <button onClick={() => setActiveTab('content')}>Content</button>
//         <button onClick={() => setActiveTab('users')}>Users</button>
//         <button onClick={() => setActiveTab('states')}>States</button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'academic' && <Academic />}
//         {activeTab === 'content' && <Content />}
//         {activeTab === 'users' && <Users />}
//         {activeTab === 'states' && <States />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
/////////////////////////////////////////////////////////////////////////////////////////////////
// import  { useState, useEffect } from 'react';
// import UsersTab from '../components/UserManagement';
// import AcademicTab from '../components/ResourseDash';
// import ContentTab from '../components/ContentDash';
// import StatsTab from '../components/StatusDash';
// import PublisherApplications from '../components/PublisherApplicationForm'; // Assuming this component is imported

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');
//   const [users, setUsers] = useState([]);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [content, setContent] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setTimeout(() => {
//       setUsers([{ _id: 1, username: 'user1', email: 'user1@example.com', role: 'user', isActivated: true }]);
//       setColleges([{ _id: 1, name: 'Engineering College' }]);
//       setAcademicYears([{ _id: 1, name: '2023-2024' }]);
//       setSpecializations([{ _id: 1, name: 'Software Engineering' }]);
//       setContent([{ _id: 1, title: 'Programming Book', content_type: 'book', author: 'John Doe', college: { name: 'Engineering College' } }]);
//       setLoading(false);
//     }, 1000);
//   };

//   const handleUserStatusUpdate = (userId, isActive) => {
//     console.log(`Updating user ${userId} status to ${isActive}`);
//     fetchData();
//   };

//   const handleContentDelete = (contentId) => {
//     console.log(`Deleting content ${contentId}`);
//     fetchData();
//   };

//   if (loading) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3]">Loading...</div>;
//   if (error) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3] text-red-500">{error}</div>;

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'users':
//         return <UsersTab users={users} handleUserStatusUpdate={handleUserStatusUpdate} />;
//       case 'academic':
//         return <AcademicTab colleges={colleges} academicYears={academicYears} specializations={specializations} />;
//       case 'content':
//         return <ContentTab content={content} handleContentDelete={handleContentDelete} />;
//       case 'stats':
//         return <StatsTab users={users} content={content} colleges={colleges} />;
//       case 'applications':
//         return <PublisherApplications />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-center">
//         <button onClick={() => setActiveTab('users')}>Users</button>
//         <button onClick={() => setActiveTab('academic')}>Academic</button>
//         <button onClick={() => setActiveTab('content')}>Content</button>
//         <button onClick={() => setActiveTab('stats')}>Statistics</button>
//         <button onClick={() => setActiveTab('applications')}>Applications</button>
//       </div>
//       <div className="mt-6">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
