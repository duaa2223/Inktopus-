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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLoginStatus } from './features/auth/authThunck';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // استيراد الـ Provider من react-redux
import { store } from './app/store'; // استيراد الـ store الذي قمت بتهيئته
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Book from './pages/Book';
import Resource from './pages/College';
import ProtectedRoute from './components/ProtectedRoute';
import Level from './pages/Levels';
import Catalogpage from './pages/Catalog';
import BookDetails from './pages/Details';
import CartPage from './pages/Cart';
import UploadContentForm from './pages/ProfilePublisher'
import './index.css'; 

// import { useEffect } from 'react';
// import { dispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);
//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     if (storedRole) {
//         dispatch({
//             type: 'auth/setRole',
//             payload: storedRole,
//         });
//     }
// }, [dispatch]);

  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="/level" element={<Level />} /> */}
          <Route path="/level/:collegeId" element={<Level />} />
          {/* <Route path="/content/:collegeId/:academicYearId" element={<Catalogpage />} /> */}
          <Route path="/content/college/:collegeId/year/:academicYearId" element={<Catalogpage />} />

          <Route path="/book" element={
              <ProtectedRoute>
                <Book />
              </ProtectedRoute>
            } /> 
          <Route path="/college" element={
              // <ProtectedRoute>
                <Resource />
              // {/* </ProtectedRoute> */}
            } /> 
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/form" element={<UploadContentForm />} />
              
              
        </Routes>
      </Router>
  
  );
};

export default App;
