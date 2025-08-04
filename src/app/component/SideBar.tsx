'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/redux/slices/themeSlice';
import { RootState, AppDispatch } from '@/redux/store';
import clsx from 'clsx';

const SidebarNavbar = () => {
  const [isOpen, setIsOpen] = useState(true); // sidebar open by default
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => state.theme.current);

  const themes = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'solarized', label: 'Solarized' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleThemeChange = (themeId: string) => {
    dispatch(setTheme(themeId as any));
    setIsDropdownOpen(false);
  };

  // Define styles based on theme
  const sidebarClasses = clsx('fixed top-0 left-0 h-full flex flex-col transition-width duration-300', {
    'w-64': isOpen,
    'w-16': !isOpen,

    // Background colors
    'bg-white text-black font-sans': currentTheme === 'light',
    'bg-gray-900 text-white font-serif font-bold': currentTheme === 'dark',
    'bg-[#FDF6E3] text-[#586E75] font-pacifico': currentTheme === 'solarized',
  });

  const linkClasses = clsx(
    'block px-4 py-3 rounded transition-colors duration-200 truncate',
    {
      'hover:bg-gray-200 hover:text-black': currentTheme === 'light',
      'hover:bg-gray-700 hover:text-white': currentTheme === 'dark',
      'hover:bg-yellow-300 hover:text-[#586E75]': currentTheme === 'solarized',
    }
  );

  const dropdownBgClasses = clsx({
    'bg-white text-black': currentTheme === 'light',
    'bg-gray-700 text-white': currentTheme === 'dark',
    'bg-yellow-100 text-[#586E75]': currentTheme === 'solarized',
  });

  const dropdownHoverClasses = clsx({
    'hover:bg-blue-600 hover:text-white': currentTheme === 'light',
    'hover:bg-yellow-400 hover:text-gray-900': currentTheme === 'dark',
    'hover:bg-yellow-500 hover:text-gray-900': currentTheme === 'solarized',
  });

  return (
    <aside className={sidebarClasses}>
      {/* Sidebar header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
        <Link href="/" className="flex items-center space-x-2">
          
            <Image src="/images/company.png" alt="Company Logo" width={120} height={40} />
            {isOpen && <span className="font-bold text-lg select-none">Company</span>}
          
        </Link>
        <button
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          className="p-1 focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-auto mt-4">
        <ul className="flex flex-col">
          <li>
            <Link href="/"  className={linkClasses} title="Home">
                {isOpen ? 'Home' : '🏠'}
            </Link>
          </li>

          <li>
            <Link href="/"  className={linkClasses} title="Pages">
              
                {isOpen ? 'Pages' : '📄'}
              
            </Link>
          </li>

          {/* Theme dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={clsx(
                'flex items-center justify-between w-full px-4 py-3 rounded transition-colors duration-200 focus:outline-none',
                linkClasses
              )}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span>{isOpen ? 'Themes' : '🎨'}</span>
              {isOpen && <span>{isDropdownOpen ? '▲' : '▼'}</span>}
            </button>

            {isDropdownOpen && isOpen && (
              <ul
                className={clsx(
                  'mt-1 rounded shadow-lg',
                  dropdownBgClasses,
                  'max-h-60 overflow-auto'
                )}
              >
                {themes.map((theme) => (
                  <li
                    key={theme.id}
                    className={clsx('px-4 py-2 cursor-pointer rounded', dropdownHoverClasses, {
                      'bg-blue-600 text-white': currentTheme === theme.id,
                    })}
                    onClick={() => handleThemeChange(theme.id)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleThemeChange(theme.id);
                      }
                    }}
                  >
                    {theme.label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/about">
              <Link href='/' className={linkClasses} title="About">
                {isOpen ? 'About' : 'ℹ️'}
              </Link>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavbar;
