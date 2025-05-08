'use client';

import { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import ChartCard from '../Components/ChartCard';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import dashboardData from '../mock/dashboardData.json';
import clsx from 'clsx';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const summaryCards = [
    {
      title: 'Total Users',
      value: dashboardData.summary.totalUsers,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Users',
      value: dashboardData.summary.activeUsers,
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: `$${dashboardData.summary.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
    {
      title: 'Growth Rate',
      value: `${dashboardData.summary.growthRate}%`,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <main className={clsx(
        'transition-all duration-300 ease-in-out',
        'pt-16',
        isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20',
        'lg:group-hover:pl-64'
      )}>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 flex items-center"
              >
                <div className={`${card.color} p-3 rounded-lg mr-4`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">{card.title}</h3>
                  <p className="text-2xl font-semibold text-gray-800">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard title="Revenue Trend">
              <Line
                data={dashboardData.revenueData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }}
              />
            </ChartCard>

            <ChartCard title="User Activity">
              <Bar
                data={dashboardData.userActivity}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }}
              />
            </ChartCard>

            <ChartCard title="User Distribution">
              <Doughnut
                data={dashboardData.userDistribution}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                }}
              />
            </ChartCard>
          </div>
        </div>
      </main>
    </div>
  );
}
