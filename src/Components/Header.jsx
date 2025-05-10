import React from 'react';
import { Menu, Bell, ChevronDownIcon, LogOut, PencilIcon, User, Search } from 'lucide-react';
import clsx from 'clsx';
import { Menu as MenuHeadlessUI, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
    const { isDarkMode } = useTheme();

    return (
        <header className={clsx(
            'fixed top-0 right-0 left-0 z-20 transition-all duration-300',
            isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200',
            'border-b h-[65px]',
            isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20',
            'lg:group-hover:pl-64'
        )}>
            <div className="flex items-center justify-between h-full px-4">
                <button
                    onClick={toggleSidebar}
                    className={clsx(
                        'p-2 rounded-lg transition-colors',
                        isDarkMode
                            ? 'text-gray-300 hover:bg-gray-700/50'
                            : 'text-gray-600 hover:bg-gray-50'
                    )}
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-4">
                    {/* <div className={clsx(
                        'relative',
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        <Search className="w-5 h-5" />
                    </div> */}
                    <button className={clsx(
                        'relative p-2 rounded-lg transition-colors',
                        isDarkMode
                            ? 'text-gray-300 hover:bg-gray-700/50'
                            : 'text-gray-600 hover:bg-gray-50'
                    )}>
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                    </button>

                    {/* Profile Dropdown */}
                    <MenuHeadlessUI as="div" className="relative">
                        <MenuButton className={clsx(
                            'flex items-center space-x-2 p-2 rounded-lg transition-colors',
                            isDarkMode
                                ? 'text-gray-800 bg-gray-300 hover:bg-gray-200'
                                : 'text-white bg-gray-700 hover:bg-gray-600'
                        )}>
                            <User className={clsx("w-5 h-5", isDarkMode ? "text-gray-800" : "text-white")} />
                            <ChevronDownIcon className="w-4 h-4" />
                        </MenuButton>

                        <MenuItems className={clsx(
                            'absolute right-0 mt-2 w-48 rounded-md py-1',
                            isDarkMode
                                ? 'bg-gray-800 border border-gray-700'
                                : 'bg-white border border-gray-300'
                        )}>
                            <MenuItem>
                                {({ active }) => (
                                    <button className={clsx(
                                        'flex items-center w-full px-4 py-2 text-sm',
                                        active
                                            ? isDarkMode
                                                ? 'bg-gray-700 text-white'
                                                : 'bg-gray-50 text-gray-900'
                                            : isDarkMode
                                                ? 'text-gray-300'
                                                : 'text-gray-700'
                                    )}>
                                        <User className="w-4 h-4 mr-2" />
                                        Profile
                                    </button>
                                )}
                            </MenuItem>
                            <MenuItem>
                                {({ active }) => (
                                    <button className={clsx(
                                        'flex items-center w-full px-4 py-2 text-sm',
                                        active
                                            ? isDarkMode
                                                ? 'bg-gray-700 text-white'
                                                : 'bg-gray-50 text-gray-900'
                                            : isDarkMode
                                                ? 'text-gray-300'
                                                : 'text-gray-700'
                                    )}>
                                        <PencilIcon className="w-4 h-4 mr-2" />
                                        Edit Profile
                                    </button>
                                )}
                            </MenuItem>
                            <div className={clsx(
                                'border-t my-1',
                                isDarkMode ? 'border-gray-700' : 'border-gray-200'
                            )} />
                            <MenuItem>
                                {({ active }) => (
                                    <button className={clsx(
                                        'flex items-center w-full px-4 py-2 text-sm',
                                        active
                                            ? isDarkMode
                                                ? 'bg-gray-700 text-white'
                                                : 'bg-gray-50 text-gray-900'
                                            : isDarkMode
                                                ? 'text-gray-300'
                                                : 'text-gray-700'
                                    )}>
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sign Out
                                    </button>
                                )}
                            </MenuItem>
                        </MenuItems>
                    </MenuHeadlessUI>
                </div>
            </div>
        </header>
    );
};

export default Header;