import { useState, useEffect } from 'react';
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormModal,
  Button
} from '../SharedFormComponant/Forms';

const AcademicYearForm = ({ colleges, onClose, onSubmit, editData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    description: '',
    imageUrl: '',
    college: '',
    order: '',
  });

  useEffect(() => {
    if (editData) {
      // Set college ID explicitly from editData
      setFormData({
        name: editData.name || '',
        nameAr: editData.nameAr || '',
        description: editData.description || '',
        imageUrl: editData.imageUrl || '',
        college: editData.college || colleges[0]?._id || '', // Fallback to first college if not provided
        order: editData.order || '',
      });
    } else {
      // Set default college when adding new
      setFormData(prev => ({
        ...prev,
        college: colleges[0]?._id || ''
      }));
    }
  }, [editData, colleges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure college ID is included in submission
    const submissionData = {
      ...formData,
      college: formData.college || colleges[0]?._id
    };
    onSubmit(submissionData);
  };

  return (
    <FormModal onClose={onClose}>
      <h2 className="text-xl font-bold text-[#8D493A] mb-4">
        {editData ? 'Edit Academic Year' : 'Add Academic Year'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <FormLabel required>Name (Arabic):</FormLabel>
          <FormInput
            type="text"
            name="nameAr"
            value={formData.nameAr}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel required>Order:</FormLabel>
          <FormInput
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormTextarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </FormGroup>

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {editData ? 'Update' : 'Add'} Academic Year
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default AcademicYearForm;