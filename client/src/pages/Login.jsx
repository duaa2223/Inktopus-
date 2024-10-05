// // src/pages/Login.jsx
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
// import SignUp from './Register';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // تهيئة useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/login', {
//         username,
//         password
//       });
//       // حفظ التوكن في السيشن
//       sessionStorage.setItem('token', response.data.token);
//       // إعادة التوجيه أو تقديم رسالة نجاح
//     navigate('/book');
//     } catch (err) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>

//     </div>
//   );
// };

// export default Login;
// src/pages/Login.jsx
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom'; // استيراد Link
// import SignUp from './Register';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // تهيئة useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/login', {
//         username,
//         password
//       });
//       // حفظ التوكن في السيشن
//       sessionStorage.setItem('token', response.data.token);
//       // إعادة التوجيه أو تقديم رسالة نجاح
//       navigate('/book');
//     } catch (err) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>

//       {/* زر لإنشاء حساب */}
//       <p>Don't have an account?</p>
//       <Link to="/register">
//         <button>Create an Account</button>
//       </Link>
//     </div>
//   );
// };

// export default Login;
////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// // import '../Login/Login.scss';
// import Door from '../../assets/111.svg';
// import Navbar from '../components/NavBar';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/habits/login', {
//         username,
//         password
//       });
//       sessionStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (err) {
//       setError('Invalid username or password');
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
//               If you are already a member, easily log in now.
//             </p>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <input
//                 className="p-2 mt-8 rounded-xl border"
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <div className="relative">
//                 <input
//                   className="p-2 rounded-xl border w-full"
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
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
//               <button
//                 className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
//                 type="submit"
//               >
//                 Login
//               </button>
//             </form>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
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
//                   d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20c0-1.262-0.109-2.516-0.306-3.309L6.306,14.691z"
//                 />
//               </svg>
//               Sign in with Google
//             </button>
//             <p className="mt-6 text-sm">
//               Don't have an account?{' '}
//               <Link to="/register" className="text-[#8D493A] font-medium">
//                 Sign up here
//               </Link>
//             </p>
//           </div>
//           <div className="hidden md:w-1/2 md:flex justify-center">
//             <img src={Door} alt="login illustration" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default LoginPage;
//////////////////////////////////////////////////////// الاصلية without thunic
// import { useState,useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/auth/authActions';
// import { useNavigate } from 'react-router-dom';


// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error, userInfo } = useSelector(state => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(username, password));
//   };
  
//   useEffect(() => {
//     if (userInfo) {
//       navigate('/');  // توجه المستخدم إلى الصفحة الرئيسية إذا كان مسجلاً
//     } else {
//       navigate('/login');  // توجه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً
//     }
//   }, [userInfo, navigate]);  // تأكد من تحديد التبعيات بشكل صحيح
  


//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="User name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//       {userInfo && <p>Welcome, {username}</p>}
//     </div>
//   );
// };

// export default LoginPage;
///////////////////////////////////////////////////////////////////////////// work without design 
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/auth/authThunck';
// import { useNavigate } from 'react-router-dom';



// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, error } = useSelector((state) => state.auth);

  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await dispatch(login({ username, password })).unwrap();
//   //     navigate('/'); // توجيه إلى الصفحة الرئيسية بعد تسجيل الدخول بنجاح
//   //   } catch (err) {
//   //     console.error('Login failed:', err);
//   //   }
//   // };
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
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Logging in...' : 'Login'}
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;
///////////////////////////////////////////////////////
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authThunck';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Door from '../../assets/111.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password })).unwrap();
      if (resultAction) {
        navigate('/'); // توجيه بعد نجاح تسجيل الدخول
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-[7%] flex box-border justify-center items-center mt-24">
        <div className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
            <p className="text-sm mt-4 text-[#8D493A]">
              If you already a member, easily log in now.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="bg-[#8D493A] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              {error && <p>{error}</p>}
            </form>
            <div className="mt-6 items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-300" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#D0B8A8] font-medium">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
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
            </button>
            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>
            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0">If you don't have an account..</p>
              <button className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#D0B8A8] font-semibold duration-300">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl max-h-[1600px] door" src={Door} alt="login form image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
