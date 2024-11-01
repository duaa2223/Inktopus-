// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, Edit, Trash, Plus, School, BookOpen, GraduationCap } from 'lucide-react';

// const AcademicSection = () => {
//   const [expandedCollege, setExpandedCollege] = useState(null);
//   const [expandedYear, setExpandedYear] = useState(null);
//   const [editMode, setEditMode] = useState({
//     type: null, // 'college', 'year', or 'specialization'
//     id: null
//   });

//   // مكون لعرض نموذج التعديل
//   const EditForm = ({ type, item, onSave, onCancel }) => {
//     const [formData, setFormData] = useState(item);

//     return (
//       <div className="bg-white p-4 rounded-lg shadow-md mb-2">
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           onSave(formData);
//         }}>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             placeholder={`${type} name`}
//           />
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             value={formData.nameAr}
//             onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
//             placeholder={`${type} name (Arabic)`}
//           />
//           <div className="flex justify-end gap-2">
//             <button
//               type="submit"
//               className="px-3 py-1 bg-[#8D493A] text-white rounded hover:bg-[#7A3E32]"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={onCancel}
//               className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   };

//   // مكون لعرض عنصر قابل للتوسيع
//   const ExpandableItem = ({ 
//     type, 
//     item, 
//     isExpanded, 
//     onToggle, 
//     onEdit, 
//     onDelete, 
//     onAdd,
//     children,
//     icon: Icon 
//   }) => {
//     return (
//       <div className="mb-2">
//         <div className={`
//           flex items-center justify-between
//           p-3 rounded-lg
//           ${type === 'college' ? 'bg-[#F8EDE3]' : 'bg-[#DFD3C3]'}
//           ${isExpanded ? 'rounded-b-none' : ''}
//         `}>
//           <div className="flex items-center gap-2">
//             <button 
//               onClick={onToggle}
//               className="hover:bg-[#D0B8A8] p-1 rounded"
//             >
//               {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//             </button>
//             <Icon size={20} className="text-[#8D493A]" />
//             <span className="font-medium">{item.name}</span>
//             {item.nameAr && <span className="text-sm text-gray-600">({item.nameAr})</span>}
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={onAdd}
//               className="p-1 hover:bg-[#D0B8A8] rounded"
//               title={`Add new ${type === 'college' ? 'year' : 'specialization'}`}
//             >
//               <Plus size={18} />
//             </button>
//             <button
//               onClick={onEdit}
//               className="p-1 hover:bg-[#D0B8A8] rounded"
//               title="Edit"
//             >
//               <Edit size={18} />
//             </button>
//             <button
//               onClick={onDelete}
//               className="p-1 hover:bg-[#D0B8A8] rounded text-red-600"
//               title="Delete"
//             >
//               <Trash size={18} />
//             </button>
//           </div>
//         </div>
//         {isExpanded && (
//           <div className="ml-8 border-l-2 border-[#D0B8A8] pl-4">
//             {children}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const handleSave = (type, data) => {
//     // هنا يمكنك إضافة المنطق الخاص بحفظ التعديلات
//     console.log('Saving', type, data);
//     setEditMode({ type: null, id: null });
//   };

//   // بيانات تجريبية - استبدلها ببياناتك الفعلية
//   const colleges = [
//     {
//       id: 1,
//       name: "College of Engineering",
//       nameAr: "كلية الهندسة",
//       years: [
//         {
//           id: 1,
//           name: "First Year",
//           nameAr: "السنة الأولى",
//           specializations: [
//             { id: 1, name: "Computer Engineering", nameAr: "هندسة الحاسوب" },
//             { id: 2, name: "Civil Engineering", nameAr: "الهندسة المدنية" }
//           ]
//         },
//         {
//           id: 2,
//           name: "Second Year",
//           nameAr: "السنة الثانية",
//           specializations: [
//             { id: 3, name: "Electrical Engineering", nameAr: "الهندسة الكهربائية" }
//           ]
//         }
//       ]
//     },
//     // يمكنك إضافة المزيد من الكليات هنا
//   ];

