// import './Details.scss'
// import merath from '../../assets/11.svg'
// import power from '../../assets/12.svg'
// import now from '../../assets/13.svg'
// import { Link } from 'react-router-dom';
// function Details() {
//   return (
//     <div>
// {/* search section */}
// <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-[10rem]">
//     {/* to change h for div by py-16 */}
//   <div className="relative isolate overflow-hidden bg-[#DFD3C3] px-6 py-16 text-center sm:px-16 sm:shadow-sm rounded-3xl">
//     <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
//       Can't find the resource you need? Try searching here!
//     </p>
//     <form action="/search">
//       <label
//         className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
//         htmlFor="search-bar"
//       >
//         <input
//           id="search-bar"
//           placeholder="your keyword here"
//           name="q"
//           className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
//           required=""
//         />
//         <button
//           type="submit"
//           className="w-full md:w-auto px-6 py-3 bg-[#8D493A] border-[#D0B8A8] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
//         >
//           <div className="flex items-center transition-all opacity-1">
//             <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
//               Search
//             </span>
//           </div>
//         </button>
//       </label>
//     </form>
//     <svg
//       viewBox="0 0 1024 1024"
//       className="absolute left-1/2 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
//       aria-hidden="true"
//     >
//       <circle
//         cx={512}
//         cy={512}
//         r={512}
//         fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
//         fillOpacity="0.7"
//       ></circle>
//       <defs>
//         <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
//           <stop stopColor="#3b82f6" />
//           <stop offset={1} stopColor="#1d4ed8" />
//         </radialGradient>
//       </defs>
//     </svg>
//   </div>
// </div>

// {/* end search section */}
// {/* section fillter */}

// {/* fillter section */}
// <div className="container mx-auto p-6  ">
//   <div className="bg-[#F8EDE3] p-6 rounded-lg shadow-lg">
//     {/* <h2 className="text-lg font-semibold mb-4">Tag Cloud</h2> */}
//     <div className="flex flex-wrap gap-3 ml-[10rem] ">
//     <a
//   href="#"
//   className="bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded-lg text-lg"
// >
//   Computer Science
// </a>
// <a
//   href="#"
//   className="bg-green-200 hover:bg-green-300 py-2 px-4 rounded-lg text-lg"
// >
//   Software Engineering
// </a>
// <a
//   href="#"
//   className="bg-yellow-200 hover:bg-yellow-300 py-2 px-4 rounded-lg text-lg"
// >
//   Information Systems
// </a>
// <a
//   href="#"
//   className="bg-indigo-200 hover:bg-indigo-300 py-2 px-4 rounded-lg text-lg"
// >
//   Cybersecurity
// </a>
// <a
//   href="#"
//   className="bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg text-lg"
// >
//   Data Science
// </a>
// <a
//   href="#"
//   className="bg-pink-200 hover:bg-pink-300 py-2 px-4 rounded-lg text-lg"
// >
//   Network Engineering
// </a>

//     </div>
//   </div>
// </div>

//         {/* section card */}
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  ">
//         {/* حاوية الثلاث كاردات */}
//   <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
     
//     {/* تعديل ارتفاع الكارد إلى 30 */} 
//     {/* حاوية الكارد الواحد */}
//   <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

//       <a href="#" />
//       <div className="relative">       
//         <a href="../Product/Product.jsx">
//              {/* تعديل ارتفاع الصورة إلى 20 */}
//         <img
//             className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//             src={power}
//             alt="Sunset in the mountains"
//           />


// <Link to="/product" className="relative block group">
//   <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
  
//   <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm group-hover:bg-white group-hover:text-indigo-600 transition duration-500 ease-in-out">
//     Price: $9
//   </div>
// </Link>

