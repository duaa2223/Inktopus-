
// import  { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import Navbar from '../components/NavBar';

// const Level = () => {
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
//     }).setView([100, 200], 1);
//     // mapRef.current.setView([0, 0], 2);
//     // إضافة الصور المختلفة
//     const bounds1 = [[0, 0], [500, 800]];
//     // تعديل الأبعاد لتتناسب مع الصورة الأولى ملاحظه باث الصوره image/name.type
//     L.imageOverlay('/images/roadmap.svg', bounds1).addTo(mapRef.current);
//     // بيانات الكليات
//   const colleges = [
//     { name: 'College A', position: [200, 300], link: '/college-a' },
//     { name: 'College B', position: [100, 400], link: '/college-b' }, // تعديل الموضع
//     { name: 'Level 1', position: [100, 200], link: '/details' }, // تعديل الموضع
//     { name: 'College D', position: [200, 600], link: '/college-d' },// إضافة كلية جديدة بموقع جديد
//     // { name: 'College E', position: [600, 900], link: '/college-e' },
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
//    <div id="map" style={{ background:'#DFD3C3', width: '80%', height: '500px', marginTop: '10%', marginBottom:'10%', marginLeft:'10%', border: '2px solid #8D493A', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>;
// </>

// };

// export default Level;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const mapRef = useRef(null);
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([250, 400], 0);

//     const bounds = [[0, 0], [500, 800]];
//     L.imageOverlay('/images/roadmap.svg', bounds).addTo(mapRef.current);

//     academicYears.forEach((year, index) => {
//       const position = [
//         100 + Math.random() * 300,
//         100 + Math.random() * 600
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 40
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b>`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });
//   }, [academicYears, collegeId]);

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
//         Choose Your Academic Year
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
//       <div className="academic-year-list mt-8">
//         {academicYears.map(year => (
//           <div key={year._id} className="academic-year-item mb-4">
//             {year.imageUrl && <img src={year.imageUrl} alt={year.name} className="w-full h-40 object-cover rounded-t-lg" />}
//             <h2 className="text-xl font-semibold mt-2">{year.name}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Level;
//////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const mapRef = useRef(null);
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // const fetchAcademicYears = async () => {
//     //   try {
//     //     setLoading(true);
//     //     const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//     //     console.log('Fetched data:', response.data); // للتشخيص
//     //     setAcademicYears(response.data);
//     //     setLoading(false);
//     //   } catch (error) {
//     //     console.error('Error fetching academic years:', error);
//     //     setError('Failed to load academic years. Please try again.');
//     //     setLoading(false);
//     //   }
//     // };
//     const fetchAcademicYears = async (collegeId) => {
//       try {
//         const response = await axios.get(`/api/academic-years/${collegeId}`);
//         console.log('API Response:', response.data);
//         setAcademicYears(response.data);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setAcademicYears([]);
//       }
//     }; 

//     fetchAcademicYears();
//   }, [collegeId]);




  
//   useEffect(() => {
//     if (academicYears.length > 0) {
//       console.log('Academic Years:', academicYears);
//     } else {
//       console.log('No academic years found');
//     }
//   }, [academicYears]);

  
//   useEffect(() => {
//     if (!mapRef.current || loading || error || academicYears.length === 0) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([250, 400], 0);

//     const bounds = [[0, 0], [500, 800]];
//     L.imageOverlay('/images/roadmap.svg', bounds).addTo(mapRef.current);

//     academicYears.forEach((year, index) => {
//       const position = [
//         100 + Math.random() * 300,
//         100 + Math.random() * 600
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 40
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b>`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, [academicYears, collegeId, loading, error]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (academicYears.length === 0) return <div>No academic years found for this college.</div>;

//   return (
//     <>
//       <Navbar />
//       <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
//         Choose Your Academic Year
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
//       <div className="academic-year-list mt-8">
//         {academicYears.map(year => (
//           <div key={year._id} className="academic-year-item mb-4">
//             {year.imageUrl && <img src={year.imageUrl} alt={year.name} className="w-full h-40 object-cover rounded-t-lg" />}
//             <h2 className="text-xl font-semibold mt-2">{year.name}</h2>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Level;
////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('Failed to load academic years. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (!mapRef.current || loading || error || academicYears.length === 0) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([250, 400], 0);

