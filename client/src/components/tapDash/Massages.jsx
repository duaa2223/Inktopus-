// import  { useState, useEffect } from 'react';
// import { Search, ChevronLeft, ChevronRight, Mail } from 'lucide-react';

// const Card = ({ children, className }) => (
//   <div className={`rounded-lg shadow-sm border border-[#D0B8A8] ${className}`}>
//     {children}
//   </div>
// );

// const MessagesTab = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState('date');
//   const [sortOrder, setSortOrder] = useState('desc');
//   const messagesPerPage = 5;

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/contact/contact-messages');
//       if (!response.ok) throw new Error('Failed to fetch messages');
//       const data = await response.json();
//       setMessages(data);
//     } catch (err) {
//       setError('Error fetching messages');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter and sort messages
//   const filteredMessages = messages.filter(message =>
//     message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     message.message.toLowerCase().includes(searchTerm.toLowerCase())
//   ).sort((a, b) => {
//     const order = sortOrder === 'asc' ? 1 : -1;
//     if (sortBy === 'date') {
//       return order * (new Date(b.date) - new Date(a.date));
//     }
//     return order * (a[sortBy] < b[sortBy] ? -1 : 1);
//   });

//   // Pagination
//   const indexOfLastMessage = currentPage * messagesPerPage;
//   const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
//   const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);
//   const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString('ar-SA', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   if (loading) return (
//     <div className="flex items-center justify-center h-64">
//       <div className="text-[#8D493A]">جاري التحميل...</div>
//     </div>
//   );

//   if (error) return (
//     <div className="flex items-center justify-center h-64">
//       <div className="text-red-500">{error}</div>
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-[#8D493A]">الرسائل الواردة</h2>
//         <div className="flex items-center gap-4">
//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="بحث..."
//               className="pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-[#D0B8A8] focus:outline-none focus:border-[#8D493A] text-[#8D493A]"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 w-5 h-5 text-[#8D493A]" />
//           </div>
          
//           {/* Sort Controls */}
//           <select
//             className="px-4 py-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A]"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="date">التاريخ</option>
//             <option value="name">الاسم</option>
//             <option value="subject">الموضوع</option>
//           </select>
          
//           <button
//             className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A]"
//             onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//           >
//             {sortOrder === 'asc' ? '↑' : '↓'}
//           </button>
//         </div>
//       </div>

//       {/* Messages List */}
//       <div className="space-y-4">
//         {currentMessages.map((message) => (
//           <Card key={message._id} className="p-6 bg-white/90 hover:shadow-lg transition-shadow">
//             <div className="flex items-start justify-between">
//               <div className="space-y-2">
//                 <h3 className="text-xl font-semibold text-[#8D493A]">{message.subject}</h3>
//                 <p className="text-sm text-[#8D493A]/70">
//                   من: {message.name} ({message.email})
//                 </p>
//                 <p className="text-[#8D493A]/80 mt-2">{message.message}</p>
//               </div>
//               <div className="text-sm text-[#8D493A]/60 ml-4 text-left">
//                 {formatDate(message.date)}
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 mt-6">
//         <button
//           className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A] disabled:opacity-50"
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
        
//         <span className="px-4 py-2 text-[#8D493A]">
//           {currentPage} / {totalPages}
//         </span>
        
//         <button
//           className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A] disabled:opacity-50"
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MessagesTab;


import { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-sm border border-[#D0B8A8] ${className}`}>
    {children}
  </div>
);

const MessagesTab = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const messagesPerPage = 5;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact/contact-messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError('Error fetching messages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8D493A',
        cancelButtonColor: '#D0B8A8',
        confirmButtonText: 'Yes, delete it!',
        background: '#fff',
        customClass: {
          title: 'text-[#8D493A]',
          content: 'text-[#8D493A]',
          popup: 'rounded-lg'
        }
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:5000/api/contact/contact-messages/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete message');
        
        // Remove message from state
        setMessages(messages.filter(message => message._id !== id));
        
        // Show success message
        await Swal.fire({
          title: 'Deleted!',
          text: 'Message has been deleted successfully.',
          icon: 'success',
          confirmButtonColor: '#8D493A',
          background: '#fff',
          customClass: {
            title: 'text-[#8D493A]',
            content: 'text-[#8D493A]',
            popup: 'rounded-lg'
          }
        });
      }
    } catch (err) {
      // Show error message
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the message.',
        icon: 'error',
        confirmButtonColor: '#8D493A',
        background: '#fff',
        customClass: {
          title: 'text-[#8D493A]',
          content: 'text-[#8D493A]',
          popup: 'rounded-lg'
        }
      });
      console.error(err);
    }
  };

  // Filter and sort messages
  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'date') {
      return order * (new Date(b.date) - new Date(a.date));
    }
    return order * (a[sortBy] < b[sortBy] ? -1 : 1);
  });

  // Pagination
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-[#8D493A]">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-red-500">{error}</div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#8D493A]">Incoming Messages</h2>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg bg-white/50 border border-[#D0B8A8] focus:outline-none focus:border-[#8D493A] text-[#8D493A]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-[#8D493A]" />
          </div>
          
          {/* Sort Controls */}
          <select
            className="px-4 py-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="subject">Subject</option>
          </select>
          
          <button
            className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A]"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {currentMessages.map((message) => (
          <Card key={message._id} className="p-6 bg-white/90 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#8D493A]">{message.subject}</h3>
                <p className="text-sm text-[#8D493A]/70">
                  From: {message.name} ({message.email})
                </p>
                <p className="text-[#8D493A]/80 mt-2">{message.message}</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="text-sm text-[#8D493A]/60">
                  {formatDate(message.date)}
                </div>
                <button 
                  onClick={() => deleteMessage(message._id)}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A] disabled:opacity-50"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <span className="px-4 py-2 text-[#8D493A]">
          {currentPage} / {totalPages}
        </span>
        
        <button
          className="p-2 rounded-lg bg-white/50 border border-[#D0B8A8] text-[#8D493A] disabled:opacity-50"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessagesTab;