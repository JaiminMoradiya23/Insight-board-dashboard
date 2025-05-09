import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '../context/ThemeContext';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const UserDistributionChart = ({ data }) => {
  const { isDarkMode } = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
            weight: '500',
          },
          padding: 20,
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: isDarkMode ? '#e5e7eb' : '#111827',
        bodyColor: isDarkMode ? '#e5e7eb' : '#111827',
        borderColor: isDarkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      }
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderRadius: 4
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  const chartData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      borderColor: isDarkMode ? '#1f2937' : '#ffffff',
      borderWidth: 2,
      hoverOffset: 4,
    })),
  };

  return (
    <div className="h-full">
      <Doughnut
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default UserDistributionChart; 