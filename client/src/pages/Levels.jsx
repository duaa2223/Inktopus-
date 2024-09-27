
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
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Navbar from '../components/NavBar';

const Level = () => {
  const mapRef = useRef(null);
  const { collegeId } = useParams();
  const [academicYears, setAcademicYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchAcademicYears = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
    //     console.log('Fetched data:', response.data); // للتشخيص
    //     setAcademicYears(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching academic years:', error);
    //     setError('Failed to load academic years. Please try again.');
    //     setLoading(false);
    //   }
    // };
    const fetchAcademicYears = async (collegeId) => {
      try {
        const response = await axios.get(`/api/academic-years/${collegeId}`);
        console.log('API Response:', response.data);
        setAcademicYears(response.data);
      } catch (error) {
        console.error('Error fetching academic years:', error);
        setAcademicYears([]);
      }
    }; 

    fetchAcademicYears();
  }, [collegeId]);




  
  useEffect(() => {
    if (academicYears.length > 0) {
      console.log('Academic Years:', academicYears);
    } else {
      console.log('No academic years found');
    }
  }, [academicYears]);

  
  useEffect(() => {
    if (!mapRef.current || loading || error || academicYears.length === 0) return;

    mapRef.current = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: 5,
    }).setView([250, 400], 0);

    const bounds = [[0, 0], [500, 800]];
    L.imageOverlay('/images/roadmap.svg', bounds).addTo(mapRef.current);

    academicYears.forEach((year, index) => {
      const position = [
        100 + Math.random() * 300,
        100 + Math.random() * 600
      ];

      const yearIcon = L.icon({
        iconUrl: year.imageUrl || '/default-year-icon.png',
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [0, -40]
      });

      const marker = L.marker(position, { icon: yearIcon }).addTo(mapRef.current);

      const circle = L.circle(position, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 40
      }).addTo(mapRef.current);

      marker.bindTooltip(year.name, {
        permanent: false,
        direction: 'top'
      });

      marker.bindPopup(`<b>${year.name}</b>`)
        .on('click', () => {
          window.location.href = `/content/${collegeId}/${year._id}`;
        });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [academicYears, collegeId, loading, error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (academicYears.length === 0) return <div>No academic years found for this college.</div>;

  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-zinc-800 mt-[7rem]">
        Choose Your Academic Year
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
      <div className="academic-year-list mt-8">
        {academicYears.map(year => (
          <div key={year._id} className="academic-year-item mb-4">
            {year.imageUrl && <img src={year.imageUrl} alt={year.name} className="w-full h-40 object-cover rounded-t-lg" />}
            <h2 className="text-xl font-semibold mt-2">{year.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Level;