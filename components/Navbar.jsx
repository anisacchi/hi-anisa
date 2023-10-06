'use client';

import React, { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo } from '../components';
import {
  HouseFill,
  HouseRegular,
  LaptopFill,
  LaptopRegular,
  LetterFill,
  LetterRegular,
  MoonStars,
  Sun,
  UserFill,
  UserRegular,
} from './icons';
import ThemeContext from '@/context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const themeContext = useContext(ThemeContext);
  const toggleThemeHandler = () => {
    themeContext.toggleThemeHandler();
  };

  return (
    <>
      <header className='relative w-full lg:shadow-none shadow-shadow-neutral padding-x py-4 flex justify-between items-center'>
        <div className='w-12 h-12'>
          <button
            className={`absolute z-30 w-12 h-12 flex flex-col justify-center items-center rounded-full cursor-pointer ${
              isMenuOpen
                ? 'bg-primary-300'
                : 'bg-neutral-100 border dark:bg-neutral-600 border-primary-300'
            }`}
            onClick={menuOpenHandler}
          >
            <span
              className={`block h-0.5 w-6 my-0.5 rounded-full transition-all duration-300 ease-out 
						${
              isMenuOpen
                ? 'rotate-45 translate-y-0.5 bg-neutral-100'
                : '-translate-y-0.5 bg-primary-300'
            }`}
            />
            <span
              className={`block h-0.5 w-6 my-0.5 rounded-full transition-all duration-300 ease-out ${
                isMenuOpen
                  ? '-rotate-45 -translate-y-1 bg-neutral-100'
                  : 'translate-y-0.5 bg-primary-300'
              }`}
            />
          </button>
          <nav className='absolute z-20 w-12 top-20 flex flex-col gap-2 justify-center items-center'>
            <Link
              href='/'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/'
                  ? 'bg-primary-300'
                  : 'bg-neutral-100 dark:bg-neutral-600 border border-primary-300 hover:bg-primary-100'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[60px]'}`}
              onClick={menuOpenHandler}
            >
              {path === '/' ? (
                <HouseFill width={24} height={24} color='#FEFEFE' />
              ) : (
                <HouseRegular width={24} height={24} color='#FFA7A6' />
              )}
            </Link>
            <Link
              href='/about'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/about'
                  ? 'bg-primary-300'
                  : 'bg-neutral-100 dark:bg-neutral-600 border border-primary-300 hover:bg-primary-100'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[108px]'}`}
              onClick={menuOpenHandler}
            >
              {path === '/about' ? (
                <UserFill width={24} height={24} color='#FEFEFE' />
              ) : (
                <UserRegular width={24} height={24} color='#FFA7A6' />
              )}
            </Link>
            <Link
              href='/projects'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/projects'
                  ? 'bg-primary-300'
                  : 'bg-neutral-100 dark:bg-neutral-600 border border-primary-300 hover:bg-primary-100'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[156px]'}`}
              onClick={menuOpenHandler}
            >
              {path === '/projects' ? (
                <LaptopFill width={24} height={24} color='#FEFEFE' />
              ) : (
                <LaptopRegular width={24} height={24} color='#FFA7A6' />
              )}
            </Link>
            <Link
              href='/contact'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/contact'
                  ? 'bg-primary-300'
                  : 'bg-neutral-100 dark:bg-neutral-600 border border-primary-300 hover:bg-primary-100'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[204px]'}`}
              onClick={menuOpenHandler}
            >
              {path === '/contact' ? (
                <LetterFill width={24} height={24} color='#FEFEFE' />
              ) : (
                <LetterRegular width={24} height={24} color='#FFA7A6' />
              )}
            </Link>
          </nav>
        </div>
        <Logo isDarkTheme={themeContext.isDarkTheme} />
        <button
          onClick={toggleThemeHandler}
          className='w-12 h-12 flex justify-center items-center rounded-full border border-primary-300'
        >
          {themeContext.isDarkTheme ? (
            <motion.div
              whileHover={{
                rotate: [0, 45, 90, 135, 180],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Sun width={24} height={24} color='#FFA7A6' />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{
                rotate: [0, 5, 10, 5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <MoonStars width={24} height={24} color='#FFA7A6' />
            </motion.div>
          )}
        </button>
      </header>
      <div
        className={`fixed z-10 h-screen w-screen bg-neutral-600/70 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={menuOpenHandler}
      />
    </>
  );
};

export default Navbar;
