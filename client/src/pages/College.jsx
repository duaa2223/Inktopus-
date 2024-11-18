
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