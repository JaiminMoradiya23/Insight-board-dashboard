import { Home, BarChart2, Users, Settings, Menu, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const { isDarkMode, toggleTheme } = useTheme();

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
                    'fixed top-0 left-0 h-full z-30 transition-all duration-300 ease-in-out',
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
                    'border-r',
                    isOpen ? 'w-64' : 'w-20',
                    'lg:translate-x-0',
                    !isOpen && '-translate-x-full lg:translate-x-0',
                    'group lg:hover:w-64',
                    'flex flex-col'
                )}
            >
                <div className={clsx(
                    'flex items-center justify-between p-3 border-b h-[65px]',
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                )}>
                    <div className="flex items-center justify-center w-20">
                        <Image
                            src="/images/Colored_logo.png"
                            alt="Insight Board Logo"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>

                <nav className="p-4 flex-grow">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={clsx(
                                'flex items-center w-full p-3 rounded-lg mb-2 transition-colors',
                                item.active
                                    ? isDarkMode 
                                        ? 'bg-blue-900/20 text-blue-400'
                                        : 'bg-blue-50 text-blue-600'
                                    : isDarkMode
                                        ? 'text-gray-300 hover:bg-gray-700/50'
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

                {/* Theme toggle at bottom */}
                <div className={clsx(
                    'p-4 border-t',
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                )}>
                    <Switch
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        className={clsx(
                            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                            isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                        )}
                    >
                        <span className="sr-only">Toggle theme</span>
                        <span
                            className={clsx(
                                'inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform',
                                isDarkMode ? 'translate-x-5' : 'translate-x-0.5'
                            )}
                        />
                    </Switch>
                    {/* <div className="flex items-center mt-2">
                        {isDarkMode ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600" />
                        )}
                        <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </div> */}
                </div>
            </aside>
        </>
    );
} 