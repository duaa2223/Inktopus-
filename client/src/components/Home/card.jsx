import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Card= () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopSellingBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/content/top-selling');
        if (!response.ok) {
          throw new Error('Failed to fetch top selling books');
        }
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopSellingBooks();
  }, []);

  return (
    <div className="mx-auto my-20 font-sans max-md:max-w-md max-w-7xl py-12">
      <h1 className="text-4xl font-serif font-semibold text-[#8D493A] flex items-center justify-center gap-3 mb-20">
        Top Selling Books
      </h1>

      <div className="relative w-full">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : books.length === 0 ? (
          <div className="text-center text-gray-500">
            No books available.
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            className="multiple-slide-carousel py-52"
          >
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <div className="relative z-50 overflow-hidden rounded-lg shadow-md cursor-pointer group hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all w-72 h-80">
                  <div className="w-full mx-auto overflow-hidden h-80 aspect-w-16 aspect-h-8">
                    <img
                      src={book.cover_image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute left-0 right-0 w-11/12 p-3 mx-auto transition-all duration-300 bg-white rounded-lg -bottom-80 group-hover:bottom-2">
                    <div className="text-center">
                      <h3 className="text-base font-bold text-gray-800">
                        {book.title}
                      </h3>
                      <h4 className="text-lg text-[#116A7B] font-bold mt-2">
                        {book.price} JD
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Purchased {book.purchaseCount} times
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <style>
        {`
          .multiple-slide-carousel {
            padding: 50px 0;
          }
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            background: #116A7B;
          }
        `}
      </style>
    </div>
  );
};

export default Card;