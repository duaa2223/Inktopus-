
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Pen, Coffee, Book, Feather, User, Plus, Search, BookOpen, Download } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AddContentForm from '../components/Form/ContentForm';
import PublishedContent from '../components/Puplisher/PublishedContent';
import Navbar from '../components/NavBar';
import OrderStatusTracker from '../components/OrderTracker';
import Footer from '../components/Footer';
const TabsList = ({ children }) => (
  <div className="flex flex-wrap bg-white rounded-lg p-1 mb-6 w-full md:w-fit">
    {children}
  </div>
);

const TabsTrigger = ({ value, active, onClick, children }) => (
  <button
    onClick={() => onClick(value)}
    className={`flex items-center px-3 md:px-6 py-2 rounded-md transition-colors flex-1 md:flex-initial justify-center ${
      active ? 'bg-[#8D493A] text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [showAddContent, setShowAddContent] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', { withCredentials: true });
        setUser(response.data);
        
        // Fetch orders
        try {
          const ordersResponse = await axios.get('/api/payment/user-orders', { withCredentials: true });
          setOrders(ordersResponse.data || []);
        } catch (orderErr) {
          console.log('No orders found:', orderErr);
          setOrders([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handlePasswordUpdate = async () => {
    // Password update confirmation
    const result = await Swal.fire({
      title: 'Confirm Password Change',
      text: 'Are you sure you want to change your password?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8D493A',
      cancelButtonColor: '#D0B8A8',
      confirmButtonText: 'Yes, change it!',
      cancelButtonText: 'Cancel',
      background: '#F8EDE3',
      customClass: {
        popup: 'rounded-lg',
        title: 'text-[#8D493A] font-bold',
        content: 'text-gray-600'
      }
    });

    if (result.isConfirmed) {
      try {
        await axios.put('/api/users/users/update-password', {
          currentPassword,
          newPassword,
        }, { withCredentials: true });
        
        setCurrentPassword('');
        setNewPassword('');
        
        // Success message
        Swal.fire({
          title: 'Password Updated!',
          text: 'Your password has been successfully updated.',
          icon: 'success',
          confirmButtonColor: '#8D493A',
          background: '#F8EDE3',
          customClass: {
            popup: 'rounded-lg',
            title: 'text-[#8D493A] font-bold',
            content: 'text-gray-600'
          }
        });
      } catch (error) {
        console.error('Error updating password:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update password. Please try again.',
          icon: 'error',
          confirmButtonColor: '#8D493A',
          background: '#F8EDE3',
          customClass: {
            popup: 'rounded-lg',
            title: 'text-[#8D493A] font-bold',
            content: 'text-gray-600'
          }
        });
      }
    }
  };

  const handleContentDelete = async (contentId) => {
    const result = await Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this content?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8D493A',
      cancelButtonColor: '#D0B8A8',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      background: '#F8EDE3',
      customClass: {
        popup: 'rounded-lg',
        title: 'text-[#8D493A] font-bold',
        content: 'text-gray-600'
      }
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/api/content/${contentId}`);
        Swal.fire({
          title: 'Deleted!',
          text: 'Content has been successfully deleted.',
          icon: 'success',
          confirmButtonColor: '#8D493A',
          background: '#F8EDE3',
          customClass: {
            popup: 'rounded-lg',
            title: 'text-[#8D493A] font-bold',
            content: 'text-gray-600'
          }
        });
        // Refresh content list or update state as needed
      } catch (error) {
        console.error('Error deleting content:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete content. Please try again.',
          icon: 'error',
          confirmButtonColor: '#8D493A',
          background: '#F8EDE3',
          customClass: {
            popup: 'rounded-lg',
            title: 'text-[#8D493A] font-bold',
            content: 'text-gray-600'
          }
        });
      }
    }
  };

  const handleContentAdd = async (contentData) => {
    try {
      await axios.post('/api/content', contentData);
      setShowAddContent(false);
      Swal.fire({
        title: 'Success!',
        text: 'Content has been successfully added.',
        icon: 'success',
        confirmButtonColor: '#8D493A',
        background: '#F8EDE3',
        customClass: {
          popup: 'rounded-lg',
          title: 'text-[#8D493A] font-bold',
          content: 'text-gray-600'
        }
      });
      // Refresh content list or update state as needed
    } catch (error) {
      console.error('Error adding content:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add content. Please try again.',
        icon: 'error',
        confirmButtonColor: '#8D493A',
        background: '#F8EDE3',
        customClass: {
          popup: 'rounded-lg',
          title: 'text-[#8D493A] font-bold',
          content: 'text-gray-600'
        }
      });
    }
  };

  const handleContentUpdate = async (contentId, updatedData) => {
    try {
      await axios.put(`/api/content/${contentId}`, updatedData);
      Swal.fire({
        title: 'Updated!',
        text: 'Content has been successfully updated.',
        icon: 'success',
        confirmButtonColor: '#8D493A',
        background: '#F8EDE3',
        customClass: {
          popup: 'rounded-lg',
          title: 'text-[#8D493A] font-bold',
          content: 'text-gray-600'
        }
      });
      // Refresh content list or update state as needed
    } catch (error) {
      console.error('Error updating content:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update content. Please try again.',
        icon: 'error',
        confirmButtonColor: '#8D493A',
        background: '#F8EDE3',
        customClass: {
          popup: 'rounded-lg',
          title: 'text-[#8D493A] font-bold',
          content: 'text-gray-600'
        }
      });
    }
  };

  const formatOrderId = (id) => {
    return `#${id.slice(-5)}`;
  };

  const getOrderStatusDisplay = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center mt-8">No user profile found</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8EDE3]">
      <Navbar />
      {/* Hero Banner */}
      <div className="relative h-48 bg-[#8D493A] overflow-visible mt-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="flex gap-8">
            <Coffee size={64} color="white" />
            <Book size={64} color="white" />
            <Feather size={64} color="white" />
          </div>
        </div>
        <div className="absolute -bottom-12 left-8">
          <div className="w-24 h-24 bg-[#D0B8A8] rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-3xl text-white">
              {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
        </div>
      </div>

            <div className="container mx-auto p-2 md:p-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <TabsList>
            <TabsTrigger 
              value="profile" 
              active={activeTab === 'profile'} 
              onClick={setActiveTab}
            >
              <User className="md:mr-2" size={18} />
              <span className="hidden md:inline">Profile</span>
              <span className="inline md:hidden">Profile</span>
            </TabsTrigger>
            <TabsTrigger 
              value="content" 
              active={activeTab === 'content'} 
              onClick={setActiveTab}
            >
              <Book className="md:mr-2" size={18} />
              <span className="hidden md:inline">Content</span>
              <span className="inline md:hidden">Content</span>
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              active={activeTab === 'orders'} 
              onClick={setActiveTab}
            >
              <BookOpen className="md:mr-2" size={18} />
              <span className="hidden md:inline">Orders</span>
              <span className="inline md:hidden">Orders</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Panels */}
          <div className="px-2 md:px-0">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow p-4 md:p-6 mb-6"
              >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8D493A] mb-4">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail className="mr-2 text-[#8D493A]" />
                      <span className="text-gray-600">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      {/* <Pen className="mr-2 text-[#8D493A]" /> */}
                      {/* <span className="text-gray-600">{user.yearsOfExperience} years of experience</span> */}
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h2 className="text-xl font-semibold text-[#8D493A] mb-2">Bio</h2>
                  <p className="text-gray-600">{user.bio || 'No bio available'}</p>
                </div> */}
                
                <div className="border-t pt-6">
                  <h2 className="text-[#8D493A] font-bold text-xl mb-4">Update Password</h2>
                  <div className="grid grid-cols-1 gap-4 max-w-md">
                    <div>
                      <label htmlFor="current-password" className="text-sm text-gray-600">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="current-password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="text-sm text-gray-600">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-[#F8EDE3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={handlePasswordUpdate}
                      className="px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

             {activeTab === 'content' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow p-4 md:p-6 mb-6"
              >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#8D493A]">Published Content</h2>
                <button
                  className="bg-[#8D493A] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                  onClick={() => setShowAddContent(true)}
                >
                  <Plus size={18} />
                  Add New Content
                </button>
              </div>

              <PublishedContent />
            </motion.div>
          )}

{activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow p-4 md:p-6 mb-6"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-[#8D493A] mb-6">Past Orders</h2>
                <div className="space-y-4 md:space-y-6">
                  {orders.length > 0 ? (
                    orders.map((order, index) => (
                      <div key={index} className="bg-[#F8EDE3] rounded-lg p-3 md:p-6">
                        <div className="space-y-3 md:space-y-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-[#D0B8A8] pb-4">
                            <div className="mb-3 md:mb-0">
                              <h3 className="font-semibold text-base md:text-lg text-[#8D493A] mb-1">
                                Order {formatOrderId(order._id)}
                              </h3>
                              <p className="text-xs md:text-sm text-gray-600">
                                Placed on {new Date(order.createdAt).toLocaleDateString()}
                              </p>
                              <p className="text-xs md:text-sm text-gray-600 mt-2">
                                Status: {getOrderStatusDisplay(order.status)}
                              </p>
                            </div>
                            <div className="text-left md:text-right">
                              <p className="text-base md:text-lg font-medium text-[#8D493A]">
                                Total: ${order.total?.toFixed(2) || '0.00'}
                              </p>
                            </div>
                          </div>

                          <OrderStatusTracker currentStatus={order.status} />

                          <div className="space-y-3 md:space-y-4">
                            {order.items?.map((item, itemIndex) => (
                              item?.content && (
                                <div key={itemIndex} className="bg-white rounded-lg p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-0">
                                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-[#8D493A] mt-1" />
                                    <div>
                                      <p className="font-medium text-[#8D493A] text-base md:text-lg mb-1">
                                        {item.content.title || 'Untitled Content'}
                                      </p>
                                      <div className="space-y-1">
                                        <p className="text-xs md:text-sm text-gray-600">
                                          Quantity: {item.quantity || 1}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-600">
                                          Price: ${item.price?.toFixed(2) || '0.00'}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {item.content.file_url && (
                                    <a
                                      href={item.content.file_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors w-full md:w-auto justify-center"
                                    >
                                      <Download className="h-4 w-4" />
                                      Download
                                    </a>
                                  )}
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 md:py-12 bg-[#F8EDE3] rounded-lg">
                      <Book className="h-12 w-12 md:h-16 md:w-16 text-[#8D493A] mb-4 opacity-50" />
                      <p className="text-base md:text-lg text-gray-600 text-center">
                        No orders found yet.
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 text-center mt-2">
                        Your past orders will appear here after you make a purchase.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        {showAddContent && (
          // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg w-full max-w-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-[#8D493A]">Add New Content</h2>
                  <button 
                    onClick={() => setShowAddContent(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <AddContentForm onClose={() => setShowAddContent(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;