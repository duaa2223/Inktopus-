// // components/Academic.js
// import React, { useState } from 'react';
// import { Input, Select, Button } from '../components/ui/UIComponents';

// const Academic = () => {
//   const [formData, setFormData] = useState({
//     department: '',
//     level: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // عملية حفظ البيانات
//     console.log('تم إرسال البيانات', formData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Academic Section</h2>
//       <div className="mb-4">
//         <Select
//           value={formData.department}
//           onChange={handleChange}
//           name="department"
//           options={[
//             { label: 'Computer Science', value: 'cs' },
//             { label: 'Information Technology', value: 'it' },
//           ]}
//         />
//       </div>
//       <div className="mb-4">
//         <Select
//           value={formData.level}
//           onChange={handleChange}
//           name="level"
//           options={[
//             { label: 'Freshman', value: 'freshman' },
//             { label: 'Senior', value: 'senior' },
//           ]}
//         />
//       </div>
//       <Button onClick={handleSubmit}>Submit</Button>
//     </div>
//   );
// };

// export default Academic;
/////////////////////////////////////////////
import React from 'react';
import { Button, Card } from '../components/ui/UIComponents';

const AcademicTab = ({ colleges, academicYears, specializations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Colleges" description="Manage colleges">
        <Button>Add College</Button>
        <ul className="mt-2">
          {colleges.map((college) => (
            <li key={college._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{college.name}</li>
          ))}
        </ul>
      </Card>
      <Card title="Academic Years" description="Manage academic years">
        <Button>Add Academic Year</Button>
        <ul className="mt-2">
          {academicYears.map((year) => (
            <li key={year._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{year.name}</li>
          ))}
        </ul>
      </Card>
      <Card title="Specializations" description="Manage specializations">
        <Button>Add Specialization</Button>
        <ul className="mt-2">
          {specializations.map((spec) => (
            <li key={spec._id} className="bg-[#D0B8A8] p-2 rounded mb-1">{spec.name}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AcademicTab;
