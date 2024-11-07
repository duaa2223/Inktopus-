
// import { MdRecycling, MdCompost, MdFoodBank } from 'react-icons/md';
// import { FaSeedling, FaGlobeAmericas } from 'react-icons/fa';

// const ProcessStep = ({ number, title, icon, isActive }) => {
//   return (
//     <div className="flex flex-col items-center group">
//       <div className="relative">
//         <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl 
//           transition-all duration-300 ease-in-out
//           ${isActive 
//             ? 'bg-[#D0B8A8] scale-110 shadow-lg' 
//             : 'bg-[#DFD3C3] hover:bg-[#D0B8A8] hover:scale-110 hover:shadow-lg'
//           }`}>
//           <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#8D493A] 
//             text-white flex items-center justify-center text-sm font-bold">
//             {number}
//           </div>
//           {icon}
//         </div>
//       </div>
//       <p className="mt-4 text-center text-[#8D493A] font-medium text-sm">
//         {title}
//       </p>
//     </div>
//   );
// };

// export const Service = () => {
//   const steps = [
//     { 
//       title: "Collect food waste", 
//       icon: <MdFoodBank className="text-4xl text-[#8D493A]" /> 
//     },
//     { 
//       title: "Sort the waste", 
//       icon: <MdRecycling className="text-4xl text-[#8D493A]" /> 
//     },
//     { 
//       title: "Compost the waste", 
//       icon: <MdCompost className="text-4xl text-[#8D493A]" /> 
//     },
//     { 
//       title: "Use fertilizer", 
//       icon: <FaSeedling className="text-4xl text-[#8D493A]" /> 
//     },
//     { 
//       title: "Better environment", 
//       icon: <FaGlobeAmericas className="text-4xl text-[#8D493A]" /> 
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#F8EDE3]">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col items-center">
//           {/* Process Steps */}
//           <div className="flex flex-wrap justify-center gap-12 mb-16">
//             {steps.map((step, index) => (
//               <ProcessStep
//                 key={index}
//                 number={index + 1}
//                 title={step.title}
//                 icon={step.icon}
//               />
//             ))}
//           </div>
          
//           {/* Call to Action Text */}
//           <div className="text-center max-w-4xl mx-auto">
//             <p className="text-[#8D493A] text-lg mb-6 leading-relaxed">
//               Join us in our mission to reduce food waste! Sign up your Hotels or Restaurants 
//               to provide excess food and enjoy exclusive discounts on our services.
//             </p>
//             <p className="text-[#8D493A] font-bold text-xl mb-8">
//               Together, we can make a difference!
//             </p>
            
//             {/* Subscribe Button */}
//             <button className="bg-[#8D493A] text-white px-8 py-3 rounded-full 
//               font-semibold hover:bg-[#D0B8A8] transition-colors duration-300">
//               Subscribe Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
/////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Book, School, Layers, Filter, Video, ShoppingCart, Truck, FileText, ChevronRight } from 'lucide-react';

// const UserGuide = () => {
//   const steps = [
//     {
//       icon: <School className="w-8 h-8" />,
//       title: "اختر كليتك",
//       description: "حدد الكلية التي تدرس بها من القائمة المتاحة"
//     },
//     {
//       icon: <Layers className="w-8 h-8" />,
//       title: "اختر المرحلة الدراسية",
//       description: "اختر مرحلتك الدراسية لعرض الكتب المناسبة لك"
//     },
//     {
//       icon: <Book className="w-8 h-8" />,
//       title: "تصفح الكتب",
//       description: "استعرض الكتب المتوفرة في مرحلتك الدراسية"
//     },
//     {
//       icon: <Filter className="w-8 h-8" />,
//       title: "استخدم الفلتر",
//       description: "صنف الكتب حسب التخصص لتسهيل البحث"
//     },
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: "شاهد محتوى إضافي",
//       description: "استفد من مقاطع الفيديو التعليمية المرفقة مع كل كتاب"
//     },
//     {
//       icon: <ShoppingCart className="w-8 h-8" />,
//       title: "اطلب نسختك",
//       description: "احصل على النسخة الورقية مع نسخة PDF مجانية"
//     },
//     {
//       icon: <Truck className="w-8 h-8" />,
//       title: "استلم طلبك",
//       description: "سيتواصل معك مندوب الشحن لتوصيل طلبك"
//     },
//     {
//       icon: <FileText className="w-8 h-8" />,
//       title: "ابدأ بالتعلم",
//       description: "استمتع بالدراسة مع كتبك الجديدة"
//     }
//   ];

//   return (
//     <div className="bg-[#DFD3C3] rounded-lg p-8 my-8">
//       <h2 className="text-[#8D493A] text-3xl font-bold text-center mb-8">دليل المستخدم</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {steps.map((step, index) => (
//           <div key={index} className="relative">
//             <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="text-[#8D493A]">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#8D493A]">{step.title}</h3>
//                 <p className="text-[#8D493A]/80">{step.description}</p>
//               </div>
//             </div>
            
//             {index < steps.length - 1 && (
//               <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#8D493A]">
//                 <ChevronRight className="w-6 h-6" />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
      
//       <div className="mt-8 text-center text-[#8D493A]/90">
//         <p className="text-lg">نحن هنا لمساعدتك في رحلتك التعليمية</p>
//         <p className="text-sm mt-2">إذا كنت بحاجة إلى مساعدة إضافية، لا تتردد في التواصل معنا</p>
//       </div>
//     </div>
//   );
// };

// export default UserGuide;
///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { School, BookOpen, Filter, Video, ShoppingCart, FileText, Truck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
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
            <button className="bg-[#8D493A] text-white px-8 py-3 rounded-full
               font-semibold hover:bg-[#D0B8A8] transition-colors duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;