//         </a>
//         <a href="!#">
//           <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//             <span className="font-bold">Elite</span>
//             <small> Access</small>
//           </div>
//         </a>
//       </div>
//       <div className="px-6 py-4">
//         <a
//           href="#"
//           className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
//         >
//           Best View in Newyork City
//         </a>
//         <p className="text-gray-500 text-sm">The city that never sleeps</p>
//       </div>
//       <div className="px-6 py-4 flex flex-row items-center">
//         <span
//           href="#"
//           className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//         >
//           <svg
//             height="13px"
//             width="13px"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 512 512"
//             style={{ enableBackground: "new 0 0 512 512" }}
//             xmlSpace="preserve"
//           >
//             <g>
//               <g>
//                 <path
//                   d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
// 			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
// 			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
//                 />
//               </g>
//             </g>
//           </svg>
//           <span className="ml-1">2 hour to read</span>
//         </span>
//       </div>
//     </div>
//     {/* card2 */}

//     <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3]">
//       <a href="#" />
//       <div className="relative">
//         <a href="#">
//         <img
//             className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//             src={merath}
//             alt="Sunset in the mountains"
//           />
//           <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//         </a>
//         <a href="#!">
//         <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             price : 2$
//           </div>
//         </a>
//         <a href="!#">
//           <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//             <span className="font-bold"> Elite</span>
//             <small> Access </small>
//           </div>
//         </a>
//       </div>
//       <div className="px-6 py-4">
//         <a
//           href="#"
//           className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
//         >
//           Best Pizza in Town
//         </a>
//         <p className="text-gray-500 text-sm">
//           The collection of best pizza images in Newyork city
//         </p>
//       </div>
//       <div className="px-6 py-4 flex flex-row items-center">
//         <span
//           href="#"
//           className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
//         >
//           <svg
//             height="13px"
//             width="13px"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 512 512"
//             style={{ enableBackground: "new 0 0 512 512" }}
//             xmlSpace="preserve"
//           >
//             <g>
//               <g>
//                 <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
//               </g>
//             </g>
//           </svg>
//           <span className="ml-1">3 hour to read</span>
//         </span>
//       </div>
//     </div>
//     {/* end card2 */}
//     {/* card3 */}
//     <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3]">
//       <a href="#" />
//       <div className="relative">
//         <a href="#">
//         <img
//             className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//             src={now}
//             alt="Sunset in the mountains"
//           />
//           <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//         </a>
//         <a href="#!">
//           <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             price : 2$
//           </div>
//         </a>
//         <a href="!#">
//           <div className="text-sm absolute top-0 right-0 bg-[#FFD700] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//             <span className="font-bold"> Elite </span>
//             <small> Access</small>
//           </div>
//         </a>
//       </div>
//       <div className="px-6 py-4">
//         <a
//           href="#"
//           className="font-semibold text-lg inline-block hover:text-[#1E3A8A] transition duration-500 ease-in-out"
//         >
//           Best Salad Images ever
//         </a>
//         <p className="text-gray-500 text-sm">
//           The collection of best salads of town in pictures
//         </p>
//       </div>
//       <div className="px-6 py-4 flex flex-row items-center">
//         <span
//           href="#"
//           className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
//         >
//           <svg
//             height="13px"
//             width="13px"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             x="0px"
//             y="0px"
//             viewBox="0 0 512 512"
//             style={{ enableBackground: "new 0 0 512 512" }}
//             xmlSpace="preserve"
//           >
//             <g>
//               <g>
//                 <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
//               </g>
//             </g>
//           </svg>
//           <span className="ml-1">1 hour to read</span>
//         </span>
//       </div>
//     </div>
//     {/* end card3 */}
//     {/* card4 */}
//     <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

// <a href="#" />
// <div className="relative">
//   <a href="#">
//        {/* تعديل ارتفاع الصورة إلى 20 */}
//   <img
//       className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//       src={power}
//       alt="Sunset in the mountains"
//     />

//     <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//   </a>
//   <a href="#!">
//   <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             price : 2$
//           </div>
//   </a>
//   <a href="!#">
//     <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//       <span className="font-bold">Core</span>
//       <small>Access</small>
//     </div>
//   </a>
// </div>
// <div className="px-6 py-4">
//   <a
//     href="#"
//     className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//   >
//     Best View in Newyork City
//   </a>
//   <p className="text-gray-500 text-sm">The city that never sleeps</p>
// </div>
// <div className="px-6 py-4 flex flex-row items-center">
//   <span
//     href="#"
//     className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//   >
//     <svg
//       height="13px"
//       width="13px"
//       version="1.1"
//       id="Layer_1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 512 512"
//       style={{ enableBackground: "new 0 0 512 512" }}
//       xmlSpace="preserve"
//     >
//       <g>
//         <g>
//           <path
//             d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
//       c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
//       c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
//           />
//         </g>
//       </g>
//     </svg>
//     <span className="ml-1">2 hour to read</span>
//   </span>
// </div>
// </div>
// {/* end card 4 */}
// {/* card5 */}
// <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

