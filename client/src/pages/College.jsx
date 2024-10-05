
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
        setError('فشل في تحميل الكليات. يرجى المحاولة مرة أخرى لاحقاً.');
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  useEffect(() => {
    if (mapRef.current || !colleges.length) return;

    mapRef.current = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: 5,
    }).setView([300, 600], 0);

    colleges.forEach((college) => {
      const position = [
        200 + Math.random() * 600,
        200 + Math.random() * 2000
      ];

      // إنشاء أيقونة مخصصة تجمع بين الصورة والدائرة
      const CustomIcon = L.divIcon({
        className: 'custom-icon',
        html: `
          <div style="position: relative; width: 80px; height: 80px;">
            <img src="${college.imageUrl || '/default-college-icon.png'}" alt="${college.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
            <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
          </div>
        `,
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [0, -40]
      });

      const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

      marker.bindTooltip(college.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -40]
      });

      marker.bindPopup(`<b>${college.name}</b><br>${college.description || ''}`)
        .on('click', () => {
          window.location.href = `/level/${college._id}`;
        });
    });

  }, [colleges]);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;
  if (colleges.length === 0) return <div>لم يتم العثور على كليات.</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">اختر كليتك</h1>
        <div id="map" style={{
          height: '80vh',
          width: '100%',
          border: '2px solid #8D493A',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}></div>
      </div>
    </>
  );
};

export default Resource;