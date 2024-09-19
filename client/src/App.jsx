// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp  from './pages/Register';
import Book from './pages/Book';
import Resource from './pages/College';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css'; // هذا الملف يجب أن يكون داخل src
// import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} /> 
        <Route path="/book" element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>
          } /> 
          <Route path="/college" element={
            <ProtectedRoute>
              <Resource />
            </ProtectedRoute>
          } /> 
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
