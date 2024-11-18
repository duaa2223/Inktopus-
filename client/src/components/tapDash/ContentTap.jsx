
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const ContentManagementTab = ({ content = [], onDelete }) => {
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredContent = content.filter((item) => {
    const matchesType = filterType === "all" || item.content_type === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

  const handleDelete = (itemId) => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: "Are you sure you want to delete this item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8D493A',
      cancelButtonColor: '#CCAB9A',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(itemId);
        Swal.fire({
          title: 'Deleted!',
          text: 'The item has been deleted.',
          icon: 'success',
          confirmButtonColor: '#8D493A'
        });
      }
    });
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#8D493A] mb-6">Content Management</h2>

      {/* Responsive filters */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
        >
          <option value="all">All Types</option>
          <option value="book">Books</option>
          <option value="article">Articles</option>
        </select>

        <input
          type="search"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
        />
      </div>

      {/* Responsive table container */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <div className="min-w-[800px]"> {/* Minimum width to prevent squishing */}
          <table className="w-full">
            <thead>
              <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium">TITLE</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium">TYPE</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium">AUTHOR</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium">COLLEGE</th>
                <th className="px-4 md:px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE1D7]">
              {paginatedContent.map((item) => (
                <tr key={item._id} className="hover:bg-[#F6EEE6] transition-colors">
                  <td className="px-4 md:px-6 py-4 text-[#72392C]">{item.title}</td>
                  <td className="px-4 md:px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-[#EDE1D7] text-[#72392C]">
                      {item.content_type}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-[#72392C]">{item.author}</td>
                  <td className="px-4 md:px-6 py-4 text-[#72392C]">{item.college?.name}</td>
                  <td className="px-4 md:px-6 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 md:px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-colors text-sm md:text-base"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive pagination */}
      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === index + 1 
                ? "bg-[#72392C] text-white" 
                : "bg-gray-200 text-gray-700"
            } transition-colors text-sm md:text-base`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentManagementTab;