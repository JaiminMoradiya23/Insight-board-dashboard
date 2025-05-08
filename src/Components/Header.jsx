import { Bell, Menu } from 'lucide-react';
import clsx from 'clsx';

export default function Header({ toggleSidebar, isSidebarOpen }) {
    return (
        <header className={clsx(
            'fixed top-0 right-0 h-16 bg-white border-b border-gray-100 z-20 transition-all duration-300 ease-in-out',
            isSidebarOpen ? 'left-64' : 'left-20',
            'lg:left-20 lg:group-hover:left-64'
        )}>
            <div className="flex items-center justify-between h-full px-6">
                <div className="flex items-center">
                    <h1 className={clsx(
                        'font-bold text-xl text-gray-800 whitespace-nowrap transition-all duration-300',
                        isSidebarOpen ? 'opacity-0 lg:opacity-0' : 'opacity-100'
                    )}>
                        Insight Board
                    </h1>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 hover:bg-gray-50 rounded-lg lg:hidden"
                    >
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                <div className="flex items-center space-x-6">
                    <button className="p-2 hover:bg-gray-50 rounded-lg relative">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                            JD
                        </div>
                        <span className="hidden md:block text-sm font-medium text-gray-700">
                            John Doe
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}