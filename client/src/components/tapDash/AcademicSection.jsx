
import  { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Edit, Trash, Plus, School, BookOpen, GraduationCap } from 'lucide-react';
import axios from 'axios';
import SpecializationForm from '../Form/SpecializationForm';
import AcademicYearForm from '../Form/AcademicYearForm';
import CollageForm from '../Form/CollegeForm';
import Swal from 'sweetalert2';
const AcademicSection = () => {
  const [expandedCollege, setExpandedCollege] = useState(null);
  const [expandedYear, setExpandedYear] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState({});
  const [specializationsMap, setSpecializationsMap] = useState({});
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
  const [loading, setLoading] = useState({
    colleges: false,
    years: false,
    specializations: false
  });
  const [error, setError] = useState({
    colleges: null,
    years: null,
    specializations: null
  });

  const fetchColleges = async () => {
    setLoading(prev => ({ ...prev, colleges: true }));
    try {
      const response = await axios.get('http://localhost:5000/api/colleges');
      setColleges(Array.isArray(response.data) ? response.data : []);
      setError(prev => ({ ...prev, colleges: null }));
    } catch (error) {
      console.error('Error fetching colleges:', error);
      const errorMessage = error.response?.data?.message || 'Failed to fetch colleges';
      setError(prev => ({ ...prev, colleges: errorMessage }));
      setColleges([]);
    } finally {
      setLoading(prev => ({ ...prev, colleges: false }));
    }
  };

 

  const fetchAcademicYears = async (collegeId) => {
    if (!collegeId) return;
    
    setLoading(prev => ({ ...prev, years: true }));
    try {
      const response = await axios.get(`http://localhost:5000/api/academic-years/${collegeId}`);
      
      // Sort the academic years by order before setting state
      const sortedYears = Array.isArray(response.data) 
        ? [...response.data].sort((a, b) => a.order - b.order)
        : [];
      
      setAcademicYears(prevYears => ({
        ...prevYears,
        [collegeId]: sortedYears
      }));
      setError(prev => ({ ...prev, years: null }));
    } catch (error) {
      console.error('Error fetching academic years:', error);
      const errorMessage = error.response?.data?.message || 'Failed to fetch academic years';
      setError(prev => ({ ...prev, years: errorMessage }));
      setAcademicYears(prev => ({ ...prev, [collegeId]: [] }));
    } finally {
      setLoading(prev => ({ ...prev, years: false }));
    }
  };

  const fetchSpecializations = async (collegeId, yearId) => {
    if (!collegeId || !yearId) return;
    
    setLoading(prev => ({ ...prev, specializations: true }));
    try {
      const response = await axios.get(`http://localhost:5000/api/specializations/college/${collegeId}/year/${yearId}`);
  
      if (response.data) {
        setSpecializationsMap(prev => ({
          ...prev,
          [`${collegeId}-${yearId}`]: Array.isArray(response.data) ? response.data : []
        }));
        setError(prev => ({ ...prev, specializations: null }));
      }
    } catch (error) {
      console.error('Error fetching specializations:', error);
      const errorMessage = error.response?.data?.message || 'Failed to fetch specializations';
      setError(prev => ({ ...prev, specializations: errorMessage }));
      setSpecializationsMap(prev => ({
        ...prev,
        [`${collegeId}-${yearId}`]: []
      }));
    } finally {
      setLoading(prev => ({ ...prev, specializations: false }));
    }
  };
  
  useEffect(() => {
    fetchColleges();
  }, []);

  useEffect(() => {
    if (expandedCollege) {
      fetchAcademicYears(expandedCollege);
    }
  }, [expandedCollege]);

  useEffect(() => {
    if (expandedCollege && expandedYear) {
      fetchSpecializations(expandedCollege, expandedYear);
    }
  }, [expandedCollege, expandedYear]);

  const handleCollegeSubmit = async (formData) => {
    try {
      const url = `http://localhost:5000/api/colleges${editMode.type === 'college' ? `/${editMode.id}` : ''}`;
      const method = editMode.type === 'college' ? 'PUT' : 'POST';
  
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save college');
      }
  
      await Swal.fire({
        title: `College ${editMode.type === 'college' ? 'updated' : 'created'}!`,
        icon: 'success',
        confirmButtonColor: '#72392C',
      });
  
      await fetchColleges();
      setShowCollegeModal(false);
      setEditMode({ type: null, id: null, data: null });
    } catch (error) {
      console.error('Error saving college:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Failed to save college. Please try again.',
        icon: 'error',
        confirmButtonColor: '#72392C',
      });
    }
  };
  
  const handleYearSubmit = async (formData) => {
    try {
      const url = `http://localhost:5000/api/academic-years${editMode.type === 'year' ? `/${editMode.id}` : ''}`;
      const method = editMode.type === 'year' ? 'PUT' : 'POST';
  
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to save academic year');
      }
  
      await Swal.fire({
        title: `Academic year ${editMode.type === 'year' ? 'updated' : 'created'}!`,
        icon: 'success',
        confirmButtonColor: '#72392C',
      });
  
      if (expandedCollege) {
        await fetchAcademicYears(expandedCollege);
      }
  
      setShowYearModal(false);
      setEditMode({ type: null, id: null, data: null });
    } catch (error) {
      console.error('Error saving academic year:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Failed to save academic year. Please try again.',
        icon: 'error',
        confirmButtonColor: '#72392C',
      });
    }
  };
  
  const handleSpecializationSubmit = async (formData) => {
    try {
      const url = `http://localhost:5000/api/specializations${editMode.type === 'specialization' ? `/${editMode.id}` : ''}`;
      const method = editMode.type === 'specialization' ? 'PUT' : 'POST';
  
      await axios({
        method,
        url,
        data: formData
      });
  
      await Swal.fire({
        title: `Specialization ${editMode.type === 'specialization' ? 'updated' : 'created'}!`,
        icon: 'success',
        confirmButtonColor: '#72392C',
      });
  
      if (expandedCollege && expandedYear) {
        await fetchSpecializations(expandedCollege, expandedYear);
      }
  
      setShowSpecModal(false);
      setEditMode({ type: null, id: null, data: null });
    } catch (error) {
      console.error('Error saving specialization:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Failed to save specialization. Please try again.',
        icon: 'error',
        confirmButtonColor: '#72392C',
      });
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await Swal.fire({
        title: `Are you sure you want to delete this ${type}?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#72392C',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      const endpoint = type === 'college'
        ? `college/${id}`
        : type === 'year'
          ? `academic-years/${id}`
          : `specializations/${id}`;
  
      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete ${type}`);
      }
  
      await Swal.fire({
        title: `${type} deleted!`,
        text: 'The item has been deleted.',
        icon: 'success',
        confirmButtonColor: '#72392C',
      });
  
      if (type === 'college') {
        await fetchColleges();
      } else if (type === 'year' && expandedCollege) {
        await fetchAcademicYears(expandedCollege);
      } else if (type === 'specialization' && expandedCollege && expandedYear) {
        await fetchSpecializations(expandedCollege, expandedYear);
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      await Swal.fire({
        title: `Failed to delete ${type}`,
        text: 'Please try again.',
        icon: 'error',
        confirmButtonColor: '#72392C',
      });
    }
  };
  const handleAddSpecialization = (college, year) => {
    setSelectedCollege(college);
    setSelectedYear(year);
    setShowSpecModal(true);
  };