// <a href="#" />
// <div className="relative">
//   <a href="#">
//        {/* تعديل ارتفاع الصورة إلى 20 */}
//   <img
//       className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//       src={power}
//       alt="Sunset in the mountains"
//     />

//     <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//   </a>
//   <a href="#!">
//   <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//             price : 2$
//           </div>
//   </a>
//   <a href="!#">
//     <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//       <span className="font-bold">Core </span>
//       <small>Access</small>
//     </div>
//   </a>
// </div>
// <div className="px-6 py-4">
//   <a
//     href="#"
//     className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
//   >
//     Best View in Newyork City
//   </a>
//   <p className="text-gray-500 text-sm">The city that never sleeps</p>
// </div>
// <div className="px-6 py-4 flex flex-row items-center">
//   <span
//     href="#"
//     className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//   >
//     <svg
//       height="13px"
//       width="13px"
//       version="1.1"
//       id="Layer_1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 512 512"
//       style={{ enableBackground: "new 0 0 512 512" }}
//       xmlSpace="preserve"
//     >
//       <g>
//         <g>
//           <path
//             d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
//       c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
//       c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
//           />
//         </g>
//       </g>
//     </svg>
//     <span className="ml-1">2 hour to read</span>
//   </span>
// </div>
// </div>
// {/* end card 5 */}
// {/* card6 */}
// <div className="rounded overflow-hidden shadow-lg h-[25rem] bg-[#DFD3C3] ">

// <a href="#" />
// <div className="relative">
//   <a href="#">
//        {/* تعديل ارتفاع الصورة إلى 20 */}
//   <img
//       className="w-full h-[15rem] object-cover" // h-20 لتحديد ارتفاع الصورة
//       src={power}
//       alt="Sunset in the mountains"
//     />

//     <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//   </a>
//   <a href="#!">
//   <div className="absolute bottom-0 left-0 bg-[#1E3A8A] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
//           Free 
//           </div>
//   </a>
//   <a href="!#">
//     {/* <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#8D493A] transition duration-500 ease-in-out">
//       <span className="font-bold">Free</span>
//       <small></small>
//     </div> */}
//   </a>
// </div>
// <div className="px-6 py-4">
//   <a
//     href="#"
//     className="font-semibold text-lg inline-block hover:text-[#8D493A] transition duration-500 ease-in-out"
//   >
//     Best View in Newyork City
//   </a>
//   <p className="text-gray-500 text-sm">The city that never sleeps</p>
// </div>
// <div className="px-6 py-4 flex flex-row items-center">
//   <span
//     href="#"
//     className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
//   >
//     <svg
//       height="13px"
//       width="13px"
//       version="1.1"
//       id="Layer_1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 512 512"
//       style={{ enableBackground: "new 0 0 512 512" }}
//       xmlSpace="preserve"
//     >
//       <g>
//         <g>
//           <path
//             d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
//       c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
//       c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
//           />
//         </g>
//       </g>
//     </svg>
//     <span className="ml-1">1 hour to read</span>
//   </span>
// </div>
// </div>
// {/* end card 6 */}
//   </div>
// </div>
// </div>

  
//   );
// }

// export default Details;
/////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/NavBar';
// import { Link } from 'react-router-dom';

