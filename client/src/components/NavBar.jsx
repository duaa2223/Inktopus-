
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
            <Link to="/college" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">College</Link>
          
            {!isLoggedIn  && (
             <Link to="/contact/nonUser" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}


            {isLoggedIn && role === 'reader' && (
             <Link to="/contact" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}
            
            {isLoggedIn && role === 'publisher' && (
             <Link to="/contact" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}
            
            
            
            {isLoggedIn && role === 'admin' && (
              <Link to="/dashboard" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Dashboard</Link>
            )}
            {isLoggedIn && role === 'publisher' && (
              <Link to="/form" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Profile</Link>
            )}

           {isLoggedIn && role === 'reader' && (
             <Link to="/profile" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">
              Profile
          </Link>
            )} 


          </nav>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
          <div className="hidden md:block">
              <CartIcon />
            </div>
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
            <div className="flex items-center space-x-2 text-[#8D493A] px-2">
                <CartIcon />
                <span>Cart</span>
              </div>
            <Link to="/" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Home</Link>
            <Link to="/college" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">College</Link>
          
            {!isLoggedIn  && (
             <Link to="/contact/nonUser" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}


            {isLoggedIn && role === 'reader' && (
             <Link to="/contact" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}
            
            {isLoggedIn && role === 'publisher' && (
             <Link to="/contact" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Contact</Link>
            )}
            
            
            
            {isLoggedIn && role === 'admin' && (
              <Link to="/dashboard" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Dashboard</Link>
            )}
            {isLoggedIn && role === 'publisher' && (
              <Link to="/form" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">Profile</Link>
            )}

           {isLoggedIn && role === 'reader' && (
             <Link to="/profile" className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200">
              Profile
          </Link>
            )} 

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;