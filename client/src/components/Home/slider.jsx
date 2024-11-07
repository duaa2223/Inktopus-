import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const imagePaths = [
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
  "/images/ballon.jpeg",
];

const Slider = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#F8EDE3] flex flex-col justify-center items-center font-sans text-sm text-black overflow-hidden py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-serif font-semibold text-[#8D493A] flex items-center justify-center gap-3 mb-12"
      >
        Memorable Moments from Our Tree Planting Campaigns
      </motion.h2>

      <style>
        {`
          .swiper-container {
            width: 100%;
            max-width: 100vw;
            padding-top: 50px;
            padding-bottom: 80px;
            overflow: hidden;
          }
          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
            -webkit-box-reflect: below 1px
              linear-gradient(transparent, transparent, #0006);
          }
          .image-wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
          }
          .image-wrapper::after {
            content: "";
            position: absolute;
            bottom: -100%;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(
              to bottom,
              transparent,
              transparent,
              rgba(0, 0, 0, 0.4)
            );
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
          }
          .swiper-slide-active .image-wrapper::after {
            transform: translateY(0);
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 3s ease-in-out, opacity 3s ease-in-out;
          }
          .swiper-slide-active .image-wrapper img {
            transform: scale(1.1);
          }
        `}
      </style>
      
      {domLoaded && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          loop={true}
          className="swiper-container"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {imagePaths.map((path, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="image-wrapper">
                <img
                  src={path}
                  alt={`Slide ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Slider;