import React from 'react';
import { Check, Package, CreditCard, Truck, CircleDot } from 'lucide-react';

const OrderStatusTracker = ({ currentStatus }) => {
  const statuses = [
    { key: 'pending', label: 'Payment Completed', icon: Check},
    { key: 'processing', label: 'Processing Order', icon: Package },
    { key: 'shipped', label: 'Shipped', icon: Truck },
    { key: 'delivered', label: 'Delivered', icon: CircleDot }
  ];

  const getStatusIndex = (status) => {
    switch (status) {
      case 'pending': return 0;
      case 'processing': return 1.3;
      case 'shipped': return 2.1;
      case 'delivered': return 3;
      case 'cancelled': return -1;
      default: return 0;
    }
  };

  const currentIndex = getStatusIndex(currentStatus);

  return (
    <div className="w-full py-4">
      <div className="relative flex items-center justify-between">
        {/* Progress Bar */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200">
          <div 
            className="absolute left-0 top-0 h-full bg-[#8B4513] transition-all duration-500"
            style={{ 
              width: `${currentStatus === 'cancelled' ? 0 : 
                (Math.min(currentIndex, 4) / (statuses.length - 1)) * 100}%` 
            }}
          />
        </div>

        {/* Status Points */}
        {statuses.map((status, index) => {
            
          const isActive = currentStatus !== 'cancelled' && index <= currentIndex;
          const Icon = status.icon;

          return (
            <div key={index} className="relative flex flex-col items-center">
              <div className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 
                ${isActive ? 'border-[#8B4513] bg-[#8B4513] text-white' : 'border-gray-300 bg-white'}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-xs font-medium ${
                isActive ? 'text-[#8B4513]' : 'text-gray-500'
              }`}>
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusTracker;