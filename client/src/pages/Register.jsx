// import { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/register', {
//         username,
//         password
//       });
//       // Handle successful registration (e.g., redirect to login page)
//       window.location.href = '/login';
//     } catch (error) {
//       setError("Failed to register. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default SignUp;
/////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // تحقق من تطابق كلمات المرور
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       // طلب تسجيل المستخدم
//       const response = await axios.post('http://localhost:5000/api/habits/register', {
//         username,
//         email,
//         password
//       });

//       // إعادة التوجيه بعد التسجيل الناجح
//       window.location.href = '/login';
//     } catch (error) {
//       // التعامل مع رسائل الخطأ من الخادم
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Failed to register. Please try again.");
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default SignUp;
////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import axios from 'axios';
// // import '../Login/Login.scss';
// import Door from '../../assets/signup.svg';
// import Navbar from '../components/NavBar';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/register', {
//         username,
//         email,
//         password
//       });

//       window.location.href = '/login';
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Failed to register. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="h-[7%] flex box-border justify-center items-center mt-24">
//         <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center">
//           <div className="md:w-1/2 px-8">
//             <h2 className="font-bold text-3xl text-[#8D493A]">Sign Up</h2>
//             <p className="text-sm mt-4 text-[#8D493A]">
//               New here? Create your account today!
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <input
//                 className="p-2 mt-8 rounded-xl border"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//               />
//               <input
//                 className="p-2 rounded-xl border"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//               <div className="relative">
//                 <input
//                   className="p-2 rounded-xl border w-full"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   required
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                   fill="gray"
//                   id="togglePassword"
//                   className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
//                   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                   fill="currentColor"
//                   className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
//                   id="mama"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
//                   <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
//                 </svg>
//               </div>
//               <input
//                 className="p-2 rounded-xl border"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 required
//               />
//               <button
//                 className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
//                 type="submit"
//               >
//                 Signup
//               </button>
//             </form>
//             {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
//             <div className="mt-6 items-center text-gray-100">
//               <hr className="border-gray-300" />
//               <p className="text-center text-sm">OR</p>
//               <hr className="border-gray-300" />
//             </div>
//             <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium">
//               <svg
//                 className="mr-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 48 48"
//                 width="25px"
//               >
//                 <path
//                   fill="#FFC107"
//                   d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//                 />
//                 <path
//                   fill="#FF3D00"
//                   d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C14.872,4,6.853,8.278,1.633,14.691c-0.17,0.124-0.362,0.242-0.533,0.362L6.306,14.691z"
//                 />
//                 <path
//                   fill="#4CAF50"
//                   d="M24,8c-3.092,0-5.863,1.015-8.116,2.711L20.551,14.068c1.368-1.146,3.108-1.868,5.041-1.868c3.034,0,5.846,1.221,7.978,3.227l5.416-5.416C31.107,8.275,27.062,6,24,6C20.479,6,17.263,7.334,14.661,9.589L12.345,11.871c-0.872-0.411-1.815-0.598-2.748-0.598c-2.485,0-4.5,2.015-4.5,4.5c0,2.482,2.015,4.5,4.5,4.5c1.469,0,2.83-0.679,3.745-1.766L16.43,14.905C14.995,14.138,14,12.63,14,11c0-1.755,1.145-3.279,2.68-3.768l-6.192-4.597L6.306,14.691c-0.17,0.124-0.362,0.242-0.533,0.362L6.306,14.691z"
//                 />
//                 <path
//                   fill="#1976D2"
//                   d="M24,8c-3.092,0-5.863,1.015-8.116,2.711L20.551,14.068c1.368-1.146,3.108-1.868,5.041-1.868c3.034,0,5.846,1.221,7.978,3.227l5.416-5.416C31.107,8.275,27.062,6,24,6C20.479,6,17.263,7.334,14.661,9.589L12.345,11.871c-0.872-0.411-1.815-0.598-2.748-0.598c-2.485,0-4.5,2.015-4.5,4.5c0,2.482,2.015,4.5,4.5,4.5c1.469,0,2.83-0.679,3.745-1.766L16.43,14.905C14.995,14.138,14,12.63,14,11c0-1.755,1.145-3.279,2.68-3.768l-6.192-4.597L6.306,14.691c-0.17,0.124-0.362,0.242-0.533,0.362L6.306,14.691z"
//                 />
//               </svg>
//               Sign up with Google
//             </button>
//           </div>
//           <div className="hidden md:block md:w-1/2">
//             <img src={Door} alt="Signup Illustration" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;
///////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Door from '../../assets/signup.svg';
// import Navbar from '../components/NavBar';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/register', {
//         username,
//         email,
//         password
//       });

