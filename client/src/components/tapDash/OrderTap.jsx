// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

// const OrdersManagementTab = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const statusColors = {
//     pending: 'bg-yellow-100 text-yellow-800',
//     processing: 'bg-blue-100 text-blue-800',
//     shipped: 'bg-purple-100 text-purple-800',
//     delivered: 'bg-green-100 text-green-800',
//     cancelled: 'bg-red-100 text-red-800'
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/payment/orders', {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       console.log('Orders data:', response.data); // للتحقق من شكل البيانات
//       setOrders(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching orders:', err);
//       setError('حدث خطأ في جلب الطلبات');
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/payment/orders/${orderId}/status`, 
//         { status: newStatus },
//         {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );
      
//       setOrders(orders.map(order => 
//         order._id === orderId 
//           ? { ...order, status: newStatus }
//           : order
//       ));
//     } catch (err) {
//       console.error('Error updating order status:', err);
//       setError('حدث خطأ في تحديث حالة الطلب');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         جاري التحميل...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold">إدارة الطلبات</h2>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="p-4 text-right border-b">رقم الطلب</th>
//               <th className="p-4 text-right border-b">البريد الإلكتروني</th>
//               <th className="p-4 text-right border-b">المجموع</th>
//               <th className="p-4 text-right border-b">طريقة الدفع</th>
//               <th className="p-4 text-right border-b">العنوان</th>
//               <th className="p-4 text-right border-b">الحالة</th>
//               <th className="p-4 text-right border-b">التاريخ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="p-4 border-b">{order._id.substring(0, 8)}...</td>
//                 <td className="p-4 border-b">{order.user?.email || 'غير متوفر'}</td>
//                 <td className="p-4 border-b">${order.total}</td>
//                 <td className="p-4 border-b">{order.paymentMethod}</td>
//                 <td className="p-4 border-b">
//                   {order.shippingAddress ? 
//                     `${order.shippingAddress.city}, ${order.shippingAddress.country}` : 
//                     'غير متوفر'
//                   }
//                 </td>
//                 <td className="p-4 border-b">
//                   <select
//                     value={order.status}
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                     className={`p-2 rounded-md ${statusColors[order.status]} border border-gray-300`}
//                   >
//                     <option value="pending">قيد الانتظار</option>
//                     <option value="processing">قيد المعالجة</option>
//                     <option value="shipped">تم الشحن</option>
//                     <option value="delivered">تم التوصيل</option>
//                     <option value="cancelled">ملغي</option>
//                   </select>
//                 </td>
//                 <td className="p-4 border-b">
//                   {new Date(order.createdAt).toLocaleDateString('ar-EG')}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrdersManagementTab;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const OrdersManagementTab = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const ordersPerPage = 10;

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/payment/orders', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Error fetching orders');
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/payment/orders/${orderId}/status`, 
        { status: newStatus },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      setOrders(orders.map(order => 
        order._id === orderId 
          ? { ...order, status: newStatus }
          : order
      ));
    } catch (err) {
      console.error('Error updating order status:', err);
      setError('Error updating order status');
    }
  };

//   // Format Order ID
//   const formatOrderId = (id) => {
//     return `#${id.substring(0, 5)}`;
//   };
// Format Order ID using the last 5 characters
const formatOrderId = (id) => {
    return `#${id.slice(-5)}`;
  };
  

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order._id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#8B4513]">Content Management</h2>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by order ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg flex-1"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-lg bg-white"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FDF5F2]">
              <th className="p-4 text-left border-b text-[#8B4513]">Order ID</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Email</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Total</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Payment Method</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Address</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Status</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Status Display</th>
              <th className="p-4 text-left border-b text-[#8B4513]">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order._id} 
                  className={`hover:bg-[#FDF5F2] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FDF5F2]'}`}>
                <td className="p-4 border-b">{formatOrderId(order._id)}</td>
                <td className="p-4 border-b">{order.user?.email || 'N/A'}</td>
                <td className="p-4 border-b">${order.total}</td>
                <td className="p-4 border-b">{order.paymentMethod}</td>
                <td className="p-4 border-b">
                  {order.shippingAddress ? 
                    `${order.shippingAddress.city}, ${order.shippingAddress.country}` : 
                    'N/A'
                  }
                </td>
                <td className="p-4 border-b">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className={`p-2 rounded-md ${statusColors[order.status]} border border-gray-300`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-4 border-b">
                  <span className={`px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 border-b">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-[#8B4513] text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrdersManagementTab;