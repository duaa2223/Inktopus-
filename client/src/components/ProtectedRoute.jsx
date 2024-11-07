
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = sessionStorage.getItem('token'); // التحقق من وجود التوكن

//   if (!token) {
//     return <Navigate to="/login" />; // إذا لم يكن هناك توكن، يتم إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
//   }

//   return children; // السماح بالوصول إلى الصفحة المحمية
// };

// export default ProtectedRoute;
///////////////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const [cookies] = useCookies(['token']);
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthorized, setIsAuthorized] = useState(false);

//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         if (!cookies.token) {
//           setIsAuthorized(false);
//           setIsLoading(false);
//           return;
//         }

//         // استخدام نقطة النهاية الموجودة لدينا للتحقق من حالة تسجيل الدخول
//         const response = await fetch('/api/user/status', {
//           method: 'GET',
//           credentials: 'include', // مهم لإرسال الكوكيز
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         const data = await response.json();

//         if (response.ok && data.loggedIn) {
//           // إذا كانت هناك أدوار محددة، تحقق من دور المستخدم
//           if (allowedRoles.length > 0) {
//             setIsAuthorized(allowedRoles.includes(data.user.role));
//           } else {
//             setIsAuthorized(true);
//           }
//         } else {
//           setIsAuthorized(false);
//         }
//       } catch (error) {
//         console.error('Auth verification error:', error);
//         setIsAuthorized(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     verifyAuth();
//   }, [cookies.token, allowedRoles]);

//   // إظهار مؤشر تحميل أثناء التحقق
//   if (isLoading) {
//     return <div>جاري التحميل...</div>; // يمكنك استخدام مكون loading خاص بك
//   }

//   if (!isAuthorized) {
//     // تخزين المسار الحالي للعودة إليه بعد تسجيل الدخول
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
/////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const [cookies] = useCookies(['token']);
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthorized, setIsAuthorized] = useState(false);

//   useEffect(() => {
//     const verifyAuth = async () => {
//       console.log('Verifying auth...');
//       console.log('Token:', cookies.token);
//       console.log('Allowed roles:', allowedRoles);

//       try {
//         if (!cookies.token) {
//           console.log('No token found');
//           setIsAuthorized(false);
//           setIsLoading(false);
//           return;
//         }

//         // تأكد من أن المسار صحيح - قد تحتاج لتغييره حسب إعداد الباك إند
//         const response = await fetch('http://localhost:5000/api/users/status', {
//           method: 'GET',
//           credentials: 'include',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         console.log('Response status:', response.status);
//         const data = await response.json();
//         console.log('Response data:', data);

//         if (response.ok && data.loggedIn) {
//           console.log('User role:', data.user?.role);
//           // إذا كانت هناك أدوار محددة، تحقق من دور المستخدم
//           if (allowedRoles.length > 0) {
//             const hasRole = allowedRoles.includes(data.user?.role);
//             console.log('Has required role:', hasRole);
//             setIsAuthorized(hasRole);
//           } else {
//             console.log('No role check required');
//             setIsAuthorized(true);
//           }
//         } else {
//           console.log('Not authorized');
//           setIsAuthorized(false);
//         }
//       } catch (error) {
//         console.error('Auth verification error:', error);
//         setIsAuthorized(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     verifyAuth();
//   }, [cookies.token, allowedRoles]);

//   if (isLoading) {
//     return <div>جاري التحميل...</div>;
//   }

//   if (!isAuthorized) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const { isLoggedIn, role } = useSelector((state) => state.auth);
//   const location = useLocation();

//   useEffect(() => {
//     console.log('Allowed Roles:', allowedRoles);
//     console.log('Current Role:', role);
//   }, [allowedRoles, role]);

//   // If the user is not logged in, redirect to the login page
//   if (!isLoggedIn) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // If the user is logged in and the role is in the allowed list, render the children
//   if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
//     console.log('Access granted');
//     return children;
//   }

//   // If the user is logged in but the role is not allowed, redirect to an error page or the home page
//   console.log('Access denied');
//   return <Navigate to="/error" state={{ from: location }} replace />;
// };

// export default ProtectedRoute;
///////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const { isLoggedIn, role } = useSelector((state) => state.auth);
//   const location = useLocation();

//   useEffect(() => {
//     console.log('Allowed Roles:', allowedRoles);
//     console.log('Current Role:', role);
//   }, [allowedRoles, role]);

//   // If the user is not logged in, redirect to the login page
//   if (!isLoggedIn) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // If the user is logged in and the role is in the allowed list, render the children
//   if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
//     console.log('Access granted');
//     return children;
//   }

