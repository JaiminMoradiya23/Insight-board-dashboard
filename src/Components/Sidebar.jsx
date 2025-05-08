import { Home, BarChart2, Users, Settings, Menu } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const menuItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: BarChart2, label: 'Analytics' },
        { icon: Users, label: 'Users' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={clsx(
                    'fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-30 transition-all duration-300 ease-in-out',
                    isOpen ? 'w-64' : 'w-20',
                    'lg:translate-x-0',
                    !isOpen && '-translate-x-full lg:translate-x-0',
                    'group lg:hover:w-64'
                )}
            >
                <div className="flex items-center justify-between p-3 border-b border-gray-100 h-[64px]">
                    <div className="flex items-center justify-center w-20">
                        <Image
                            src="/images/Colored_logo.png"
                            alt="Insight Board Logo"
                            width={32}
                            height={32}
                        />
                    </div>
                    {/* <h1 className={clsx(
                        'font-bold text-xl text-gray-800 whitespace-nowrap transition-all duration-300',
                        isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'
                    )}>
                        Insight Board
                    </h1> */}
                    {/* <button
                        onClick={toggleSidebar}
                        className="p-2 hover:bg-gray-50 rounded-lg"
                    >
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button> */}
                </div>

                <nav className="p-4">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={clsx(
                                'flex items-center w-full p-3 rounded-lg mb-2 transition-colors',
                                item.active
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            )}
                        >
                            <item.icon className="w-6 h-6 flex-shrink-0" />
                            <span
                                className={clsx(
                                    'ml-3 whitespace-nowrap transition-all duration-300',
                                    isOpen
                                        ? 'opacity-100 w-auto'
                                        : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100 w-0 lg:group-hover:w-auto'
                                )}
                            >
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
} 