import React from 'react';
import { School, BookOpen, Filter, Video, ShoppingCart, FileText, Truck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const ProcessStep = ({ number, title, icon, isActive }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl
           transition-all duration-300 ease-in-out
          ${isActive 
             ? 'bg-[#D0B8A8] scale-110 shadow-lg'
             : 'bg-[#DFD3C3] hover:bg-[#D0B8A8] hover:scale-110 hover:shadow-lg'
          }`}>
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#8D493A]
             text-white flex items-center justify-center text-sm font-bold">
            {number}
          </div>
          {icon}
        </div>
      </div>
      <p className="mt-4 text-center text-[#8D493A] font-medium text-sm">
        {title}
      </p>
    </div>
  );
};

const UserGuide = () => {
  const steps = [
    {
      title: "Select Your Faculty",
      icon: <School className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Choose Your Level",
      icon: <BookOpen className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Browse & Filter",
      icon: <Filter className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Watch Video Content",
      icon: <Video className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Purchase Books",
      icon: <ShoppingCart className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Get PDF Access",
      icon: <FileText className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Delivery Process",
      icon: <Truck className="text-4xl text-[#8D493A]" />
    },
    {
      title: "Start Learning",
      icon: <GraduationCap className="text-4xl text-[#8D493A]" />
    }
  ];

  return (
    <section className="py-32 bg-[#F8EDE3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          <h2 className="text-4xl font-serif font-semibold text-[#8D493A] flex items-center justify-center gap-3 mb-16">
            How to Use Our Platform</h2>
            
         
          
          {/* Process Steps */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                icon={step.icon}
              />
            ))}
          </div>
          
          {/* Call to Action Text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[#8D493A] text-lg mb-6 leading-relaxed">
              Join thousands of students who are already enhancing their learning experience
              through our comprehensive educational platform. Get access to both physical
              and digital materials tailored to your academic needs.
            </p>
            <p className="text-[#8D493A] font-bold text-xl mb-8">
              Start your learning journey today!
            </p>
            
            {/* Subscribe Button */}
            <Link to="/college">
  <button
    className="bg-[#8D493A] text-white px-8 py-3 rounded-full
               font-semibold hover:bg-[#D0B8A8] transition-colors duration-300"
  >
    Get Started Now
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;