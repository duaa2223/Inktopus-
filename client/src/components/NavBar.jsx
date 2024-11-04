// // src/components/NavBar.jsx
// // import React from 'react';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// function Navbar() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.getElementById('header');
//       if (window.scrollY > 10) {
//         header.classList.add('bg-[#D0B8A8]');
//         header.classList.remove('bg-transparent');
//       } else {
//         // bg-transparent
//         // header.classList.add('bg-transparent');
//         // header.classList.remove('bg-[#D0B8A8]');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/register">Register</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/book">book</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/register">Register</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/book">book</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
/////////////////////////////////////////////////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// // import "./Navbar.scss";
// import "../App.css";
// import { IoIosCloseCircle } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import myLabImage from '../../assets/newlib.svg';
// import card1 from'../../assets/sea.png'
// import card2 from '../../assets/card2.png'
// import 'swiper/swiper-bundle.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useEffect } from 'react'; 
// import { useRef } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
// import { FaHandHoldingHeart } from "react-icons/fa";
// import { SiOctopusdeploy } from "react-icons/si";
// import { FaFaceSmileWink } from "react-icons/fa6";
// import { FaGripfire } from "react-icons/fa";
// import about from '../../assets/about.svg'
// import footerBackground from '../../assets/4.svg';
// import SignUp from '../pages/Register'
// import  Resource from '../Resourse/Resourse'
// import details from '../details/Details';
// import Level from '../Level/Level';
// import Carts from '../Carts/Carts';
// import About from '../About/About';



// import { Navigation, Pagination } from 'swiper';

// import card2 from '../../assets'
// function Navbar() {
// useEffect(() => {
//   const handleScroll = () => {
//     const header = document.getElementById('header');
//     if (window.scrollY > 10) {
//       header.classList.add('bg-[#D0B8A8]');
      
//       header.classList.remove('bg-transparent');
//     } else {
//       // bg-transparent
//       // header.classList.add('bg-transparent');
//       // header.classList.remove('bg-[#D0B8A8]');
//     }
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);


//   return (

// <div>
// <div
  
// >
// <header
//   id="header"
//   className=" bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50"
// >
//   <div className="container mx-auto flex items-center justify-between px-4 h-16 ">
//     <div className="flex items-center space-x-2 ml-16 ">
//       <h1 className="flex items-center text-6xl font-bold ">
//         <SiTestinglibrary className="icon text-[#8D493A]" />
//       </h1>
//       <span className='text-4xl text-white'>Inktopus</span>
//     </div>

//     <nav id="navmenu" className="hidden md:flex space-x-6">
//       <ul className="flex space-x-6">
//         <li>
//           <Link to="/" className="hover:text-gray-300 text-xl text-white">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">
//             Our Story
//           </Link>
//         </li>
//         <li>
//           <Link to="/Resource" className="text-gray-700 hover:text-gray-300 text-xl text-white">
//           Resource
//           </Link>
//         </li>
//         <li>
//           <Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">
//             Pricing
//           </Link>
//         </li>
//         <li>
//           <Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">
//             Contact
//           </Link>
//         </li>

//         <li>
       
//         </li>
//       </ul>
//     </nav>
   
//     <Link to="/Login"  className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//   </div>
// </header>
  

 
// </div>
// </div>
//   );
// }

// export default Navbar; /////////////////// first 
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "../App.css";
// import 'swiper/swiper-bundle.css';
// import { useState, useEffect } from 'react';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const token = sessionStorage.getItem('token'); // استخدام sessionStorage بدلاً من localStorage
//       setIsLoggedIn(!!token); // تعيين الحالة بناءً على وجود التوكن
//       // console.log('Token:', token);
//     };

//     checkLoginStatus();

