// // src/App.jsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp  from './pages/Register';
// import Book from './pages/Book';
// import Resource from './pages/College';
// import ProtectedRoute from './components/ProtectedRoute';
// import './index.css'; // هذا الملف يجب أن يكون داخل src
// // import Profile from './pages/Profile';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<SignUp />} /> 
//         <Route path="/book" element={
//             <ProtectedRoute>
//               <Book />
//             </ProtectedRoute>
//           } /> 
//           <Route path="/college" element={
//             <ProtectedRoute>
//               <Resource />
//             </ProtectedRoute>
//           } /> 
//         {/* <Route path="/profile" element={<Profile />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { checkLoginStatus } from './features/auth/authThunck';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux'; // استيراد الـ Provider من react-redux
// import { store } from './app/store'; // استيراد الـ store الذي قمت بتهيئته
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/Register';
// import Book from './pages/Book';
// import Resource from './pages/College';
// import ProtectedRoute from './components/ProtectedRoute';
// import Level from './pages/Levels';
// import Catalogpage from './pages/Catalog';
// import BookDetails from './pages/Details';
// import CartPage from './pages/Cart';
// import UploadContentForm from './pages/ProfilePublisher'
// import './index.css'; 
// import AdminDashboard from './pages/Dashboard'
// import { CartProvider } from './context/cartContext';
// // import { useEffect } from 'react';
// // import { dispatch } from 'react-redux';
// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkLoginStatus());
//   }, [dispatch]);
// //   useEffect(() => {
// //     const storedRole = localStorage.getItem('role');
// //     if (storedRole) {
// //         dispatch({
// //             type: 'auth/setRole',
// //             payload: storedRole,
// //         });
// //     }
// // }, [dispatch]);

//   return (

//       <Router>
//          <CartProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           {/* <Route path="/level" element={<Level />} /> */}
//           <Route path="/level/:collegeId" element={<Level />} />
//           {/* <Route path="/content/:collegeId/:academicYearId" element={<Catalogpage />} /> */}
//           <Route path="/content/college/:collegeId/year/:academicYearId" element={<Catalogpage />} />

//           <Route path="/book" element={
//               <ProtectedRoute>
//                 <Book />
//               </ProtectedRoute>
//             } /> 
//           <Route path="/college" element={
//               // <ProtectedRoute>
//                 <Resource />
//               // {/* </ProtectedRoute> */}
//             } /> 
//               <Route path="/book/:id" element={<BookDetails />} />
//               <Route path="/cart" element={<CartPage />} />
//               <Route path="/form" element={<UploadContentForm />} /> 
//               <Route path="/dashboard" element={<AdminDashboard  />} />
              
//         </Routes>
//         </CartProvider>
//       </Router>
  
//   );
// };

// export default App;
//////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { checkLoginStatus } from './features/auth/authThunck';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux'; 
// import { store } from './app/store'; 
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/Register';
// import Book from './pages/Book';
// import Resource from './pages/College';
// import ProtectedRoute from './components/ProtectedRoute';
// import Level from './pages/Levels';
// import Catalogpage from './pages/Catalog';
// import BookDetails from './pages/Details';
// import CartPage from './pages/Cart';
// import UploadContentForm from './pages/ProfilePublisher';
// import AdminDashboard from './pages/Dashboard';
// import Navbar from './components/NavBar';
// import { Toaster } from 'react-hot-toast';
// import CheckoutPage from './pages/Checkout';
// // import { CartProvider } from './context/cartContext';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// import './index.css'; 

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkLoginStatus());
//   }, [dispatch]);


  
//   return (
//     <Provider store={store}>
//       <PayPalScriptProvider options={{ 
//   "client-id": "AeGkSQtckEfbce4ePNU-LKCRMeO2BG7l9bvpLKABfwaPw3OaxSFu2NtEJRnkZ5IUZQ-SW2yMFkqejvs8",
//   currency: "USD"
// }}>
//       <Router>
//       <Navbar />
//       <Toaster position="top-center" />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<SignUp />} />
//             <Route path="/level/:collegeId" element={<Level />} />
//             <Route path="/content/college/:collegeId/year/:academicYearId" element={<Catalogpage />} />
//             <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
//             <Route path="/college" element={<Resource />} />
//             <Route path="/book/:id" element={<BookDetails />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/form" element={<UploadContentForm />} />
//             <Route path="/dashboard" element={<AdminDashboard />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             {/* Optionally add a 404 route */}
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
      
//       </Router>
//       </PayPalScriptProvider>
//     </Provider>
//   );
// };

// export default App;
//////////////////////////////////////////////////////////////////////
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLoginStatus } from './features/auth/authThunck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './app/store'; 
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Register';
// import Book from './pages/Book';
import Resource from './pages/College';
import ProtectedRoute from './components/ProtectedRoute';
import Level from './pages/Levels';
import Catalogpage from './pages/Catalog';
import BookDetails from './pages/Details';
import CartPage from './pages/Cart';
import UploadContentForm from './pages/ProfilePublisher';
import AdminDashboard from './pages/Dashboard';
// import { Toaster } from 'react-hot-toast';
import CheckoutPage from './pages/Checkout';
// import { CartProvider } from './context/cartContext';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import OrderConfirmationPage from './pages/OrderConfermation';
import { ToastContainer } from 'react-toastify';
import UserProfilePage from './pages/Profile';
import './index.css'; 

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Toaster position="top-center" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/level/:collegeId" element={<Level />} />
        <Route path="/content/college/:collegeId/year/:academicYearId" element={<Catalogpage />} />
        {/* <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} /> */}
        <Route path="/college" element={<Resource />} />
        {/* <Route path="/book/:id" element={<BookDetails />} /> */}
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
        
        {/* <Route
      //   path="/form"
      //   element={
      //     <ProtectedRoute allowedRoles={['publisher']}>
      //     <UploadContentForm />
      //     </ProtectedRoute>
      //   }
      // /> */}

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
      
      {/* <PayPalScriptProvider options={{ 
        "client-id": "AeGkSQtckEfbce4ePNU-LKCRMeO2BG7l9bvpLKABfwaPw3OaxSFu2NtEJRnkZ5IUZQ-SW2yMFkqejvs8",
        currency: "USD"
      }}> */}
        <AppContent />
      {/* </PayPalScriptProvider> */}
    </Provider>
  );
};

export default App;