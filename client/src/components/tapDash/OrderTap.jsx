
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

  const formatOrderId = (id) => {
    return `#${id.slice(-5)}`;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order._id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
    <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#8B4513]">Content Management</h2>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 md:mb-6">
        <input
          type="text"
          placeholder="Search by order ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg w-full sm:flex-1"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-lg bg-white w-full sm:w-auto"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      
      {/* Table Container with horizontal scroll */}
      <div className="relative w-full overflow-auto border rounded-lg">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-[#FDF5F2] sticky top-0">
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] sticky left-0 bg-[#FDF5F2]">Order ID</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[200px]">Email</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513]">Total</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[120px]">Payment Method</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[200px]">Address</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[120px]">Status</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[100px]">Status Display</th>
              <th className="p-2 md:p-4 text-left text-xs md:text-sm font-semibold text-[#8B4513] min-w-[100px]">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order._id} 
                  className={`hover:bg-[#FDF5F2] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FDF5F2]'}`}>
                <td className="p-2 md:p-4 text-xs md:text-sm sticky left-0 bg-inherit">{formatOrderId(order._id)}</td>
                <td className="p-2 md:p-4 text-xs md:text-sm">{order.user?.email || 'N/A'}</td>
                <td className="p-2 md:p-4 text-xs md:text-sm">${order.total}</td>
                <td className="p-2 md:p-4 text-xs md:text-sm">{order.paymentMethod}</td>
                <td className="p-2 md:p-4 text-xs md:text-sm">
                  {order.shippingAddress ? 
                    `${order.shippingAddress.city}, ${order.shippingAddress.country}` : 
                    'N/A'
                  }
                </td>
                <td className="p-2 md:p-4 text-xs md:text-sm">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className={`p-1 md:p-2 text-xs md:text-sm rounded-md ${statusColors[order.status]} border border-gray-300`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-2 md:p-4 text-xs md:text-sm">
                  <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-2 md:p-4 text-xs md:text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 md:mt-6 gap-1 md:gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded ${
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