//       window.location.href = '/login';
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Failed to register. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="h-[7%] flex box-border justify-center items-center mt-24">
//         <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center">
//           <div className="md:w-1/2 px-8">
//             <h2 className="font-bold text-3xl text-[#8D493A]">Sign Up</h2>
//             <p className="text-sm mt-4 text-[#8D493A]">
//               New here? Create your account today!
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <input
//                 className="p-2 mt-8 rounded-xl border"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//               />
//               <input
//                 className="p-2 rounded-xl border"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//               <div className="relative">
//                 <input
//                   className="p-2 rounded-xl border w-full"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   required
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                   fill="gray"
//                   id="togglePassword"
//                   className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
//                   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={16}
//                   height={16}
//                   fill="currentColor"
//                   className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
//                   id="mama"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
//                   <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
//                 </svg>
//               </div>
//               <input
//                 className="p-2 rounded-xl border"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 required
//               />
//               <button
//                 className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
//                 type="submit"
//               >
//                 Signup
//               </button>
//             </form>
//             {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
//             <div className="mt-6 items-center text-gray-100">
//               <hr className="border-gray-300" />
//               <p className="text-center text-sm">OR</p>
//               <hr className="border-gray-300" />
//             </div>
//             <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium">
//               <svg
//                 className="mr-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 48 48"
//                 width="25px"
//               >
//                 <path
//                   fill="#FFC107"
//                   d="M43.612 20.075c0-1.053-.107-2.084-.306-3.083H24v5.794h10.748c-6.306-5.862-15.865-6.95-23.632-6.95-2.671 0-5.309.26-7.898.742-4.663 5.043-7.353 11.748-7.353 18.637 0 1.031.037 2.046.093 3.059 4.56-2.684 8.524-6.434 11.788-10.592-1.007-2.518-1.583-5.216-1.583-8.156 0-5.929 4.732-10.733 10.683-10.733 6.062 0 10.823 4.475 10.823 10.141 0 6.064-4.68 10.343-10.615 10.343-1.735 0-3.369-.492-4.765-1.336v4.887h8.374c4.844-4.466 7.787-10.946 7.787-17.113z"
//                 />
//               </svg>
//               Sign Up with Google
//             </button>
//           </div>
//           <motion.div
//             className="md:w-1/2 hidden md:flex justify-center"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src={Door} alt="Signup Illustration" />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;
/////////////////////////////////////////////////////////////////////////////////////////////
// import  { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../features/auth/authActions'; // التأكد من استيراد `register`

// const RegisterPage = () => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const { isLoading, error, userInfo } = useSelector(state => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const userData = {
//       username,  // تأكد من أن هذه القيم موجودة
//       email,
//       password,
//     };
  
//     try {
//       dispatch(register(userData)); // استدعاء دالة التسجيل مع البيانات المطلوبة
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={username}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && <p>Welcome, {userInfo.username}</p>}
//     </div>
//   );
// };

// export default RegisterPage;
/////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../features/auth/authActions';

// const RegisterPage = () => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const { isLoading, error, userInfo } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       username,
//       email,
//       password,
//     };

//     try {
//       dispatch(register(userData));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={username}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && <p>Check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default RegisterPage;
/////////////////////////////////////////////////// الكود الصحيح بالاسفل 
// import { useState,useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register, verifyOTP } from '../features/auth/authActions'; // تأكد من أن verifyOTP موجود
// import { useNavigate } from 'react-router-dom';
// const RegisterPage = () => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState(''); // حالة للـ OTP
//   const [isOtpSent, setIsOtpSent] = useState(false); // حالة للتحقق مما إذا تم إرسال OTP

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, userInfo } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       username,
//       email,
//       password,
//     };
  
