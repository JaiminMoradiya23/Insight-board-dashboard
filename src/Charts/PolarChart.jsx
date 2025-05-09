import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const PolarChart = ({ data }) => {
  const { isDarkMode } = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
          },
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
      },
    },
    scales: {
      r: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
          backdropColor: 'transparent',
        },
        angleLines: {
          color: isDarkMode ? 'rgba(75, 85, 99, 0.1)' : 'rgba(209, 213, 219, 0.5)',
        },
        pointLabels: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 11,
          },
        },
      },
    },
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
      <PolarArea data={chartData} options={options} />
    </div>
  );
};

export default PolarChart; 