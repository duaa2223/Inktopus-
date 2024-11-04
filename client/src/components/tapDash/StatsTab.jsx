import React from 'react';
import { Card } from '../../components/ui/UIComponents';
import { Users, BookOpen, School, Layout } from 'lucide-react';

const StatsDashboardTab = ({ stats }) => {
  const { users, content, colleges } = stats;
  
  const metrics = [
    {
      icon: <Users className="w-8 h-8 text-[#8D493A]" />,
      value: users.length,
      label: 'Total Users',
      trend: '+5%',
      trendUp: true
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#8D493A]" />,
      value: content.length,
      label: 'Total Content',
      trend: '+12%',
      trendUp: true
    },
    {
      icon: <School className="w-8 h-8 text-[#8D493A]" />,
      value: colleges.length,
      label: 'Total Colleges',
      trend: '+3%',
      trendUp: true
    },
    {
      icon: <Layout className="w-8 h-8 text-[#8D493A]" />,
      value: content.filter(item => item.content_type === 'book').length,
      label: 'Total Books',
      trend: '+8%',
      trendUp: true
    }
  ];

  return (
    <div className="space-y-6">
      
        <h2 className="text-2xl font-semibold text-[#8D493A] mb-6">Dashboard Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#F8EDE3] rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  metric.trendUp ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {metric.trend}
                </span>
              </div>
              <div className="text-3xl font-bold text-[#8D493A] mb-1">
                {metric.value.toLocaleString()}
              </div>
              <div className="text-[#8D493A]/70 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
   
    </div>
  );
};

export default StatsDashboardTab;