// const ContentPage = () => {
//   const { collegeId, academicYearId } = useParams();
//   const [contents, setContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContents = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`, {
//           params: {
//             college: collegeId,
//             academic_year: academicYearId
//           }
//         });
//         setContents(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contents:', error);
//         setError('Failed to load contents. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchContents();
//   }, [collegeId, academicYearId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto mt-10">
//         <h1 className="text-3xl font-bold mb-6">Available Content</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {contents.map(content => (
//             <div key={content._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={content.cover_image} alt={content.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{content.title}</h2>
//                 <p className="text-gray-600 mb-2">Author: {content.author}</p>
//                 <p className="text-gray-600 mb-2">Type: {content.content_type}</p>
//                 <p className="text-gray-600 mb-4">{content.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-blue-600 font-bold">${content.price}</span>
//                  {/* زر View Details لفتح صفحة التفاصيل */}
//       <Link to={`/book/${content._id}`}>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           View Details
//         </button>
//       </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContentPage;
/////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const ContentPage = () => {
//   const { collegeId, academicYearId } = useParams();
//   const [contents, setContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContents = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`);
//         setContents(response.data.contents); // استخدم contents بدلاً من response.data
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contents:', error);
//         setError('فشل في تحميل المحتويات. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchContents();
//   }, [collegeId, academicYearId]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto mt-10">
//         <h1 className="text-3xl font-bold mb-6">المحتوى المتاح</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {contents.length > 0 ? (
//             contents.map(content => (
//               <div key={content._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img src={content.cover_image || '/default-image.png'} alt={content.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">{content.title}</h2>
//                   <p className="text-gray-600 mb-2">المؤلف: {content.author}</p>
//                   <p className="text-gray-600 mb-2">النوع: {content.content_type}</p>
//                   <p className="text-gray-600 mb-4">{content.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-blue-600 font-bold">${content.price}</span>
//                     <Link to={`/book/${content._id}`}>
//                       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                         عرض التفاصيل
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">لا توجد محتويات متاحة لهذه الكلية والمرحلة.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContentPage;
///////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Input, Button, Card } from '../components/ui/UIComponents';

// const ContentPage = () => {
//   const { collegeId, academicYearId } = useParams();
//   const [contents, setContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   useEffect(() => {
//     const fetchContents = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`);
//         setContents(response.data.contents);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contents:', error);
//         setError('Failed to load contents. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchContents();
//   }, [collegeId, academicYearId]);

//   const filteredContents = contents.filter(content =>
//     content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     content.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8" style={{ backgroundColor: '#F8EDE3' }}>
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#8D493A]">Learning Resources</h1>
      
