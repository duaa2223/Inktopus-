
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