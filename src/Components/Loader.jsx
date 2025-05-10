import React from 'react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

const Loader = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        {/* <div className={clsx(
          "absolute w-full h-full rounded-full border-4",
          isDarkMode 
            ? "border-gray-700" 
            : "border-gray-200"
        )}></div> */}

        {/* Spinning ring */}
        {/* <div className={clsx(
          "absolute w-full h-full rounded-full border-4 border-t-transparent animate-spin",
          isDarkMode 
            ? "border-blue-400" 
            : "border-blue-500"
        )}></div> */}

        {/* Inner pulsing circle */}
        <div className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full",
          isDarkMode
            ? "bg-blue-400/20"
            : "bg-blue-500/20",
          "animate-ping "
        )}></div>

        {/* Inner pulsing circle */}
        <div className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full",
          isDarkMode
            ? "bg-blue-400/20"
            : "bg-blue-500/20",
          "animate-ping"
        )}></div>

        {/* Center dot */}
        <div className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full",
          isDarkMode
            ? "bg-blue-400"
            : "bg-blue-500"
        )}></div>
      </div>
    </div>
  );
};

export default Loader; 