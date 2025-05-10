'use client';

import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';
import { Bell, Shield, Globe, Database } from 'lucide-react';
import { Switch } from '@headlessui/react';
import { Menu } from '@headlessui/react';

const SettingsPage = () => {
  const { isDarkMode } = useTheme();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      weeklyReports: false
    },
    privacy: {
      dataCollection: true,
      analytics: true,
      cookies: true
    },
    appearance: {
      language: 'English',
      timeZone: 'UTC',
      dateFormat: 'MM/DD/YYYY'
    },
    dataManagement: {
      autoBackup: true,
      dataRetention: '30 days'
    }
  });

  const handleToggleChange = (section, setting) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: !prev[section][setting]
      }
    }));
  };

  const handleSelectChange = (section, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value
      }
    }));
  };

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };

  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      section: 'notifications',
      settings: [
        { label: 'Email Notifications', type: 'toggle', key: 'email' },
        { label: 'Push Notifications', type: 'toggle', key: 'push' },
        { label: 'Weekly Reports', type: 'toggle', key: 'weeklyReports' },
      ]
    },
    {
      title: 'Privacy',
      icon: Shield,
      section: 'privacy',
      settings: [
        { label: 'Data Collection', type: 'toggle', key: 'dataCollection' },
        { label: 'Analytics', type: 'toggle', key: 'analytics' },
        { label: 'Cookies', type: 'toggle', key: 'cookies' },
      ]
    },
    {
      title: 'Appearance',
      icon: Globe,
      section: 'appearance',
      settings: [
        { label: 'Language', type: 'select', key: 'language', options: ['English', 'Spanish', 'French'] },
        { label: 'Time Zone', type: 'select', key: 'timeZone', options: ['UTC', 'EST', 'PST'] },
        { label: 'Date Format', type: 'select', key: 'dateFormat', options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'] },
      ]
    },
    {
      title: 'Data Management',
      icon: Database,
      section: 'dataManagement',
      settings: [
        { label: 'Auto Backup', type: 'toggle', key: 'autoBackup' },
        { label: 'Data Retention', type: 'select', key: 'dataRetention', options: ['30 days', '90 days', '1 year'] },
        { label: 'Export Data', type: 'button', action: handleExport },
      ]
    }
  ];

  return (
    <div className={clsx(
      'min-h-screen p-6',
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      <div className="max-w-4xl mx-auto">
        <h1 className={clsx(
          'text-2xl font-bold mb-8',
          isDarkMode ? 'text-white' : 'text-gray-900'
        )}>
          Settings
        </h1>

        <div className="space-y-6">
          {settingsSections.map((section, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-xl p-6',
                isDarkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-200'
              )}
            >
              <div className="flex items-center mb-4">
                <section.icon className={clsx(
                  'w-6 h-6 mr-3',
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                )} />
                <h2 className={clsx(
                  'text-lg font-semibold',
                  isDarkMode ? 'text-white' : 'text-gray-900'
                )}>
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.settings.map((setting, settingIndex) => (
                  <div
                    key={settingIndex}
                    className={clsx(
                      'flex items-center justify-between py-2',
                      isDarkMode ? 'border-gray-700' : 'border-gray-200',
                      settingIndex !== section.settings.length - 1 && 'border-b'
                    )}
                  >
                    <span className={clsx(
                      'text-sm',
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    )}>
                      {setting.label}
                    </span>

                    {setting.type === 'toggle' && (
                      <Switch
                        checked={settings[section.section][setting.key]}
                        onChange={() => handleToggleChange(section.section, setting.key)}
                        className={clsx(
                          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                          settings[section.section][setting.key]
                            ? isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                            : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        )}
                      >
                        <span className="sr-only">{setting.label}</span>
                        <span
                          className={clsx(
                            'inline-block h-4 w-4 transform rounded-full transition-transform',
                            settings[section.section][setting.key]
                              ? 'translate-x-6 bg-white'
                              : 'translate-x-1 bg-gray-400'
                          )}
                        />
                      </Switch>
                    )}

                    {setting.type === 'select' && (
                      <Menu as="div" className="relative">
                        <Menu.Button
                          className={clsx(
                            'flex items-center justify-between w-32 px-3 py-1.5 text-sm rounded-lg',
                            isDarkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                          )}
                        >
                          {settings[section.section][setting.key]}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Menu.Button>
                        <Menu.Items
                          className={clsx(
                            'absolute right-0 mt-2 w-32 rounded-lg shadow-lg z-10',
                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                          )}
                        >
                          <div className="py-1">
                            {setting.options.map((option, optionIndex) => (
                              <Menu.Item key={optionIndex}>
                                {({ active }) => (
                                  <button
                                    onClick={() => handleSelectChange(section.section, setting.key, option)}
                                    className={clsx(
                                      'w-full text-left px-4 py-2 text-sm',
                                      active
                                        ? isDarkMode
                                          ? 'bg-gray-600 text-white'
                                          : 'bg-gray-100 text-gray-900'
                                        : isDarkMode
                                          ? 'text-gray-300'
                                          : 'text-gray-700'
                                    )}
                                  >
                                    {option}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Menu>
                    )}

                    {setting.type === 'button' && (
                      <button
                        onClick={setting.action}
                        className={clsx(
                          'px-4 py-1.5 rounded-lg text-sm font-medium transition-colors',
                          isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        )}
                      >
                        Export
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 