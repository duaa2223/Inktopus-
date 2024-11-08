// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // استدعاء API للحصول على بيانات المستخدم
//         const userResponse = await axios.get('/api/users/profile', {
//           withCredentials: true,
//         });
//         setUserProfile(userResponse.data);

//         // استدعاء API للحصول على طلبات المستخدم
//         const ordersResponse = await axios.get('/api/payment/user-orders', {
//             withCredentials: true,
//           });
          
//         setOrders(ordersResponse.data);

//         if (isMounted) {
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);

//         if (isMounted) {
//           setError(
//             err.response?.data?.message || 'Failed to fetch user data'
//           );
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">

//         {/* محتوى الملف الشخصي */}
//         <div className="mt-8">
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="border-b p-6">
//               <div className="text-xl font-semibold text-[#8D493A]">
//                 Past Orders
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               {orders.length > 0 ? (
//                 orders.map((order, index) => (
//                   <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                     <div className="flex items-center gap-4">
//                       <div className="flex-shrink-0">
                  
//                       </div>
//                       <div className="flex-grow">
//                         <h3 className="font-semibold text-[#8D493A]">
//                           Order #{order._id}
//                         </h3>
//                         <p className="text-sm text-[#D0B8A8]">
//                           Placed on {new Date(order.createdAt).toLocaleDateString()}
//                         </p>
//                         <p className="text-sm font-medium text-[#8D493A]">
//                           Total: ${order.total.toFixed(2)}
//                         </p>
//                       </div>
//                       <a
//                         href={`/orders/${order._id}`}
//                         className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                       >
//                         View Order
//                       </a>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-[#D0B8A8]">
//                   No past orders found
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BookOpen, Download, Calendar, Package, CreditCard } from 'lucide-react';

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserProfile = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await axios.get('/api/users/profile', {
//           withCredentials: true,
//         });

//         if (isMounted) {
//           setUserProfile(response.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user profile:', err);

//         if (isMounted) {
//           setError(
//             err.response?.data?.message ||
//             'Failed to fetch user profile'
//           );
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserProfile();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   const { username, email, profilePicture, role, bio, savedBooks, publishedBooks, yearsOfExperience } = userProfile;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-[#8D493A] rounded-full flex items-center justify-center text-white font-bold text-2xl">
//                     {username.charAt(0).toUpperCase()}
//                   </div>
//                   {profilePicture && (
//                     <img
//                       src={profilePicture}
//                       alt="Profile"
//                       className="absolute w-16 h-16 rounded-full object-cover"
//                     />
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-[#8D493A] font-bold text-2xl">{username}</h2>
//                   <p className="text-[#D0B8A8] text-sm">{role}</p>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   onClick={() => navigate('/orders')}
//                   className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                 >
//                   View Orders
//                 </button>
//               </div>
//             </div>
//             <p className="text-[#D0B8A8]">{bio}</p>
//             <div className="mt-6 border-t pt-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Saved Books</p>
//                   <p className="font-medium">{savedBooks.length}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Published Books</p>
//                   <p className="font-medium">{publishedBooks.length}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Years of Experience</p>
//                   <p className="font-medium">{yearsOfExperience}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Email</p>
//                   <p className="font-medium">{email}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8">
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="border-b p-6">
//               <div className="text-xl font-semibold text-[#8D493A]">
//                 Saved Books
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               {savedBooks.length > 0 ? (
//                 savedBooks.map((book, index) => (
//                   <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                     <div className="flex items-center gap-4">
//                       <div className="flex-shrink-0">
//                         <BookOpen className="h-12 w-12 text-[#8D493A]" />
//                       </div>
//                       <div className="flex-grow">
//                         <h3 className="font-semibold text-[#8D493A]">
//                           {book.title}
//                         </h3>
//                         <p className="text-sm text-[#D0B8A8]">
//                           {book.author}
//                         </p>
//                         <p className="text-sm font-medium text-[#8D493A]">
//                           ${book.price.toFixed(2)}
//                         </p>
//                       </div>
//                       {book.file_url && (
//                         <a
//                           href={book.file_url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                         >
//                           <Download className="h-4 w-4" />
//                           Download
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-[#D0B8A8]">
//                   No saved books found
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
//////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BookOpen, Download, Calendar, Package, CreditCard } from 'lucide-react';

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // جلب بيانات الملف الشخصي والطلبات معًا
//         const [userResponse, ordersResponse] = await Promise.all([
//           axios.get('/api/users/profile', { withCredentials: true }),
//           axios.get('/api/payment/user-orders', { withCredentials: true }),
//         ]);

//         if (isMounted) {
//           setUserProfile(userResponse.data);
//           setOrders(ordersResponse.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         if (isMounted) {
//           setError(err.response?.data?.message || 'Failed to fetch user data');
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-[#8D493A] rounded-full flex items-center justify-center text-white font-bold text-2xl">
//                     {userProfile.username.charAt(0).toUpperCase()}
//                   </div>
//                   {userProfile.profilePicture && (
//                     <img
//                       src={userProfile.profilePicture}
//                       alt="Profile"
//                       className="absolute w-16 h-16 rounded-full object-cover"
//                     />
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-[#8D493A] font-bold text-2xl">{userProfile.username}</h2>
//                   <p className="text-[#D0B8A8] text-sm">{userProfile.role}</p>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   onClick={() => navigate('/orders')}
//                   className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                 >
//                   View Orders
//                 </button>
//               </div>
//             </div>
//             <p className="text-[#D0B8A8]">{userProfile.bio}</p>
//             <div className="mt-6 border-t pt-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Saved Books</p>
//                   <p className="font-medium">{userProfile.savedBooks.length}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Published Books</p>
//                   <p className="font-medium">{userProfile.publishedBooks.length}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Years of Experience</p>
//                   <p className="font-medium">{userProfile.yearsOfExperience}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-[#D0B8A8]">Email</p>
//                   <p className="font-medium">{userProfile.email}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* قائمة الطلبات السابقة */}
//         <div className="mt-8">
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="border-b p-6">
//               <div className="text-xl font-semibold text-[#8D493A]">
//                 Past Orders
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               {orders.length > 0 ? (
//                 orders.map((order, index) => (
//                   <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                     <div className="flex items-center gap-4">
//                       <div className="flex-grow">
//                         <h3 className="font-semibold text-[#8D493A]">
//                           Order #{order._id}
//                         </h3>
//                         <p className="text-sm text-[#D0B8A8]">
//                           Placed on {new Date(order.createdAt).toLocaleDateString()}
//                         </p>
//                         <p className="text-sm font-medium text-[#8D493A]">
//                           Total: ${order.total.toFixed(2)}
//                         </p>
//                       </div>
                    
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-[#D0B8A8]">
//                   No past orders found
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
///////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BookOpen, Download, Calendar, Package, CreditCard } from 'lucide-react';

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('profile');
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch user profile and orders together
//         const [userResponse, ordersResponse] = await Promise.all([
//           axios.get('/api/users/profile', { withCredentials: true }),
//           axios.get('/api/payment/user-orders', { withCredentials: true }),
//         ]);

//         if (isMounted) {
//           setUserProfile(userResponse.data);
//           setOrders(ordersResponse.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         if (isMounted) {
//           setError(err.response?.data?.message || 'Failed to fetch user data');
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="px-6 py-4 bg-[#8D493A] text-white">
//             <h1 className="text-2xl font-bold">Hello, {userProfile.username}!</h1>
//             <p className="text-[#D0B8A8]">Welcome to your Books & Learning profile</p>
//           </div>
//           <div className="px-6 py-4">
//             <div className="flex space-x-4 border-b">
//               <button
//                 className={`pb-2 font-medium ${
//                   activeTab === 'profile'
//                     ? 'text-[#8D493A] border-b-2 border-[#8D493A]'
//                     : 'text-[#D0B8A8] hover:text-[#8D493A]'
//                 }`}
//                 onClick={() => handleTabChange('profile')}
//               >
//                 My Profile
//               </button>
//               <button
//                 className={`pb-2 font-medium ${
//                   activeTab === 'orders'
//                     ? 'text-[#8D493A] border-b-2 border-[#8D493A]'
//                     : 'text-[#D0B8A8] hover:text-[#8D493A]'
//                 }`}
//                 onClick={() => handleTabChange('orders')}
//               >
//                 Past Orders
//               </button>
//             </div>
//             {activeTab === 'profile' && (
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       <div className="w-16 h-16 bg-[#8D493A] rounded-full flex items-center justify-center text-white font-bold text-2xl">
//                         {userProfile.username.charAt(0).toUpperCase()}
//                       </div>
//                       {userProfile.profilePicture && (
//                         <img
//                           src={userProfile.profilePicture}
//                           alt="Profile"
//                           className="absolute w-16 h-16 rounded-full object-cover"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       <h2 className="text-[#8D493A] font-bold text-2xl">
//                         {userProfile.username}
//                       </h2>
//                       <p className="text-[#D0B8A8] text-sm">{userProfile.role}</p>
//                     </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => navigate('/profile/edit')}
//                       className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                     >
//                       Edit Profile
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-[#D0B8A8]">{userProfile.bio}</p>
//                 <div className="mt-6 border-t pt-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-[#D0B8A8]">Saved Books</p>
//                       <p className="font-medium">{userProfile.savedBooks.length}</p>
//                     </div>
//                     {/* <div>
//                       <p className="text-sm text-[#D0B8A8]">Published Books</p>
//                       <p className="font-medium">{userProfile.publishedBooks.length}</p>
//                     </div> */}
//                     {/* <div>
//                       <p className="text-sm text-[#D0B8A8]">Years of Experience</p>
//                       <p className="font-medium">{userProfile.yearsOfExperience}</p>
//                     </div> */}
//                     <div>
//                       <p className="text-sm text-[#D0B8A8]">Email</p>
//                       <p className="font-medium">{userProfile.email}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {activeTab === 'orders' && (
//               <div className="mt-4">
//                 <div className="bg-white rounded-lg shadow-md">
//                   <div className="p-6">
//                     <div className="text-xl font-semibold text-[#8D493A]">
//                       Past Orders
//                     </div>
//                   </div>
//                   <div className="p-6 space-y-4">
//                     {orders.length > 0 ? (
//                       orders.map((order, index) => (
//                         <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                           <div className="flex items-center justify-between">
//                             <div>
//                               <h3 className="font-semibold text-[#8D493A]">
//                                 Order #{order._id}
//                               </h3>
//                               <p className="text-sm text-[#D0B8A8]">
//                                 Placed on {new Date(order.createdAt).toLocaleDateString()}
//                               </p>
//                               <p className="text-sm font-medium text-[#8D493A]">
//                                 Total: ${order.total.toFixed(2)}
//                               </p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {order.items.map((item, itemIndex) => (
//                                 <div key={itemIndex} className="bg-white rounded-lg p-2">
//                                   <div className="flex items-center gap-2">
//                                     <BookOpen className="h-6 w-6 text-[#8D493A]" />
//                                     <div>
//                                       <p className="font-medium text-[#8D493A]">
//                                         {item.content.title}
//                                       </p>
//                                       <p className="text-sm text-[#D0B8A8]">
//                                         Quantity: {item.quantity}
//                                       </p>
//                                       <p className="text-sm text-[#D0B8A8]">
//                                         Unit Price: ${item.price.toFixed(2)}
//                                       </p>
//                                     </div>
//                                     <a
//                                       href={item.content.file_url}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                                     >
//                                       <Download className="h-4 w-4" />
//                                       Download
//                                     </a>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-center text-[#D0B8A8]">
//                         No past orders found
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
/////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { BookOpen, Download, Calendar, Package, CreditCard } from 'lucide-react';

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch user profile and orders together
//         const [userResponse, ordersResponse] = await Promise.all([
//           axios.get('/api/users/profile', { withCredentials: true }),
//           axios.get('/api/payment/user-orders', { withCredentials: true }),
//         ]);

//         if (isMounted) {
//           setUserProfile(userResponse.data);
//           setOrders(ordersResponse.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         if (isMounted) {
//           setError(err.response?.data?.message || 'Failed to fetch user data');
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handlePasswordUpdate = async () => {
//     try {
//       await axios.put('/api/users/users/update-password', {
//         currentPassword,
//         newPassword,
//       }, { withCredentials: true });
//       alert('Password updated successfully');
//       setCurrentPassword('');
//       setNewPassword('');
//     } catch (err) {
//       console.error('Error updating password:', err);
//       alert(err.response?.data?.message || 'Failed to update password');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="px-6 py-4 bg-[#8D493A] text-white">
//             <h1 className="text-2xl font-bold">Hello, {userProfile.username}!</h1>
//             <p className="text-[#D0B8A8]">Welcome to your Books & Learning profile</p>
//           </div>
//           <div className="px-6 py-4">
//             <div className="flex space-x-4 border-b">
//               <button
//                 className={`pb-2 font-medium ${
//                   activeTab === 'profile'
//                     ? 'text-[#8D493A] border-b-2 border-[#8D493A]'
//                     : 'text-[#D0B8A8] hover:text-[#8D493A]'
//                 }`}
//                 onClick={() => handleTabChange('profile')}
//               >
//                 My Profile
//               </button>
//               <button
//                 className={`pb-2 font-medium ${
//                   activeTab === 'orders'
//                     ? 'text-[#8D493A] border-b-2 border-[#8D493A]'
//                     : 'text-[#D0B8A8] hover:text-[#8D493A]'
//                 }`}
//                 onClick={() => handleTabChange('orders')}
//               >
//                 Past Orders
//               </button>
//             </div>
//             {activeTab === 'profile' && (
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       <div className="w-16 h-16 bg-[#8D493A] rounded-full flex items-center justify-center text-white font-bold text-2xl">
//                         {userProfile.username.charAt(0).toUpperCase()}
//                       </div>
//                       {userProfile.profilePicture && (
//                         <img
//                           src={userProfile.profilePicture}
//                           alt="Profile"
//                           className="absolute w-16 h-16 rounded-full object-cover"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       <h2 className="text-[#8D493A] font-bold text-2xl">
//                         {userProfile.username}
//                       </h2>
//                       <p className="text-[#D0B8A8] text-sm">{userProfile.role}</p>
//                     </div>
//                   </div>
//                   <div>
//                     {/* <button
//                       onClick={() => navigate('/profile/edit')}
//                       className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                     >
//                       Edit Profile
//                     </button> */}
//                   </div>
//                 </div>
//                 <p className="text-[#D0B8A8]">{userProfile.bio}</p>
//                 <div className="mt-6 border-t pt-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     {/* <div>
//                       <p className="text-sm text-[#D0B8A8]">Saved Books</p>
//                       <p className="font-medium">{userProfile.savedBooks.length}</p>
//                     </div> */}
//                     <div>
//                       <p className="text-sm text-[#D0B8A8]">Email</p>
//                       <p className="font-medium">{userProfile.email}</p>
//                     </div>
//                     {/* <div>
//                       <p className="text-sm text-[#D0B8A8]">Password</p>
//                       <div className="flex items-center gap-4">
//                         <p className="font-medium">{userProfile.password}</p>
//                         <button
//                           onClick={() => navigate('/profile/edit')}
//                           className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                         >
//                           Edit
//                         </button>
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//                 <div className="mt-6 border-t pt-6">
//                   <h2 className="text-[#8D493A] font-bold text-xl mb-4">Update Password</h2>
//                   <div className="grid grid-cols-1 gap-4">
//                     <div>
//                       <label htmlFor="current-password" className="text-sm text-[#D0B8A8]">
//                         Current Password
//                       </label>
//                       <input
//                         type="password"
//                         id="current-password"
//                         value={currentPassword}
//                         onChange={(e) => setCurrentPassword(e.target.value)}
//                         className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="new-password" className="text-sm text-[#D0B8A8]">
//                         New Password
//                       </label>
//                       <input
//                         type="password"
//                         id="new-password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                       />
//                     </div>
//                     <button
//                       onClick={handlePasswordUpdate}
//                       className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                     >
//                       Update Password
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {activeTab === 'orders' && (
//               <div className="mt-4">
//                 <div className="bg-white rounded-lg shadow-md">
//                   <div className="p-6">
//                     <div className="text-xl font-semibold text-[#8D493A]">
//                       Past Orders
//                     </div>
//                   </div>
//                   <div className="p-6 space-y-4">
//                     {orders.length > 0 ? (
//                       orders.map((order, index) => (
//                         <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                           <div className="flex items-center justify-between">
//                             <div>
//                               <h3 className="font-semibold text-[#8D493A]">
//                                 Order #{order._id}
//                               </h3>
//                               <p className="text-sm text-[#D0B8A8]">
//                                 Placed on {new Date(order.createdAt).toLocaleDateString()}
//                               </p>
//                               <p className="text-sm font-medium text-[#8D493A]">
//                                 Total: ${order.total.toFixed(2)}
//                               </p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {order.items.map((item, itemIndex) => (
//                                 <div key={itemIndex} className="bg-white rounded-lg p-2">
//                                   <div className="flex items-center gap-2">
//                                     <BookOpen className="h-6 w-6 text-[#8D493A]" />
//                                     <div>
//                                       <p className="font-medium text-[#8D493A]">
//                                         {item.content.title}
//                                       </p>
//                                       <p className="text-sm text-[#D0B8A8]">
//                                         Quantity: {item.quantity}
//                                       </p>
//                                       <p className="text-sm text-[#D0B8A8]">
//                                         Unit Price: ${item.price.toFixed(2)}
//                                       </p>
//                                     </div>
                                    
//                                     <a
//                                  href={item.content.file_url}
//                                  target="_blank"
//                                  rel="noopener noreferrer"
//                                  className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                                    >
//                                    <Download className="h-4 w-4" />
//                                           Download
//                                  </a>

//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-center text-[#D0B8A8]">
//                         No past orders found
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
//////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Book, Coffee, Download, User, BookOpen } from 'lucide-react';
// import axios from 'axios';

// const TabsList = ({ children }) => (
//   <div className="flex bg-white rounded-lg p-1 mb-6 w-fit">
//     {children}
//   </div>
// );

// const TabsTrigger = ({ value, active, onClick, children }) => (
//   <button
//     onClick={() => onClick(value)}
//     className={`flex items-center px-6 py-2 rounded-md transition-colors ${
//       active ? 'bg-[#8D493A] text-white' : 'text-gray-600 hover:bg-gray-100'
//     }`}
//   >
//     {children}
//   </button>
// );

// const UserProfilePage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const [userResponse, ordersResponse] = await Promise.all([
//           axios.get('/api/users/profile', { withCredentials: true }),
//           axios.get('/api/payment/user-orders', { withCredentials: true }),
//         ]);

//         if (isMounted) {
//           setUserProfile(userResponse.data);
//           setOrders(ordersResponse.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         if (isMounted) {
//           setError(err.response?.data?.message || 'Failed to fetch user data');
//           setLoading(false);
//         }
//       }
//     };

//     fetchUserData();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const handlePasswordUpdate = async () => {
//     try {
//       await axios.put('/api/users/users/update-password', {
//         currentPassword,
//         newPassword,
//       }, { withCredentials: true });
//       alert('Password updated successfully');
//       setCurrentPassword('');
//       setNewPassword('');
//     } catch (err) {
//       console.error('Error updating password:', err);
//       alert(err.response?.data?.message || 'Failed to update password');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8EDE3]">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//         <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//           <p className="font-bold mb-2">Error loading user profile:</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] p-8">
//         <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
//           No user profile found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8EDE3]">
//       {/* Hero Banner */}
//       <div className="relative h-48 bg-[#8D493A] overflow-visible">
//         <div className="absolute inset-0 flex items-center justify-center opacity-20">
//           <div className="flex gap-8">
//             <Coffee size={64} color="white" />
//             <Book size={64} color="white" />
//             <BookOpen size={64} color="white" />
//           </div>
//         </div>
//         <div className="absolute -bottom-12 left-8">
//           <div className="w-24 h-24 bg-[#D0B8A8] rounded-full border-4 border-white flex items-center justify-center">
//             <span className="text-3xl text-white">
//               {userProfile.username.charAt(0).toUpperCase()}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-4 mt-20">
//         <div className="max-w-3xl mx-auto">
//           <TabsList>
//             <TabsTrigger 
//               value="profile" 
//               active={activeTab === 'profile'} 
//               onClick={() => setActiveTab('profile')}
//             >
//               <User className="mr-2" size={18} />
//               Profile
//             </TabsTrigger>
//             <TabsTrigger 
//               value="orders" 
//               active={activeTab === 'orders'} 
//               onClick={() => setActiveTab('orders')}
//             >
//               <Book className="mr-2" size={18} />
//               Orders
//             </TabsTrigger>
//           </TabsList>

//           {activeTab === 'profile' && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-lg shadow p-6 mb-6"
//             >
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-2xl font-semibold text-[#8D493A] mb-4">Profile Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex items-center">
//                       <Mail className="mr-2 text-[#8D493A]" />
//                       <span className="text-gray-600">{userProfile.email}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <User className="mr-2 text-[#8D493A]" />
//                       <span className="text-gray-600">{userProfile.username}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div>
//                   <h2 className="text-xl font-semibold text-[#8D493A] mb-2">Bio</h2>
//                   <p className="text-gray-600">{userProfile.bio || 'No bio available'}</p>
//                 </div> */}
                
//                 <div className="border-t pt-6">
//                   <h2 className="text-[#8D493A] font-bold text-xl mb-4">Update Password</h2>
//                   <div className="grid grid-cols-1 gap-4 max-w-md">
//                     <div>
//                       <label htmlFor="current-password" className="text-sm text-gray-600">
//                         Current Password
//                       </label>
//                       <input
//                         type="password"
//                         id="current-password"
//                         value={currentPassword}
//                         onChange={(e) => setCurrentPassword(e.target.value)}
//                         className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="new-password" className="text-sm text-gray-600">
//                         New Password
//                       </label>
//                       <input
//                         type="password"
//                         id="new-password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                       />
//                     </div>
//                     <button
//                       onClick={handlePasswordUpdate}
//                       className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
//                     >
//                       Update Password
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {activeTab === 'orders' && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-lg shadow p-6 mb-6"
//             >
//               <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Past Orders</h2>
//               <div className="space-y-4">
//                 {orders.length > 0 ? (
//                   orders.map((order, index) => (
//                     <div key={index} className="bg-[#F8EDE3] rounded-lg p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="font-semibold text-[#8D493A]">
//                             Order #{order._id}
//                           </h3>
//                           <p className="text-sm text-gray-600">
//                             Placed on {new Date(order.createdAt).toLocaleDateString()}
//                           </p>
//                           <p className="text-sm font-medium text-[#8D493A]">
//                             Total: ${order.total.toFixed(2)}
//                           </p>
//                         </div>
//                         <div className="flex flex-col gap-4">
//                           {order.items.map((item, itemIndex) => (
//                             <div key={itemIndex} className="bg-white rounded-lg p-4">
//                               <div className="flex items-center gap-4">
//                                 <BookOpen className="h-6 w-6 text-[#8D493A]" />
//                                 <div>
//                                   <p className="font-medium text-[#8D493A]">{item.content.title}</p>
//                                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                                   <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
//                                 </div>
//                                 <a
//                                   href={item.content.file_url}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
//                                 >
//                                   <Download className="h-4 w-4" />
//                                   Download
//                                 </a>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center text-gray-600">
//                     No past orders found
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;
///////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Book, Coffee, Download, User, BookOpen } from 'lucide-react';
import axios from 'axios';

const TabsList = ({ children }) => (
  <div className="flex bg-white rounded-lg p-1 mb-6 w-fit">
    {children}
  </div>
);

const TabsTrigger = ({ value, active, onClick, children }) => (
  <button
    onClick={() => onClick(value)}
    className={`flex items-center px-6 py-2 rounded-md transition-colors ${
      active ? 'bg-[#8D493A] text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [userResponse, ordersResponse] = await Promise.all([
          axios.get('/api/users/profile', { withCredentials: true }),
          axios.get('/api/payment/user-orders', { withCredentials: true }),
        ]);

        if (isMounted) {
          setUserProfile(userResponse.data);
          setOrders(ordersResponse.data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        if (isMounted) {
          setError(err.response?.data?.message || 'Failed to fetch user data');
          setLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePasswordUpdate = async () => {
    try {
      await axios.put('/api/users/users/update-password', {
        currentPassword,
        newPassword,
      }, { withCredentials: true });
      alert('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.error('Error updating password:', err);
      alert(err.response?.data?.message || 'Failed to update password');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8EDE3]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
        <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8EDE3] p-8">
        <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold mb-2">Error loading user profile:</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-[#F8EDE3] p-8">
        <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          No user profile found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8EDE3]">
      {/* Hero Banner */}
      <div className="relative h-48 bg-[#8D493A] overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="flex gap-8">
            <Coffee size={64} color="white" />
            <Book size={64} color="white" />
            <BookOpen size={64} color="white" />
          </div>
        </div>
        <div className="absolute -bottom-12 left-8">
          <div className="w-24 h-24 bg-[#D0B8A8] rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-3xl text-white">
              {userProfile.username.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <TabsList>
            <TabsTrigger 
              value="profile" 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
            >
              <User className="mr-2" size={18} />
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              active={activeTab === 'orders'} 
              onClick={() => setActiveTab('orders')}
            >
              <Book className="mr-2" size={18} />
              Orders
            </TabsTrigger>
          </TabsList>

          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow p-6 mb-6"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8D493A] mb-4">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail className="mr-2 text-[#8D493A]" />
                      <span className="text-gray-600">{userProfile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-2 text-[#8D493A]" />
                      <span className="text-gray-600">{userProfile.username}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h2 className="text-[#8D493A] font-bold text-xl mb-4">Update Password</h2>
                  <div className="grid grid-cols-1 gap-4 max-w-md">
                    <div>
                      <label htmlFor="current-password" className="text-sm text-gray-600">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="text-sm text-gray-600">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={handlePasswordUpdate}
                      className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow p-6 mb-6"
            >
              <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Past Orders</h2>
              <div className="space-y-6">
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <div key={index} className="bg-[#F8EDE3] rounded-lg p-6">
                      <div className="space-y-4">
                        {/* Order Header */}
                        <div className="flex justify-between items-start border-b border-[#D0B8A8] pb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-[#8D493A] mb-1">
                              Order #{order._id}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Placed on {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-medium text-[#8D493A]">
                              Total: ${order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        {/* Order Items */}
                        <div className="space-y-4">
                          {order.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-white rounded-lg p-4 flex justify-between items-center">
                              <div className="flex items-start gap-4">
                                <BookOpen className="h-8 w-8 text-[#8D493A] mt-1" />
                                <div>
                                  <p className="font-medium text-[#8D493A] text-lg mb-1">
                                    {item.content.title}
                                  </p>
                                  <div className="space-y-1">
                                    <p className="text-sm text-gray-600">
                                      Quantity: {item.quantity}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      Price: ${item.price.toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <a
                                href={item.content.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-600 py-8">
                    No past orders found
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;