//     const bounds = [[0, 0], [500, 800]];
//     L.imageOverlay('/images/roadmap.svg', bounds).addTo(mapRef.current);

//     academicYears.forEach((year) => {
//       const position = [
//         100 + Math.random() * 300,
//         100 + Math.random() * 600
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 40
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, [academicYears, collegeId, loading, error]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
//   if (academicYears.length === 0) return <div className="text-center mt-8">No academic years found for this college.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
//           Choose Your Academic Year
//         </h1>
//         <div id="map" className="w-full h-[500px] rounded-lg border-2 border-[#8D493A] shadow-lg mb-8" style={{ background: '#DFD3C3' }}></div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {academicYears.map(year => (
//             <div key={year._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               {year.imageUrl && (
//                 <img 
//                   src={year.imageUrl} 
//                   alt={year.name} 
//                   className="w-full h-48 object-cover"
//                 />
//               )}
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{year.name}</h2>
//                 <h3 className="text-lg text-gray-700 mb-2">{year.nameAr}</h3>
//                 <p className="text-gray-600 mb-2">{year.description}</p>
//                 <p className="text-sm text-gray-500 mb-2">Order: {year.order}</p>
//                 <p className="text-sm text-gray-500 mb-4">
//                   Status: {year.isActive ? 'Active' : 'Inactive'}
//                 </p>
//                 <button 
//                   onClick={() => window.location.href = `/content/${collegeId}/${year._id}`}
//                   className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   View Content
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Level;
//////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';
// import { FaGraduationCap } from 'react-icons/fa';

