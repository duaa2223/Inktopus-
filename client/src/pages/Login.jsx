// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/auth/authThunck';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/NavBar';
// import Door from '../../assets/111.svg';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ username, password })).unwrap();
//       if (resultAction) {
//         navigate('/'); // توجيه بعد نجاح تسجيل الدخول
//       }
//     } catch (err) {
//       console.error('Login failed:', err);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section className="h-[7%] flex box-border justify-center items-center mt-24">
//         <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center">
//           <div className="md:w-1/2 px-8">
//             <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
//             <p className="text-sm mt-4 text-[#8D493A]">
//               If you already a member, easily log in now.
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
//               <div className="relative">
//                 <input
//                   className="p-2 rounded-xl border w-full"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   required
//                 />
//               </div>
//               <button
//                 className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
//                 type="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Logging in...' : 'Login'}
//               </button>
//               {error && <p>{error}</p>}
//             </form>
//             <div className="mt-6 items-center text-gray-100">
//               <hr className="border-gray-300" />
//               <p className="text-center text-sm">OR</p>
//               <hr className="border-gray-300" />
//             </div>
            // <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium">
            //   <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
            //     <path
            //       fill="#FFC107"
            //       d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            //     />
            //     <path
            //       fill="#FF3D00"
            //       d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            //     />
            //     <path
            //       fill="#4CAF50"
            //       d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            //     />
            //     <path
            //       fill="#1976D2"
            //       d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            //     />
            //   </svg>
            //   Login with Google
            // </button>
//             <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
//               Forget password?
//             </div>
//             <div className="mt-4 text-sm flex justify-between items-center container-mr">
//               <p className="mr-3 md:mr-0">If you don't have an account..</p>
//               <button className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#D0B8A8] font-semibold duration-300">
//                 <Link to="/register">Register</Link>
//               </button>
//             </div>
//           </div>
//           <div className="md:block hidden w-1/2">
//             <img className="rounded-2xl max-h-[1600px] door" src={Door} alt="login form image" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;
////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { login } from '../features/auth/authThunck';
// import { motion } from 'framer-motion';

// const Login = () => {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ username, password })).unwrap();
//       if (resultAction) {
//         navigate('/');
//       }
//     } catch (err) {
//       console.error('Login failed:', err);
//     }
//   };

//   return (
//     <motion.section
//       className="h-screen flex justify-center items-center bg-[#F8EDE3]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center shadow-md">
//         <motion.div
//           className="md:w-1/2 px-8"
//           initial={{ x: '-100%', opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
//           <p className="text-sm mt-4 text-[#8D493A]">
//             If you already a member, easily log in now.
//           </p>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <motion.input
//               className="p-2 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               required
//               whileHover={{ scale: 1.05 }}
//               whileFocus={{ scale: 1.05 }}
//             />
//             <motion.div className="relative">
//               <motion.input
//                 className="p-2 rounded-xl border bg-[#F8EDE3] w-full focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//                 whileHover={{ scale: 1.05 }}
//                 whileFocus={{ scale: 1.05 }}
//               />
//             </motion.div>
//             <motion.button
//               className="bg-[#8D493A] text-white py-2 rounded-xl hover:bg-[#D0B8A8] font-medium"
//               type="submit"
//               disabled={isLoading}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </motion.button>
//             {error && <p className="text-red-500">Invalid username or password</p>}
//           </form>
//           <motion.div
//             className="mt-6 items-center text-gray-100"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <hr className="border-gray-300" />
//             <p className="text-center text-sm">OR</p>
//             <hr className="border-gray-300" />
//           </motion.div>
//           <motion.button
//             className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-[#D0B8A8] font-medium"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.svg
//               className="mr-3"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 48 48"
//               width="25px"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <path
//                 fill="#FFC107"
//                 d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//               />
//               <path
//                 fill="#FF3D00"
//                 d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//               />
//               <path
//                 fill="#4CAF50"
//                 d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//               />
//               <path
//                 fill="#1976D2"
//                 d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//               />
//             </motion.svg>
//             Login with Google
//           </motion.button>
//           <motion.div
//             className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             Forget password?
//           </motion.div>
//           <motion.div
//             className="mt-4 text-sm flex justify-between items-center container-mr"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//           >
//             <p className="mr-3 md:mr-0">If you don't have an account..</p>
//             <motion.button
//               className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:bg-[#D0B8A8] font-semibold"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link to="/register">Register</Link>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//         <motion.div
//           className="md:block hidden w-1/2"
//           initial={{ x: '100%', opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <img
//             className="rounded-2xl max-h-[1600px] door animate-float"
//             src="../../assets/111.svg"
//             alt="login form image"
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Login;