//   return (
//     <div className="space-y-4">
//       {/* زر إضافة كلية جديدة */}
//       <button
//         className="w-full mb-4 p-3 bg-[#8D493A] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7A3E32]"
//         onClick={() => {/* إضافة منطق إضافة كلية جديدة */}}
//       >
//         <Plus size={20} />
//         Add New College
//       </button>

//       {/* عرض الكليات */}
//       {colleges.map(college => (
//         <div key={college.id}>
//           {editMode.type === 'college' && editMode.id === college.id ? (
//             <EditForm
//               type="college"
//               item={college}
//               onSave={(data) => handleSave('college', data)}
//               onCancel={() => setEditMode({ type: null, id: null })}
//             />
//           ) : (
//             <ExpandableItem
//               type="college"
//               item={college}
//               isExpanded={expandedCollege === college.id}
//               onToggle={() => setExpandedCollege(expandedCollege === college.id ? null : college.id)}
//               onEdit={() => setEditMode({ type: 'college', id: college.id })}
//               onDelete={() => {/* إضافة منطق الحذف */}}
//               onAdd={() => {/* إضافة منطق إضافة سنة دراسية */}}
//               icon={School}
//             >
//               {college.years.map(year => (
//                 <div key={year.id}>
//                   {editMode.type === 'year' && editMode.id === year.id ? (
//                     <EditForm
//                       type="year"
//                       item={year}
//                       onSave={(data) => handleSave('year', data)}
//                       onCancel={() => setEditMode({ type: null, id: null })}
//                     />
//                   ) : (
//                     <ExpandableItem
//                       type="year"
//                       item={year}
//                       isExpanded={expandedYear === year.id}
//                       onToggle={() => setExpandedYear(expandedYear === year.id ? null : year.id)}
//                       onEdit={() => setEditMode({ type: 'year', id: year.id })}
//                       onDelete={() => {/* إضافة منطق الحذف */}}
//                       onAdd={() => {/* إضافة منطق إضافة تخصص */}}
//                       icon={BookOpen}
//                     >
//                       {year.specializations.map(spec => (
//                         <div key={spec.id}>
//                           {editMode.type === 'specialization' && editMode.id === spec.id ? (
//                             <EditForm
//                               type="specialization"
//                               item={spec}
//                               onSave={(data) => handleSave('specialization', data)}
//                               onCancel={() => setEditMode({ type: null, id: null })}
//                             />
//                           ) : (
//                             <div className="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
//                               <div className="flex items-center gap-2">
//                                 <GraduationCap size={20} className="text-[#8D493A]" />
//                                 <span>{spec.name}</span>
//                                 {spec.nameAr && (
//                                   <span className="text-sm text-gray-600">({spec.nameAr})</span>
//                                 )}
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <button
//                                   onClick={() => setEditMode({ type: 'specialization', id: spec.id })}
//                                   className="p-1 hover:bg-[#D0B8A8] rounded"
//                                 >
//                                   <Edit size={18} />
//                                 </button>
//                                 <button
//                                   onClick={() => {/* إضافة منطق الحذف */}}
//                                   className="p-1 hover:bg-[#D0B8A8] rounded text-red-600"
//                                 >
//                                   <Trash size={18} />
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </ExpandableItem>
//                   )}
//                 </div>
//               ))}
//             </ExpandableItem>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AcademicSection;
////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronRight, Edit, Trash, Plus, School, BookOpen, GraduationCap } from 'lucide-react';
// import SpecializationForm from '../Form/SpecializationForm';
// import AcademicYearForm from '../Form/AcademicYearForm';

// const AcademicSection = () => {
//   const [expandedCollege, setExpandedCollege] = useState(null);
//   const [expandedYear, setExpandedYear] = useState(null);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [showCollegeModal, setShowCollegeModal] = useState(false);
//   const [showYearModal, setShowYearModal] = useState(false);
//   const [showSpecModal, setShowSpecModal] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [editMode, setEditMode] = useState({
//     type: null,
//     id: null,
//     data: null
//   });

//   // جلب البيانات
//   const fetchData = async () => {
//     try {
//       // جلب الكليات
//       const collegesRes = await fetch('http://localhost:5000/api/colleges');
//       const collegesData = await collegesRes.json();
//       setColleges(collegesData);

//       // جلب السنوات الدراسية
//       const yearsRes = await fetch('http://localhost:5000/api/academic-years');
//       const yearsData = await yearsRes.json();
//       setAcademicYears(yearsData);

//       // جلب التخصصات
//       const specsRes = await fetch('http://localhost:5000/api/specializations');
//       const specsData = await specsRes.json();
//       setSpecializations(specsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // نموذج إضافة كلية
//   const CollegeForm = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//       name: '',
//       nameAr: '',
//       imageUrl: '',
//       description: ''
//     });

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await fetch('http://localhost:5000/api/colleges', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
//         if (response.ok) {
//           fetchData();
//           onClose();
//         }
//       } catch (error) {
//         console.error('Error adding college:', error);
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg w-full max-w-md">
//           <h2 className="text-xl font-bold mb-4">Add New College</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Arabic Name"
//               value={formData.nameAr}
//               onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
//               required
//             />
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Image URL"
//               value={formData.imageUrl}
//               onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//             />
//             <textarea
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Description"
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-[#8D493A] text-white rounded hover:bg-[#7A3E32]"
//               >
//                 Add
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   // حذف عنصر
//   const handleDelete = async (type, id) => {
//     if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

//     try {
//       const endpoint = type === 'college' 
//         ? `colleges/${id}`
//         : type === 'year'
//           ? `academic-years/${id}`
//           : `specializations/${id}`;

//       const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         fetchData();
//       }
//     } catch (error) {
//       console.error(`Error deleting ${type}:`, error);
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* زر إضافة كلية جديدة */}
//       <button
//         className="w-full mb-4 p-3 bg-[#8D493A] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7A3E32]"
//         onClick={() => setShowCollegeModal(true)}
//       >
//         <Plus size={20} />
//         Add New College
//       </button>

//       {/* عرض الكليات */}
//       {colleges.map(college => (
//         <div key={college._id} className="bg-[#F8EDE3] rounded-lg">
//           <div className="flex items-center justify-between p-4">
//             <div className="flex items-center gap-2">
//               <button onClick={() => setExpandedCollege(expandedCollege === college._id ? null : college._id)}>
//                 {expandedCollege === college._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//               </button>
//               <School size={20} className="text-[#8D493A]" />
//               <span className="font-medium">{college.name}</span>
//               {college.nameAr && <span className="text-sm text-gray-600">({college.nameAr})</span>}
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => {
//                   setSelectedCollege(college);
//                   setShowYearModal(true);
//                 }}
//                 className="p-2 hover:bg-[#D0B8A8] rounded"
//                 title="Add Academic Year"
//               >
//                 <Plus size={18} />
//               </button>
//               <button
//                 onClick={() => setEditMode({ type: 'college', id: college._id, data: college })}
//                 className="p-2 hover:bg-[#D0B8A8] rounded"
//               >
//                 <Edit size={18} />
//               </button>
//               <button
//                 onClick={() => handleDelete('college', college._id)}
//                 className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//               >
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div>

//           {expandedCollege === college._id && (
//             <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
//               {academicYears
//                 .filter(year => year.college === college._id)
//                 .map(year => (
//                   <div key={year._id} className="bg-[#DFD3C3] rounded-lg mb-2">
//                     <div className="flex items-center justify-between p-3">
//                       <div className="flex items-center gap-2">
//                         <button onClick={() => setExpandedYear(expandedYear === year._id ? null : year._id)}>
//                           {expandedYear === year._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//                         </button>
//                         <BookOpen size={20} className="text-[#8D493A]" />
//                         <span>{year.name}</span>
//                         {year.nameAr && <span className="text-sm text-gray-600">({year.nameAr})</span>}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => {
//                             setSelectedCollege(college);
//                             setSelectedYear(year);
//                             setShowSpecModal(true);
//                           }}
//                           className="p-2 hover:bg-[#D0B8A8] rounded"
//                           title="Add Specialization"
//                         >
//                           <Plus size={18} />
//                         </button>
//                         <button
//                           onClick={() => setEditMode({ type: 'year', id: year._id, data: year })}
//                           className="p-2 hover:bg-[#D0B8A8] rounded"
//                         >
//                           <Edit size={18} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete('year', year._id)}
//                           className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//                         >
//                           <Trash size={18} />
//                         </button>
//                       </div>
//                     </div>

//                     {expandedYear === year._id && (
//                       <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
//                         {specializations
//                           .filter(spec => spec.college === college._id && spec.academic_year === year._id)
//                           .map(spec => (
//                             <div key={spec._id} className="bg-white rounded-lg p-3 mb-2 flex items-center justify-between">
//                               <div className="flex items-center gap-2">
//                                 <GraduationCap size={20} className="text-[#8D493A]" />
//                                 <span>{spec.name}</span>
//                                 {spec.nameAr && <span className="text-sm text-gray-600">({spec.nameAr})</span>}
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <button
//                                   onClick={() => setEditMode({ type: 'specialization', id: spec._id, data: spec })}
//                                   className="p-2 hover:bg-[#D0B8A8] rounded"
//                                 >
//                                   <Edit size={18} />
//                                 </button>
//                                 <button
//                                   onClick={() => handleDelete('specialization', spec._id)}
//                                   className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//                                 >
//                                   <Trash size={18} />
//                                 </button>
//                               </div>
//                             </div>
//                           ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* نوافذ الإضافة */}
//       {showCollegeModal && <CollegeForm onClose={() => setShowCollegeModal(false)} />}
      
//       {showYearModal && (
//         <AcademicYearForm
//           colleges={[selectedCollege]}
//           onClose={() => {
//             setShowYearModal(false);
//             setSelectedCollege(null);
//           }}
//           onSubmit={() => {
//             setShowYearModal(false);
//             setSelectedCollege(null);
//             fetchData();
//           }}
//         />
//       )}
      
//       {showSpecModal && (
//         <SpecializationForm
//           colleges={[selectedCollege]}
//           academicYear={selectedYear}
//           onClose={() => {
//             setShowSpecModal(false);
//             setSelectedCollege(null);
//             setSelectedYear(null);
//           }}
//           onSubmit={() => {
//             setShowSpecModal(false);
//             setSelectedCollege(null);
//             setSelectedYear(null);
//             fetchData();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default AcademicSection;
//////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronRight, Edit, Trash, Plus, School, BookOpen, GraduationCap } from 'lucide-react';
// import SpecializationForm from '../Form/SpecializationForm';
// import AcademicYearForm from '../Form/AcademicYearForm';

// const AcademicSection = () => {
//   const [expandedCollege, setExpandedCollege] = useState(null);
//   const [expandedYear, setExpandedYear] = useState(null);
//   const [colleges, setColleges] = useState([]);
//   const [academicYears, setAcademicYears] = useState([]);
//   const [specializations, setSpecializations] = useState([]);
//   const [showCollegeModal, setShowCollegeModal] = useState(false);
//   const [showYearModal, setShowYearModal] = useState(false);
//   const [showSpecModal, setShowSpecModal] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [editMode, setEditMode] = useState({
//     type: null,
//     id: null,
//     data: null
//   });

//   // جلب البيانات
//   const fetchData = async () => {
//     try {
//       // جلب الكليات
//       const collegesRes = await fetch('http://localhost:5000/api/colleges');
//       const collegesData = await collegesRes.json();
//       setColleges(collegesData);
  
//       // جلب المراحل الدراسية لكل كلية عند توسيعها
//       if (expandedCollege) {
//         const yearsRes = await fetch(`http://localhost:5000/api/academic-years/${expandedCollege}`);
//         const yearsData = await yearsRes.json();
//         setAcademicYears(prevYears => {
//           // دمج المراحل الجديدة مع الموجودة مع تجنب التكرار
//           const existingYears = prevYears.filter(year => year.college !== expandedCollege);
//           return [...existingYears, ...yearsData];
//         });
//       }
  
//       // جلب التخصصات
//       const specsRes = await fetch('http://localhost:5000/api/specializations');
//       const specsData = await specsRes.json();
//       setSpecializations(specsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [expandedCollege]);

//   // نموذج إضافة/تعديل كلية
//   const CollegeForm = ({ onClose, editData = null }) => {
//     const [formData, setFormData] = useState(editData || {
//       name: '',
//       nameAr: '',
//       imageUrl: '',
//       description: ''
//     });

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const url = 'http://localhost:5000/api/colleges' + (editData ? `/${editData._id}` : '');
//         const method = editData ? 'PUT' : 'POST';
        
//         const response = await fetch(url, {
//           method,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });
        
//         if (response.ok) {
//           fetchData();
//           onClose();
//         }
//       } catch (error) {
//         console.error('Error saving college:', error);
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg w-full max-w-md">
//           <h2 className="text-xl font-bold mb-4">
//             {editData ? 'Edit College' : 'Add New College'}
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//             />
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Arabic Name"
//               value={formData.nameAr}
//               onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
//               required
//             />
//             <input
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Image URL"
//               value={formData.imageUrl}
//               onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//             />
//             <textarea
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Description"
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-[#8D493A] text-white rounded hover:bg-[#7A3E32]"
//               >
//                 {editData ? 'Save' : 'Add'}
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   // حذف عنصر
//   const handleDelete = async (type, id) => {
//     if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

//     try {
//       const endpoint = type === 'college' 
//         ? `colleges/${id}`
//         : type === 'year'
//           ? `academic-years/${id}`
//           : `specializations/${id}`;

//       const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         fetchData();
//       }
//     } catch (error) {
//       console.error(`Error deleting ${type}:`, error);
//     }
//   };

//   // عرض المراحل الدراسية للكلية
// const renderAcademicYears = (collegeId) => {
//   const collegeYears = academicYears.filter(year => year.college === collegeId);
  
//   if (!collegeYears || collegeYears.length === 0) {
//     return <div className="text-gray-500 p-4">No academic years found</div>;
//   }

//     return collegeYears.map(year => (
//       <div key={year._id} className="bg-[#DFD3C3] rounded-lg mb-2">
//         <div className="flex items-center justify-between p-3">
//           <div className="flex items-center gap-2">
//             <button onClick={() => setExpandedYear(expandedYear === year._id ? null : year._id)}>
//               {expandedYear === year._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//             </button>
//             <BookOpen size={20} className="text-[#8D493A]" />
//             <span>{year.name}</span>
//             {year.nameAr && <span className="text-sm text-gray-600">({year.nameAr})</span>}
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => {
//                 setSelectedYear(year);
//                 setShowSpecModal(true);
//               }}
//               className="p-2 hover:bg-[#D0B8A8] rounded"
//               title="Add Specialization"
//             >
//               <Plus size={18} />
//             </button>
//             <button
//               onClick={() => setEditMode({ type: 'year', id: year._id, data: year })}
//               className="p-2 hover:bg-[#D0B8A8] rounded"
//             >
//               <Edit size={18} />
//             </button>
//             <button
//               onClick={() => handleDelete('year', year._id)}
//               className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//             >
//               <Trash size={18} />
//             </button>
//           </div>
//         </div>

//         {expandedYear === year._id && renderSpecializations(collegeId, year._id)}
//       </div>
//     ));
//   };

//   // عرض التخصصات للمرحلة الدراسية
//   const renderSpecializations = (collegeId, yearId) => {
//     const yearSpecs = specializations.filter(
//       spec => spec.college === collegeId && spec.academic_year === yearId
//     );

//     if (yearSpecs.length === 0) {
//       return <div className="text-gray-500 p-4">No specializations found</div>;
//     }

//     return (
//       <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
//         {yearSpecs.map(spec => (
//           <div key={spec._id} className="bg-white rounded-lg p-3 mb-2 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <GraduationCap size={20} className="text-[#8D493A]" />
//               <span>{spec.name}</span>
//               {spec.nameAr && <span className="text-sm text-gray-600">({spec.nameAr})</span>}
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setEditMode({ type: 'specialization', id: spec._id, data: spec })}
//                 className="p-2 hover:bg-[#D0B8A8] rounded"
//               >
//                 <Edit size={18} />
//               </button>
//               <button
//                 onClick={() => handleDelete('specialization', spec._id)}
//                 className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//               >
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-4">
//       {/* زر إضافة كلية جديدة */}
//       <button
//         className="w-full mb-4 p-3 bg-[#8D493A] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7A3E32]"
//         onClick={() => setShowCollegeModal(true)}
//       >
//         <Plus size={20} />
//         Add New College
//       </button>

//       {/* عرض الكليات */}
//       {colleges.map(college => (
//         <div key={college._id} className="bg-[#F8EDE3] rounded-lg">
//           <div className="flex items-center justify-between p-4">
//             <div className="flex items-center gap-2">
//               <button onClick={() => setExpandedCollege(expandedCollege === college._id ? null : college._id)}>
//                 {expandedCollege === college._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//               </button>
//               <School size={20} className="text-[#8D493A]" />
//               <span className="font-medium">{college.name}</span>
//               {college.nameAr && <span className="text-sm text-gray-600">({college.nameAr})</span>}
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => {
//                   setSelectedCollege(college);
//                   setShowYearModal(true);
//                 }}
//                 className="p-2 hover:bg-[#D0B8A8] rounded"
//                 title="Add Academic Year"
//               >
//                 <Plus size={18} />
//               </button>
//               <button
//                 onClick={() => setEditMode({ type: 'college', id: college._id, data: college })}
//                 className="p-2 hover:bg-[#D0B8A8] rounded"
//               >
//                 <Edit size={18} />
//               </button>
//               <button
//                 onClick={() => handleDelete('college', college._id)}
//                 className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
//               >
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div>

//           {expandedCollege === college._id && (
//             <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
//               {renderAcademicYears(college._id)}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* النوافذ المنبثقة */}
//       {showCollegeModal && (
//         <CollegeForm 
//           onClose={() => setShowCollegeModal(false)}
//           editData={editMode.type === 'college' ? editMode.data : null}
//         />
//       )}
      
//       {showYearModal && (
//         <AcademicYearForm
//           colleges={[selectedCollege]}
//           editData={editMode.type === 'year' ? editMode.data : null}
//           onClose={() => {
//             setShowYearModal(false);
//             setSelectedCollege(null);
//             setEditMode({ type: null, id: null, data: null });
//           }}
//           onSubmit={() => {
//             setShowYearModal(false);
//             setSelectedCollege(null);
//             setEditMode({ type: null, id: null, data: null });
//             fetchData();
//           }}
//         />
//       )}
      
//       {showSpecModal && (
//         <SpecializationForm
//           colleges={[selectedCollege]}
//           academicYear={selectedYear}
//           editData={editMode.type === 'specialization' ? editMode.data : null}
//           onClose={() => {
//             setShowSpecModal(false);
//             setSelectedCollege(null);
//             setSelectedYear(null);
//             setEditMode({ type: null, id: null, data: null });
//           }}
//           onSubmit={() => {
//             setShowSpecModal(false);
//             setSelectedCollege(null);
//             setSelectedYear(null);
//             setEditMode({ type: null, id: null, data: null });
//             fetchData();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default AcademicSection;
/////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Edit, Trash, Plus, School, BookOpen, GraduationCap } from 'lucide-react';
import SpecializationForm from '../Form/SpecializationForm';
import AcademicYearForm from '../Form/AcademicYearForm';
import CollageForm from '../Form/CollegeForm';

const AcademicSection = () => {
  const [expandedCollege, setExpandedCollege] = useState(null);
  const [expandedYear, setExpandedYear] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [showCollegeModal, setShowCollegeModal] = useState(false);
  const [showYearModal, setShowYearModal] = useState(false);
  const [showSpecModal, setShowSpecModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [editMode, setEditMode] = useState({
    type: null,
    id: null,
    data: null
  });

//   const fetchData = async () => {
//     try {
//       const collegesRes = await fetch('http://localhost:5000/api/colleges');
//       const collegesData = await collegesRes.json();
//       setColleges(collegesData);
  
//       if (expandedCollege) {
//         const yearsRes = await fetch(`http://localhost:5000/api/academic-years/${expandedCollege}`);
//         const yearsData = await yearsRes.json();
//         setAcademicYears(prevYears => {
//           const existingYears = prevYears.filter(year => year.college !== expandedCollege);
//           return [...existingYears, ...yearsData];
//         });
//       }
  
//       const specsRes = await fetch('http://localhost:5000/api/specializations');
//       const specsData = await specsRes.json();
//       setSpecializations(specsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


const fetchData = async () => {
    try {
      const collegesRes = await fetch('http://localhost:5000/api/colleges');
      const collegesData = await collegesRes.json();
      setColleges(collegesData);
  
      if (expandedCollege) {
        const yearsRes = await fetch(`http://localhost:5000/api/academic-years/${expandedCollege}`);
        const yearsData = await yearsRes.json();
        setAcademicYears(yearsData);
      } else {
        setAcademicYears([]);
      }
  
      const specsRes = await fetch('http://localhost:5000/api/specializations');
      const specsData = await specsRes.json();
      setSpecializations(specsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [expandedCollege]);



  const handleSpecializationSubmit = async (formData) => {
    try {
      const url = 'http://localhost:5000/api/specializations' + (editMode.type === 'specialization' ? `/${editMode.id}` : '');
      const method = editMode.type === 'specialization' ? 'PUT' : 'POST';
  
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const savedSpecialization = await response.json();
        setSpecializations(prevSpecializations => {
          if (editMode.type === 'specialization') {
            return prevSpecializations.map(spec => spec._id === editMode.id ? savedSpecialization : spec);
          } else {
            return [...prevSpecializations, savedSpecialization];
          }
        });
        setShowSpecModal(false);
        setEditMode({ type: null, id: null, data: null });
        fetchData(); // Refresh the data after successful update or creation
      }
    } catch (error) {
      console.error('Error saving specialization:', error);
    }
  };






  const handleCollegeSubmit = async (formData) => {
    try {
      const url = 'http://localhost:5000/api/colleges' + (editMode.type === 'college' ? `/${editMode.id}` : '');
      const method = editMode.type === 'college' ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        fetchData();
        setShowCollegeModal(false);
        setEditMode({ type: null, id: null, data: null });
      }
    } catch (error) {
      console.error('Error saving college:', error);
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const endpoint = type === 'college' 
        ? `colleges/${id}`
        : type === 'year'
          ? `academic-years/${id}`
          : `specializations/${id}`;

      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  const renderAcademicYears = (collegeId) => {
    const collegeYears = academicYears.filter(year => year.college === collegeId);
    
    if (!collegeYears || collegeYears.length === 0) {
      return <div className="text-gray-500 p-4">No academic years found</div>;
    }

    return collegeYears.map(year => (
      <div key={year._id} className="bg-[#DFD3C3] rounded-lg mb-2">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <button onClick={() => setExpandedYear(expandedYear === year._id ? null : year._id)}>
              {expandedYear === year._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            <BookOpen size={20} className="text-[#8D493A]" />
            <span>{year.name}</span>
            {year.nameAr && <span className="text-sm text-gray-600">({year.nameAr})</span>}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedYear(year);
                setShowSpecModal(true);
              }}
              className="p-2 hover:bg-[#D0B8A8] rounded"
              title="Add Specialization"
            >
              <Plus size={18} />
            </button>
            <button
              onClick={() => setEditMode({ type: 'year', id: year._id, data: year })}
              className="p-2 hover:bg-[#D0B8A8] rounded"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => handleDelete('year', year._id)}
              className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
            >
              <Trash size={18} />
            </button>
          </div>
        </div>
        {expandedYear === year._id && renderSpecializations(collegeId, year._id)}
      </div>
    ));
  };

  const renderSpecializations = (collegeId, yearId) => {
    const yearSpecs = specializations.filter(
      spec => spec.college === collegeId && spec.academic_year === yearId
    );

    if (yearSpecs.length === 0) {
      return <div className="text-gray-500 p-4">No specializations found</div>;
    }

    return (
      <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
        {yearSpecs.map(spec => (
          <div key={spec._id} className="bg-white rounded-lg p-3 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap size={20} className="text-[#8D493A]" />
              <span>{spec.name}</span>
              {spec.nameAr && <span className="text-sm text-gray-600">({spec.nameAr})</span>}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setEditMode({ type: 'specialization', id: spec._id, data: spec })}
                className="p-2 hover:bg-[#D0B8A8] rounded"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete('specialization', spec._id)}
                className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <button
        className="w-full mb-4 p-3 bg-[#8D493A] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7A3E32]"
        onClick={() => setShowCollegeModal(true)}
      >
        <Plus size={20} />
        Add New College
      </button>

      {colleges.map(college => (
        <div key={college._id} className="bg-[#F8EDE3] rounded-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <button onClick={() => setExpandedCollege(expandedCollege === college._id ? null : college._id)}>
                {expandedCollege === college._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              <School size={20} className="text-[#8D493A]" />
              <span className="font-medium">{college.name}</span>
              {college.nameAr && <span className="text-sm text-gray-600">({college.nameAr})</span>}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedCollege(college);
                  setShowYearModal(true);
                }}
                className="p-2 hover:bg-[#D0B8A8] rounded"
                title="Add Academic Year"
              >
                <Plus size={18} />
              </button>
              <button
                onClick={() => setEditMode({ type: 'college', id: college._id, data: college })}
                className="p-2 hover:bg-[#D0B8A8] rounded"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete('college', college._id)}
                className="p-2 hover:bg-[#D0B8A8] rounded text-red-600"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>

          {expandedCollege === college._id && (
            <div className="ml-8 p-4 border-l-2 border-[#D0B8A8]">
              {renderAcademicYears(college._id)}
            </div>
          )}
        </div>
      ))}

      {showCollegeModal && (
        <CollageForm 
          onClose={() => {
            setShowCollegeModal(false);
            setEditMode({ type: null, id: null, data: null });
          }}
          onSubmit={handleCollegeSubmit}
          editData={editMode.type === 'college' ? editMode.data : null}
        />
      )}
      
      {showYearModal && (
        <AcademicYearForm
          colleges={[selectedCollege]}
          editData={editMode.type === 'year' ? editMode.data : null}
          onClose={() => {
            setShowYearModal(false);
            setSelectedCollege(null);
            setEditMode({ type: null, id: null, data: null });
          }}
          onSubmit={() => {
            setShowYearModal(false);
            setSelectedCollege(null);
            setEditMode({ type: null, id: null, data: null });
            fetchData();
          }}
        />
      )}
      
      {showSpecModal && (
        <SpecializationForm
          colleges={[selectedCollege]}
          academicYear={selectedYear}
          editData={editMode.type === 'specialization' ? editMode.data : null}
          onClose={() => {
            setShowSpecModal(false);
            setSelectedCollege(null);
            setSelectedYear(null);
            setEditMode({ type: null, id: null, data: null });
          }}
          onSubmit={() => {
            setShowSpecModal(false);
            setSelectedCollege(null);
            setSelectedYear(null);
            setEditMode({ type: null, id: null, data: null });
            fetchData();
          }}
        />
      )}
    </div>
  );
};

export default AcademicSection;