// const Level = () => {
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('Failed to load academic years. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (!mapRef.current || loading || error || academicYears.length === 0) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -2,
//       maxZoom: 2,
//     }).setView([250, 400], 0);

//     const bounds = [[0, 0], [500, 800]];
//     L.imageOverlay('/images/academic-roadmap.svg', bounds).addTo(mapRef.current);

//     academicYears.forEach((year, index) => {
//       const position = [
//         100 + (index * 50),
//         100 + (index * 100)
//       ];

//       const yearIcon = L.divIcon({
//         className: 'custom-div-icon',
//         html: `<div style="background-color: #4A90E2; color: white; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; font-weight: bold;">
//                  <span>${year.order}</span>
//                </div>`,
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       marker.bindTooltip(`${year.name}<br>${year.nameAr}`, {
//         permanent: false,
//         direction: 'top',
//         className: 'custom-tooltip'
//       });

//       marker.on('click', () => {
//         const popup = L.popup()
//           .setLatLng(position)
//           .setContent(`
//             <div class="custom-popup">
//               <h3>${year.name}</h3>
//               <h4>${year.nameAr}</h4>
//               <p>${year.description || 'No description available'}</p>
//               <button onclick="window.location.href='/content/${collegeId}/${year._id}'">
//                 View Content
//               </button>
//             </div>
//           `)
//           .openOn(mapRef.current);
//       });
//     });

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, [academicYears, collegeId, loading, error]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
//   if (academicYears.length === 0) return <div className="text-center mt-8">No academic years found for this college.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8 flex items-center justify-center">
//           <FaGraduationCap className="mr-4 text-5xl text-blue-600" />
//           Choose Your Academic Year
//         </h1>
//         <div id="map" className="w-full h-[600px] rounded-lg border-4 border-blue-600 shadow-2xl" style={{ background: 'linear-gradient(to right, #E6F0FF, #F0F7FF)' }}></div>
//       </div>
//       <style jsx>{`
//         .custom-tooltip {
//           background-color: rgba(74, 144, 226, 0.9);
//           border: none;
//           border-radius: 5px;
//           padding: 5px 10px;
//           color: white;
//           font-weight: bold;
//         }
//         .custom-popup {
//           text-align: center;
//         }
//         .custom-popup h3 {
//           font-size: 18px;
//           font-weight: bold;
//           margin-bottom: 5px;
//         }
//         .custom-popup h4 {
//           font-size: 16px;
//           color: #4A90E2;
//           margin-bottom: 10px;
//         }
//         .custom-popup button {
//           background-color: #4A90E2;
//           color: white;
//           border: none;
//           padding: 5px 10px;
//           border-radius: 5px;
//           cursor: pointer;
//           margin-top: 10px;
//         }
//         .custom-popup button:hover {
//           background-color: #3A7BC8;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Level;
////////////////////////////////////////////////////////////////////////// work work 
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('Failed to load academic years. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

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

//     academicYears.forEach((year) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//   }, [academicYears, collegeId]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
//   if (academicYears.length === 0) return <div className="text-center mt-8">No academic years found for this college.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
//           اختر سنتك الدراسية
//         </h1>
//         <div id="map" className="w-full h-[500px] rounded-lg border-2 border-[#8D493A] shadow-lg mb-8" style={{ background: '#DFD3C3' }}></div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {academicYears.map(year => (
//             <div key={year._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               {year.imageUrl && (
//                 <img 
//                   src={year.imageUrl} 
//                   alt={year.name} 
//                   className="w-full h-48 object-cover"
//                 />
//               )}
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{year.name}</h2>
//                 <h3 className="text-lg text-gray-700 mb-2">{year.nameAr}</h3>
//                 <p className="text-gray-600 mb-2">{year.description}</p>
//                 <p className="text-sm text-gray-500 mb-2">Order: {year.order}</p>
//                 <p className="text-sm text-gray-500 mb-4">
//                   Status: {year.isActive ? 'Active' : 'Inactive'}
//                 </p>
//                 <button 
//                   onClick={() => window.location.href = `/content/${collegeId}/${year._id}`}
//                   className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   View Content
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Level;
///////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('Failed to load academic years. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

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

//     academicYears.forEach((year) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//   }, [academicYears, collegeId]);

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
//   if (academicYears.length === 0) return <div className="text-center mt-8">No academic years found for this college.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
//           اختر سنتك الدراسية
//         </h1>
//         <div id="map" className="w-full h-[500px] rounded-lg border-2 border-[#8D493A] shadow-lg mb-8" style={{ background: '#DFD3C3' }}></div>
//       </div>
//     </>
//   );
// };

// export default Level;
/////////////////////////////////////////////////////////////////////////////////// work 2
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const mapRef = useRef(null);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('فشل في تحميل السنوات الدراسية. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

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

//     academicYears.forEach((year) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [60, 60],
//         iconAnchor: [30, 30],
//         popupAnchor: [0, -30]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       // إضافة النقطة الحمراء
//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 30
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top'
//       });

//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//   }, [academicYears, collegeId]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (academicYears.length === 0) return <div>لم يتم العثور على سنوات دراسية لهذه الكلية.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر سنتك الدراسية</h1>
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

// export default Level;
/////////////////////////////////////////////////////////////////////// work 4
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const mapRef = useRef(null);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('فشل في تحميل السنوات الدراسية. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

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

//     academicYears.forEach((year) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       const yearIcon = L.icon({
//         iconUrl: year.imageUrl || '/default-year-icon.png',
//         iconSize: [120, 120], // تكبير حجم الأيقونة
//         iconAnchor: [60, 60],
//         popupAnchor: [0, -60]
//       });

//       const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

//       // إضافة النقطة الحمراء (أصغر من الأيقونة)
//       const circle = L.circle(position, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 20 // تصغير حجم الدائرة الحمراء
//       }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -60] // تعديل موضع التلميح
//       });

//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//         .on('click', () => {
//           window.location.href = `/content/${collegeId}/${year._id}`;
//         });
//     });

//   }, [academicYears, collegeId]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (academicYears.length === 0) return <div>لم يتم العثور على سنوات دراسية لهذه الكلية.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر سنتك الدراسية</h1>
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

// export default Level;
/////////////////////////////////////////////////////////////////////
// import  { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const mapRef = useRef(null);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('فشل في تحميل السنوات الدراسية. يرجى المحاولة مرة أخرى لاحقاً.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -5,
//       maxZoom: 5,
//     }).setView([300, 600], 0);

//     academicYears.forEach((year) => {
//       const position = [
//         200 + Math.random() * 600,
//         200 + Math.random() * 2000
//       ];

//       // إنشاء أيقونة مخصصة تجمع بين الصورة والدائرة
//       const CustomIcon = L.divIcon({
//         className: 'custom-icon',
//         html: `
//           <div style="position: relative; width: 80px; height: 80px;">
//             <img src="${year.imageUrl || '/default-year-icon.png'}" alt="${year.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
//             <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
//           </div>
//         `,
//         iconSize: [80, 80],
//         iconAnchor: [40, 40],
//         popupAnchor: [0, -40]
//       });

//       const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

//       marker.bindTooltip(year.name, {
//         permanent: false,
//         direction: 'top',
//         offset: [0, -40]
//       });

//       // marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//       //   .on('click', () => {
//       //     window.location.href = `/content/${collegeId}/${year._id}`;
//       //   });
//       marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
//   .on('click', () => {
//     window.location.href = `/content/college/${collegeId}/year/${year._id}`;
//   });

//     });

//   }, [academicYears, collegeId]);

//   if (loading) return <div>جاري التحميل...</div>;
//   if (error) return <div>{error}</div>;
//   if (academicYears.length === 0) return <div>لم يتم العثور على سنوات دراسية لهذه الكلية.</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">اختر سنتك الدراسية</h1>
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

// export default Level;

////////////////////////////////////////////
// import { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import Navbar from '../components/NavBar';

// const Level = () => {
//   const { collegeId } = useParams();
//   const mapRef = useRef(null);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Custom styles for the map container
//   const mapContainerStyle = {
//     height: '80vh',
//     width: '100%',
//     border: '2px solid #8D493A',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   };

//   const levelMarkerStyle = `
//     .custom-level-marker {
//       width: 100px;
//       height: 100px;
//     }

//     .level-circle {
//       width: 100%;
//       height: 100%;
//       background: rgba(255, 255, 255, 0.95);
//       border: 3px solid #FF4B4B;
//       border-radius: 50%;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//       transition: all 0.3s ease;
//       cursor: pointer;
//     }

//     .level-circle:hover {
//       transform: scale(1.1);
//       box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
//     }

//     .level-number {
//       font-size: 18px;
//       font-weight: bold;
//       color: #FF4B4B;
//       margin-bottom: 4px;
//     }

//     .level-label {
//       font-size: 12px;
//       color: #333;
//       text-align: center;
//     }
//   `;

//   useEffect(() => {
//     const fetchAcademicYears = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
//         setAcademicYears(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching academic years:', error);
//         setError('Failed to load academic years. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAcademicYears();
//   }, [collegeId]);

//   useEffect(() => {
//     if (mapRef.current || !academicYears.length) return;

//     // Add custom styles
//     const styleSheet = document.createElement("style");
//     styleSheet.innerText = levelMarkerStyle;
//     document.head.appendChild(styleSheet);

//     // Initialize map with bounds
//     mapRef.current = L.map('map', {
//       crs: L.CRS.Simple,
//       minZoom: -2,
//       maxZoom: 2,
//       zoomControl: true,
//       attributionControl: false,
//     }).setView([300, 600], 0);

//     // Add custom pane for background
//     mapRef.current.createPane('background');
//     mapRef.current.getPane('background').style.zIndex = 100;

//     // Add background rectangle
//     L.rectangle([[0, 0], [600, 1200]], {
//       color: 'none',
//       fillColor: '#87CEEB', // Sky blue
//       fillOpacity: 1,
//       pane: 'background'
//     }).addTo(mapRef.current);

//     // Add grass strip
//     L.rectangle([[400, 0], [450, 1200]], {
//       color: 'none',
//       fillColor: '#228B22', // Forest green
//       fillOpacity: 1,
//       pane: 'background'
//     }).addTo(mapRef.current);

//     // Add road
//     L.rectangle([[450, 0], [600, 1200]], {
//       color: 'none',
//       fillColor: '#8B4513', // Saddle brown
//       fillOpacity: 1,
//       pane: 'background'
//     }).addTo(mapRef.current);

//     // Calculate positions for markers
//     academicYears.forEach((year, index) => {
//       const position = [
//         250 + (index * 50), // Gradually increase Y position
//         200 + (index * 200)  // Gradually increase X position
//       ];

//       const CustomIcon = L.divIcon({
//         className: 'custom-level-marker',
//         html: `
//           <div class="level-circle">
//             <div class="level-number">Level ${index + 1}</div>
//             <div class="level-label">${year.name}</div>
//           </div>
//         `,
//         iconSize: [100, 100],
//         iconAnchor: [50, 50]
//       });

//       const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

//       marker.bindPopup(`
//         <div style="text-align: center; padding: 10px;">
//           <h3 style="margin-bottom: 8px; font-weight: bold;">${year.name}</h3>
//           <p style="margin-bottom: 8px;">${year.description || ''}</p>
//           <button 
//             onclick="window.location.href='/content/college/${collegeId}/year/${year._id}'"
//             style="background: #FF4B4B; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;"
//           >
//             Start Learning
//           </button>
//         </div>
//       `);
//     });

//     // Add bounds to keep map contained
//     const bounds = [[0, 0], [600, 1200]];
//     mapRef.current.setMaxBounds(bounds);
//     mapRef.current.fitBounds(bounds, { padding: [50, 50] });

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//         mapRef.current = null;
//       }
//       document.head.removeChild(styleSheet);
//     };
//   }, [academicYears, collegeId]);

//   if (loading) return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="text-center p-4 text-red-600">
//       {error}
//     </div>
//   );
  
//   if (academicYears.length === 0) return (
//     <div className="text-center p-4">
//       No academic years found for this college.
//     </div>
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           Choose Your Academic Level
//         </h1>
//         <div id="map" style={mapContainerStyle}></div>
//       </div>
//     </>
//   );
// };

// export default Level;


import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Navbar from '../components/NavBar';

const Level = () => {
  const { collegeId } = useParams();
  const mapRef = useRef(null);
  const [academicYears, setAcademicYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapContainerStyle = {
    height: '80vh',
    width: '100%',
    border: '4px solid #8D493A',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    overflow: 'hidden',
    background: '#F8EDE3'
  };

  const levelMarkerStyle = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    .custom-level-marker {
      width: 160px;
      height: 160px;
    }

    .level-circle {
      width: 100%;
      height: 100%;
      background: #DFD3C3;
      border: 4px solid #8D493A;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 15px rgba(141, 73, 58, 0.2);
      transition: all 0.4s ease;
      cursor: pointer;
      animation: float 3s ease-in-out infinite;
      position: relative;
    }

    .level-circle:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 20px rgba(141, 73, 58, 0.3);
      background: #D0B8A8;
    }

    .level-number {
      font-size: 24px;
      font-weight: bold;
      color: #8D493A;
      margin-bottom: 8px;
    }

    .level-label {
      font-size: 16px;
      color: #8D493A;
      text-align: center;
      padding: 0 10px;
    }

    .learning-icon {
      position: absolute;
      width: 40px;
      height: 40px;
      top: -10px;
      right: -10px;
      background: #8D493A;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulse 2s ease-in-out infinite;
      border: 3px solid #F8EDE3;
    }

    .learning-icon svg {
      width: 24px;
      height: 24px;
      fill: #F8EDE3;
    }
  `;

  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
        setAcademicYears(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching academic years:', error);
        setError('Failed to load academic years. Please try again later.');
        setLoading(false);
      }
    };

    fetchAcademicYears();
  }, [collegeId]);

  useEffect(() => {
    if (mapRef.current || !academicYears.length) return;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = levelMarkerStyle;
    document.head.appendChild(styleSheet);

    mapRef.current = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      zoomControl: true,
      attributionControl: false,
    }).setView([300, 600], 0);

    // Calculate zigzag positions
    const calculateZigzagPosition = (index) => {
      const baseY = 500; // Starting from bottom
      const yStep = 100; // Vertical distance between levels
      const xStep = 200; // Horizontal distance between levels
      const isEven = index % 2 === 0;
      
      return [
        baseY - (index * yStep), // Moving up
        200 + (index * xStep) // Moving right
      ];
    };

    // Draw connecting lines between markers
    academicYears.forEach((_, index) => {
      if (index < academicYears.length - 1) {
        const startPos = calculateZigzagPosition(index);
        const endPos = calculateZigzagPosition(index + 1);
        
        const line = L.polyline([startPos, endPos], {
          color: '#8D493A',
          weight: 3,
          opacity: 0.6,
          dashArray: '10, 10',
        }).addTo(mapRef.current);

        // Add hover effect to lines
        line.on('mouseover', function() {
          this.setStyle({
            weight: 4,
            opacity: 1
          });
        }).on('mouseout', function() {
          this.setStyle({
            weight: 3,
            opacity: 0.6
          });
        });
      }
    });

    // Add markers
    academicYears.forEach((year, index) => {
      const position = calculateZigzagPosition(index);
      
      // Different learning icons for variety
      const learningIcons = [
        '<svg viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 9-4.1v5.1h2V7L12 2z"/><path d="M3.9 9.5l9 4.1v8.4l-9-4.1V9.5z"/></svg>',
        '<svg viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.2v6.3l7 3.5 7-3.5v-6.3l2-1.1V17h2V9L12 3z"/></svg>',
        '<svg viewBox="0 0 24 24"><path d="M21 17h-2v-7l-4 2v5h-2V9.9l-4-2V17H7V7.1L3 9v8H1V8l11-6 9 5v10z"/></svg>'
      ];

      const CustomIcon = L.divIcon({
        className: 'custom-level-marker',
        html: `
          <div class="level-circle">
            <div class="learning-icon">
              ${learningIcons[index % learningIcons.length]}
            </div>
            <div class="level-number">Level ${index + 1}</div>
            <div class="level-label">${year.name}</div>
          </div>
        `,
        iconSize: [160, 160],
        iconAnchor: [80, 80]
      });

      const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

      marker.bindPopup(`
        <div style="text-align: center; padding: 15px; background: #F8EDE3; border-radius: 10px;">
          <h3 style="margin-bottom: 12px; font-weight: bold; color: #8D493A; font-size: 18px;">
            ${year.name}
          </h3>
          <p style="margin-bottom: 12px; color: #8D493A;">
            ${year.description || ''}
          </p>
          <button 
            onclick="window.location.href='/content/college/${collegeId}/year/${year._id}'"
            style="
              background: #8D493A; 
              color: #F8EDE3; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 8px; 
              cursor: pointer;
              transition: all 0.3s ease;
              font-weight: bold;
              box-shadow: 0 2px 8px rgba(141, 73, 58, 0.2);
            "
            onmouseover="this.style.transform='scale(1.05)'; this.style.background='#D0B8A8';"
            onmouseout="this.style.transform='scale(1)'; this.style.background='#8D493A';"
          >
            Start Learning
          </button>
        </div>
      `, {
        className: 'custom-popup'
      });
    });

    const bounds = [[0, 0], [600, 1200]];
    mapRef.current.setMaxBounds(bounds);
    mapRef.current.fitBounds(bounds, { padding: [50, 50] });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      document.head.removeChild(styleSheet);
    };
  }, [academicYears, collegeId]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#8D493A] border-t-transparent"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center p-4 text-[#8D493A]">
      {error}
    </div>
  );
  
  if (academicYears.length === 0) return (
    <div className="text-center p-4 text-[#8D493A]">
      No academic years found for this college.
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#8D493A]">
          Choose Your Academic Level
        </h1>
        <div id="map" style={mapContainerStyle}></div>
      </div>
    </>
  );
};

export default Level;