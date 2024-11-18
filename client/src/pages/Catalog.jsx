
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, Card } from '../components/ui/UIComponents';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
const CatalogPage = () => {
  const { collegeId, academicYearId } = useParams();
  const [contents, setContents] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchContents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/content/college/${collegeId}/year/${academicYearId}`);
        setContents(response.data.contents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contents:', error);
        setError('Failed to load contents. Please try again later.');
        setLoading(false);
      }
    };

    const fetchSpecializations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/specializations/college/${collegeId}/year/${academicYearId}`);
        setSpecializations(response.data); 
      } catch (error) {
        console.error('Error fetching specializations:', error);
      }
    };

    fetchContents();
    fetchSpecializations();
  }, [collegeId, academicYearId]);

  const filteredContents = selectedSpecialization
    ? contents.filter(content => content.specialization === selectedSpecialization)
    : contents;

  const filteredAndSearchedContents = filteredContents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSearchedContents.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="flex justify-center items-center h-screen bg-[#F8EDE3]"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8D493A]"></div></div>;
  if (error) return <div className="text-center py-10 text-[#8D493A] bg-[#F8EDE3]">{error}</div>;

  return (
    <div className=" bg-[#F8EDE3] ">
    <div className="min-h-screen bg-[#F8EDE3] py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-[6rem]">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-[#8D493A]">
          <span className="inline-block transform hover:rotate-12 transition-transform duration-300">📚</span> Learning Resources
        </h1>

        <div className="mb-12 max-w-3xl mx-auto flex gap-4">
          <div className="relative flex-grow">
            <Input
              placeholder="Search for books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-l-full bg-white border-2 border-[#D0B8A8] focus:border-[#8D493A] focus:ring focus:ring-[#D0B8A8] focus:ring-opacity-50 shadow-md transition-all duration-300"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8D493A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full py-3 rounded-r-full bg-[#DFD3C3] border-2 border-[#D0B8A8] text-[#8D493A] focus:outline-none focus:ring focus:ring-[#D0B8A8] focus:ring-opacity-50 transition-colors duration-300"
            >
              <option value="">All</option>
              {specializations.map(specialization => (
                <option key={specialization._id} value={specialization._id}>
                  {specialization.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map(content => (
            <div key={content._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={content.cover_image || '/default-book-cover.jpg'} 
                  alt={content.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-[#DFD3C3]">
                <h3 className="text-xl font-bold text-[#8D493A] mb-2 line-clamp-1">{content.title}</h3>
                <p className="text-[#8D493A] mb-2">By {content.author}</p>
                <p className="text-[#8D493A] mb-2">Content Type: {content.content_type}</p>
                <p className="text-[#8D493A] mb-2">Purchased {content.purchaseCount || 0} times</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-[#8D493A]">${content.price}</span>

                  <Link to={`/book/${content._id}`}>
                    <Button className="bg-[#8D493A] hover:bg-[#D0B8A8] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center group">
                      <span>View Details</span>
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSearchedContents.length > itemsPerPage && (
          <div className="flex justify-center mt-12">
            {[...Array(Math.ceil(filteredAndSearchedContents.length / itemsPerPage))].map((_, index) => (
              <Button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 w-10 h-10 rounded-full font-bold ${
                  currentPage === index + 1
                    ? 'bg-[#8D493A] text-white'
                    : 'bg-[#DFD3C3] text-[#8D493A] hover:bg-[#D0B8A8]'
                } transition-colors duration-300`}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    
    </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
