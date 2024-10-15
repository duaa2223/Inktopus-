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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartThunck';
import { Input, Button, Card } from '../components/ui/UIComponents';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details', error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart({ bookId: book._id, quantity: 1 }));
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8D493A]"></div>
    </div>;
  }

  if (!book) {
    return <div className="text-center text-2xl text-red-500">Book not found</div>;
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, (book.additional_images?.length || 1) - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#F8EDE3]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Card className="w-full h-[500px] perspective-1000">
            <div className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${currentPage % 2 === 0 ? 'rotate-y-0' : 'rotate-y-180'}`}>
              <img 
                src={book.additional_images?.[currentPage] || book.cover_image || 'https://via.placeholder.com/400x600'} 
                alt={`Page ${currentPage + 1}`} 
                className="absolute w-full h-full object-cover backface-hidden"
              />
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#DFD3C3] flex items-center justify-center text-[#8D493A] text-2xl font-bold">
                {book.additional_images?.[currentPage + 1] ? (
                  <img 
                    src={book.additional_images[currentPage + 1]} 
                    alt={`Page ${currentPage + 2}`} 
                    className="w-full h-full object-cover"
                  />
                ) : 'End of preview'}
              </div>
            </div>
          </Card>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Button onClick={prevPage} disabled={currentPage === 0}>Previous</Button>
            <Button onClick={nextPage} disabled={currentPage >= (book.additional_images?.length || 1) - 1}>Next</Button>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#8D493A]">{book.title}</h1>
          {book.titleAr && <h2 className="text-2xl font-semibold mb-2 text-[#D0B8A8]">{book.titleAr}</h2>}
          <p className="text-lg mb-4">{book.description}</p>
          <p className="text-xl font-semibold mb-2">Author: {book.author}</p>
          {book.author_info && <p className="text-md mb-4">{book.author_info}</p>}
          <p className="text-2xl font-bold mb-4">Price: ${book.price}</p>
          <Button className="w-full py-3 text-xl" onClick={handleAddToCart}>
            Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 inline-block animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-[#8D493A]">More About This Book</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Book Details</h3>
            <ul className="space-y-2">
              <li><strong>Type:</strong> {book.content_type}</li>
              <li><strong>Publisher:</strong> {book.publisher?.name || 'Unknown'}</li>
              <li><strong>Downloads:</strong> {book.downloads || 0}</li>
              <li><strong>Views:</strong> {book.views || 0}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Promotional Videos</h3>
            {book.promo_videos && book.promo_videos.length > 0 ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={book.promo_videos[0]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <p>No promotional videos available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;