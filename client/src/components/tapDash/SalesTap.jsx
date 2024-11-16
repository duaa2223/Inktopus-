import React, { useState, useEffect } from 'react';
import { DollarSign, ShoppingBag, TrendingUp, Package } from 'lucide-react';

const SalesDashboardTab = () => {
  const [salesData, setSalesData] = useState({
    totalSales: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    ordersByStatus: [],
    currency: '$'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/payment/sales/total', {
          credentials: 'include', // This enables sending cookies with the request
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  const formatCurrency = (value) => {
    if (typeof value !== 'number') return '0.00';
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatNumber = (value) => {
    if (typeof value !== 'number') return '0';
    return value.toLocaleString();
  };

  // Status mapping for better display
  const statusMap = {
    'processing': 'Processing',
    'shipped': 'Shipped',
    'delivered': 'Delivered'
  };

  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#8D493A]" />,
      value: salesData.totalSales,
      label: 'Total Sales',
      format: (value) => `${salesData.currency}${formatCurrency(value)}`
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#8D493A]" />,
      value: salesData.totalOrders,
      label: 'Total Orders',
      format: formatNumber
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#8D493A]" />,
      value: salesData.averageOrderValue,
      label: 'Average Order Value',
      format: (value) => `${salesData.currency}${formatCurrency(value)}`
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[#8D493A]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Sales Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#F8EDE3] rounded-lg">
                {metric.icon}
              </div>
            </div>
            <div className="text-3xl font-bold text-[#8D493A] mb-1">
              {metric.format(metric.value)}
            </div>
            <div className="text-[#8D493A]/70 text-sm">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[#8D493A] mb-4">Orders by Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {salesData.ordersByStatus.map((status, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-[#F8EDE3] rounded-lg">
                  <Package className="w-6 h-6 text-[#8D493A]" />
                </div>
                <span className="text-sm bg-[#F8EDE3] px-3 py-1 rounded-full text-[#8D493A]">
                  {formatNumber(status.count)} {status.count === 1 ? 'order' : 'orders'}
                </span>
              </div>
              <div className="text-lg font-semibold text-[#8D493A] capitalize">
                {statusMap[status._id] || status._id}
              </div>
              <div className="text-[#8D493A]/70 mt-2">
                {salesData.currency}{formatCurrency(status.totalAmount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDashboardTab;