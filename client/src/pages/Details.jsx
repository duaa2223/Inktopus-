import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartThunck'; // تأكد من المسار الصحيح


const BookDetails = () => {
  const { id } = useParams(); // الحصول على معرف الكتاب من الرابط
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // إنشاء دالة dispatch



  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`); // طلب لجلب تفاصيل الكتاب
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
      dispatch(addToCart({ bookId: book._id, quantity: 1 })); // استدعاء addToCart مع bookId والكمية
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
      <p className="mt-4 text-lg">{book.description}</p>
      <p className="mt-2 text-gray-600">Author: {book.author}</p>
      <p className="mt-2 text-gray-600">Price: ${book.price}</p>
      
      
      {/* زر لإضافة الكتاب إلى سلة الشراء */}
      <button 
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleAddToCart} // استدعاء دالة handleAddToCart عند النقر
      >
        Add to Cart
      </button>


      {/* عرض محتوى إضافي مثل مقاطع فيديو أو صور */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">More About This Book</h2>
        {/* يمكنك إضافة فيديو أو صور إضافية هنا */}
        <img src={book.cover_image} alt="Additional content" className="w-full h-32 object-cover rounded-lg mb-4" />
        <p>Watch the author talk about the book:</p>
        <iframe 
          className="w-full h-64 mt-4"
          src="https://www.youtube.com/embed/sample-video"
          title="Author Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default BookDetails;
