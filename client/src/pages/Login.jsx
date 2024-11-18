
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../features/auth/authThunck';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ username, password })).unwrap();
      if (resultAction) {
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <motion.section
      className="h-screen flex justify-center items-center bg-[#F8EDE3]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-[#DFD3C3] rounded-2xl flex max-w-3xl p-5 items-center shadow-md"
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
          <h2 className="font-bold text-3xl text-[#8D493A]">Login</h2>
          <motion.p 
            className="text-sm mt-4 text-[#8D493A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            If you already a member, easily log in now.
          </motion.p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              className="p-2 mt-8 rounded-xl border bg-[#F8EDE3] focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div className="relative">
              <motion.input
                className="p-2 rounded-xl border bg-[#F8EDE3] w-full focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            <motion.button
              className="bg-[#8D493A] text-white py-2 rounded-xl hover:bg-[#D0B8A8] font-medium"
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </motion.button>
            {error && <p className="text-red-500">Invalid username or password</p>}
          </form>
          <motion.div
            className="mt-6 items-center text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <hr className="border-gray-300" />
            
            <hr className="border-gray-300" />
          </motion.div>
         
          <motion.div
            className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
        
          </motion.div>
          <motion.div
            className="mt-4 text-sm flex justify-between items-center container-mr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="mr-3 md:mr-0">If you don't have an account..</p>
            <button className="hover:border register text-white bg-[#8D493A] hover:border-gray-400 rounded-xl py-2 px-5 hover:bg-[#D0B8A8] font-semibold">
              <Link to="/register">Register</Link>
            </button>
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
            src="../../assets/111.svg"
            alt="login form image"
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

export default Login;