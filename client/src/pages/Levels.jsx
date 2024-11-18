
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

    .custom-popup .leaflet-popup-content-wrapper {
      background: #F8EDE3;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(141, 73, 58, 0.15);
    }

    .custom-popup .leaflet-popup-tip {
      background: #F8EDE3;
    }
  `;

  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
        // Sort the academic years by order before setting state
        const sortedYears = response.data.sort((a, b) => a.order - b.order);
        setAcademicYears(sortedYears);
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
            <div class="level-number">Level ${year.order}</div>
            <div class="level-label">${year.name}</div>
          </div>
        `,
        iconSize: [160, 160],
        iconAnchor: [80, 80]
      });

      const marker = L.marker(position, { icon: CustomIcon }).addTo(mapRef.current);

      marker.bindPopup(`
        <div style="text-align: center; padding: 15px;">
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
        <h1 className="text-4xl font-bold mb-8 mt-24 text-center text-[#8D493A]">
          Choose Your Academic Level
        </h1>
        <div id="map" style={mapContainerStyle}></div>
      </div>
    </>
  );
};

export default Level;