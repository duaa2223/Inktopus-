import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: "Water Growing Kit",
    price: 15,
    images: ["/images/product1.jpg"]
  },
  {
    id: 2,
    name: "Eco Shopping Bags",
    price: 12,
    images: ["/images/product2.jpg"]
  },
  {
    id: 3,
    name: "Solar Garden Lights",
    price: 20,
    images: ["/images/product3.jpg"]
  },
  {
    id: 4,
    name: "Glass Straws Set",
    price: 8,
    images: ["/images/product4.jpg"]
  },
  {
    id: 5,
    name: "Bamboo Cutlery Set",
    price: 25,
    images: ["/images/product5.jpg"]
  },
  {
    id: 6,
    name: "Reusable Coffee Filter",
    price: 15,
    images: ["/images/product6.jpg"]
  }
];

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(sampleProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto my-20 font-sans max-md:max-w-md max-w-7xl">
      <h1 className="text-4xl font-extrabold text-center text-[#116A7B] my-10 mb-20">
        Eco Products
      </h1>

      <div className="relative w-full">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-500">
            No products available.
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="relative z-50 overflow-hidden rounded-lg shadow-md cursor-pointer group hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all w-72 h-80">
                  <div className="w-full mx-auto overflow-hidden h-80 aspect-w-16 aspect-h-8">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute left-0 right-0 w-11/12 p-3 mx-auto transition-all duration-300 bg-white rounded-lg -bottom-80 group-hover:bottom-2">
                    <div className="text-center">
                      <h3 className="text-base font-bold text-gray-800">
                        {product.name}
                      </h3>
                      <h4 className="text-lg text-[#116A7B] font-bold mt-2">
                        {product.price} JD
                      </h4>
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