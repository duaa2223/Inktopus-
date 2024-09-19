
import  { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/NavBar';
// import Resource from '../Resourse/Resourse'
import { RiCollageFill } from "react-icons/ri";
const Resource = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      return; // إذا كانت الخريطة موجودة، لا تقم بإنشاء واحدة جديدة
    }

    // إنشاء الخريطة مع الإعدادات اللازمة
    mapRef.current = L.map('map', {
      crs: L.CRS.Simple, // استخدم CRS بسيطة لعرض الصور بدلاً من خريطة العالم
      minZoom: -5, // تعيين مستوى تكبير أقل ليتناسب مع الصورة الكبيرة
      maxZoom: 5, // تعيين مستوى تكبير أعلى إذا لزم الأمر
    }).setView([300, 600], 0);
    // mapRef.current.setView([0, 0], 2);
    // إضافة الصور المختلفة
    const bounds1 = [[0, 0], [500, 800]];
    L.imageOverlay('/client/assets/1.svg', bounds1).addTo(mapRef.current);
    
    const bounds2 = [[0, 800], [500, 1600]]; // تعديل الأبعاد
    L.imageOverlay('/images/2.svg', bounds2).addTo(mapRef.current);
    
    const bounds3 = [[0, 1600], [500, 2400]]; // تعديل الأبعاد
    L.imageOverlay('/images/3.svg', bounds3).addTo(mapRef.current);
    
    const bounds4 = [[500, 0], [1000, 800]]; // تعديل الأبعاد
    L.imageOverlay('/images/4.svg', bounds4).addTo(mapRef.current);
    
    const bounds5 = [[500, 800], [1000, 1600]]; // تعديل الأبعاد
    L.imageOverlay('/images/5.svg', bounds5).addTo(mapRef.current);
    
//المربع فوق الصور
    // const bounds = [[0, 0], [600, 1600]];
    // L.rectangle(bounds, { color: '#F8EDE3', weight: 1 }).addTo(mapRef.current);

// color: '#8D493A'for color up image add this up  F8EDE3
    // بيانات الكليات
  // const colleges = [
  //   { name: 'College A', position: [200, 300], link: '/college-a' },
  //   { name: 'IT', position: [200, 900], link: '/category' }, // تعديل الموضع
  //   { name: 'College C', position: [200, 1500], link: '/college-c' }, // تعديل الموضع
  //   { name: 'College D', position: [600, 300], link: '/college-d' },// إضافة كلية جديدة بموقع جديد
  //   { name: 'College E', position: [600, 900], link: '/college-e' },
  // ];

  const colleges = [
    { name: 'College A', position: [250, 400], link: '/category/college-a' },
    { name: 'It', position: [250, 1200], link: '/level'  }, // داخل الصورة الثانية
    { name: 'College C', position: [250, 2000], link: '/category/college-c' }, // داخل الصورة الثالثة
    { name: 'College D', position: [750, 400], link: '/category/college-d' },  // داخل الصورة الرابعة
    { name: 'College E', position: [750, 1200], link: '/category/college-e' }, // داخل الصورة الخامسة
  ];
  

    // إضافة دوائر وكلية
    colleges.forEach(college => {
      const circle = L.circle(college.position, {
        color: 'red',
        fillColor: '#f03',
        // fillOpacity: 0.5,
        radius: 50 // تعديل الحجم حسب الحاجة
      }).addTo(mapRef.current);

      circle.bindTooltip(college.name, {
        permanent: false, 
        direction: 'top'
      });
      
     
circle.bindPopup(`<b>${college.name}</b>`)
.on('click', () => {
  window.location.href = college.link;
});

    });

  }, []); // تأكد من تنفيذ useEffect مرة واحدة فقط عند تحميل المكون

  return <>
  < Navbar />
 <h1 className=" text-4xl font-bold text-center text-zinc-800 mt-[7rem]">Choose Your College <RiCollageFill className='inline' /><span></span></h1>
   <div id="map" style={{ background:'#DFD3C3', width: '80%', height: '500px', marginTop: '2%', marginLeft:'10%', border: '2px solid #8D493A', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>;
</>

};

export default Resource;