//     try {
//       await dispatch(register(userData)); // انتظار تسجيل المستخدم
//       setIsOtpSent(true); // تحديث الحالة لإظهار نموذج OTP
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // useEffect(() => {
//   //   if (userInfo) {
//   //     navigate('/');  // توجه المستخدم إلى الصفحة الرئيسية إذا كان مسجلاً
//   //   } else {
//   //     navigate('/register');  // توجه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً
//   //   }
//   // }, [userInfo, navigate]);  // تأكد من تحديد التبعيات بشكل صحيح
  
//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();

//   //   const otpData = {
//   //     email,
//   //     otp,
//   //   };

//   //   try {
//   //     await dispatch(verifyOTP(otpData)); // تأكد من أن verifyOTP تعود بنجاح
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();
  
//   //   const otpData = {
//   //     email,
//   //     otp,
//   //   };
  
//   //   try {
//   //     await dispatch(verifyOTP(otpData));
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
// ////////////////////////////////////////
//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();
  
//   //   const otpData = {
//   //     email,
//   //     otp,
//   //   };
  
//   //   try {
//   //     await dispatch(verifyOTP(otpData));
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   ///////////////////////////////////////
//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();
  
//   //   if (!email || !otp) {
//   //     console.error('Email and OTP are required');
//   //     return;
//   //   }
  
//   //   const otpData = {
//   //     email,
//   //     otp,
//   //   };
  
//   //   try {
//   //     await dispatch(verifyOTP(otpData));
//   //   } catch (error) {
//   //     console.error('Error verifying OTP:', error);
//   //   }
//   // };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
  
//     if (!email || !otp) {
//       console.error('Email and OTP are required');
//       return;
//     }
  
//     console.log('Sending OTP verification with:', { email, otp });
  
//     const otpData = {
//       email,
//       otp,
//     };
  
//     try {
//       await dispatch(verifyOTP(otpData));
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//     }
//   };
  
//   // useEffect(() => {
//   //   if (otpData) {
//   //     navigate('/');  // توجه المستخدم إلى الصفحة الرئيسية إذا كان مسجلاً
//   //   } else {
//   //     navigate('/register');  // توجه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً
//   //   }
//   // }, [otpData, navigate]);  // تأكد من تحديد التبعيات بشكل صحيح
  
//   return (
//     <div>
//       <h2>Register</h2>
//       {!isOtpSent ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={username}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       ) : (
//         <form onSubmit={handleVerifyOtp}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       )}
//       {error && <p>{error}</p>}
//       {userInfo && isOtpSent && <p>Check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default RegisterPage;
////////////////////////////////////////////////////////////withot thunc down work الاصلية 

// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register, verifyOTP } from '../features/auth/authActions'; // تأكد من أن verifyOTP موجود
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState(''); // حالة للـ OTP
//   const [isOtpSent, setIsOtpSent] = useState(false); // حالة للتحقق مما إذا تم إرسال OTP
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // حالة للتحقق من نجاح OTP

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, userInfo } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       username,
//       email,
//       password,
//     };
  
//     try {
//       await dispatch(register(userData)); // انتظار تسجيل المستخدم
//       setIsOtpSent(true); // تحديث الحالة لإظهار نموذج OTP
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
  
//     if (!email || !otp) {
//       console.error('Email and OTP are required');
//       return;
//     }
  
//     const otpData = {
//       email,
//       otp,
//     };
  
//     try {
//       await dispatch(verifyOTP(otpData)); // انتظار التحقق من OTP
//       setIsOtpVerified(true); // تحديث الحالة عند نجاح التحقق
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//     }
//   };

//   // استخدام useEffect لتوجيه المستخدم بعد نجاح التحقق من OTP
//   useEffect(() => {
//     if (isOtpVerified) {
//       navigate('/');  // توجيه المستخدم إلى الصفحة الرئيسية
//     }
//   }, [isOtpVerified, navigate]);

//   return (
//     <div>
//       <h2>Register</h2>
//       {!isOtpSent ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={username}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       ) : (
//         <form onSubmit={handleVerifyOtp}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       )}
//       {error && <p>{error}</p>}
//       {userInfo && isOtpSent && <p>Check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default RegisterPage;

