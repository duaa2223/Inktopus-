
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, verifyOTP } from '../features/auth/authThunck';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Door from '../../assets/signup.svg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [validationError, setValidationError] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Password regex pattern
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      return 'Password must contain at least 8 characters, including uppercase, lowercase, number and special character';
    }
    return '';
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isOtpSent) {
      // Reset validation error
      setValidationError('');
  
      // Validate password
      const passwordError = validatePassword(password);
      if (passwordError) {
        setValidationError(passwordError);
        return;
      }
  
      try {
        await dispatch(register({ username, email, password })).unwrap();
        setIsOtpSent(true);
      } catch (err) {
        // Handle specific error types
        if (err.response?.data?.error === 'duplicate_username') {
          setValidationError('Username is already taken, please choose another one');
        } else if (err.response?.data?.error === 'duplicate_email') {
          setValidationError('Email is already registered, please use a different email');
        } else if (err.response?.data?.error === 'required_fields') {
          setValidationError('All fields are required');
        } else if (err.response?.data?.message) {
          setValidationError(err.response.data.message);
        } else {
          console.error('Registration failed:', err);
          setValidationError('Username or Email is already taken, please choose another one');
          
        }
      }
    } else {
      try {
        await dispatch(verifyOTP({ email, otp })).unwrap();
        navigate('/');
      } catch (err) {
        if (err.response?.data?.message) {
          setValidationError(err.response.data.message);
        } else {
          console.error('OTP verification failed:', err);
          setValidationError('OTP verification failed. Please try again.');
        }
      }
    }
  };
  return (
    <motion.section
      className="min-h-screen flex justify-center items-center bg-[#F8EDE3] pt-16 pb-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-[#DFD3C3] rounded-2xl flex max-w-4xl w-full p-8 items-center shadow-lg"
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
          <h2 className="font-bold text-3xl text-[#8D493A]">
            {isOtpSent ? 'Verify OTP' : 'Sign Up'}
          </h2>
          <motion.p 
            className="text-sm mt-4 text-[#8D493A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isOtpSent ? 'Verify your OTP to complete registration!' : 'New here? Create your account today!'}
          </motion.p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {!isOtpSent ? (
                <motion.div
                  key="registration"
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.input
                    className="p-3 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A] transition-all duration-300"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    className="p-3 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A] transition-all duration-300"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    className="p-3 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A] transition-all duration-300"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="otp"
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.input
                    className="p-3 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A] transition-all duration-300"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              className="bg-[#8D493A] text-white py-3 rounded-xl hover:bg-[#D0B8A8] font-medium transition-colors duration-300"
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (isOtpSent ? 'Verifying...' : 'Registering...') : (isOtpSent ? 'Verify OTP' : 'Register')}
            </motion.button>

            {(validationError || error) && (
              <motion.p 
                className="text-red-500 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {validationError || error}
              </motion.p>
            )}
          </form>

          <motion.div 
            className="mt-6 text-sm text-[#8D493A] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Already have an account? 
            <motion.a 
              href="/login" 
              className="text-[#8D493A] font-semibold ml-2 hover:text-[#D0B8A8]"
              whileHover={{ scale: 1.05 }}
            >
              Login here
            </motion.a>
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
            src={Door}
            alt="signup form image"
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

export default Register;