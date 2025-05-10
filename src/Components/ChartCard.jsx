import React from 'react';
import { useState } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';

const ChartCard = ({ title, children, className }) => {
  const { isDarkMode } = useTheme();
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <>
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
            'text-lg font-semibold',
            isDarkMode ? 'text-white' : 'text-gray-800'
          )}>
            {title}
          </h2>
          <button
            onClick={() => setIsMaximized(true)}
            className={clsx(
              'p-2 rounded-lg transition-colors',
              isDarkMode 
                ? 'hover:bg-gray-700/50 text-gray-300' 
                : 'hover:bg-gray-50 text-gray-600'
            )}
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
        <div className="h-[300px]">
          {children}
        </div>
      </div>

      {/* Fullscreen Dialog */}
      {isMaximized && (
        <div className="fixed inset-0 z-50 m-0">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMaximized(false)}
          />
          
          {/* Dialog */}
          <div className={clsx(
            'absolute inset-4 rounded-xl p-6',
            isDarkMode
              ? 'bg-gray-800 border border-gray-700'
              : 'bg-white border border-gray-200'
          )}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={clsx(
                'text-xl font-semibold',
                isDarkMode ? 'text-white' : 'text-gray-800'
              )}>
                {title}
              </h2>
              <button
                onClick={() => setIsMaximized(false)}
                className={clsx(
                  'p-2 rounded-lg transition-colors',
                  isDarkMode 
                    ? 'hover:bg-gray-700/50 text-gray-300' 
                    : 'hover:bg-gray-50 text-gray-600'
                )}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[calc(100vh-8rem)]">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChartCard; 