const renderSpecializations = (collegeId, yearId) => {
  const key = `${collegeId}-${yearId}`;
  const specializations = specializationsMap[key] || [];

  if (loading.specializations) {
    return <div className="text-[#72392C] p-2 sm:p-4">Loading specializations...</div>;
  }

  if (!Array.isArray(specializations) || specializations.length === 0) {
    return <div className="text-[#72392C] p-2 sm:p-4">There are no specializations</div>;
  }

  if (error.specializations) {
    return <div className="text-red-600 p-2 sm:p-4">Error loading specializations. Please try again.</div>;
  }

  return (
    <div className="ml-2 sm:ml-8 p-2 sm:p-4 border-l-2 border-[#CCAB9A]">
      {specializations.map(spec => (
        <div key={spec._id} className="bg-white rounded-lg p-2 sm:p-3 mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-[#F6EEE6] transition-colors gap-2">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <GraduationCap size={20} className="text-[#72392C] min-w-[20px]" />
            <span className="text-[#72392C] text-sm sm:text-base break-words">{spec.name}</span>
            {spec.nameAr && <span className="text-xs sm:text-sm text-[#72392C] break-words">({spec.nameAr})</span>}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                setEditMode({ 
                  type: 'specialization', 
                  id: spec._id, 
                  data: {
                    ...spec,
                    college: collegeId,
                    academic_year: yearId
                  }
                });
                setSelectedCollege(colleges.find(c => c._id === collegeId));
                setSelectedYear({ _id: yearId });
                setShowSpecModal(true);
              }}
              className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded transition-colors"
            >
              <Edit size={16} sm={18} className="text-[#72392C]" />
            </button>
            <button
              onClick={() => handleDelete('specialization', spec._id)}
              className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded text-red-600 transition-colors"
            >
              <Trash size={16} sm={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderAcademicYears = (collegeId) => {
  const years = academicYears[collegeId] || [];

  if (loading.years) {
    return <div className="text-[#72392C] p-2 sm:p-4">Loading academic years...</div>;
  }

  if (!years || years.length === 0) {
    return <div className="text-[#72392C] p-2 sm:p-4">There are no years of study</div>;
  }

  if (error.years) {
    return <div className="text-red-600 p-2 sm:p-4">Error loading academic years. Please try again.</div>;
  }

  return years.map(year => (
    <div key={year._id} className="bg-[#F6EEE6] rounded-lg mb-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3 gap-2">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button onClick={() => setExpandedYear(expandedYear === year._id ? null : year._id)}>
            {expandedYear === year._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
          <BookOpen size={20} className="text-[#72392C]" />
          <span className="text-[#72392C] text-sm sm:text-base break-words">{year.name}</span>
          {year.nameAr && <span className="text-xs sm:text-sm text-[#72392C] break-words">({year.nameAr})</span>}
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => handleAddSpecialization(colleges.find(c => c._id === collegeId), year)}
            className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded transition-colors"
            title="Add Specialization"
          >
            <Plus size={16} sm={18} className="text-[#72392C]" />
          </button>
          <button
            onClick={() => {
              setEditMode({
                type: 'year',
                id: year._id,
                data: {
                  ...year,
                  college: collegeId
                }
              });
              setSelectedCollege(colleges.find(c => c._id === collegeId));
              setShowYearModal(true);
            }}
            className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded transition-colors"
          >
            <Edit size={16} sm={18} className="text-[#72392C]" />
          </button>
          <button
            onClick={() => handleDelete('year', year._id)}
            className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded text-red-600 transition-colors"
          >
            <Trash size={16} sm={18} />
          </button>
        </div>
      </div>
      {expandedYear === year._id && renderSpecializations(collegeId, year._id)}
    </div>
  ));
};

return (
  <div className="space-y-4 sm:space-y-6 p-2 sm:p-4">
    <h2 className="text-xl sm:text-2xl font-semibold text-[#8D493A] mb-4 sm:mb-6">Academic department management</h2>

    <button
      className="w-full mb-2 sm:mb-4 p-2 sm:p-3 bg-[#72392C] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#8D493A] transition-colors text-sm sm:text-base"
      onClick={() => setShowCollegeModal(true)}
    >
      <Plus size={18} sm={20} />
      Add new college
    </button>

    {loading.colleges ? (
      <div className="text-[#72392C] p-2 sm:p-4">Loading colleges...</div>
    ) : error.colleges ? (
      <div className="text-red-600 p-2 sm:p-4">Error loading colleges. Please try again.</div>
    ) : colleges.length === 0 ? (
      <div className="text-[#72392C] p-2 sm:p-4">There are no colleges</div>
    ) : (
      colleges.map(college => (
        <div key={college._id} className="bg-white rounded-lg shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-4 hover:bg-[#F6EEE6] transition-colors gap-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={() => setExpandedCollege(expandedCollege === college._id ? null : college._id)}>
                {expandedCollege === college._id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              <School size={20} className="text-[#72392C]" />
              <span className="font-medium text-[#72392C] text-sm sm:text-base break-words">{college.name}</span>
              {college.nameAr && <span className="text-xs sm:text-sm text-[#72392C] break-words">({college.nameAr})</span>}
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  setSelectedCollege(college);
                  setShowYearModal(true);
                }}
                className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded transition-colors"
                title="Add an academic year"
              >
                <Plus size={16} sm={18} className="text-[#72392C]" />
              </button>
              <button
                onClick={() => {
                  setEditMode({ type: 'college', id: college._id, data: college });
                  setShowCollegeModal(true);
                }}
                className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded transition-colors"
              >
                <Edit size={16} sm={18} className="text-[#72392C]" />
              </button>
              <button
                onClick={() => handleDelete('college', college._id)}
                className="p-1 sm:p-2 hover:bg-[#EDE1D7] rounded text-red-600 transition-colors"
              >
                <Trash size={16} sm={18} />
              </button>
            </div>
          </div>

          {expandedCollege === college._id && (
            <div className="ml-2 sm:ml-8 p-2 sm:p-4 border-l-2 border-[#CCAB9A]">
              {renderAcademicYears(college._id)}
            </div>
          )}
        </div>
      ))
    )}

    {/* Modal components remain unchanged */}
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

    {showYearModal && selectedCollege && (
      <AcademicYearForm
        colleges={[selectedCollege]}
        editData={editMode.type === 'year' ? editMode.data : null}
        onClose={() => {
          setShowYearModal(false);
          setSelectedCollege(null);
          setEditMode({ type: null, id: null, data: null });
        }}
        onSubmit={handleYearSubmit}
      />
    )}

    {showSpecModal && selectedCollege && (
      <SpecializationForm
        colleges={[selectedCollege]}
        editData={editMode.type === 'specialization' ? editMode.data : null}
        onClose={() => {
          setShowSpecModal(false);
          setSelectedCollege(null);
          setSelectedYear(null);
          setEditMode({ type: null, id: null, data: null });
        }}
        onSubmit={handleSpecializationSubmit}
      />
    )}
  </div>
);
};

export default AcademicSection;