/////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { login } from '../features/auth/authThunck';
// import { motion } from 'framer-motion';

// const Login = () => {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ username, password })).unwrap();
//       if (resultAction) {
//         navigate('/');
//       }
//     } catch (err) {
//       console.error('Login failed:', err);
//     }
//   };

//   return (
//     <motion.section
//       className="h-screen flex justify-center items-center bg-[#F8EDE3]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center shadow-md">
//         <motion.div
//           className="md:w-1/2 px-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
//           <p className="text-sm mt-4 text-[#8D493A]">
//             If you already a member, easily log in now.
//           </p>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <motion.input
//               className="p-2 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               required
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.2 }}
//             />
//             <motion.div 
//               className="relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.3 }}
//             >
//               <motion.input
//                 className="p-2 rounded-xl border bg-[#F8EDE3] w-full focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </motion.div>
//             <motion.button
//               className="bg-[#8D493A] text-white py-2 rounded-xl hover:bg-[#D0B8A8] font-medium"
//               type="submit"
//               disabled={isLoading}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.4 }}
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </motion.button>
//             {error && <p className="text-red-500">Invalid username or password</p>}
//           </form>
//           <motion.div
//             className="mt-6 items-center text-gray-100"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.5 }}
//           >
//             <hr className="border-gray-300" />
//             <p className="text-center text-sm">OR</p>
//             <hr className="border-gray-300" />
//           </motion.div>
//           <motion.button
//             className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-[#D0B8A8] font-medium"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.6 }}
//           >
//             <svg
//               className="mr-3"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 48 48"
//               width="25px"
//             >
//               <path
//                 fill="#FFC107"
//                 d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//               />
//               <path
//                 fill="#FF3D00"
//                 d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//               />
//               <path
//                 fill="#4CAF50"
//                 d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//               />
//               <path
//                 fill="#1976D2"
//                 d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//               />
//             </svg>
//             Login with Google
//           </motion.button>
//           <motion.div
//             className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.7 }}
//           >
//             Forget password?
//           </motion.div>
//           <motion.div
//             className="mt-4 text-sm flex justify-between items-center container-mr"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.8 }}
//           >
//             <p className="mr-3 md:mr-0">If you don't have an account..</p>
//             <button className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:bg-[#D0B8A8] font-semibold">
//               <Link to="/register">Register</Link>
//             </button>
//           </motion.div>
//         </motion.div>
//         <motion.div
//           className="md:block hidden w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2
//           }}
//         >
//           <motion.img
//             className="rounded-2xl max-h-[1600px] door"
//             src="../../assets/111.svg"
//             alt="login form image"
//             animate={{ 
//               x: [0, 10, 0],
//               y: [0, -10, 0]
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Login;
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../features/auth/authThunck';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password })).unwrap();
      if (resultAction) {
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <motion.section
      className="h-screen flex justify-center items-center bg-[#F8EDE3]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center shadow-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="md:w-1/2 px-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
          <motion.p 
            className="text-sm mt-4 text-[#8D493A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            If you already a member, easily log in now.
          </motion.p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              className="p-2 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div className="relative">
              <motion.input
                className="p-2 rounded-xl border bg-[#F8EDE3] w-full focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            <motion.button
              className="bg-[#8D493A] text-white py-2 rounded-xl hover:bg-[#D0B8A8] font-medium"
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </motion.button>
            {error && <p className="text-red-500">Invalid username or password</p>}
          </form>
          <motion.div
            className="mt-6 items-center text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </motion.div>
          <motion.button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-[#D0B8A8] font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </motion.button>
          <motion.div
            className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Forget password?
          </motion.div>
          <motion.div
            className="mt-4 text-sm flex justify-between items-center container-mr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="mr-3 md:mr-0">If you don't have an account..</p>
            <button className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:bg-[#D0B8A8] font-semibold">
              <Link to="/register">Register</Link>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:block hidden w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.img
            className="rounded-2xl max-h-[600px] w-full object-cover"
            src="../../assets/111.svg"
            alt="login form image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Login;