//     // إعادة التحقق عند التغييرات في التخزين
//     window.addEventListener('storage', checkLoginStatus);
//     return () => window.removeEventListener('storage', checkLoginStatus);
//   }, []);

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={() => {
//             sessionStorage.removeItem('token'); // إزالة التوكن عند تسجيل الخروج
//             setIsLoggedIn(false); // تحديث حالة تسجيل الدخول
//           }} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/Login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
/////////////////////////////////secound///////////////////////////
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "../App.css";
// import 'swiper/swiper-bundle.css';
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie'; // استيراد مكتبة js-cookie

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const token = Cookies.get('token'); // استخدام الكوكيز للتحقق من وجود التوكن
//       setIsLoggedIn(!!token); // تعيين الحالة بناءً على وجود التوكن
//     };

//     checkLoginStatus();
    
//     // إزالة event listener في حالة إزالة التخزين
//     window.addEventListener('storage', checkLoginStatus);
//     return () => window.removeEventListener('storage', checkLoginStatus);
//   }, []);

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={() => {
//             Cookies.remove('token'); // إزالة التوكن عند تسجيل الخروج
//             setIsLoggedIn(false); // تحديث حالة تسجيل الدخول
//           }} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/Login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
//////////////////////////////////////3
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "../App.css";
// import 'swiper/swiper-bundle.css';
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const token = Cookies.get('token');
//       console.log('Current token:', token); // تحقق من قيمة التوكن
//       setIsLoggedIn(!!token); // تحديث حالة تسجيل الدخول
//     };

//     checkLoginStatus(); // تحقق عند تحميل المكون

//     // إزالة event listener إذا كنت تستخدم تخزين آخر (اختياري)
//     window.removeEventListener('storage', checkLoginStatus); // تأكد من عدم إضافة listener بشكل غير ضروري
//   }, []);

//   const handleLogout = () => {
//     Cookies.remove('token'); // إزالة التوكن عند تسجيل الخروج
//     setIsLoggedIn(false); // تحديث حالة تسجيل الدخول
//   };

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/Login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
////////////////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "../App.css";
// import 'swiper/swiper-bundle.css';
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const token = Cookies.get('token');
//       console.log('Current token:', token); // تحقق من قيمة التوكن
//       setIsLoggedIn(!!token); // إذا كان التوكن موجود، قم بتحديث حالة تسجيل الدخول
//     };

//     // التحقق عند تحميل المكون
//     checkLoginStatus();

//     // إضافة event listener لمتابعة التغيرات على الكوكيز
//     window.addEventListener('storage', checkLoginStatus);

//     // إزالة الـ event listener عند تدمير المكون
//     return () => {
//       window.removeEventListener('storage', checkLoginStatus);
//     };
//   }, []); // سيتم تشغيل هذا الـ effect مرة واحدة عند تحميل المكون

//   const handleLogout = () => {
//     Cookies.remove('token'); // إزالة التوكن عند تسجيل الخروج
//     setIsLoggedIn(false); // تحديث حالة تسجيل الدخول إلى false
//   };

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
//////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import axios from 'axios'; // استيراد axios لإجراء طلبات HTTP

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const response = await axios.get('/auth/status'); // طلب API للتحقق من حالة تسجيل الدخول
//         setIsLoggedIn(response.data.loggedIn); // تحديث حالة تسجيل الدخول بناءً على استجابة الخادم
//       } catch (error) {
//         console.error('Error checking login status:', error);
//         setIsLoggedIn(false); // في حالة حدوث خطأ، قم بتعيين المستخدم كغير مُسجّل
//       }
//     };

//     checkLoginStatus(); // تحقق عند تحميل المكون
//   }, []);

//   const handleLogout = () => {
//     // يجب أن تضيف هنا منطق تسجيل الخروج، مثلاً طلب لخادم لتسجيل الخروج
//     setIsLoggedIn(false); // تحديث حالة تسجيل الدخول
//   };

//   return (
//     <header>
//       {/* باقي مكونات الناف بار */}
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Log-out</button>
//       ) : (
//         <a href="/login">Log-in</a>
//       )}
//     </header>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import axios from 'axios'; // استيراد axios لإجراء طلبات HTTP

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const response = await axios.get('/auth/status', { withCredentials: true }); 
//         // استخدم `withCredentials` لتضمين الكوكي في الطلب
//         setIsLoggedIn(response.data.loggedIn); 
//       } catch (error) {
//         console.error('Error checking login status:', error);
//         setIsLoggedIn(false); 
//       }
//     };

//     checkLoginStatus(); 
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.post('/logout', {}, { withCredentials: true }); // إرسال طلب تسجيل الخروج
//       setIsLoggedIn(false); // تحديث حالة تسجيل الدخول بعد تسجيل الخروج
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <header>
//       {/* باقي مكونات الناف بار */}
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Log-out</button>
//       ) : (
//         <a href="/login">Log-in</a>
//       )}
//     </header>
//   );
// }

// export default Navbar;
//////////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import { SiTestinglibrary } from "react-icons/si";
// import "../App.css";
// import 'swiper/swiper-bundle.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const response = await axios.get('/api/users/status');
//         setIsLoggedIn(response.data.isLoggedIn);
//       } catch (error) {
//         console.error('Error checking login status:', error);
//         setIsLoggedIn(false);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.post('/api/users/logout');
//       setIsLoggedIn(false);
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       {/* ... (باقي الكود يبقى كما هو) */}
      
//       {isLoggedIn ? (
//         <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//           Log-out
//         </button>
//       ) : (
//         <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//           Log-in
//         </Link>
//       )}
//     </header>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, checkLoginStatus } from '../features/auth/authThunck'; // تحديث هذا السطر
// import { SiTestinglibrary } from "react-icons/si";


// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   // const cartItemsCount = useSelector((state) => state.cart.items.length); // الحصول على عدد العناصر من السلة
 
//   const handleLogout = async () => {
//     try {
//       await dispatch(logout()).unwrap();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

// // // to change navbar when scrooling
// // useEffect(() => {
// //   const handleScroll = () => {
// //     const header = document.getElementById('header');
// //     if (window.scrollY > 10) {
// //       header.classList.add('bg-[#D0B8A8]');
      
// //       header.classList.remove('bg-transparent');
// //     } else {
// //       // bg-transparent
// //       header.classList.add('bg-transparent');
// //       header.classList.remove('bg-[#D0B8A8]');
// //     }
// //   };

// //   window.addEventListener('scroll', handleScroll);

// //   return () => {
// //     window.removeEventListener('scroll', handleScroll);
// //   };
// // }, []);

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>

//              {/* رابط السلة مع عدد العناصر */}
//              {/* <li>
//               <Link to="/cart" className="flex items-center text-xl text-white hover:text-gray-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 Cart ({cartItemsCount})
//               </Link>
//             </li> */}
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, checkLoginStatus } from '../features/auth/authThunck';
// import { SiTestinglibrary } from "react-icons/si";

// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoggedIn,role } = useSelector((state) => state.auth);

//   // useEffect(() => {
//   //   dispatch(checkLoginStatus());
//   // }, [dispatch]);
//   useEffect(() => {
//     dispatch(checkLoginStatus());
//     console.log('Role from Redux after login:', role); // تأكيد إذا كان role يتم تحديثه
//   }, [dispatch, role]);
  
//   const handleLogout = async () => {
//     try {
//       await dispatch(logout()).unwrap();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };
// // const role = useSelector((state) => state.auth.role); // استرجاع الدور من الـ Redux

// // useEffect(() => {
// //   console.log('Role from Redux:', role);  // تأكد من أن الدور يظهر هنا
// // }, [role]);

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
  
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>

//             {isLoggedIn && role === 'admin' && (
//               <li><Link to="/dashboard" className="text-gray-700 hover:text-gray-300 text-xl text-white">Dashboard</Link></li>
//             )}
//             {isLoggedIn && role === 'publisher' && (
//               <li><Link to="/publish" className="text-gray-700 hover:text-gray-300 text-xl text-white">Publish</Link></li>
//             )}
//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, checkLoginStatus } from '../features/auth/authThunck';
// import { SiTestinglibrary } from "react-icons/si";

// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoggedIn, role } = useSelector((state) => state.auth);

// // استخدم useEffect للتأكد من تحديث النافبار عند تغيير الدور
// useEffect(() => {
//   console.log('Current role:', role);
// }, [role]);

//   // التأكد من جلب حالة تسجيل الدخول وتحديث الدور
//   useEffect(() => {
//     dispatch(checkLoginStatus());
//   }, [dispatch]);

//   useEffect(() => {
//     if (role) {
//       console.log('Role from Redux after login:', role); // تأكيد إذا كان role يتم تحديثه
//     }
//   }, [isLoggedIn,role]);
  
//   const handleLogout = async () => {
//     try {
//       await dispatch(logout()).unwrap();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
  
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>

// {isLoggedIn && role === 'admin' && (
//   <li><Link to="/dashboard" className="text-gray-700 hover:text-gray-300 text-xl text-white">Dashboard</Link></li>
// )}
// {isLoggedIn && role === 'publisher' && (
//   <li><Link to="/form" className="text-gray-700 hover:text-gray-300 text-xl text-white">Publish</Link></li>
// )}


//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, checkLoginStatus } from '../features/auth/authThunck';
// import { SiTestinglibrary } from "react-icons/si";
// import CartIcon from '../components/CartIcon';
// function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoggedIn, role } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(checkLoginStatus());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Is Logged In:', isLoggedIn);
//     console.log('Current Role:', role);
//   }, [isLoggedIn, role]);

//   const handleLogout = async () => {
//     try {
//       await dispatch(logout()).unwrap();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };


//   return (
//     <header id="header" className="bg-[#D0B8A8] header fixed top-0 left-0 right-0 w-full flex items-center bg-opacity-90 transition-colors shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 h-16">
  
//         <div className="flex items-center space-x-2 ml-16">
//           <h1 className="flex items-center text-6xl font-bold">
//             <SiTestinglibrary className="icon text-[#8D493A]" />
//           </h1>
//           <span className='text-4xl text-white'>Inktopus</span>
//         </div>

//         <nav id="navmenu" className="hidden md:flex space-x-6">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-gray-300 text-xl text-white">Home</Link></li>
//             <li><Link to="/About" className="text-gray-700 hover:text-gray-300 text-xl text-white">Our Story</Link></li>
//             <li><Link to="/college" className="text-gray-700 hover:text-gray-300 text-xl text-white">College</Link></li>
//             <li><Link to="/Price" className="text-gray-700 hover:text-gray-300 text-xl text-white">Pricing</Link></li>
//             <li><Link to="/Contact" className="text-gray-700 hover:text-gray-300 text-xl text-white">Contact</Link></li>
//             {isLoggedIn && role === 'admin' && (
//               <li><Link to="/dashboard" className="text-gray-700 hover:text-gray-300 text-xl text-white">Dashboard</Link></li>
//             )}
//             {isLoggedIn && role === 'publisher' && (
//               <li><Link to="/form" className="text-gray-700 hover:text-gray-300 text-xl text-white">Publish</Link></li>
//             )}


//           </ul>
//         </nav>

//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-out
//           </button>
//         ) : (
//           <Link to="/login" className="btn-getstarted bg-[#8D493A] text-white py-2 px-4 rounded mr-16 hover:bg-[#A55B4B]">
//             Log-in
//           </Link>
//         )}
//       </div>
//       <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <CartIcon />
//           </div>
//     </header>
//   );
// }

// export default Navbar;
/////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, checkLoginStatus } from '../features/auth/authThunck';
import { SiTestinglibrary } from "react-icons/si";
import CartIcon from '../components/Cart/CartIcon';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  useEffect(() => {
    console.log('Is Logged In:', isLoggedIn);
    console.log('Current Role:', role);
  }, [isLoggedIn, role]);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F8EDE3] shadow-lg z-50 mb-48">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="flex items-center text-4xl font-bold">
              <SiTestinglibrary className="text-[#8D493A]" />
            </h1>
            <span className='text-2xl font-semibold text-[#8D493A]'>Inktopus</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Home</Link>
            <Link to="/About" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Our Story</Link>
            <Link to="/college" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">College</Link>
            <Link to="/Price" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Pricing</Link>
            <Link to="/Contact" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            {isLoggedIn && role === 'admin' && (
              <Link to="/dashboard" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Dashboard</Link>
            )}
            {isLoggedIn && role === 'publisher' && (
              <Link to="/form" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Publish</Link>
            )}
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <CartIcon />
            {isLoggedIn ? (
              <button 
                onClick={handleLogout} 
                className="bg-[#8D493A] text-white px-6 py-2 rounded-lg hover:bg-[#D0B8A8] transition-colors duration-200"
              >
                Log-out
              </button>
            ) : (
              <Link 
                to="/login" 
                className="bg-[#8D493A] text-white px-6 py-2 rounded-lg hover:bg-[#D0B8A8] transition-colors duration-200"
              >
                Log-in
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#F8EDE3] py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Home</Link>
              <Link to="/About" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Our Story</Link>
              <Link to="/college" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">College</Link>
              <Link to="/Price" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Pricing</Link>
              <Link to="/Contact" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Contact</Link>
              {isLoggedIn && role === 'admin' && (
                <Link to="/dashboard" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Dashboard</Link>
              )}
              {isLoggedIn && role === 'publisher' && (
                <Link to="/form" className="text-[#8D493A] hover:text-[#D0B8A8] px-4 py-2 transition-colors duration-200">Publish</Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;