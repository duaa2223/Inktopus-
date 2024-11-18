
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormModal,
  Button
} from '../components/SharedFormComponant/Forms'; // تأكد من تحديث المسار الصحيح للمكونات

const PublisherApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    bio: '',
    yearsOfExperience: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/application/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      const data = await response.json();
      setSuccess(true);
      setTimeout(() => {
        onClose();
       
      }, 2000);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message || 'An error occurred while submitting your application');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <FormModal onClose={onClose}>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#8D493A] mb-4">Success!</h2>
          <p className="text-sm text-gray-600 mb-4">
            Application submitted successfully! Redirecting...
          </p>
        </div>
      </FormModal>
    );
  }

  return (
    <FormModal onClose={onClose}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#8D493A]">Publisher Application</h2>
        <Button 
          variant="secondary" 
          onClick={onClose}
          className="!px-2 !py-1"
        >
          ✕
        </Button>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100/80 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel required>Bio</FormLabel>
          <FormTextarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tell us about your publishing experience..."
          />
        </FormGroup>

        <FormGroup>
          <FormLabel required>Years of Experience</FormLabel>
          <FormInput
            type="number"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
            min="0"
            placeholder="Enter your years of experience"
          />
        </FormGroup>

        <div className="flex gap-3 mt-6">
          <Button
            variant="secondary"
            type="button"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="flex-1"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </FormModal>
  );
};

export default PublisherApplicationForm;