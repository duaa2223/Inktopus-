// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const CollegeList = () => {
//   const [colleges, setColleges] = useState([]);
  
//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/colleges'); // تأكد من عنوان URL الصحيح
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);

//   return (
//     <div className="college-list">
//       {colleges.map(college => (
//         <div key={college._id} className="college-item">
//           {college.imageUrl && <img src={college.imageUrl} alt={college.name} />}
//           <h2>{college.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CollegeList;
import { useEffect, useState } from 'react';
import axios from 'axios';

const CollegeList = () => {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {colleges.map(college => (
        <div key={college._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {college.imageUrl && (
            <img 
              src={college.imageUrl} 
              alt={college.name} 
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
            <p className="text-gray-600">{college.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;