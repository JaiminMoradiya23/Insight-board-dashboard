'use client';

import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import ChartCard from '../Components/ChartCard';
import SummaryCard from '../Components/SummaryCard';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import dashboardData from '../mock/dashboardData.json';
import clsx from 'clsx';
import RevenueChart from '../Charts/RevenueChart';
import UserActivityChart from '../Charts/UserActivityChart';
import UserDistributionChart from '../Charts/UserDistributionChart';
import AreaChart from '../Charts/AreaChart';
import PolarChart from '../Charts/PolarChart';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function DashboardContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const [chartData, setChartData] = useState({
    revenue: null,
    activity: null,
    distribution: null,
    area: null,
    polar: null
  });

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setTimeout(() => {
        setChartData({
          revenue: dashboardData.revenueData,
          activity: dashboardData.userActivity,
          distribution: dashboardData.userDistribution,
          area: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Total Revenue',
                data: [13500, 20000, 18000, 28000, 25000, 35000],
                borderColor: 'rgb(139, 92, 246)',
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
              },
              {
                label: 'Total Sales',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
              },
            ]
          },
          polar: {
            labels: ['Desktop', 'Mobile', 'Tablet', 'Laptop', 'Other'],
            datasets: [{
              data: [74, 97, 68, 57, 78],
              backgroundColor: [
                'rgba(99, 102, 241, 0.8)',
                'rgba(139, 92, 246, 0.8)',
                'rgba(168, 85, 247, 0.8)',
                'rgba(217, 70, 239, 0.8)'
              ]
            }]
          }
        });
      }, 1000);
    };

    fetchData();
  }, []);

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
    <div className={clsx(
      'min-h-screen bg-gradient-to-br',
      isDarkMode 
        ? 'from-gray-900 via-gray-800 to-gray-900'
        : 'from-gray-50 via-slate-50 to-zinc-50'
    )}>
      <main className={clsx(
        'transition-all duration-300 ease-in-out',
        'mt-16 overflow-auto',
        isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20',
        'lg:group-hover:pl-64'
      )}>
        <div className="p-6">
          <h1 className={clsx(
            'text-3xl font-bold mb-8',
            isDarkMode ? 'text-white' : 'text-gray-800'
          )}>
            Dashboard Overview
          </h1>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryCards.map((card, index) => (
              <SummaryCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                color={card.color}
              />
            ))}
          </div>

          {/* Charts Grid */}
          <div className="space-y-6">
            {/* Full-width Area Chart */}
            <ChartCard title="Sales Overview" className="w-full">
              {chartData.area ? (
                <AreaChart data={chartData.area} />
              ) : (
                <div className="h-full">
                  <Loader />
                </div>
              )}
            </ChartCard>

            {/* Two-column charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Revenue Trend">
                {chartData.revenue ? (
                  <RevenueChart data={chartData.revenue} />
                ) : (
                  <div className="h-full">
                    <Loader />
                  </div>
                )}
              </ChartCard>

              <ChartCard title="User Activity">
                {chartData.activity ? (
                  <UserActivityChart data={chartData.activity} />
                ) : (
                  <div className="h-full">
                    <Loader />
                  </div>
                )}
              </ChartCard>
            </div>

            {/* Two-column charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="User Distribution">
                {chartData.distribution ? (
                  <UserDistributionChart data={chartData.distribution} />
                ) : (
                  <div className="h-full">
                    <Loader />
                  </div>
                )}
              </ChartCard>

              <ChartCard title="Device Usage">
                {chartData.polar ? (
                  <PolarChart data={chartData.polar} />
                ) : (
                  <div className="h-full">
                    <Loader />
                  </div>
                )}
              </ChartCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
}
