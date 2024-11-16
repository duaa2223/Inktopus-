// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cart/cartThunck'; // تأكد من المسار الصحيح


// const BookDetails = () => {
//   const { id } = useParams(); // الحصول على معرف الكتاب من الرابط
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch(); // إنشاء دالة dispatch



//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`/api/book/${id}`); // طلب لجلب تفاصيل الكتاب
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching book details', error);
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (book) {
//       dispatch(addToCart({ bookId: book._id, quantity: 1 })); // استدعاء addToCart مع bookId والكمية
//     }
//   };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!book) {
//     return <div>Book not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
//       <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
//       <p className="mt-4 text-lg">{book.description}</p>
//       <p className="mt-2 text-gray-600">Author: {book.author}</p>
//       <p className="mt-2 text-gray-600">Price: ${book.price}</p>
      
      
//       {/* زر لإضافة الكتاب إلى سلة الشراء */}
//       <button 
//         className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
//         onClick={handleAddToCart} // استدعاء دالة handleAddToCart عند النقر
//       >
//         Add to Cart
//       </button>


//       {/* عرض محتوى إضافي مثل مقاطع فيديو أو صور */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">More About This Book</h2>
//         {/* يمكنك إضافة فيديو أو صور إضافية هنا */}
//         <img src={book.cover_image} alt="Additional content" className="w-full h-32 object-cover rounded-lg mb-4" />
//         <p>Watch the author talk about the book:</p>
//         <iframe 
//           className="w-full h-64 mt-4"
//           src="https://www.youtube.com/embed/sample-video"
//           title="Author Video"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
//////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cart/cartThunck';
// import { Input, Button, Card } from '../components/ui/UIComponents';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`/api/book/${id}`);
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching book details', error);
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (book) {
//       dispatch(addToCart({ bookId: book._id, quantity: 1 }));
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8D493A]"></div>
//     </div>;
//   }

//   if (!book) {
//     return <div className="text-center text-2xl text-red-500">Book not found</div>;
//   }

//   const nextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, (book.additional_images?.length || 1) - 1));
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8 bg-[#F8EDE3]">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="relative">
//           <Card className="w-full h-[500px] perspective-1000">
//             <div className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${currentPage % 2 === 0 ? 'rotate-y-0' : 'rotate-y-180'}`}>
//               <img 
//                 src={book.additional_images?.[currentPage] || book.cover_image || 'https://via.placeholder.com/400x600'} 
//                 alt={`Page ${currentPage + 1}`} 
//                 className="absolute w-full h-full object-cover backface-hidden"
//               />
//               <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#DFD3C3] flex items-center justify-center text-[#8D493A] text-2xl font-bold">
//                 {book.additional_images?.[currentPage + 1] ? (
//                   <img 
//                     src={book.additional_images[currentPage + 1]} 
//                     alt={`Page ${currentPage + 2}`} 
//                     className="w-full h-full object-cover"
//                   />
//                 ) : 'End of preview'}
//               </div>
//             </div>
//           </Card>
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
//             <Button onClick={prevPage} disabled={currentPage === 0}>Previous</Button>
//             <Button onClick={nextPage} disabled={currentPage >= (book.additional_images?.length || 1) - 1}>Next</Button>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold mb-4 text-[#8D493A]">{book.title}</h1>
//           {book.titleAr && <h2 className="text-2xl font-semibold mb-2 text-[#D0B8A8]">{book.titleAr}</h2>}
//           <p className="text-lg mb-4">{book.description}</p>
//           <p className="text-xl font-semibold mb-2">Author: {book.author}</p>
//           {book.author_info && <p className="text-md mb-4">{book.author_info}</p>}
//           <p className="text-2xl font-bold mb-4">Price: ${book.price}</p>
//           <Button className="w-full py-3 text-xl" onClick={handleAddToCart}>
//             Add to Cart
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 inline-block animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </Button>
//         </div>
//       </div>
//       <div className="mt-12">
//         <h2 className="text-3xl font-bold mb-6 text-[#8D493A]">More About This Book</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Book Details</h3>
//             <ul className="space-y-2">
//               <li><strong>Type:</strong> {book.content_type}</li>
//               <li><strong>Publisher:</strong> {book.publisher?.name || 'Unknown'}</li>
//               <li><strong>Downloads:</strong> {book.downloads || 0}</li>
//               <li><strong>Views:</strong> {book.views || 0}</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold mb-4">Promotional Videos</h3>
//             {book.promo_videos && book.promo_videos.length > 0 ? (
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   src={book.promo_videos[0]}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//             ) : (
//               <p>No promotional videos available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
/////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`/api/book/${id}`);
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching book details', error);
//         setError('Failed to load book details. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-2xl text-red-500">{error}</div>;
//   }

//   if (!book) {
//     return <div className="text-center text-2xl text-red-500">Book not found</div>;
//   }

//   const images = [book.cover_image, ...(book.additional_images || [])].filter(Boolean);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-amber-50 to-yellow-100">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="space-y-8">
//           <div className="relative overflow-hidden rounded-lg shadow-lg">
//             <img
//               src={images[currentImageIndex]}
//               alt={`${book.title} - Image ${currentImageIndex + 1}`}
//               className="w-full h-[600px] object-cover"
//             />
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//                 >
//                   →
//                 </button>
//               </>
//             )}
//           </div>
//           {book.promo_videos && book.promo_videos.length > 0 && (
//             <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
//               <h3 className="text-2xl font-semibold text-blue-600">Promotional Video</h3>
//               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//                 <iframe
//                   src={book.promo_videos[0]}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="space-y-6">
//           <h1 className="text-4xl font-bold text-blue-600">{book.title}</h1>
//           {book.titleAr && (
//             <h2 className="text-3xl font-semibold text-blue-400">{book.titleAr}</h2>
//           )}
//           <div className="flex items-center space-x-2">
//             <span className="text-yellow-400">★</span>
//             <span className="text-lg font-semibold">{book.rating || 'N/A'}</span>
//             <span className="text-gray-500">({book.reviews || 0} reviews)</span>
//           </div>
//           <p className="text-xl">{book.description}</p>
//           <div className="space-y-2">
//             <p className="text-lg"><span className="font-semibold">Author:</span> {book.author}</p>
//             {book.author_info && <p className="text-md italic">{book.author_info}</p>}
//             <p className="text-lg"><span className="font-semibold">Publisher:</span> {book.publisher?.name || 'Unknown'}</p>
//             <p className="text-lg"><span className="font-semibold">Type:</span> {book.content_type}</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             {typeof book.price === 'number' ? (
//               <span className="text-3xl font-bold text-blue-600">${book.price.toFixed(2)}</span>
//             ) : (
//               <span className="text-3xl font-bold text-blue-600">Price not available</span>
//             )}
//             {typeof book.original_price === 'number' && (
//               <span className="text-xl text-gray-500 line-through">${book.original_price.toFixed(2)}</span>
//             )}
//           </div>
//           <button className="w-full py-3 px-4 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition duration-300">
//             Add to Cart
//           </button>
//           <div className="bg-blue-100 p-6 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-600">How will this book help you?</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <span className="mr-2 text-blue-600">▶</span>
//                 Mindfulness and Presence
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-blue-600">▶</span>
//                 Guided meditations
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-blue-600">▶</span>
//                 Self-reflection exercises
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-blue-600">▶</span>
//                 Inner peace techniques
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12">
//         <h2 className="text-3xl font-bold mb-6 text-blue-600">More About This Book</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-600">Book Details</h3>
//             <ul className="space-y-2">
//               <li><span className="font-semibold">College:</span> {book.college?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Academic Year:</span> {book.academic_year?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Specialization:</span> {book.specialization?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Downloads:</span> {book.downloads || 0}</li>
//               <li><span className="font-semibold">Views:</span> {book.views || 0}</li>
//             </ul>
//           </div>
//           {book.file_url && (
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Download</h3>
//               <button
//                 className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//                 onClick={() => window.open(book.file_url, '_blank')}
//               >
//                 Download Book
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
/////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cart/cartThunck'; // Make sure this path is correct

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showVideo, setShowVideo] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`/api/book/${id}`);
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching book details', error);
//         setError('Failed to load book details. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (book) {
//       dispatch(addToCart({ bookId: book._id, quantity: 1 }));
//     }
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const toggleVideo = () => {
//     setShowVideo(!showVideo);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-[#F8EDE3]">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8D493A]"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-2xl text-[#8D493A] bg-[#F8EDE3] p-8">{error}</div>;
//   }

//   if (!book) {
//     return <div className="text-center text-2xl text-[#8D493A] bg-[#F8EDE3] p-8">Book not found</div>;
//   }

//   const images = [book.cover_image, ...(book.additional_images || [])].filter(Boolean);

//   return (
//     <div className="max-w-7xl mx-auto p-8 bg-[#F8EDE3]">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="space-y-8">
//           <div className="relative overflow-hidden rounded-lg shadow-lg">
//             <img
//               src={images[currentImageIndex]}
//               alt={`${book.title} - Image ${currentImageIndex + 1}`}
//               className="w-full h-[600px] object-cover"
//             />
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#8D493A] bg-opacity-50 text-white p-2 rounded-full"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8D493A] bg-opacity-50 text-white p-2 rounded-full"
//                 >
//                   →
//                 </button>
//               </>
//             )}
//           </div>
//           {book.promo_videos && book.promo_videos.length > 0 && (
//             <div className="bg-[#DFD3C3] p-6 rounded-lg shadow-md space-y-4">
//               <h3 className="text-2xl font-semibold text-[#8D493A]">Promotional Video</h3>
//               <button
//                 onClick={toggleVideo}
//                 className="w-full py-2 px-4 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
//               >
//                 {showVideo ? 'Hide Video' : 'Show Video'}
//               </button>
//               {showVideo && (
//                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//                   <iframe
//                     src={book.promo_videos[0]}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="w-full h-full"
//                   ></iframe>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="space-y-6">
//           <h1 className="text-4xl font-bold text-[#8D493A]">{book.title}</h1>
//           {book.titleAr && (
//             <h2 className="text-3xl font-semibold text-[#D0B8A8]">{book.titleAr}</h2>
//           )}
//           <div className="flex items-center space-x-2">
//             <span className="text-yellow-400">★</span>
//             <span className="text-lg font-semibold">{book.rating || 'N/A'}</span>
//             <span className="text-gray-500">({book.reviews || 0} reviews)</span>
//           </div>
//           <p className="text-xl">{book.description}</p>
//           <div className="space-y-2">
//             <p className="text-lg"><span className="font-semibold">Author:</span> {book.author}</p>
//             {book.author_info && <p className="text-md italic">{book.author_info}</p>}
//             <p className="text-lg"><span className="font-semibold">Publisher:</span> {book.publisher?.name || 'Unknown'}</p>
//             <p className="text-lg"><span className="font-semibold">Type:</span> {book.content_type}</p>
//           </div>
//           <div className="flex items-center space-x-4">
//             {typeof book.price === 'number' ? (
//               <span className="text-3xl font-bold text-[#8D493A]">${book.price.toFixed(2)}</span>
//             ) : (
//               <span className="text-3xl font-bold text-[#8D493A]">Price not available</span>
//             )}
//           </div>
//           <button 
//             className="w-full py-3 px-4 bg-[#8D493A] text-white text-xl rounded-lg hover:bg-opacity-90 transition duration-300"
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//           <div className="bg-[#DFD3C3] p-6 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">How will this book help you?</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <span className="mr-2 text-[#8D493A]">▶</span>
//                 Mindfulness and Presence
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-[#8D493A]">▶</span>
//                 Guided meditations
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-[#8D493A]">▶</span>
//                 Self-reflection exercises
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-[#8D493A]">▶</span>
//                 Inner peace techniques
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12">
//         <h2 className="text-3xl font-bold mb-6 text-[#8D493A]">More About This Book</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-[#DFD3C3] p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">Book Details</h3>
//             <ul className="space-y-2">
//               <li><span className="font-semibold">College:</span> {book.college?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Academic Year:</span> {book.academic_year?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Specialization:</span> {book.specialization?.name || 'N/A'}</li>
//               <li><span className="font-semibold">Downloads:</span> {book.downloads || 0}</li>
//               <li><span className="font-semibold">Views:</span> {book.views || 0}</li>
//             </ul>
//           </div>
//           {book.file_url && (
//             <div className="bg-[#DFD3C3] p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold mb-4 text-[#8D493A]">Download</h3>
//               <button
//                 className="w-full py-3 px-4 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
//                 onClick={() => window.open(book.file_url, '_blank')}
//               >
//                 Download Book
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
///////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cart/cartThunck'; // Ensure this path is correct

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showVideoPopup, setShowVideoPopup] = useState(false);
//   const [currentVideoUrl, setCurrentVideoUrl] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/content/book/${id}`);
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching book details', error);
//         setError('Failed to load book details. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchBookDetails();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (book) {
//       dispatch(addToCart({ bookId: book._id, quantity: 1 }));
//     }
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const openVideoPopup = (videoUrl) => {
//     const embedUrl = videoUrl.replace("watch?v=", "embed/");
//     setCurrentVideoUrl(embedUrl);
//     setShowVideoPopup(true);
//   };

//   const closeVideoPopup = () => {
//     setShowVideoPopup(false);
//     setCurrentVideoUrl('');
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-white to-blue-100">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-2xl text-red-500 bg-gradient-to-r from-white to-blue-100 p-8">{error}</div>;
//   }

//   if (!book) {
//     return <div className="text-center text-2xl text-red-500 bg-gradient-to-r from-white to-blue-100 p-8">Book not found</div>;
//   }

//   const images = [book.cover_image, ...(book.additional_images || [])].filter(Boolean);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-white to-blue-100">
//       <div className="max-w-7xl mx-auto p-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
//               <img
//                 src={images[currentImageIndex]}
//                 alt={`${book.title} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-[600px] object-cover"
//               />
//               {images.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
//                   >
//                     ←
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
//                   >
//                     →
//                   </button>
//                 </>
//               )}
//             </div>
//             {book.promo_videos && book.promo_videos.length > 0 && (
//               <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
//                 <h3 className="text-2xl font-semibold text-blue-600">Promotional Videos</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {book.promo_videos.map((videoUrl, index) => (
//                     <button
//                       key={index}
//                       onClick={() => openVideoPopup(videoUrl)}
//                       className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//                     >
//                       Watch Video {index + 1}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
//             <h1 className="text-4xl font-bold text-blue-600">{book.title}</h1>
//             {book.titleAr && (
//               <h2 className="text-3xl font-semibold text-blue-400">{book.titleAr}</h2>
//             )}
//             <div className="flex items-center space-x-2">
//               <span className="text-yellow-400">★</span>
//               <span className="text-lg font-semibold">{book.rating || 'N/A'}</span>
//               <span className="text-gray-500">({book.reviews || 0} reviews)</span>
//             </div>
//             <p className="text-xl">{book.description}</p>
//             <div className="space-y-2">
//               <p className="text-lg"><span className="font-semibold">Author:</span> {book.author}</p>
//               {book.author_info && <p className="text-md italic">{book.author_info}</p>}
//               <p className="text-lg"><span className="font-semibold">Publisher:</span> {book.publisher?.name || 'Unknown'}</p>
//               <p className="text-lg"><span className="font-semibold">Type:</span> {book.content_type}</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               {typeof book.price === 'number' ? (
//                 <span className="text-3xl font-bold text-blue-600">${book.price.toFixed(2)}</span>
//               ) : (
//                 <span className="text-3xl font-bold text-blue-600">Price not available</span>
//               )}
//             </div>
//             <button 
//               className="w-full py-3 px-4 bg-blue-600 text-white text-xl rounded-lg hover:bg-blue-700 transition duration-300"
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//             <div className="bg-blue-50 p-6 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">How will this book help you?</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <span className="mr-2 text-blue-600">📚</span>
//                   Expand your knowledge
//                 </li>
//                 <li className="flex items-center">
//                   <span className="mr-2 text-blue-600">🧠</span>
//                   Enhance critical thinking
//                 </li>
//                 <li className="flex items-center">
//                   <span className="mr-2 text-blue-600">🎓</span>
//                   Support your academic journey
//                 </li>
//                 <li className="flex items-center">
//                   <span className="mr-2 text-blue-600">🌟</span>
//                   Inspire new ideas
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold mb-6 text-blue-600">More About This Book</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Book Details</h3>
//               <ul className="space-y-2">
//                 <li><span className="font-semibold">College:</span> {book.college?.name || 'N/A'}</li>
//                 <li><span className="font-semibold">Academic Year:</span> {book.academic_year?.name || 'N/A'}</li>
//                 <li><span className="font-semibold">Specialization:</span> {book.specialization?.name || 'N/A'}</li>
//                 <li><span className="font-semibold">Downloads:</span> {book.downloads || 0}</li>
//                 <li><span className="font-semibold">Views:</span> {book.views || 0}</li>
//               </ul>
//             </div>
//             {book.file_url && (
//               <div>
//                 <h3 className="text-2xl font-semibold mb-4 text-blue-600">Download</h3>
//                 <button
//                   className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//                   onClick={() => window.open(book.file_url, '_blank')}
//                 >
//                   Download Book
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {showVideoPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src={currentVideoUrl}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full"
//               ></iframe>
//             </div>
//             <button
//               onClick={closeVideoPopup}
//               className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Close Video
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookDetails;
////////////////////////////////////////////////////////////////////////////////////
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
              <img
                src={images[currentImageIndex]}
                alt={`${book.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[600px] object-cover"
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
      <BookAnimation />
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