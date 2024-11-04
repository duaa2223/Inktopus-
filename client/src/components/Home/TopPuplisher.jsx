import React from 'react';
import { motion } from 'framer-motion';
import { FaGripfire, FaBookOpen, FaQuoteRight } from 'react-icons/fa';

const TopPublishersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F8EDE3] to-[#DFD3C3]">
      {/* زخارف الخلفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <FaBookOpen className="w-full h-full text-[#8D493A]" />
        </div>
        <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
          <FaQuoteRight className="w-full h-full text-[#8D493A]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* العنوان المتحرك */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-[#D0B8A8] bg-opacity-30 mb-4">
            <span className="text-[#8D493A] font-medium">Our partners in success</span>
          </div>
          <h2 className="text-4xl font-serif font-semibold text-[#8D493A] flex items-center justify-center gap-3">
            <span>Our Top Publishers</span>
            <FaGripfire className="text-[#8D493A]" />
          </h2>
          <div className="w-24 h-1 bg-[#8D493A] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* صور الناشرين */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { src: "../../assets/p1.png", rotate: "rotate-6" },
            { src: "../../assets/p2.jpeg", rotate: "-rotate-6" },
            { src: "../../assets/p3.png", rotate: "rotate-6" },
            { src: "../../assets/p4.jpeg", rotate: "-rotate-6" }
          ].map((publisher, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8D493A] to-[#D0B8A8] rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="#_" className="relative block">
                <img
                  src={publisher.src}
                  className={`rounded-xl w-[20rem] h-[12rem] object-cover ${publisher.rotate} 
                    transition-all duration-500 transform
                    group-hover:rotate-0 group-hover:-translate-y-2 group-hover:scale-105
                    group-hover:shadow-xl
                    backdrop-blur-sm`}
                  alt="Publisher logo"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopPublishersSection;