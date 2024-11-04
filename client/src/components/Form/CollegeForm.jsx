import { useState } from 'react';
import { 
  FormGroup, 
  FormInput, 
  FormTextarea, 
  FormModal,
  Button 
} from '../SharedFormComponant/Forms';

const CollageForm  = ({ onClose, onSubmit, editData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    nameAr: '',
    imageUrl: '',
    description: '',
    ...editData
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormModal onClose={onClose}>
      <h2 className="text-lg font-bold text-[#8D493A] mb-4">
        {editData ? 'Edit Item' : 'Add New Item'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <FormGroup>
          <FormInput
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            name="nameAr"
            placeholder="Arabic Name"
            value={formData.nameAr}
            onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormInput
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <FormTextarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="2"
          />
        </FormGroup>

        <div className="flex justify-end space-x-2 pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            {editData ? 'Save' : 'Add'}
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default CollageForm ;