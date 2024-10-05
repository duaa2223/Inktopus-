
//////////////////////////////////////////////////////
import Navbar from '../components/NavBar'
import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaUserGraduate } from 'react-icons/fa';
import  { useState, useEffect } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { Book, Library, GraduationCap, Lightbulb } from 'lucide-react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { SiOctopusdeploy } from "react-icons/si";
import { FaGripfire } from "react-icons/fa";
const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState(-1);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const totalPages = 6;

  const pageImages = [
    "../../assets/ballon.jpeg",
    "../../assets/store.jpeg",
    "../../assets/time.jpeg",
    "../../assets/My 15 Surreal Art Pieces.jpeg",
    "../../assets/book.jpeg",
    "../../assets/world.jpeg"
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
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: index <= currentPage ? -180 : 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="absolute w-full h-full backface-hidden overflow-hidden">
        <img src={pageImages[index]} alt={`Page ${index + 1} front`} className="w-full h-full object-cover" />
      </div>
      <div className="absolute w-full h-full backface-hidden overflow-hidden" style={{ transform: "rotateY(180deg)" }}>
        <img src={pageImages[(index + 1) % totalPages]} alt={`Page ${index + 1} back`} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#F8EDE3] overflow-hidden mt-16">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Website name and slogan */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mb-8 lg:mb-0" style={{ color: "#8D493A" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 relative">
              <span className="absolute -top-6 -left-6 text-6xl sm:text-9xl opacity-20">B</span>
              BookMaster
              <span className="block text-2xl sm:text-4xl mt-2">Your Literary Journey</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl sm:text-2xl italic relative z-10"
          >
            <span className="absolute -left-8 top-0 text-5xl sm:text-7xl opacity-20">"</span>
            Every Page Turns a New Adventure
            <span className="absolute -right-8 bottom-0 text-5xl sm:text-7xl opacity-20">"</span>
          </motion.p>
        </div>

        {/* Book Container */}
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 order-1 lg:order-2 lg:mr-64">
          <div className="book-container w-[280px] h-[400px] sm:w-[400px] sm:h-[550px] perspective-[1500px] mx-auto relative lg:ml-0">
            <motion.div 
              className="book relative w-full h-full"
              style={{ 
                transformStyle: "preserve-3d",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                borderRadius: "12px",
              }}
              animate={{ 
                rotateY: isBookOpen ? -180 : 0,
                translateZ: isBookOpen ? 50 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Book spine */}
              <div className="absolute left-0 w-[30px] sm:w-[50px] h-full bg-[#8D493A] rounded-l-lg shadow-lg"
                   style={{ transform: "rotateY(-90deg) translateX(-15px) sm:translateX(-25px)" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <h2 className="text-white text-sm sm:text-xl font-bold transform rotate-180" style={{ writingMode: "vertical-rl" }}>BookMaster</h2>
                </div>
              </div>

              {/* Front cover */}
              <motion.div 
                className="absolute w-full h-full bg-[#D0B8A8] rounded-r-lg shadow-2xl flex items-center justify-center backface-hidden"
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
                className="absolute w-full h-full bg-[#D0B8A8] rounded-l-lg shadow-2xl flex items-center justify-center backface-hidden" 
                style={{ transform: "rotateY(180deg)", boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}
              >
                <h2 className="text-xl sm:text-3xl font-bold text-center mt-10 text-[#8D493A]">The End</h2>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button 
            onClick={prevPage} 
            disabled={currentPage === -1}
            className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-[#8D493A] text-white rounded-full p-4 shadow-lg disabled:opacity-50 z-10 text-2xl"
            whileHover={{ scale: 1.1, backgroundColor: "#D0B8A8", color: "#8D493A" }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button 
            onClick={nextPage}
            className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-[#8D493A] text-white rounded-full p-4 shadow-lg z-10 text-2xl mr-32"
            whileHover={{ scale: 1.1, backgroundColor: "#D0B8A8", color: "#8D493A" }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>
      {/* Animated book-related icons */}
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
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
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
    </section>
  );
};

// Top Publishers Section
const TopPublishersSection = () => {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto text-center">
        {/* Animated title */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mt-[5%] text-4xl font-serif font-semibold text-center text-[#8D493A]"
        >
          Our Top <span className="ml-2 text-[#8D493A]"><FaGripfire className="inline" /></span> Publishers
        </motion.h2>
        <section className="bg-zinc-50 overflow-hidden">
  <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
    <div className="flex flex-col sm:flex-row mx-auto">
      {/*- Starts component */}{" "}
      <a href="#_">
        {" "}
        <img
          src="../../assets/1.svg"
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 w-[25rem] h-[15rem] object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="../../assets/store.jpeg "
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-[25rem] h-[15rem] object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="../../assets/boy.svg"
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 w-[25rem] h-[15rem] object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src="../../assets/1.svg"
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-[25rem] h-[15rem] object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      {/*- Ends component */}
    </div>
  </div>
</section>

       </div>
    </section>
  );
};

// Book Gallery
const BookGallery = () => {
  const books = [
    { id: 1, title: "The Art of Learning", cover: "../../assets/ballon.jpeg" },
    { id: 2, title: "Digital Mastery", cover: "../../assets/store.jpeg" },
    { id: 3, title: "Science Unleashed", cover: "../../assets/time.jpeg" },
  ];

  return (
    
    <section className="py-16 bg-gray-100">
<section>
<div className="flex items-center justify-center h-[20rem] ">
  <div className="bg-[#DFD3C3] py-2 md:top-[75%] sm:top-[70%] xs:top-[60%] w-[90%] rounded-2xl ">
  <h6 className="w-full md:px-4 xs:px-2 xl:text-3xl lg:text-5xl sm:text-4xl xs:text-3xl text-center font-serif font-bold text-white mt-[2rem] mb-[2rem]">
  Discover a World of Knowledge at Your Fingertips
  <span className="ml-2 text-[#8D493A]">
    <FaHandHoldingHeart className="inline" />
  </span>
  Guided by the Octopus  
  <SiOctopusdeploy className="inline ml-2 text-[#8D493A]" />
  to the Most Valuable Learning Resources.
</h6>
  </div>
</div>
</section>
      <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{book.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
//////

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    { id: 1, title: "Service 1", image: "../../assets/time.jpeg" },
    { id: 2, title: "Service 2", image: "../../assets//thedoor.svg" },
    { id: 3, title: "Service 3", image: "../../assets/store.jpeg" },
    { id: 4, title: "Service 4", image: "../../assets/un.jpg" },
    { id: 5, title: "Service 5", image: "/api/placeholder/400/300" },
    { id: 6, title: "Service 6", image: "/api/placeholder/400/300" },
  ];

  const itemsPerPage = 3;
  const pageCount = Math.ceil(services.length / itemsPerPage);

  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pageCount) % pageCount);
  };

  const visibleServices = services.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-[#F8EDE3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#8D493A]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#DFD3C3] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#8D493A]">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="bg-[#D0B8A8] text-white py-2 px-4 rounded-full hover:bg-[#8D493A] transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="bg-[#D0B8A8] text-white py-2 px-4 rounded-full hover:bg-[#8D493A] transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

// Animated Section
const AnimatedSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
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

// Magical Books Section
const MagicalBooksSection = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">The Magic of Books</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96"
        >
          <img src="../../assets/3d.glb/Squish.png" alt="Magical Bookstore" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

// Time Travel Section
const TimeTravelSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Travel Through Time with Books</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-96"
        >
          <img src="../../assets/ballon.jpeg" alt="Time Travel Book" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MasterPiece Learning Resources. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookGallery />
      <ServicesSection />
      <TopPublishersSection />
      <AnimatedSection />
      <MagicalBooksSection />
      <TimeTravelSection />
      
      <Footer />
    </div>
  );
};

export default Home;