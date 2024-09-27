
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
///////////////////////////////////////////////////////
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Navbar from '../components/NavBar';
import { RiCollageFill } from "react-icons/ri";

const Resource = () => {
  const mapRef = useRef(null);
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/colleges');
        setColleges(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
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

    const bounds = [
      [[0, 0], [500, 800]],
      [[0, 800], [500, 1600]],
      [[0, 1600], [500, 2400]],
      [[500, 0], [1000, 800]],
      [[500, 800], [1000, 1600]]
    ];

    bounds.forEach((bound, index) => {
      L.imageOverlay(`/client/assets/${index + 1}.svg`, bound).addTo(mapRef.current);
    });

    colleges.forEach((college, index) => {
      // تحديد موقع عشوائي للكلية على الخريطة (يمكنك تعديل هذا لاستخدام مواقع حقيقية من قاعدة البيانات)
      const position = [
        200 + Math.random() * 600,
        200 + Math.random() * 2000
      ];

      // إنشاء أيقونة مخصصة باستخدام صورة الكلية
      const collegeIcon = L.icon({
        iconUrl: college.imageUrl,
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [0, -40]
      });

      // إضافة الماركر بالأيقونة المخصصة
      const marker = L.marker(position, { icon: collegeIcon }).addTo(mapRef.current);

      // إضافة دائرة حمراء فوق الصورة
      const circle = L.circle(position, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 40
      }).addTo(mapRef.current);

      // إضافة التفاعلات (tooltip و popup)
      marker.bindTooltip(college.name, {
        permanent: false,
        direction: 'top'
      });

      marker.bindPopup(`<b>${college.name}</b>`)
        .on('click', () => {
          window.location.href = `/level/${college._id}`;
        });
    });

  }, [colleges]);

  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
        Choose Your College <RiCollageFill className='inline' />
      </h1>
      <div id="map" style={{
        background: '#DFD3C3',
        width: '80%',
        height: '500px',
        marginTop: '2%',
        marginLeft: '10%',
        border: '2px solid #8D493A',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}></div>
      <div className="college-list mt-8">
        {colleges.map(college => (
          <div key={college._id} className="college-item mb-4">
            {college.imageUrl && <img src={college.imageUrl} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />}
            <h2 className="text-xl font-semibold mt-2">{college.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resource;