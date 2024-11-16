
// import React, { useState, useEffect } from 'react';
// import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
// import axios from 'axios';

// const CustomAlert = ({ message, onClose }) => (
//   <div 
//     className="fixed top-4 right-4 z-50 w-96 bg-white/90 backdrop-blur-lg rounded-lg shadow-xl border border-green-200 p-4 transform transition-all duration-500 ease-in-out animate-fadeIn"
//   >
//     <div className="flex items-center gap-3">
//       <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
//       <p className="text-gray-700 flex-grow">{message}</p>
//       <button 
//         onClick={onClose}
//         className="text-gray-400 hover:text-gray-600 transition-colors"
//       >
//         ×
//       </button>
//     </div>
//   </div>
// );

// const ContactPage = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/api/users/profile', { withCredentials: true });
//         setUserProfile(response.data);
//         setFormData(prev => ({
//           ...prev,
//           name: response.data.username,
//           email: response.data.email
//         }));
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching user profile:', err);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/contact/contact', formData);
//       setShowAlert(true);
//       setFormData(prev => ({
//         ...prev,
//         subject: '',
//         message: ''
//       }));
//       setTimeout(() => {
//         setShowAlert(false);
//       }, 5000);
//     } catch (error) {
//       alert(error.response?.data?.message || 'Error sending message');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

//       <div className="max-w-7xl mx-auto relative">
//         {showAlert && (
//           <CustomAlert 
//             message="Thank you for reaching out! We've received your message and will get back to you via email soon. Please keep an eye on your inbox."
//             onClose={() => setShowAlert(false)}
//           />
//         )}

//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
//             Get in Touch
//           </h1>
//           <p className="text-gray-600">We'd love to hear from you. Let's start a conversation.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Info Cards */}
//           <div className="space-y-6">
//             <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-purple-100 rounded-lg">
//                   <Phone className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Call Us</h3>
//                   <p className="text-gray-600">+123 456 789</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-blue-100 rounded-lg">
//                   <Mail className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Email</h3>
//                   <p className="text-gray-600">info@example.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-pink-100 rounded-lg">
//                   <MapPin className="w-6 h-6 text-pink-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-800">Visit Us</h3>
//                   <p className="text-gray-600">123 Business Avenue</p>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Illustration */}
//             <div className="hidden lg:block mt-8">
//               <MessageCircle className="w-48 h-48 text-purple-200 mx-auto" />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 cursor-not-allowed"
//                     disabled
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 cursor-not-allowed"
//                     disabled
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 space-y-2">
//                 <label className="block text-gray-700 font-medium">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50"
//                   required
//                 />
//               </div>

//               <div className="mt-6 space-y-2">
//                 <label className="block text-gray-700 font-medium">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50"
//                   required
//                 />
//               </div>

//               <div className="mt-8">
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                   <span>Send Message</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';
import Navbar from '../components/NavBar';
const CustomAlert = ({ message, onClose }) => (
  <div 
    className="fixed top-4 right-4 z-50 w-96 bg-white/90 backdrop-blur-lg rounded-lg shadow-xl border border-[#8D493A] p-4 transform transition-all duration-500 ease-in-out animate-fadeIn"
  >
    <div className="flex items-center gap-3">
      <CheckCircle className="w-6 h-6 text-[#8D493A] flex-shrink-0" />
      <p className="text-gray-700 flex-grow">{message}</p>
      <button 
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        ×
      </button>
    </div>
  </div>
);

const ContactPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/profile', { withCredentials: true });
        setUserProfile(response.data);
        setFormData(prev => ({
          ...prev,
          name: response.data.username,
          email: response.data.email
        }));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact/contact', formData);
      setShowAlert(true);
      setFormData(prev => ({
        ...prev,
        subject: '',
        message: ''
      }));
      setTimeout(() => {
        setShowAlert(false);
      }, 7000);
    } catch (error) {
      alert(error.response?.data?.message || 'Error sending message');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F8EDE3] to-[#DFD3C3]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#8D493A]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8EDE3] to-[#DFD3C3] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Navbar />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D0B8A8] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DFD3C3] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-[#8D493A] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative">
        {showAlert && (
          <CustomAlert 
            message="Thank you for reaching out! We've received your message and will get back to you via email soon. Please keep an eye on your inbox."
            onClose={() => setShowAlert(false)}
          />
        )}

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8D493A] to-[#D0B8A8] mb-4 mt-20">
            Get in Touch
          </h1>
          <p className="text-gray-600">We'd love to hear from you. Let's start a conversation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F8EDE3] rounded-lg">
                  <Phone className="w-6 h-6 text-[#8D493A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+123 456 789</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F8EDE3] rounded-lg">
                  <Mail className="w-6 h-6 text-[#8D493A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#F8EDE3] rounded-lg">
                  <MapPin className="w-6 h-6 text-[#8D493A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">123 Business Avenue</p>
                </div>
              </div>
            </div>

            {/* Decorative Illustration */}
            <div className="hidden lg:block mt-8">
              <MessageCircle className="w-48 h-48 text-[#D0B8A8] mx-auto" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 cursor-not-allowed"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label className="block text-gray-700 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8D493A] bg-white/50"
                  required
                />
              </div>

              <div className="mt-6 space-y-2">
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8D493A] bg-white/50"
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8D493A] to-[#D0B8A8] text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;