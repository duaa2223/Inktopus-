
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLoginStatus } from './features/auth/authThunck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './app/store'; 
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Resource from './pages/College';
import ProtectedRoute from './components/ProtectedRoute';
import Level from './pages/Levels';
import Catalogpage from './pages/Catalog';
import BookDetails from './pages/Details';
import CartPage from './pages/Cart';
import UploadContentForm from './pages/ProfilePublisher';
import AdminDashboard from './pages/Dashboard';

import CheckoutPage from './pages/Checkout';

import OrderConfirmationPage from './pages/OrderConfermation';
import { ToastContainer } from 'react-toastify';
import UserProfilePage from './pages/Profile';
import ContactPage from './pages/ContactUser';
import ContactNonUser from './pages/ContactUs';
import './index.css'; 

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/level/:collegeId" element={<Level />} />
        <Route path="/content/college/:collegeId/year/:academicYearId" element={<Catalogpage />} />
        <Route path="/contact" element={<ContactPage  />} />
        <Route path="/college" element={<Resource />} />  
        <Route path="/contact/nonUser" element={< ContactNonUser />} />
        {/* book details */}
        <Route
        path="/book/:id"
        element={
          <ProtectedRoute allowedRoles={['reader','admin','publisher']}>
           <BookDetails />
          </ProtectedRoute>
        }
      />
        {/* cart page */}
       <Route
        path="/cart"
        element={
          <ProtectedRoute allowedRoles={['reader','admin','publisher']}>
        <CartPage />
          </ProtectedRoute>
        }
      />

        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/form" element={
           <ProtectedRoute allowedRoles={['publisher']}>
          <UploadContentForm /> 
          </ProtectedRoute>} />
          
        {/* puplisher profile */}
        
    

      {/* dashboard */}
        <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
            </ProtectedRoute>
        }
      />
      {/* User profile */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRoles={['reader']}>
            <UserProfilePage />
            </ProtectedRoute>
        }
      />


        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
     
      </Routes>
<ToastContainer
  position="top-center"
  autoClose={false}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  closeButton
/>
    </Router>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      
      
        <AppContent />
      
    </Provider>
  );
};

export default App;