//   // If the user is logged in but the role is not allowed, handle the different scenarios
//   console.log('Access denied');
//   if (allowedRoles.includes('admin') && role !== 'admin') {
//     // Redirect to the home page and display a message
//     return (
//       <Navigate
//         to="/"
//         state={{
//           from: location,
//           message: 'You do not have permission to access this page.'
//         }}
//         replace
//       />
//     );
//   } else if (allowedRoles.includes('publisher') && role !== 'publisher') {
//     // Redirect to the home page and display a different message
//     return (
//       <Navigate
//         to="/"
//         state={{
//           from: location,
//           message: 'You do not have the required role to access this page.'
//         }}
//         replace
//       />
//     );
//   } else {
//     // Redirect to the login page
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
// };

// export default ProtectedRoute;
///////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { checkLoginStatus } from '../features/auth/authThunck';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const dispatch = useDispatch();
//   const { isLoggedIn, role } = useSelector((state) => state.auth);
//   const location = useLocation();

//   useEffect(() => {
//     dispatch(checkLoginStatus());
//   }, [dispatch]);

 

//   if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
//     console.log('Access granted');
//     return children;
//   }

//   if (!isLoggedIn) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   toast.error('You do not have permission to access this page.');
//   return <Navigate to="/" />;

  
// };

// export default ProtectedRoute;
///////////////////////////////////////////////////////////////////////////////work
// import React, { useEffect, useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { checkLoginStatus } from '../features/auth/authThunck';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const dispatch = useDispatch();
//   const { isLoggedIn, role, status } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const [checkingAuth, setCheckingAuth] = useState(true); // حالة الانتظار للتحقق من تسجيل الدخول

//   useEffect(() => {
//     const checkAuth = async () => {
//       await dispatch(checkLoginStatus());
//       setCheckingAuth(false);
//     };
//     checkAuth();
//   }, [dispatch]);

//   // عرض شاشة انتظار حتى يتم التحقق من حالة تسجيل الدخول
//   if (checkingAuth) {
//     return <div>Loading...</div>;
//   }

//   // إذا لم يكن المستخدم مسجلًا، توجهه إلى صفحة تسجيل الدخول
//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // إذا كان المستخدم مسجلًا ولكنه لا يمتلك الصلاحية المطلوبة، توجهه إلى الصفحة الرئيسية
//   if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
//     toast.error('You do not have permission to access this page.');
//     return <Navigate to="/" replace />;
//   }

//   // السماح بالوصول للصفحة إذا كان مسجلًا ولديه الصلاحية المطلوبة
//   return children;
// };

// export default ProtectedRoute;
/////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { checkLoginStatus } from '../features/auth/authThunck';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const dispatch = useDispatch();
//   const { isLoggedIn, role } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       await dispatch(checkLoginStatus());
//       setCheckingAuth(false);
//     };
//     checkAuth();
//   }, [dispatch]);

//   if (checkingAuth) {
//     return <div>Loading...</div>;
//   }

//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
//     toast.dismiss(); // إزالة أي توستات سابقة لتجنب التداخل
//     toast.error('You do not have permission to access this page.', {
//       position: "top-center",
//       autoClose: 7000,  // المدة لتبقى الرسالة واضحة
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       closeOnClick: true,
//     });
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { checkLoginStatus } from '../features/auth/authThunck';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const dispatch = useDispatch();
//   const { isLoggedIn, role } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [hasShownError, setHasShownError] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       await dispatch(checkLoginStatus());
//       setCheckingAuth(false);
//     };
//     checkAuth();
//   }, [dispatch]);

//   useEffect(() => {
//     // إعادة تعيين حالة عرض الخطأ عند تغيير المسار
//     setHasShownError(false);
//   }, [location.pathname]);

//   if (checkingAuth) {
//     return <div>Loading...</div>;
//   }

//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
//     if (!hasShownError) {
//       toast.dismiss();
//       const toastConfig = {
//         position: "top-center",
//         autoClose: 10000,
//         hideProgressBar: false,
//         closeOnClick: false, // تغيير إلى false لمنع الإغلاق بالنقر
//         pauseOnHover: true,
//         draggable: false, // تغيير إلى false لمنع السحب
//         progress: undefined,
//         style: {
//           backgroundColor: '#ff6b6b',
//           color: 'white',
//           fontWeight: 'bold',
//           fontSize: '16px',
//           padding: '15px',
//           borderRadius: '8px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//         }
//       };

//       toast.error('عذراً، ليس لديك صلاحية للوصول إلى هذه الصفحة', toastConfig);
//       setHasShownError(true);
//     }
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
////////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkLoginStatus } from '../features/auth/authThunck';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(checkLoginStatus());
      setCheckingAuth(false);
    };
    checkAuth();
  }, [dispatch]);

  if (checkingAuth) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    showToastError('You do not have permission to access this page.');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

// Helper function to show toast error with improved styling
function showToastError(message) {
  toast.dismiss(); // Dismiss any previous toasts
  toast.error(message, {
    position: "top-center",
    autoClose: 10000, // Increase the duration to 10 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored", // Use a more visually appealing theme
    icon: false, // Remove the default toast icon
    style: {
      backgroundColor: "#e53e3e", // Red color for error toasts
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "16px 24px",
      borderRadius: "8px",
    },
  });
}