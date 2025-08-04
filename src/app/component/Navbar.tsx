"use client"
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import type { ThemeType } from '@/redux/slices/themeSlice'; // Adjust the import path



import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/redux/slices/themeSlice';
import { RootState,AppDispatch } from '@/redux/store';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  //  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => state.theme.current);

  // const themes = [
  //   { id: 'light', label: 'Light' },
  //   { id: 'dark', label: 'Dark' },
  //   { id: 'solarized', label: 'Solarized' },
  // ];


  
const themes: { id: ThemeType; label: string }[] = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'solarized', label: 'Solarized' },
];

    const handleThemeChange = (themeId: ThemeType) => {
    dispatch(setTheme(themeId));
    setIsDropdownOpen(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className='sticky top-0 z-10 ease-in duration-300 bg-gray-300'>
      <div className='max-w-[100vw] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          {/* <Image src='/images/company.png' alt='Company Logo' className='w-auto inline ' /> */}
          <Image
  src="/images/company.png"
  alt="Company Logo"
  width={150}
  height={50}
  className="w-auto inline"
/>

        </Link>
        <ul 
        className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/'>Pages</Link>
          </li>
          <li
            className={`relative p-4 ${isDropdownOpen ? 'hover:dropdown-open' : ''}`}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <div className='flex items-center cursor-pointer'>
              Themes {isDropdownOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            {/* {isDropdownOpen && (
              <div className='absolute top-full left-0 w-40 py-2 bg-white text-black   shadow-2xl rounded-2xl'>
                <ul>
                  <li className='p-2'>
                    <Link href='/classes/class 1'>theme 1</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/classes/class 2'>theme 2</Link>
                  </li>

                   <li className='p-2'>
                    <Link href='/classes/class 2'>theme 3</Link>
                  </li>
                </ul>
              </div>
            )} */}

               {isDropdownOpen && (
        <div className="absolute top-full left-0 w-40 py-2 bg-white text-black shadow-lg rounded-lg z-50">
          <ul>
            {themes.map((theme) => (
              <li
                key={theme.id}
                className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded ${
                  currentTheme === theme.id ? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => handleThemeChange(theme.id)}
              >
                {theme.label}
              </li>
            ))}
          </ul>
        </div>
      )}
          </li>
          <li className='p-4'>
            <Link href='/'>About</Link>
          </li>
        
        </ul>

        {/* Mobile Button */}
        <div data-testid = {'mobile-button'} onClick={handleNav} className='block sm:hidden z-10  bg-gray-800'>
          {nav ? (
            <AiOutlineClose size={20}
            
              />
          ) : (
            <AiOutlineMenu size={20} 
    
             />
          )}
        </div>
        {/* Mobile Menu */}
        <div data-testid = {'mobile-menu'}
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Page</Link>
            </li>

            <li
              onClick={handleDropdownToggle}
              data-testid = {'dropdown'}
              className={`relative p-4 text-2xl text-white ${isDropdownOpen ? 'hover:dropdown-open' : ''}`}
            >
              <div className='flex items-center cursor-pointer'>
                    Classes{isDropdownOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
              </div>
              {isDropdownOpen && (
                <div className='absolute top-full left-0 w-full py-2 bg-black text-white rounded-2xl'>
                  <ul>
                    <li className='p-2 text-white'>
                      <Link href='/themes/theme'>theme 1</Link>
                    </li>
                    <li className='p-2 text-white'>
                      <Link href='/themes/theme2'>theme 2</Link>
                    </li>
                     <li className='p-2 text-white'>
                      <Link href='/themes/theme3'>theme 3</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
