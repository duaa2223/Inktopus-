
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Book, Coffee, Download, User, BookOpen } from 'lucide-react';
import axios from 'axios';
import OrderStatusTracker from '../components/OrderTracker';
import Navbar from '../components/NavBar';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
const TabsList = ({ children }) => (
  <div className="flex bg-white rounded-lg p-1 mb-6 w-fit">
    {children}
  </div>
);

const TabsTrigger = ({ value, active, onClick, children }) => (
  <button
    onClick={() => onClick(value)}
    className={`flex items-center px-6 py-2 rounded-md transition-colors ${
      active ? 'bg-[#8D493A] text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user profile first
        const userResponse = await axios.get('/api/users/profile', { withCredentials: true });
        
        if (isMounted) {
          setUserProfile(userResponse.data);
        }

        // Then fetch orders
        try {
          const ordersResponse = await axios.get('/api/payment/user-orders', { withCredentials: true });
          if (isMounted) {
            setOrders(ordersResponse.data || []);
          }
        } catch (orderErr) {
          // If there's an error fetching orders, set empty array but don't treat as error
          if (isMounted) {
            setOrders([]);
          }
          console.log('No orders found:', orderErr);
        }

        if (isMounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        if (isMounted) {
          setError(err.response?.data?.message || 'Failed to fetch user profile');
          setLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePasswordUpdate = async () => {
    try {
      await axios.put('/api/users/users/update-password', {
        currentPassword,
        newPassword,
      }, { withCredentials: true });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Password updated successfully',
        confirmButtonColor: '#8D493A',
      });
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.error('Error updating password:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.response?.data?.message || 'Failed to update password',
        confirmButtonColor: '#8D493A',
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
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8EDE3]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
        <p className="mt-4 text-[#8D493A]">Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8EDE3] p-8">
        <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold mb-2">Error loading user profile:</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-[#F8EDE3] p-8">
        <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          No user profile found
        </div>
      </div>
    );
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
            <BookOpen size={64} color="white" />
          </div>
        </div>
        <div className="absolute -bottom-12 left-8">
          <div className="w-24 h-24 bg-[#D0B8A8] rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-3xl text-white">
              {userProfile.username.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <TabsList>
            <TabsTrigger 
              value="profile" 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
            >
              <User className="mr-2" size={18} />
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              active={activeTab === 'orders'} 
              onClick={() => setActiveTab('orders')}
            >
              <Book className="mr-2" size={18} />
              Orders
            </TabsTrigger>
          </TabsList>

          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow p-6 mb-6"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8D493A] mb-4">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail className="mr-2 text-[#8D493A]" />
                      <span className="text-gray-600">{userProfile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-2 text-[#8D493A]" />
                      <span className="text-gray-600">{userProfile.username}</span>
                    </div>
                  </div>
                </div>
                
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

          {activeTab === 'orders' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow p-6 mb-6"
            >
              <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Past Orders</h2>
              <div className="space-y-6">
              
              {orders.length > 0 ? (
  orders.map((order, index) => (
    <div key={index} className="bg-[#F8EDE3] rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start border-b border-[#D0B8A8] pb-4">
          <div>
            <h3 className="font-semibold text-lg text-[#8D493A] mb-1">
              Order {formatOrderId(order._id)}
            </h3>
            <p className="text-sm text-gray-600">
              Placed on {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Status: {getOrderStatusDisplay(order.status)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium text-[#8D493A]">
              Total: ${order.total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* مكون تتبع حالة الطلب */}
        <OrderStatusTracker currentStatus={order.status} />

        <div className="space-y-4">
          {order.items.map((item, itemIndex) => (
            <div key={itemIndex} className="bg-white rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-start gap-4">
                <BookOpen className="h-8 w-8 text-[#8D493A] mt-1" />
                <div>
                  <p className="font-medium text-[#8D493A] text-lg mb-1">
                    {item.content.title}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={item.content.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#8D493A] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))
) : (
  <div className="flex flex-col items-center justify-center py-12 bg-[#F8EDE3] rounded-lg">
    <Book className="h-16 w-16 text-[#8D493A] mb-4 opacity-50" />
    <p className="text-lg text-gray-600 text-center">
      No orders found yet.
    </p>
    <p className="text-sm text-gray-500 text-center mt-2">
      Your past orders will appear here after you make a purchase.
    </p>
  </div>
)}

              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;