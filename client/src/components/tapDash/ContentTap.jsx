import React from 'react';

const ContentManagementTab = ({ content = [], onDelete }) => {
  return (
    <div className="space-y-6">
    
        <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Content Management</h2>
        
        <div className="flex justify-between mb-6">
          <select className="px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none">
            <option value="all">All Types</option>
            <option value="book">Books</option>
            <option value="article">Articles</option>
          </select>
          
          <input
            type="search"
            placeholder="Search by title or author"
            className="flex-1 mx-4 px-4 py-2 rounded-lg border border-[#CCAB9A] bg-white text-[#72392C] outline-none"
          />
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#EDE1D7] border-b border-[#CCAB9A]">
                <th className="px-6 py-3 text-left text-[#72392C] font-medium">TITLE</th>
                <th className="px-6 py-3 text-left text-[#72392C] font-medium">TYPE</th>
                <th className="px-6 py-3 text-left text-[#72392C] font-medium">AUTHOR</th>
                <th className="px-6 py-3 text-left text-[#72392C] font-medium">COLLEGE</th>
                <th className="px-6 py-3 text-left text-[#72392C] font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE1D7]">
              {content && content.map((item) => (
                <tr key={item._id} className="hover:bg-[#F6EEE6] transition-colors">
                  <td className="px-6 py-4 text-[#72392C]">{item.title}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-[#EDE1D7] text-[#72392C]">
                      {item.content_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#72392C]">{item.author}</td>
                  <td className="px-6 py-4 text-[#72392C]">{item.college?.name}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onDelete(item._id)}
                      className="px-4 py-2 rounded-lg bg-[#72392C] text-white hover:bg-[#8D493A] transition-colors"
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
  );
};

export default ContentManagementTab;