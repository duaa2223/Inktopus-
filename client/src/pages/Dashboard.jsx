import { useState, useEffect } from 'react';
import PublisherApplications from '../components/tapDash/PublisherAppDash';
import AcademicSection from '../components/tapDash/AcademicSection';
import { Users, BookOpen, School, Layout, BarChart2, FileText } from 'lucide-react';
import ContentManagementTab  from '../components/tapDash/ContentTap'
import StatsDashboardTab from '../components/tapDash/StatsTab'
import UserManagementTab from '../components/tapDash/UserTab'
const Tab = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? 'bg-[#8D493A] text-[#F8EDE3] shadow-lg'
        : 'bg-[#D0B8A8]/70 text-[#8D493A] hover:bg-[#DFD3C3] hover:shadow-md'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Card = ({ children, title, description, className = '' }) => (
  <div className={`bg-[#F8EDE3]/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
    <h3 className="text-xl font-bold text-[#8D493A] mb-1">{title}</h3>
    {description && <p className="text-[#8D493A]/80 text-sm mb-4">{description}</p>}
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'default', className = '' }) => (
  <button
    className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
      variant === 'destructive'
        ? 'bg-red-500/90 text-[#F8EDE3] hover:bg-red-600 shadow-md hover:shadow-lg'
        : 'bg-[#8D493A]/90 text-[#F8EDE3] hover:bg-[#8D493A] shadow-md hover:shadow-lg'
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAcademicYearModal, setShowAcademicYearModal] = useState(false);
  const [collegeData, setCollegeData] = useState({
    name: '',
    nameAr: '',
    imageUrl: '',
    description: '',
  });

  const [academicYearData, setAcademicYearData] = useState({
    name: '',
    nameAr: '',
    imageUrl: '',
    description: '',
    college: '',
    order: '',
  });

  const [showSpecializationModal, setShowSpecializationModal] = useState(false);
const [specializationData, setSpecializationData] = useState({
  name: '',
  nameAr: '',
  description: '',
  college: '',
});

const handleSpecializationChange = (e) => {
  const { name, value } = e.target;
  setSpecializationData({ ...specializationData, [name]: value });
};


  const handleAcademicYearChange = (e) => {
    const { name, value } = e.target;
    setAcademicYearData({ ...academicYearData, [name]: value });
  };
    
  const handleSpecializationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/specializations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(specializationData),
      });
      if (response.ok) {
        const newSpecialization = await response.json();
        console.log('Specialization added:', newSpecialization);
        setShowSpecializationModal(false);
        fetchData(); // تحديث البيانات لعرض التخصص الجديد
      } else {
        const errorData = await response.json();
        console.error('Error adding specialization:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  



const handleAcademicYearSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/academic-years', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(academicYearData),
    });
    if (response.ok) {
      const newAcademicYear = await response.json();
      console.log('Academic year added:', newAcademicYear);
      setShowAcademicYearModal(false);
      fetchData(); // تحديث البيانات لعرض السنة الأكاديمية الجديدة
    } else {
      const errorData = await response.json();
      console.error('Error adding academic year:', errorData.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collegeData),
      });
      if (response.ok) {
        const newCollege = await response.json();
        console.log('College added:', newCollege);
        // يمكنك تحديث الحالة الخاصة بالكلية هنا أو إغلاق النموذج
        setShowModal(false);
        // يمكنك استدعاء fetchData() لجلب البيانات المحدثة
      } else {
        const errorData = await response.json();
        console.error('Error adding college:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      // استرجاع المستخدمين من الـ API
      const usersResponse = await fetch('http://localhost:5000/api/users/users');
      const usersData = await usersResponse.json();
      setUsers(usersData); // تحديث حالة المستخدمين بالبيانات المسترجعة
  
      // استرجاع الكليات
      const collegesResponse = await fetch('http://localhost:5000/api/colleges');
      const collegesData = await collegesResponse.json();
      setColleges(collegesData); // تحديث حالة الكليات
  
      // // استرجاع الأعوام الأكاديمية
      // const academicYearsResponse = await fetch('http://localhost:5000/api/academicYears');
      // const academicYearsData = await academicYearsResponse.json();
      // setAcademicYears(academicYearsData); // تحديث حالة الأعوام الأكاديمية
  
      // استرجاع التخصصات
      const specializationsResponse = await fetch('http://localhost:5000/api/specializations');
      const specializationsData = await specializationsResponse.json();
      setSpecializations(specializationsData); // تحديث حالة التخصصات
  
      // استرجاع المحتوى
      const contentResponse = await fetch('http://localhost:5000/api/content/contents');
      const contentData = await contentResponse.json();
      setContent(contentData); // تحديث حالة المحتوى
  
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };
  const handleUserStatusUpdate = async (userId, isActive) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/users/${userId}/toggle-activation`,
        {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to update user status');
      }
  
      const data = await response.json();
      console.log('Status update successful:', data);
      
      // تحديث البيانات بعد نجاح العملية
      await fetchData();
  
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const handleContentDelete = async (contentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/content/contents/del/${contentId}`, {
        method: 'DELETE',
        credentials: 'include', // مهم لإرسال الكوكيز
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete content');
      }
  
      const data = await response.json();
      console.log('Content deleted successfully:', data);
      
      // تحديث البيانات بعد نجاح عملية الحذف
      await fetchData();
  
    } catch (error) {
      console.error('Error deleting content:', error);
      // إضافة رسالة خطأ للمستخدم
      if (error.response) {
        alert(error.response.data.message || 'Error deleting content');
      } else {
        alert('Network error occurred');
      }
    }
  };

  if (loading) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3]">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen bg-[#F8EDE3] text-red-500">{error}</div>;



 const tabIcons = {
    users: <Users className="w-5 h-5" />,
    'publisher-apps': <FileText className="w-5 h-5" />,
    academic: <School className="w-5 h-5" />,
    content: <BookOpen className="w-5 h-5" />,
    stats: <BarChart2 className="w-5 h-5" />
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagementTab users={users} onStatusUpdate={handleUserStatusUpdate} />;
        // return (
        //   <Card title="User Management" description="Manage user accounts and roles">
        //     <div className="overflow-x-auto rounded-lg">
        //       <table className="w-full">
        //         <thead>
        //           <tr className="bg-[#D0B8A8]/50">
        //             <th className="p-3 text-left text-[#8D493A]">Username</th>
        //             <th className="p-3 text-left text-[#8D493A]">Email</th>
        //             <th className="p-3 text-left text-[#8D493A]">Role</th>
        //             <th className="p-3 text-left text-[#8D493A]">Status</th>
        //             <th className="p-3 text-left text-[#8D493A]">Actions</th>
        //           </tr>
        //         </thead>
        //         <tbody className="divide-y divide-[#D0B8A8]/30">
        //           {users.map((user) => (
        //             <tr key={user._id} className="hover:bg-[#DFD3C3]/20 transition-colors">
        //               <td className="p-3">{user.username}</td>
        //               <td className="p-3">{user.email}</td>
        //               <td className="p-3">{user.role}</td>
        //               <td className="p-3">
        //                 <span className={`px-2 py-1 rounded-full text-xs ${
        //                   user.isActivated 
        //                     ? 'bg-green-100 text-green-800' 
        //                     : 'bg-red-100 text-red-800'
        //                 }`}>
        //                   {user.isActivated ? 'Active' : 'Inactive'}
        //                 </span>
        //               </td>
        //               <td className="p-3">
        //                 <Button
        //                   onClick={() => handleUserStatusUpdate(user._id, !user.isActivated)}
        //                   variant={user.isActivated ? "destructive" : "default"}
        //                   className="text-sm"
        //                 >
        //                   {user.isActivated ? 'Deactivate' : 'Activate'}
        //                 </Button>
        //               </td>
        //             </tr>
        //           ))}
        //         </tbody>
        //       </table>
        //     </div>
        //   </Card>
        // );
      case 'publisher-apps':
        return <PublisherApplications />;
        case 'academic':
          return <AcademicSection />;

          case 'content':
            return <ContentManagementTab content={content} onDelete={handleContentDelete} />;
          
          case 'stats':
            return <StatsDashboardTab stats={{ users, content, colleges }} />;

      // case 'content':
      //   return (
      //     <Card title="Content Management" description="Manage books and articles">
      //       <div className="overflow-x-auto">
      //         <table className="w-full">
      //           <thead>
      //             <tr className="bg-[#D0B8A8] text-[#8D493A]">
      //               <th className="p-2">Title</th>
      //               <th className="p-2">Type</th>
      //               <th className="p-2">Author</th>
      //               <th className="p-2">College</th>
      //               <th className="p-2">Actions</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             {content.map((item) => (
      //               <tr key={item._id} className="border-b border-[#D0B8A8]">
      //                 <td className="p-2">{item.title}</td>
      //                 <td className="p-2">{item.content_type}</td>
      //                 <td className="p-2">{item.author}</td>
      //                 <td className="p-2">{item.college.name}</td>
      //                 <td className="p-2">
      //                   <Button
      //                     onClick={() => handleContentDelete(item._id)}
      //                     variant="destructive"
      //                   >
      //                     Delete
      //                   </Button>
      //                 </td>
      //               </tr>
      //             ))}
      //           </tbody>
      //         </table>
      //       </div>
      //     </Card>
      //   );
        // case 'stats':
        //   return (
        //     <div className="space-y-6">
        //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        //         <Card className="text-center">
        //           <Users className="w-8 h-8 text-[#8D493A] mx-auto mb-2" />
        //           <div className="text-3xl font-bold text-[#8D493A]">{users.length}</div>
        //           <div className="text-[#8D493A]/70">Total Users</div>
        //         </Card>
        //         <Card className="text-center">
        //           <BookOpen className="w-8 h-8 text-[#8D493A] mx-auto mb-2" />
        //           <div className="text-3xl font-bold text-[#8D493A]">{content.length}</div>
        //           <div className="text-[#8D493A]/70">Total Content</div>
        //         </Card>
        //         <Card className="text-center">
        //           <School className="w-8 h-8 text-[#8D493A] mx-auto mb-2" />
        //           <div className="text-3xl font-bold text-[#8D493A]">{colleges.length}</div>
        //           <div className="text-[#8D493A]/70">Total Colleges</div>
        //         </Card>
        //         <Card className="text-center">
        //           <Layout className="w-8 h-8 text-[#8D493A] mx-auto mb-2" />
        //           <div className="text-3xl font-bold text-[#8D493A]">
        //             {content.filter(item => item.content_type === 'book').length}
        //           </div>
        //           <div className="text-[#8D493A]/70">Total Books</div>
        //         </Card>
        //       </div>
        //     </div>
        //   );
        default:
          return null;
      }
    };
  
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-20 bg-[#F8EDE3]/80 backdrop-blur-sm rounded-xl p-4 shadow-lg ">
            <div className="flex flex-col items-center space-y-6">
              {Object.entries(tabIcons).map(([key, icon]) => (
                <button
                  key={key}
                  className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    activeTab === key 
                      ? 'bg-[#8D493A] text-[#F8EDE3] shadow-lg' 
                      : 'text-[#8D493A] hover:bg-[#D0B8A8]/50'
                  }`}
                  onClick={() => setActiveTab(key)}
                  title={key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ')}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-[#F8EDE3]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h1 className="text-3xl font-bold text-[#8D493A] mb-6">Admin Dashboard</h1>
              <div className="transition-all duration-300">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;