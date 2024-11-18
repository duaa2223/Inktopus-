
import  { useState, useEffect } from 'react';
import { Button, FormGroup, FormLabel, FormInput, FormSelect, FormTextarea, FormModal } from '../SharedFormComponant/Forms';

const SpecializationForm = ({ colleges, onClose, onSubmit, editData }) => {
  // تبسيط إدارة الحالة الأولية
  const [formData, setFormData] = useState({
    name: '',
    // nameAr: '',
    // description: '',
    college: '',
    academic_year: ''
  });
  
  const [academicYears, setAcademicYears] = useState([]);

  // تحديث البيانات عند فتح النموذج للتعديل
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        nameAr: editData.nameAr || '',
        description: editData.description || '',
        college: editData.college || '',
        academic_year: editData.academic_year || ''
      });
      
      // جلب السنوات الدراسية مباشرة إذا كان هناك كلية محددة
      if (editData.college) {
        fetchAcademicYears(editData.college);
      }
    }
  }, [editData]);

  // جلب السنوات الدراسية عند تغيير الكلية
  useEffect(() => {
    if (formData.college) {
      fetchAcademicYears(formData.college);
    }
  }, [formData.college]);

  const fetchAcademicYears = async (collegeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/academic-years/${collegeId}`);
      if (response.ok) {
        const data = await response.json();
        setAcademicYears(data);
      } else {
        console.error('Failed to fetch academic years');
      }
    } catch (error) {
      console.error('Error fetching academic years:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // إعادة تعيين السنة الدراسية عند تغيير الكلية
      if (name === 'college' && value !== prev.college) {
        newData.academic_year = '';
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormModal onClose={onClose}>
      <h2 className="text-xl font-bold text-[#8D493A] mb-4">
        {editData ? 'Edit Specialization' : 'Add Specialization'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel required>Name (English):</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>


        <FormGroup>
          <FormLabel required>College:</FormLabel>
          <FormSelect
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          >
            <option value="">Select College</option>
            {colleges.map((college) => (
              <option key={college._id} value={college._id}>
                {college.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel required>Academic Year:</FormLabel>
          <FormSelect
            name="academic_year"
            value={formData.academic_year}
            onChange={handleChange}
            required
            disabled={!formData.college}
          >
            <option value="">Select Academic Year</option>
            {academicYears.map((year) => (
              <option key={year._id} value={year._id}>
                {year.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

    

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {editData ? 'Update' : 'Add'} Specialization
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default SpecializationForm;