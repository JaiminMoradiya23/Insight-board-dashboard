import React from 'react';
import { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';

const ChartCard = ({ title, children, className }) => {
  const { isDarkMode } = useTheme();
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div
      className={clsx(
        'rounded-xl p-6',
        isDarkMode
          ? 'bg-gray-800 border border-gray-700 hover:border-gray-600'
          : 'bg-white border border-gray-200 hover:border-gray-300',
        'transition-all duration-300',
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={clsx(
          'text-lg font-semibold mb-4',
          isDarkMode ? 'text-white' : 'text-gray-800'
        )}>
          {title}
        </h2>
        <button
          onClick={() => setIsMaximized(!isMaximized)}
          className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {isMaximized ? (
            <Minimize2 className="w-5 h-5 text-gray-600" />
          ) : (
            <Maximize2 className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
      <div className={clsx(
        'transition-all duration-300',
        isMaximized ? 'h-[calc(100vh-8rem)]' : 'h-[300px]'
      )}>
        {children}
      </div>
    </div>
  );
};

export default ChartCard; 