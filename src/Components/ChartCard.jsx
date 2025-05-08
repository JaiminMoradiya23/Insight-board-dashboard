import { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import clsx from 'clsx';

export default function ChartCard({ title, children }) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div
      className={clsx(
        'bg-white rounded-lg border border-gray-200 p-4 transition-all duration-300',
        isMaximized
          ? 'fixed inset-4 z-50 bg-white'
          : 'relative'
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
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
        isMaximized ? 'h-[calc(100vh-8rem)]' : 'h-64'
      )}>
        {children}
      </div>
    </div>
  );
} 