//       <div className="mb-6 flex justify-center">
//         <div className="relative w-full max-w-xl">
//           <Input
//             placeholder="Search for books or authors..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 rounded-full"
//           />
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentItems.map(content => (
//           <Card key={content._id} title={content.title}>
//             <img src={content.cover_image || '/default-image.png'} alt={content.title} className="w-full h-48 object-cover mb-4" />
//             <p className="text-gray-600 mb-2">Author: {content.author}</p>
//             <p className="text-gray-600 mb-2">Type: {content.content_type}</p>
//             <p className="text-gray-700 mb-4 line-clamp-2">{content.description}</p>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-[#8D493A] font-bold">${content.price}</span>
//               <Link to={`/book/${content._id}`}>
//                 <Button className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                   View Details
//                 </Button>
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {filteredContents.length > itemsPerPage && (
//         <div className="flex justify-center mt-8">
//           {[...Array(Math.ceil(filteredContents.length / itemsPerPage))].map((_, index) => (
//             <Button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`mx-1 ${currentPage === index + 1 ? 'bg-[#8D493A] text-white' : 'bg-[#DFD3C3] text-[#8D493A]'}`}
//             >
//               {index + 1}
//             </Button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContentPage;
//////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Input, Button, Card } from '../components/ui/UIComponents';

// const ContentPage = () => {
//   const { collegeId, academicYearId } = useParams();
//   const [contents, setContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   useEffect(() => {
//     const fetchContents = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`);
//         setContents(response.data.contents);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contents:', error);
//         setError('Failed to load contents. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchContents();
//   }, [collegeId, academicYearId]);

//   const filteredContents = contents.filter(content =>
//     content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     content.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div className="flex justify-center items-center h-screen bg-amber-50"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-900"></div></div>;
//   if (error) return <div className="text-center py-10 text-red-500 bg-amber-50">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-extrabold mb-8 text-center text-amber-900 drop-shadow-md">
//           <span className="inline-block transform -rotate-3 hover:rotate-0 transition-transform duration-300">📚</span> Learning Resources
//         </h1>
        
//         <div className="mb-12 max-w-3xl mx-auto">
//           <div className="relative">
//             <Input
//               placeholder="Search for books or authors..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-amber-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 shadow-md transition-all duration-300"
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {currentItems.map(content => (
//             <Card key={content._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className="relative h-64 overflow-hidden">
//                 <img src={content.cover_image || '/default-book-cover.jpg'} alt={content.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{content.title}</h3>
//                   <p className="text-sm text-amber-200">By {content.author}</p>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <p className="text-amber-900 mb-2">{content.content_type}</p>
//                 <p className="text-gray-600 mb-4 line-clamp-3">{content.description}</p>
//                 <div className="flex justify-between items-center mt-4">
//                   <span className="text-2xl font-bold text-amber-600">${content.price}</span>
//                   <Link to={`/book/${content._id}`}>
//                     <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center space-x-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                       </svg>
//                       <span>View Details</span>
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         {filteredContents.length > itemsPerPage && (
//           <div className="flex justify-center mt-12">
//             {[...Array(Math.ceil(filteredContents.length / itemsPerPage))].map((_, index) => (
//               <Button
//                 key={index}
//                 onClick={() => paginate(index + 1)}
//                 className={`mx-1 w-10 h-10 rounded-full font-bold ${
//                   currentPage === index + 1
//                     ? 'bg-amber-500 text-white'
//                     : 'bg-white text-amber-500 border border-amber-500 hover:bg-amber-100'
//                 } transition-colors duration-300`}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContentPage;
/////////////////////////////////////////////
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, Card } from '../components/ui/UIComponents';
import { ChevronRight } from 'lucide-react';

const ContentPage = () => {
  const { collegeId, academicYearId } = useParams();
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchContents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`);
        setContents(response.data.contents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contents:', error);
        setError('Failed to load contents. Please try again later.');
        setLoading(false);
      }
    };

    fetchContents();
  }, [collegeId, academicYearId]);

  const filteredContents = contents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContents.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="flex justify-center items-center h-screen bg-[#F8EDE3]"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8D493A]"></div></div>;
  if (error) return <div className="text-center py-10 text-[#8D493A] bg-[#F8EDE3]">{error}</div>;

  return (
    <div className="min-h-screen bg-[#F8EDE3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  mt-[6rem]">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-[#8D493A]">
          <span className="inline-block transform hover:rotate-12 transition-transform duration-300">📚</span> Learning Resources
        </h1>
        
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative">
            <Input
              placeholder="Search for books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-2 border-[#D0B8A8] focus:border-[#8D493A] focus:ring focus:ring-[#D0B8A8] focus:ring-opacity-50 shadow-md transition-all duration-300"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8D493A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map(content => (
            <div key={content._id} className="bg-[#DFD3C3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={content.cover_image || '/default-book-cover.jpg'} 
                  alt={content.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#8D493A] mb-2 line-clamp-1">{content.title}</h3>
                <p className="text-[#8D493A] mb-2">By {content.author}</p>
                <p className="text-[#8D493A] mb-2">{content.content_type}</p>
                <p className="text-[#8D493A] text-sm mb-4 line-clamp-2">{content.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-[#8D493A]">${content.price}</span>
                  <Link to={`/book/${content._id}`}>
                    <Button className="bg-[#8D493A] hover:bg-[#D0B8A8] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center group">
                      <span>View Details</span>
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContents.length > itemsPerPage && (
          <div className="flex justify-center mt-12">
            {[...Array(Math.ceil(filteredContents.length / itemsPerPage))].map((_, index) => (
              <Button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 w-10 h-10 rounded-full font-bold ${
                  currentPage === index + 1
                    ? 'bg-[#8D493A] text-white'
                    : 'bg-[#DFD3C3] text-[#8D493A] hover:bg-[#D0B8A8]'
                } transition-colors duration-300`}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;