// import './Footer.scss'
// import footerBackground from '../../assets/444.svg';
// function Footer() {
//   return (
//     <div>
      
//     <footer className="bg-cover bg-center mt-[12rem]" 
//   style={{ backgroundImage: `url(${footerBackground})` }}>
//   <div>
//   <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
//     <div className="p-5 sm:w-8/12">
//       <h3 className="font-bold text-3xl text-white mb-4">Componentity</h3>
//       <div className="flex text-gray-500 uppercase text-sm">
//         <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
//           Home
//         </a>
//         <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
//           About Us
//         </a>
//         <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
//           Contact Us
//         </a>
//         <a href="#" className="mr-2  text-white hover:text-[#DFD3C3]">
//           Support Us
//         </a>
//       </div>
//     </div>
//     <div className="p-5 sm:w-4/12">
//       <h3 className="font-medium text-3xl text-white mb-4">
//         Subscribe to our Newsletter
//       </h3>
//       <form className="mt-4">
//         <input
//           className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="email"
//           placeholder="username@email.com"
//         />
//       </form>
//     </div>
//   </div>
//   <div className="flex py-5 m-auto text-gray-800 text-lg flex-col items-center border-t max-w-screen-xl">
//     <p>© Copyright 2020. All Rights Reserved.</p>
//   </div>
// </div>

// </footer>

//     </div>
//   );
// }

// export default Footer;
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#DFD3C3] mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-[#8D493A] text-xl mb-4">Inktopus</h3>
            <p className="text-[#8D493A]/90 text-sm max-w-xs mx-auto md:mx-0">
              Empowering creativity through innovative learning resources and tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-medium text-[#8D493A] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  College
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8D493A]/80 hover:text-[#8D493A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-medium text-[#8D493A] mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Instagram 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Facebook 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full bg-[#F8EDE3] hover:bg-[#8D493A] transition-all duration-300 group"
              >
                <Twitter 
                  size={20} 
                  className="text-[#8D493A] group-hover:text-[#F8EDE3] transition-colors" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#F8EDE3] py-6">
          <p className="text-center text-[#8D493A]/80 text-sm">
            &copy; {new Date().getFullYear()} Inktopus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;