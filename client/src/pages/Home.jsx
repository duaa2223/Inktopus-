
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import Navbar from '../components/NavBar';
import PublisherApplicationForm from '../components/PublisherApplicationForm';
import { Book, Library, GraduationCap, Lightbulb } from 'lucide-react';
import { FaBook, FaSearch, FaUserGraduate, FaHandHoldingHeart, FaRegSmileBeam, FaGripfire } from "react-icons/fa";
import { SiOctopusdeploy } from "react-icons/si";
import { BsBalloonHeart } from "react-icons/bs";
import TopPublishersSection from '../components/Home/TopPuplisher';
import UserGuide from '../components/Home/services';
import { FAQ } from "../components/Home/FAQ";
import Slider from '../components/Home/slider';
import Card from '../components/Home/card';
import boy from '../../assets/boy2.svg';
import '../styles/Price.scss';
import HTMLFlipBook from 'react-pageflip';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState(-1);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const totalPages = 6;

  const { isLoggedIn, role } = useSelector((state) => state.auth);
  
  const pageImages = [
    "../../assets/sea.png",
    "../../assets/sea2.svg",
   
    "https://i.pinimg.com/736x/b6/ec/ce/b6ecce66c76ec600313c0f75206c4482.jpg",
    "https://i.pinimg.com/736x/36/61/8f/36618fc2b6eb7b26e858f538139df87a.jpg",
    "https://i.pinimg.com/736x/3e/28/c5/3e28c509f6a9d3637a7a7aa3f8a28a00.jpg",
    "https://i.pinimg.com/736x/d7/20/08/d720087205054228de6071d01324305b.jpg",
    
  ];

  const nextPage = () => {
    if (currentPage === -1) {
      setIsBookOpen(true);
      setCurrentPage(0);
    } else if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setIsBookOpen(false);
      setCurrentPage(-1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 0) {
      setIsBookOpen(false);
      setCurrentPage(-1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextPage();
      if (event.key === "ArrowLeft") prevPage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  const PageComponent = ({ index }) => (
    <motion.div
      key={index}
      className="page absolute w-full h-full"
      style={{
        transformOrigin: "right center",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: index <= currentPage ? 180 : 0 }}
      transition={{ 
        duration: 1.2, // Increased from 0.5 to 1.2
        type: "spring", 
        stiffness: 45, // Reduced from 100 to 45 for slower movement
        damping: 15 // Added damping for smoother animation
      }}
    >
      <div className="absolute w-full h-full backface-hidden overflow-hidden">
        <img src={pageImages[index]} alt={`Page ${index + 1} front`} className="w-full h-full object-cover" />
      </div>
      <div 
        className="absolute w-full h-full backface-hidden overflow-hidden" 
        style={{ transform: "rotateY(180deg)" }}
      >
        <img 
          src={pageImages[(index + 1) % totalPages]} 
          alt={`Page ${index + 1} back`} 
          className="w-full h-full object-cover"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </motion.div>
  );

  const renderPublisherButton = () => {
    if (isLoggedIn && role === 'reader') {
      return (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => setIsFormOpen(true)}
          className="mt-6 px-6 py-3 bg-[#8D493A] text-white rounded-full hover:bg-[#6D3B2E] transition-colors duration-300"
        >
          Open Application Form
        </motion.button>
      );
    }
    return null;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#F8EDE3] overflow-hidden mt-16">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content - Left side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 relative" style={{ color: "#8D493A" }}>
              <span className="absolute -top-6 -left-6 text-6xl sm:text-9xl opacity-20"> I</span>
              Inktopus
              <span className="block text-2xl sm:text-4xl mt-2">Discover, Learn, and Thrive</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl sm:text-2xl italic relative z-10"
            style={{ color: "#8D493A" }}
          >
            <span className="absolute -left-8 top-0 text-5xl sm:text-7xl opacity-20">"</span>
            "Your Gateway to Creativity and Learning
            <span className="absolute -right-8 bottom-0 text-5xl sm:text-7xl opacity-20">"</span>
          </motion.p>
          
          {renderPublisherButton()}
        </div>

        {/* Book Container - Right side */}
        <div className="hidden  w-full lg:w-1/2 relative mb-8 lg:mb-0 order-1 lg:order-2 lg:flex lg:justify-end">
          <div className="book-container w-[280px] h-[400px] sm:w-[400px] sm:h-[550px] perspective-[1500px] mx-auto lg:mx-0 relative">
            <motion.div 
              className="book relative w-full h-full"
              style={{ 
                transformStyle: "preserve-3d",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                borderRadius: "12px",
              }}
              animate={{ 
                rotateY: isBookOpen ? 180 : 0,
                translateZ: isBookOpen ? 50 : 0,
              }}
              transition={{ 
                duration: 1.2, // Increased from 0.5 to 1.2
                ease: "easeInOut",
                stiffness: 45, // Added for smoother animation
                damping: 15 // Added for smoother animation
              }}
            >
              {/* Book spine */}
              <div 
                className="absolute right-0 w-[30px] sm:w-[50px] h-full bg-[#8D493A] rounded-r-lg shadow-lg"
                style={{ transform: "rotateY(90deg) translateX(15px)" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <h2 className="text-white text-sm sm:text-xl font-bold transform rotate-180" style={{ writingMode: "vertical-rl" }}>BookMaster</h2>
                </div>
              </div>

              {/* Front cover */}
              <motion.div 
                className="absolute w-full h-full bg-[#D0B8A8] rounded-lg shadow-2xl flex items-center justify-center backface-hidden"
                whileHover={{ scale: 1.05 }}
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}
              >
                <h2 className="text-xl sm:text-3xl font-bold text-center mt-10 text-[#8D493A]">Our Book</h2>
              </motion.div>

              {/* Pages */}
              <AnimatePresence>
                {pageImages.map((_, index) => (
                  <PageComponent key={index} index={index} />
                ))}
              </AnimatePresence>

              {/* Back cover */}
              <motion.div 
                className="absolute w-full h-full bg-[#D0B8A8] rounded-lg shadow-2xl flex items-center justify-center backface-hidden" 
                style={{ transform: "rotateY(180deg)", boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}
              >
                {/* <h2 className="text-xl sm:text-3xl font-bold text-center mt-10 text-[#8D493A]">The End</h2> */}
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">

  <circle cx="200" cy="200" r="150" fill="#F8EDE3" />
  

  <g id="globe">
    <circle cx="200" cy="200" r="80" fill="#D0B8A8" />
    
    <path d="M120 200 C120 160, 200 160, 280 200" fill="none" stroke="#8D493A" stroke-width="2">
      <animate attributeName="d" 
        dur="8s" 
        repeatCount="indefinite"
        values="M120 200 C120 160, 200 160, 280 200;
                M120 200 C120 240, 200 240, 280 200;
                M120 200 C120 160, 200 160, 280 200" />
    </path>
    <path d="M120 180 C120 140, 200 140, 280 180" fill="none" stroke="#8D493A" stroke-width="2">
      <animate attributeName="d" 
        dur="8s" 
        repeatCount="indefinite"
        values="M120 180 C120 140, 200 140, 280 180;
                M120 180 C120 220, 200 220, 280 180;
                M120 180 C120 140, 200 140, 280 180" />
    </path>
    <path d="M120 220 C120 180, 200 180, 280 220" fill="none" stroke="#8D493A" stroke-width="2">
      <animate attributeName="d" 
        dur="8s" 
        repeatCount="indefinite"
        values="M120 220 C120 180, 200 180, 280 220;
                M120 220 C120 260, 200 260, 280 220;
                M120 220 C120 180, 200 180, 280 220" />
    </path>
  </g>

  
  <g id="paper-plane">
    <path d="M150,150 L170,160 L160,170 Z" fill="#8D493A">
      <animateMotion 
        path="M0,0 C100,-100 200,100 300,-50 C400,0 100,100 0,0"
        dur="10s"
        repeatCount="indefinite" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0"
        to="360"
        dur="10s"
        repeatCount="indefinite" />
    </path>
  </g>


  <g id="books">
    <path d="M180,100 L200,90 L220,100 L200,110 Z" fill="#8D493A">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; -20,20; 0,0"
        dur="4s"
        repeatCount="indefinite" />
    </path>
    <path d="M240,280 L260,270 L280,280 L260,290 Z" fill="#8D493A">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 20,-20; 0,0"
        dur="5s"
        repeatCount="indefinite" />
    </path>
  </g>

  
  <g id="ideas">
    <circle cx="140" cy="140" r="5" fill="#8D493A">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="3s"
        repeatCount="indefinite" />
    </circle>
    <circle cx="260" cy="260" r="5" fill="#8D493A">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite" />
    </circle>
  </g>
</svg>
              </motion.div>
              
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button 
            onClick={prevPage} 
            disabled={currentPage === -1}
            className="absolute left-0 lg:-left-52 top-1/2 transform -translate-y-1/2 bg-[#8D493A] text-white rounded-full p-4 shadow-lg disabled:opacity-50 z-10 text-2xl"
            whileHover={{ scale: 1.1, backgroundColor: "#D0B8A8", color: "#8D493A" }}
            whileTap={{ scale: 0.9 }}
          >
           
            →
          </motion.button>
          <motion.button 
            onClick={nextPage}
            className="absolute right-0 lg:-right-12 top-1/2 transform -translate-y-1/2 bg-[#8D493A] text-white rounded-full p-4 shadow-lg z-10 text-2xl"
            whileHover={{ scale: 1.1, backgroundColor: "#D0B8A8", color: "#8D493A" }}
            whileTap={{ scale: 0.9 }}
          >
             ←
          </motion.button>
        </div>
      </div>

      {/* Animated icons */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ color: '#8D493A' }}
      >
        <Book size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ color: '#8D493A' }}
      >
        <Library size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{ color: '#8D493A' }}
      >
        <GraduationCap size={36} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4"
        animate={{ opacity: [1, 0.5, 1], scale: [1, 0.8, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ color: '#8D493A' }}
      >
        <Lightbulb size={36} />
      </motion.div>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsFormOpen(false)} />
      )}
      
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${isFormOpen ? '' : 'pointer-events-none'}`}>
        <PublisherApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </section>
  );
};
// bg-gradient-to-r from-[#8D493A] to-[#D0B8A8]
// Animated Section Component
const AnimatedSection = () => {
  return (    
    <section className="py-32  bg-gradient-to-b from-[#D0B8A8] to-[#DFD3C3]  text-white mt-[10rem]"> 
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Discover Your Learning Adventure!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FaBook, title: "Vast Library" },
            { icon: FaSearch, title: "Easy Search" },
            { icon: FaUserGraduate, title: "Expert Guides" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <item.icon className="text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#DFD3C3] mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-[#8D493A] text-xl mb-4">Inktopus</h3>
            <p className="text-[#8D493A]/90 text-sm max-w-xs mx-auto md:mx-0">
              Empowering creativity through innovative learning resources and tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-medium text-[#8D493A] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  College
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-medium text-[#8D493A] mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Instagram 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Facebook 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Twitter 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#F8EDE3] py-6">
          <p className="text-center text-[#8D493A]/80 text-sm">
            &copy; {new Date().getFullYear()} Inktopus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8EDE3]">
      <Navbar />
      <HeroSection />
      <UserGuide />
      <TopPublishersSection />
     
      <AnimatedSection />
    
      <Slider />
      <Card />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;