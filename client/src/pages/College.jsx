
// import  { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import Navbar from '../components/NavBar';
// // import Resource from '../Resourse/Resourse'
// import { RiCollageFill } from "react-icons/ri";
// const Resource = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       return; // إذا كانت الخريطة موجودة، لا تقم بإنشاء واحدة جديدة
//     }

//     // إنشاء الخريطة مع الإعدادات اللازمة
//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple, // استخدم CRS بسيطة لعرض الصور بدلاً من خريطة العالم
//       minZoom: -5, // تعيين مستوى تكبير أقل ليتناسب مع الصورة الكبيرة
//       maxZoom: 5, // تعيين مستوى تكبير أعلى إذا لزم الأمر
//     }).setView([300, 600], 0);
//     // mapRef.current.setView([0, 0], 2);
//     // إضافة الصور المختلفة
//     const bounds1 = [[0, 0], [500, 800]];
//     L.imageOverlay('/client/assets/1.svg', bounds1).addTo(mapRef.current);
    
//     const bounds2 = [[0, 800], [500, 1600]]; // تعديل الأبعاد
//     L.imageOverlay('/images/2.svg', bounds2).addTo(mapRef.current);
    
//     const bounds3 = [[0, 1600], [500, 2400]]; // تعديل الأبعاد
//     L.imageOverlay('/images/3.svg', bounds3).addTo(mapRef.current);
    
//     const bounds4 = [[500, 0], [1000, 800]]; // تعديل الأبعاد
//     L.imageOverlay('/images/4.svg', bounds4).addTo(mapRef.current);
    
//     const bounds5 = [[500, 800], [1000, 1600]]; // تعديل الأبعاد
//     L.imageOverlay('/images/5.svg', bounds5).addTo(mapRef.current);
//   const colleges = [
//     { name: 'College A', position: [250, 400], link: '/category/college-a' },
//     { name: 'It', position: [250, 1200], link: '/level'  }, // داخل الصورة الثانية
//     { name: 'College C', position: [250, 2000], link: '/category/college-c' }, // داخل الصورة الثالثة
//     { name: 'College D', position: [750, 400], link: '/category/college-d' },  // داخل الصورة الرابعة
//     { name: 'College E', position: [750, 1200], link: '/category/college-e' }, // داخل الصورة الخامسة
//   ];
  

//     // إضافة دوائر وكلية
//     colleges.forEach(college => {
//       const circle = L.circle(college.position, {
//         color: 'red',
//         fillColor: '#f03',
//         // fillOpacity: 0.5,
//         radius: 50 // تعديل الحجم حسب الحاجة
//       }).addTo(mapRef.current);

//       circle.bindTooltip(college.name, {
//         permanent: false, 
//         direction: 'top'
//       });
      
     
// circle.bindPopup(`<b>${college.name}</b>`)
// .on('click', () => {
//   window.location.href = college.link;
// });

//     });

//   }, []); // تأكد من تنفيذ useEffect مرة واحدة فقط عند تحميل المكون

//   return <>
//   < Navbar />
//  <h1 className=" text-4xl font-bold text-center text-zinc-800 mt-[7rem]">Choose Your College <RiCollageFill className='inline' /><span></span></h1>
//    <div id="map" style={{ background:'#DFD3C3', width: '80%', height: '500px', marginTop: '2%', marginLeft:'10%', border: '2px solid #8D493A', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>;
// </>

// };

