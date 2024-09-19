import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/colleges'); // تأكد من عنوان URL الصحيح
        setColleges(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className="college-list">
      {colleges.map(college => (
        <div key={college._id} className="college-item">
          {college.imageUrl && <img src={college.imageUrl} alt={college.name} />}
          <h2>{college.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;
