
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartThunck';
import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/content/book/${id}`);
        // console.log('Book data received:', response.data);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details', error);
        setError('Failed to load book details. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchBookDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      console.log('Adding to cart:', book);
      // تغيير bookId إلى contentId
      dispatch(addToCart({ contentId: book._id, quantity: 1 }));
    }
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F8EDE3]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16"
        >
          <svg className="w-full h-full" viewBox="0 0 50 50">
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="#8D493A"
              strokeLinecap="round"
              d="M 25, 25 m -20, 0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-2xl text-[#8D493A] bg-[#F8EDE3] p-8">{error}</div>;
  }

  if (!book) {
    return <div className="text-center text-2xl text-[#8D493A] bg-[#F8EDE3] p-8">Book not found</div>;
  }

const images = [book.cover_image, ...(book.additional_images || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F8EDE3]">
      <Navbar />
      <div className="max-w-7xl mx-auto p-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[6rem]">
          <div className="space-y-8">
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg bg-[#DFD3C3]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <img
                src={images[currentImageIndex]}
                alt={`${book.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[600px] object-cover"
              /> */}
              <img
  src={images[currentImageIndex]}
  alt={`${book.title} - Image ${currentImageIndex + 1}`}
  className="w-full h-auto md:h-[600px] object-contain md:object-cover"
/>
              {images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#8D493A] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8D493A] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                  >
                    →
                  </motion.button>
                </>
              )}
            </motion.div>
            {book.promo_videos && book.promo_videos.length > 0 && (
  <motion.div
    className="bg-[#DFD3C3] p-6 rounded-lg shadow-md space-y-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-2xl font-semibold text-[#8D493A]">Promotional Videos</h3>
    <div className="grid grid-cols-2 gap-4">
      {book.promo_videos.map((videoUrl, index) => (
                    <a
                      key={index}
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-4 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition duration-300 text-center"
                    >
                      Watch Video {index + 1}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            className="space-y-6 bg-[#DFD3C3] p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold text-[#8D493A]">{book.title}</h1>
            {book.titleAr && (
              <h2 className="text-3xl font-semibold text-[#8D493A]">{book.titleAr}</h2>
            )}
            
            <p className="text-xl text-[#8D493A]">{book.description}</p>
            <div className="space-y-2">
              <p className="text-lg"><span className="font-semibold text-[#8D493A]"> Author: </span><span className=" text-[#8D493A]">{book.author}</span> </p>
              {book.author_info && <p className="text-md italic">{book.author_info}</p>}
              <p className="text-lg"><span className="font-semibold text-[#8D493A]">Type:</span><span className=" text-[#8D493A]"> {book.content_type}</span></p>
            </div>
            <div className="flex items-center space-x-4">
              {typeof book.price === 'number' ? (
                <span className="text-3xl font-bold text-[#8D493A]">${book.price.toFixed(2)}</span>
              ) : (
                <span className="text-3xl font-bold text-[#8D493A]">Price not available</span>
              )}
            </div>
            <motion.button 
              className="w-full py-3 px-4 bg-[#8D493A] text-white text-xl rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <div className="bg-[#F8EDE3] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">How will this book help you?</h3>
              <ul className="space-y-2">
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="mr-2 text-[#8D493A]">📚</span>
                  Expand your knowledge
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="mr-2 text-[#8D493A]">🧠</span>
                  Enhance critical thinking
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="mr-2 text-[#8D493A]">🎓</span>
                  Support your academic journey
                </motion.li>
                <motion.li
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="mr-2 text-[#8D493A]">🌟</span>
                  Inspire new ideas
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 bg-[#DFD3C3] p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#8D493A]">More About This Book</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">Book Details</h3>
              <ul className="space-y-2">
                <li><span className=" text-[#8D493A] mb-2 font-semibold">College:</span> <span className=" text-[#8D493A] mb-2 ">{book.college?.name || 'N/A'} </span> </li>
                <li><span className=" text-[#8D493A] mb-2 font-semibold">Academic Year:</span> <span  className=" text-[#8D493A] mb-2 ">{book.academic_year?.name || 'N/A'}</span></li>
                <p className="text-[#8D493A] mb-2  font-semibold">Purchased :<span  className=" text-[#8D493A] mb-2 "> {book.purchaseCount || 0} times</span></p>
               
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <BookAnimation /> */}
    </div>
  );
};

const BookAnimation = () => {
  return (
    
    <motion.div
      className="fixed bottom-10 right-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d="M10 10 L90 10 L90 90 L10 90 Z"
          fill="#8D493A"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M20 20 L80 20 L80 80 L20 80 Z"
          fill="#D0B8A8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.text
          x="50"
          y="55"
          textAnchor="middle"
          fill="#F8EDE3"
          fontSize="16"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          READ
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default BookDetails;