//////////////////////////////////////////////////////////  without thunk
// import  { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerAPI, verifyOTPAPI } from '../features/auth/authActions';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { isLoading, error, user, otpVerified } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user && otpVerified) {
//       navigate('/home'); // التوجيه إلى الصفحة الرئيسية بعد التحقق من OTP
//     }
//   }, [user, otpVerified, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(registerAPI({ username, email, password })).unwrap();
//     } catch (err) {
//       console.error('Registration failed:', err);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     if (!email || !otp) {
//       console.error('Email and OTP are required');
//       return;
//     }
//     try {
//       await dispatch(verifyOTPAPI({ email, otp })).unwrap();
//     } catch (err) {
//       console.error('OTP verification failed:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {!user ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       ) : !otpVerified ? (
//         <form onSubmit={handleVerifyOtp}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       ) : (
//         <p>Registration successful! Redirecting to home page...</p>
//       )}
//       {error && <p className="error">{error}</p>}
//       {user && !otpVerified && <p>Check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default RegisterPage;
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerAPI, verifyOTPAPI } from '../features/auth/authActions';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { isLoading, error, user, otpVerified } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user && otpVerified) {
//       navigate('/home');
//     }
//   }, [user, otpVerified, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(registerAPI({ username, email, password }));
//       if (registerAPI.fulfilled.match(resultAction)) {
//         // التسجيل ناجح، انتظار إدخال OTP
//         console.log('Registration successful, waiting for OTP');
//       } else if (registerAPI.rejected.match(resultAction)) {
//         console.error('Registration failed:', resultAction.error);
//       }
//     } catch (err) {
//       console.error('Registration failed:', err);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     if (!email || !otp) {
//       console.error('Email and OTP are required');
//       return;
//     }
//     try {
//       const resultAction = await dispatch(verifyOTPAPI({ email, otp }));
//       if (verifyOTPAPI.fulfilled.match(resultAction)) {
//         console.log('OTP verification successful');
//       } else if (verifyOTPAPI.rejected.match(resultAction)) {
//         console.error('OTP verification failed:', resultAction.error);
//       }
//     } catch (err) {
//       console.error('OTP verification failed:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {!user ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       ) : !otpVerified ? (
//         <form onSubmit={handleVerifyOtp}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       ) : (
//         <p>Registration successful! Redirecting to home page...</p>
//       )}
//       {error && <p className="error">{error}</p>}
//       {user && !otpVerified && <p>Check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default RegisterPage;
////////////////////////////////////////////////////////////////////////////////////////// work without design 
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register, verifyOTP } from '../features/auth/authThunck';
// import { useNavigate } from 'react-router-dom';


// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate();


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isOtpSent) {
//       try {
//         await dispatch(register({ username, email, password })).unwrap();
//         setIsOtpSent(true);
//       } catch (err) {
//         console.error('Registration failed:', err);
//       }
//     } else {
//       try {
//         await dispatch(verifyOTP({ email, otp })).unwrap();
//         navigate('/'); // توجيه إلى الصفحة الرئيسية بعد التحقق من OTP بنجاح
//       } catch (err) {
//         console.error('OTP verification failed:', err);
//       }
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       {!isOtpSent ? (
//         <>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             required
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Registering...' : 'Register'}
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//             required
//           />
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </>
//       )}
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Register;
/////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, verifyOTP } from '../features/auth/authThunck';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Door from '../../assets/signup.svg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent) {
      try {
        await dispatch(register({ username, email, password })).unwrap();
        setIsOtpSent(true);
      } catch (err) {
        console.error('Registration failed:', err);
      }
    } else {
      try {
        await dispatch(verifyOTP({ email, otp })).unwrap();
        navigate('/'); // توجيه إلى الصفحة الرئيسية بعد التحقق من OTP بنجاح
      } catch (err) {
        console.error('OTP verification failed:', err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-[7%] flex box-border justify-center items-center mt-24">
        <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#8D493A]">Sign Up</h2>
            <p className="text-sm mt-4 text-[#8D493A]">
              {isOtpSent ? 'Verify your OTP to complete registration!' : 'New here? Create your account today!'}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!isOtpSent ? (
                <>
                  <input
                    className="p-2 mt-8 rounded-xl border"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                  <input
                    className="p-2 mt-4 rounded-xl border"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <input
                    className="p-2 mt-4 rounded-xl border"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <button
                    className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Registering...' : 'Register'}
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="p-2 mt-8 rounded-xl border"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                  />
                  <button
                    className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl max-h-[1600px]" src={Door} alt="signup form image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