// export default Resource;
////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';
// import { RiCollageFill } from "react-icons/ri";

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     const bounds = [
//       [[0, 0], [500, 800]],
//       [[0, 800], [500, 1600]],
//       [[0, 1600], [500, 2400]],
//       [[500, 0], [1000, 800]],
//       [[500, 800], [1000, 1600]]
//     ];

//     bounds.forEach((bound, index) => {
//       L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     });

//     // Assign random positions to colleges for demonstration
//     // In a real scenario, you'd want to store and fetch these positions from your database
//     colleges.forEach((college, index) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         radius: 50
//       }).addTo(mapRef.current);

//       circle.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       circle.bindPopup(`<b>${college.name}</b>`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
//         Choose Your College <RiCollageFill className='inline' />
//       </h1>
//       <div id="map" style={{
//         background: '#DFD3C3',
//         width: '80%',
//         height: '500px',
//         marginTop: '2%',
//         marginLeft: '10%',
//         border: '2px solid #8D493A',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//       }}></div>
//       <div className="college-list mt-8">
//         {colleges.map(college => (
//           <div key={college._id} className="college-item mb-4">
//             {college.imageUrl && <img src={college.imageUrl} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />}
//             <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Resource;
/////////////////////////////////////////////////////// one work
// import { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';
// import { RiCollageFill } from "react-icons/ri";

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     const bounds = [
//       [[0, 0], [500, 800]],
//       [[0, 800], [500, 1600]],
//       [[0, 1600], [500, 2400]],
//       [[500, 0], [1000, 800]],
//       [[500, 800], [1000, 1600]]
//     ];

//     bounds.forEach((bound, index) => {
//       L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     });

//     colleges.forEach((college, index) => {
//       // تحديد موقع عشوائي للكلية على الخريطة (يمكنك تعديل هذا لاستخدام مواقع حقيقية من قاعدة البيانات)
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       // إنشاء أيقونة مخصصة باستخدام صورة الكلية
//       const collegeIcon = L.icon({
//         iconUrl: college.imageUrl,
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       // إضافة الماركر بالأيقونة المخصصة
//       const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

//       // إضافة دائرة حمراء فوق الصورة
//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 40
//       }).addTo(mapRef.current);

//       // إضافة التفاعلات (tooltip و popup)
//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${college.name}</b>`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
//         Choose Your College <RiCollageFill className='inline' />
//       </h1>
//       <div id="map" style={{
//         background: '#DFD3C3',
//         width: '80%',
//         height: '500px',
//         marginTop: '2%',
//         marginLeft: '10%',
//         border: '2px solid #8D493A',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//       }}></div>
//       <div className="college-list mt-8">
//         {colleges.map(college => (
//           <div key={college._id} className="college-item mb-4">
//             {college.imageUrl && <img src={college.imageUrl} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />}
//             <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Resource;
//////////////////////////////////////////////////////////////////////////////work work 
// import { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';
// import { RiCollageFill } from "react-icons/ri";

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     const bounds = [
//       [[0, 0], [500, 800]],
//       [[0, 800], [500, 1600]],
//       [[0, 1600], [500, 2400]],
//       [[500, 0], [1000, 800]],
//       [[500, 800], [1000, 1600]]
//     ];

//     bounds.forEach((bound, index) => {
//       L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     });

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const collegeIcon = L.icon({
//         iconUrl: college.imageUrl,
//         iconSize: [60, 60], // تم تعديل الحجم ليكون ثابتًا
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30 // تم تعديل نصف القطر ليتناسب مع حجم الأيقونة الجديد
//       }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(college.name)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر كليتك</h1>
//         <div id="map" style={{ height: '400px', width: '100%' }} className="mb-8"></div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {colleges.map(college => (
//             <div key={college._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img 
//                 src={college.imageUrl} 
//                 alt={college.name} 
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
//                 <p className="text-gray-600">{college.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Resource;
////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('Failed to load colleges. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     const bounds = [
//       [[0, 0], [500, 800]],
//       [[0, 800], [500, 1600]],
//       [[0, 1600], [500, 2400]],
//       [[500, 0], [1000, 800]],
//       [[500, 800], [1000, 1600]]
//     ];

//     bounds.forEach((bound, index) => {
//       L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     });

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const collegeIcon = L.icon({
//         iconUrl: college.imageUrl || '/default-college-icon.png',
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30
//       }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
//   if (colleges.length === 0) return <div className="text-center mt-8">No colleges found.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
//           اختر كليتك
//         </h1>
//         <div id="map" className="w-full h-[500px] rounded-lg border-2 border-[#8D493A] shadow-lg mb-8" style={{ background: '#DFD3C3' }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;
///////////////////////////////////////////////////////////////////////////////////// work 2
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('فشل في تحميل الكليات. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     const bounds = [
//       [[0, 0], [500, 800]],
//       [[0, 800], [500, 1600]],
//       [[0, 1600], [500, 2400]],
//       [[500, 0], [1000, 800]],
//       [[500, 800], [1000, 1600]]
//     ];

//     bounds.forEach((bound, index) => {
//       L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     });

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const collegeIcon = L.icon({
//         iconUrl: college.imageUrl || '/default-college-icon.png',
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

//       // إضافة النقطة الحمراء
//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30
//       }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (colleges.length === 0) return <div>لم يتم العثور على كليات.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر كليتك</h1>
//         <div id="map" style={{
//           height: '80vh',
//           width: '100%',
//           border: '2px solid #8D493A',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;
///////////////////////////////////////////////////////////// work 4
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('فشل في تحميل الكليات. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     // إزالة المربعات الخمسة غير المرغوب فيها
//     // const bounds = [
//     //   [[0, 0], [500, 800]],
//     //   [[0, 800], [500, 1600]],
//     //   [[0, 1600], [500, 2400]],
//     //   [[500, 0], [1000, 800]],
//     //   [[500, 800], [1000, 1600]]
//     // ];

//     // bounds.forEach((bound, index) => {
//     //   L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
//     // });

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const collegeIcon = L.icon({
//         iconUrl: college.imageUrl || '/default-college-icon.png',
//         iconSize: [120, 120], // تكبير حجم الأيقونة
//         iconAnchor: [60, 60],
//         popupAnchor: [0, -60]
//       });

//       const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

//       // إضافة النقطة الحمراء (أصغر من الأيقونة)
//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 20 // تصغير حجم الدائرة الحمراء
//       }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -60] // تعديل موضع التلميح
//       });

//       marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (colleges.length === 0) return <div>لم يتم العثور على كليات.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر كليتك</h1>
//         <div id="map" style={{
//           height: '80vh',
//           width: '100%',
//           border: '2px solid #8D493A',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;
///////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('فشل في تحميل الكليات. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       // إنشاء أيقونة مخصصة تجمع بين الصورة والدائرة
//       const CustomIcon = L.divIcon({
//         className: 'custom-icon',
//         html: `
//           <div style="position: relative; width: 80px; height: 80px;">
//             <img src="${college.imageUrl || '/default-college-icon.png'}" alt="${college.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
//             <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
//           </div>
//         `,
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -40]
//       });

//       marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/level/${college._id}`;
//         });
//     });

//   }, [colleges]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (colleges.length === 0) return <div>لم يتم العثور على كليات.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر كليتك</h1>
//         <div id="map" style={{
//           height: '80vh',
//           width: '100%',
//           border: '2px solid #8D493A',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//         }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;

/////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('Failed to load colleges. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//       zoomControl: false,
//       attributionControl: false,
//       scrollWheelZoom: false,
//       dragging: true,
//     }).setView([300, 600], 0);

//     L.tileLayer('', {
//       minZoom: -5,
//       maxZoom: 5,
//       noWrap: true,
//       bounds: L.latLngBounds([0, 0], [600, 1200]),
//     }).addTo(mapRef.current);

//     colleges.forEach((college) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const CustomIcon = L.divIcon({
//         className: 'custom-icon',
//         html: `
//           <div style="position: relative; width: 100px; height: 100px;">
//             <img src="${college.imageUrl || '/default-college-icon.png'}" alt="${college.name}" style="width: 100%; height: 100%; object-fit: cover; border: 4px solid #8D493A; border-radius: 8px;" />
//             <div style="position: absolute; top: -10px; right: -10px; width: 30px; height: 30px; background-color: #8D493A; border: 4px solid #F8EDE3; border-radius: 50%;"></div>
//           </div>
//         `,
//         iconSize: [100, 100],
//         iconAnchor: [50, 50],
//         popupAnchor: [0, -50]
//       });

//       const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -50],
//         className: 'college-tooltip',
//         style: {
//           backgroundColor: '#F8EDE3',
//           color: '#8D493A',
//           padding: '8px 12px',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: 'bold',
//           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         }
//       });

//       marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`, {
//         className: 'college-popup',
//         autoPan: true,
//         autoPanPadding: [20, 20],
//         style: {
//           backgroundColor: '#F8EDE3',
//           color: '#8D493A',
//           padding: '16px',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }
//       })
//       .on('click', () => {
//         window.location.href = `/level/${college._id}`;
//       });
//     });

//   }, [colleges]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (colleges.length === 0) return <div>No colleges found.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#8D493A' }}>Choose Your College</h1>
//         <div id="map" style={{
//           height: '80vh',
//           width: '100%',
//           border: '4px solid #8D493A',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           backgroundColor: '#F8EDE3',
//         }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;
////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Resource = () => {
//   const mapRef = useRef(null);
//   const [colleges, setColleges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:5000/api/colleges');
//         setColleges(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//         setError('Failed to load colleges. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchColleges();
//   }, []);

//   useEffect(() => {
//     if (mapRef.current || !colleges.length) return;

//     // تهيئة الخريطة مع إضافة أزرار التكبير والتصغير
//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//       zoomControl: true, // تفعيل أزرار التكبير والتصغير
//       attributionControl: false,
//       scrollWheelZoom: true, // تفعيل التكبير باستخدام عجلة الماوس
//       dragging: true,
//     }).setView([300, 600], 0);

//     // إضافة أزرار التكبير والتصغير في الزاوية اليسرى العليا
//     L.control.zoom({
//       position: 'topleft'
//     }).addTo(mapRef.current);

//     L.tileLayer('', {
//       minZoom: -5,
//       maxZoom: 5,
//       noWrap: true,
//       bounds: L.latLngBounds([0, 0], [600, 1200]),
//     }).addTo(mapRef.current);

//     // إنشاء مصفوفة من النقاط لترتيب الكليات في شكل شبكة
//     const gridPoints = colleges.map((_, index) => {
//       const row = Math.floor(index / 3);
//       const col = index % 3;
//       return [200 + row * 200, 200 + col * 400];
//     });

//     // رسم الخطوط بين الكليات
//     colleges.forEach((_, index) => {
//       if (index < colleges.length - 1) {
//         const line = L.polyline([gridPoints[index], gridPoints[index + 1]], {
//           color: '#8D493A',
//           weight: 2,
//           opacity: 0.6,
//           dashArray: '5, 10',
//         }).addTo(mapRef.current);

//         // إضافة تأثير التحويم على الخطوط
//         line.on('mouseover', function() {
//           this.setStyle({
//             weight: 4,
//             opacity: 1
//           });
//         });

//         line.on('mouseout', function() {
//           this.setStyle({
//             weight: 2,
//             opacity: 0.6
//           });
//         });
//       }
//     });

//     colleges.forEach((college, index) => {
//       const position = gridPoints[index];

//       // تحسين أيقونة الكلية مع حجم أكبر وتصميم أجمل
//       const CustomIcon = L.divIcon({
//         className: 'custom-icon',
//         html: `
//           <div style="position: relative; width: 150px; height: 150px;">
//             <div style="
//               width: 100%;
//               height: 100%;
//               background: linear-gradient(45deg, #F8EDE3, #fff);
//               border-radius: 15px;
//               box-shadow: 0 4px 15px rgba(141, 73, 58, 0.2);
//               padding: 5px;
//               transform: scale(1);
//               transition: transform 0.3s ease;
//             ">
//               <img 
//                 src="${college.imageUrl || '/default-college-icon.png'}" 
//                 alt="${college.name}" 
//                 style="
//                   width: 100%;
//                   height: 100%;
//                   object-fit: cover;
//                   border-radius: 12px;
//                   border: 4px solid #8D493A;
//                 "
//               />
//               <div style="
//                 position: absolute;
//                 top: -15px;
//                 right: -15px;
//                 width: 40px;
//                 height: 40px;
//                 background-color: #8D493A;
//                 border: 4px solid #F8EDE3;
//                 border-radius: 50%;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 color: #F8EDE3;
//                 font-weight: bold;
//               ">${index + 1}</div>
//             </div>
//           </div>
//         `,
//         iconSize: [150, 150],
//         iconAnchor: [75, 75],
//         popupAnchor: [0, -75]
//       });

//       const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

//       // تحسين تصميم التلميح
//       marker.bindTooltip(college.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -60],
//         className: 'college-tooltip',
//         style: {
//           backgroundColor: '#F8EDE3',
//           color: '#8D493A',
//           padding: '10px 15px',
//           borderRadius: '12px',
//           fontSize: '16px',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
//         }
//       });

//       // تحسين تصميم النافذة المنبثقة
//       marker.bindPopup(`
//         <div style="text-align: center;">
//           <h3 style="color: #8D493A; font-size: 18px; margin-bottom: 10px;">${college.name}</h3>
//           <p style="color: #666;">${college.description || ''}</p>
//         </div>
//       `, {
//         className: 'college-popup',
//         autoPan: true,
//         autoPanPadding: [30, 30],
//         style: {
//           backgroundColor: '#F8EDE3',
//           color: '#8D493A',
//           padding: '20px',
//           borderRadius: '15px',
//           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
//         }
//       })
//       .on('click', () => {
//         window.location.href = `/level/${college._id}`;
//       });
//     });

//   }, [colleges]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (colleges.length === 0) return <div>No colleges found.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#8D493A' }}>Choose Your College</h1>
//         <div id="map" style={{
//           height: '80vh',
//           width: '100%',
//           border: '4px solid #8D493A',
//           borderRadius: '15px',
//           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
//           backgroundColor: '#F8EDE3',
//         }}></div>
//       </div>
//     </>
//   );
// };

// export default Resource;

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Navbar from '../components/NavBar';

const Resource = () => {
  const mapRef = useRef(null);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/colleges');
        setColleges(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setError('Failed to load colleges. Please try again later.');
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    if (mapRef.current || !colleges.length) return;

    // تهيئة الخريطة بإعدادات محسنة
    mapRef.current = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,  // تعديل مستويات التكبير لتحسين العرض
      maxZoom: 2,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      dragging: true,
      center: [250, 400],  // تحديد نقطة المركز
      zoom: 0
    });

    // إضافة أزرار التكبير والتصغير
    L.control.zoom({
      position: 'topleft'
    }).addTo(mapRef.current);

    // تحديد حدود الخريطة
    const bounds = L.latLngBounds([0, 0], [500, 800]);
    mapRef.current.setMaxBounds(bounds);
    mapRef.current.fitBounds(bounds);

    L.tileLayer('', {
      minZoom: -2,
      maxZoom: 2,
      noWrap: true,
      bounds: bounds
    }).addTo(mapRef.current);

    // تحسين توزيع النقاط للكليات
    const calculateGridPoints = (collegesCount) => {
      const points = [];
      const topRowCount = Math.ceil(collegesCount / 2);
      const bottomRowCount = collegesCount - topRowCount;
      
      // حساب المسافات للصف العلوي
      const topSpacing = 800 / (topRowCount + 1);
      for (let i = 0; i < topRowCount; i++) {
        points.push([150, topSpacing * (i + 1)]);
      }
      
      // حساب المسافات للصف السفلي
      const bottomSpacing = 800 / (bottomRowCount + 1);
      for (let i = 0; i < bottomRowCount; i++) {
        points.push([350, bottomSpacing * (i + 1)]);
      }
      
      return points;
    };

    const gridPoints = calculateGridPoints(colleges.length);

    // رسم الخطوط بين الكليات
    for (let i = 0; i < gridPoints.length - 1; i++) {
      const start = gridPoints[i];
      const end = gridPoints[i + 1];
      
      const line = L.polyline([start, end], {
        color: '#8D493A',
        weight: 3,
        opacity: 0.8,
        dashArray: '8, 12',
        smoothFactor: 1
      }).addTo(mapRef.current);

      // تحسين تأثيرات التحويم على الخطوط
      line.on('mouseover', function() {
        this.setStyle({
          weight: 5,
          opacity: 1,
          color: '#6D2B1C'
        });
      }).on('mouseout', function() {
        this.setStyle({
          weight: 3,
          opacity: 0.8,
          color: '#8D493A'
        });
      });
    }

    // إضافة الكليات كنقاط على الخريطة
    colleges.forEach((college, index) => {
      const position = gridPoints[index];

      const CustomIcon = L.divIcon({
        className: 'custom-college-icon', // إضافة class name مميز
        html: `
          <div class="college-marker" style="
            width: 200px;
            height: 200px;
            position: relative;
            transform: translate(-50%, -50%);
          ">
            <div style="
              width: 100%;
              height: 100%;
              background: linear-gradient(45deg, #F8EDE3, #fff);
              border-radius: 20px;
              box-shadow: 0 8px 25px rgba(141, 73, 58, 0.3);
              padding: 8px;
              position: relative;
              transition: transform 0.3s ease;
            ">
              <img 
                src="${college.imageUrl || '/default-college-icon.png'}" 
                alt="${college.name}" 
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 16px;
                  border: 6px solid #8D493A;
                "
              />
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 50px;
                height: 50px;
                background-color: #8D493A;
                border: 4px solid #F8EDE3;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              ">
                <svg viewBox="0 0 24 24" width="25" height="25" fill="#F8EDE3">
                  <path d="M12 0C7.6 0 4 3.6 4 8c0 5.4 8 16 8 16s8-10.6 8-16c0-4.4-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                </svg>
              </div>
            </div>
          </div>
        `,
        iconSize: [200, 200],
        iconAnchor: [100, 100] // تحديد نقطة الارتكاز في المنتصف
      });

      const marker = L.marker(position, {
        icon: CustomIcon,
        zIndexOffset: 1000 // ضمان ظهور العناصر فوق الخطوط
      }).addTo(mapRef.current);

      // تحسين التلميح
      marker.bindTooltip(college.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -60],
        className: 'college-tooltip',
        opacity: 0.9
      });

      // تحسين النافذة المنبثقة
      marker.bindPopup(`
        <div style="text-align: center; padding: 15px;">
          <h3 style="color: #8D493A; font-size: 20px; margin-bottom: 10px; font-weight: bold;">${college.name}</h3>
          <p style="color: #666; font-size: 14px; line-height: 1.4;">${college.description || ''}</p>
        </div>
      `, {
        className: 'college-popup',
        autoPan: true,
        autoPanPadding: [50, 50]
      });

      marker.on('click', () => {
        window.location.href = `/level/${college._id}`;
      });
    });

    // إضافة CSS للتحكم في التأثيرات الحركية
    const style = document.createElement('style');
    style.textContent = `
      .college-marker {
        transition: transform 0.3s ease;
      }
      .college-marker:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
      .college-tooltip {
        background-color: #F8EDE3;
        color: #8D493A;
        border: 2px solid #8D493A;
        border-radius: 8px;
        padding: 8px 12px;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      .college-popup {
        background-color: #F8EDE3;
        border: 3px solid #8D493A;
        border-radius: 12px;
      }
      .college-popup .leaflet-popup-content-wrapper {
        background-color: #F8EDE3;
        border-radius: 10px;
      }
      .college-popup .leaflet-popup-tip {
        background-color: #8D493A;
      }
    `;
    document.head.appendChild(style);

  }, [colleges]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (colleges.length === 0) return <div>No colleges found.</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-24 text-center" style={{ 
          color: '#8D493A',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Choose Your College</h1>
        <div id="map" style={{
          height: '85vh',
          width: '100%',
          border: '6px solid #8D493A',
          borderRadius: '25px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#F8EDE3',
        }}></div>
      </div>
    </>
  );
};

export default Resource;