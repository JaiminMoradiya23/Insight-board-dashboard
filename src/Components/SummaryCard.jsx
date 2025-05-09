import React from 'react';
import useCounter from '../hooks/useCounter';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';

const SummaryCard = ({ title, value, icon: Icon, color }) => {
  const { isDarkMode } = useTheme();

  const formatValue = (val) => {
    if (typeof val === 'string') {
      if (val.startsWith('$')) {
        return `$${useCounter(parseFloat(val.replace(/[^0-9.-]+/g, '')), 2000, 0).toLocaleString()}`;
      }
      if (val.endsWith('%')) {
        return `${useCounter(parseFloat(val), 2000, 0)}%`;
      }
      return useCounter(parseFloat(val), 2000, 0).toLocaleString();
    }
    return useCounter(val, 2000, 0).toLocaleString();
  };

  return (
    <div className={clsx(
      'rounded-xl p-6 transition-all duration-300',
      isDarkMode 
        ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
        : 'bg-white border border-gray-200 hover:border-gray-300'
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className={clsx(
            'text-sm font-medium',
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          )}>
            {title}
          </p>
          <h3 className={clsx(
            'text-2xl font-bold mt-1',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            {formatValue(value)}
          </h3>
        </div>
        <div className={clsx(
          'p-3 rounded-lg',
          color,
          isDarkMode ? 'bg-opacity-20' : 'bg-opacity-10'
        )}>
          <Icon className={clsx(
            'w-6 h-6',
            color.replace('bg-', 'text-'),
            isDarkMode && 'text-opacity-80'
          )} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard; 