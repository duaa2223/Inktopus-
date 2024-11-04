import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Edit2, Trash2, Book, FileText, Eye, Download, Video } from 'lucide-react';
import axios from 'axios';

const PublishedContent = () => {
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingContent, setEditingContent] = useState(null);

  useEffect(() => {
    fetchPublisherContent();
  }, []);

  const fetchPublisherContent = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/content/publisher', { withCredentials: true });
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching publisher content:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.titleAr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item) => {
    setEditingContent(item);
  };

// const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this content?')) {
//         try {
//             const token = localStorage.getItem('token'); // أو استخدم أي طريقة تحفظ بها التوكن
//             await axios.put(`http://localhost:5000/api/content/contents/del/${id}`, null, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // تأكد من إرسال التوكن هنا
//                 },
//                 withCredentials: true, // تأكد من إضافة هذا الخيار
//             });
//             fetchPublisherContent(); // Refresh the content list
//         } catch (error) {
//             console.error('Error deleting content:', error);
//         }
//     }
// };
const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this content?')) {
      try {
          const token = localStorage.getItem('token');
          await axios.delete(`http://localhost:5000/api/content/contents/del/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
          });
          fetchPublisherContent(); // تحديث القائمة بعد الحذف
      } catch (error) {
          console.error('Error deleting content:', error);
          // إضافة معالجة أفضل للأخطاء
          if (error.response) {
              alert(error.response.data.message || 'Error deleting content');
          } else {
              alert('Network error occurred');
          }
      }
  }
};

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/content/contents/${editingContent._id}`, editingContent, { withCredentials: true });
      setEditingContent(null);
      fetchPublisherContent(); // Refresh the content list
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <div className="bg-[#DFD3C3] rounded-lg shadow-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#8D493A]">Published Content</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8D493A]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <AnimatePresence>
        {filteredContent.map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#F8EDE3] rounded-lg p-4 shadow mb-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-[#8D493A]">{item.titleAr}</p>
                <p className="text-sm text-gray-600">{item.author}</p>
                <p className="mt-2">{item.description}</p>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEdit(item)}
                  className="p-2 bg-[#D0B8A8] rounded-full"
                >
                  <Edit2 size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(item._id)}
                  className="p-2 bg-[#8D493A] text-white rounded-full"
                >
                  <Trash2 size={16} />
                </motion.button>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              {item.content_type === 'book' ? <Book size={20} /> : <FileText size={20} />}
              <span className="text-sm">{item.content_type}</span>
              <Eye size={20} />
              <span className="text-sm">{item.views} views</span>
              <Download size={20} />
              <span className="text-sm">{item.downloads} downloads</span>
              {item.promo_videos.length > 0 && <Video size={20} />}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {editingContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#F8EDE3] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Edit Content</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                value={editingContent.title}
                onChange={(e) => setEditingContent({...editingContent, title: e.target.value})}
                placeholder="Title"
                className="w-full p-2 border rounded bg-white"
                required
              />
              <input
                value={editingContent.titleAr}
                onChange={(e) => setEditingContent({...editingContent, titleAr: e.target.value})}
                placeholder="العنوان بالعربية"
                className="w-full p-2 border rounded bg-white"
                required
              />
              <input
                value={editingContent.author}
                onChange={(e) => setEditingContent({...editingContent, author: e.target.value})}
                placeholder="Author"
                className="w-full p-2 border rounded bg-white"
                required
              />
              <textarea
                value={editingContent.description}
                onChange={(e) => setEditingContent({...editingContent, description: e.target.value})}
                placeholder="Description"
                className="w-full p-2 border rounded bg-white"
              ></textarea>
              <input
                type="number"
                value={editingContent.price}
                onChange={(e) => setEditingContent({...editingContent, price: e.target.value})}
                placeholder="Price"
                className="w-full p-2 border rounded bg-white"
                required
              />
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#8D493A] text-white px-4 py-2 rounded"
                >
                  Update
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setEditingContent(null)}
                  className="bg-[#D0B8A8] text-[#8D493A] px-4 py-2 rounded"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PublishedContent;