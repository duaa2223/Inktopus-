
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
import  { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
        setAcademicYears(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching academic years:', error);
        setError('فشل في تحميل السنوات الدراسية. يرجى المحاولة مرة أخرى لاحقاً.');
        setLoading(false);
      }
    };

    fetchAcademicYears();
  }, [collegeId]);

  useEffect(() => {
    if (mapRef.current || !academicYears.length) return;

    mapRef.current = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: 5,
    }).setView([300, 600], 0);

    academicYears.forEach((year) => {
      const position = [
        200 + Math.random() * 600,
        200 + Math.random() * 2000
      ];

      // إنشاء أيقونة مخصصة تجمع بين الصورة والدائرة
      const CustomIcon = L.divIcon({
        className: 'custom-icon',
        html: `
          <div style="position: relative; width: 80px; height: 80px;">
            <img src="${year.imageUrl || '/default-year-icon.png'}" alt="${year.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
            <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background-color: red; border-radius: 50%;"></div>
          </div>
        `,
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [0, -40]
      });

      const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

      marker.bindTooltip(year.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -40]
      });

      // marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
      //   .on('click', () => {
      //     window.location.href = `/content/${collegeId}/${year._id}`;
      //   });
      marker.bindPopup(`<b>${year.name}</b><br>${year.nameAr}<br>${year.description || ''}`)
  .on('click', () => {
    window.location.href = `/content/college/${collegeId}/year/${year._id}`;
  });

    });

  }, [academicYears, collegeId]);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;
  if (academicYears.length === 0) return <div>لم يتم العثور على سنوات دراسية لهذه الكلية.</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">اختر سنتك الدراسية</h1>
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

export default Level;