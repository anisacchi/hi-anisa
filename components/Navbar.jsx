'use client';

import React, { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Logo } from '../components';
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
      {/* <header className='relative w-full lg:shadow-none shadow-shadow-neutral padding-x py-4 flex justify-between items-center'>
        <div className='relative w-12 h-12'>
          <Button
            type='button'
            intent='secondary'
            icon='only'
            radius='full'
            className='absolute z-30 top-[1px]'
            onClick={menuOpenHandler}
          >
            <div>
              <span
                className={`block h-0.5 lg:w-4 w-5 my-0.5 rounded-full transition-all duration-300 ease-out bg-primary-700 dark:bg-primary-400 group-hover:bg-primary-800 group-hover:dark:bg-primary-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
                }`}
              />
              <span
                className={`block h-0.5 lg:w-4 w-5 my-0.5 rounded-full transition-all duration-300 ease-out bg-primary-700 dark:bg-primary-400 group-hover:bg-primary-800 group-hover:dark:bg-primary-300 ${
                  isMenuOpen
                    ? '-rotate-45 -translate-y-0.5 '
                    : 'translate-y-0.5'
                }`}
              />
            </div>
          </Button>
          <nav className='absolute z-20 w-12 top-[60px] -left-[2.5px] flex flex-col gap-2 justify-center items-center'>
            <Link
              href='/'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/'
                  ? 'bg-primary-700 dark:bg-primary-400'
                  : 'bg-neutral-100 hover:bg-primary-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 border border-primary-700 dark:border-primary-400 hover:border-primary-800 hover:dark:border-primary-300 focus:border-primary-900 focus:dark:border-primary-200'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[58px]'}`}
              onClick={menuOpenHandler}
							scroll={false}
            >
              {path === '/' ? (
                <HouseFill className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
              ) : (
                <HouseRegular className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              )}
            </Link>
            <Link
              href='/about'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/about'
                  ? 'bg-primary-700 dark:bg-primary-400'
                  : 'bg-neutral-100 hover:bg-primary-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 border border-primary-700 dark:border-primary-400 hover:border-primary-800 hover:dark:border-primary-300 focus:border-primary-900 focus:dark:border-primary-200'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[104px]'}`}
              onClick={menuOpenHandler}
							scroll={false}
            >
              {path === '/about' ? (
                <UserFill className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
              ) : (
                <UserRegular className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              )}
            </Link>
            <Link
              href='/projects'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/projects'
                  ? 'bg-primary-700 dark:bg-primary-400'
                  : 'bg-neutral-100 hover:bg-primary-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 border border-primary-700 dark:border-primary-400 hover:border-primary-800 hover:dark:border-primary-300 focus:border-primary-900 focus:dark:border-primary-200'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[152px]'}`}
              onClick={menuOpenHandler}
							scroll={false}
            >
              {path === '/projects' ? (
                <LaptopFill className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
              ) : (
                <LaptopRegular className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              )}
            </Link>
            <Link
              href='/contact'
              className={`w-10 h-10 flex justify-center items-center rounded-full transition-all duration-300 ease-out ${
                path === '/contact'
                  ? 'bg-primary-700 dark:bg-primary-400'
                  : 'bg-neutral-100 hover:bg-primary-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 border border-primary-700 dark:border-primary-400 hover:border-primary-800 hover:dark:border-primary-300 focus:border-primary-900 focus:dark:border-primary-200'
              } ${isMenuOpen ? 'translate-y-0' : '-translate-y-[200px]'}`}
              onClick={menuOpenHandler}
							scroll={false}
            >
              {path === '/contact' ? (
                <LetterFill className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
              ) : (
                <LetterRegular className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              )}
            </Link>
          </nav>
        </div>
        <Logo isDarkTheme={themeContext.isDarkTheme} />
        <Button
          type='button'
          intent='secondary'
          icon='only'
          radius='full'
          onClick={toggleThemeHandler}
        >
          {themeContext.isDarkTheme ? (
            <motion.div
              whileHover={{
                rotate: 360,
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <Sun
                width={20}
                height={20}
                className='fill-primary-700 dark:fill-primary-400 group-hover:fill-primary-800 group-hover:dark:fill-primary-300'
              />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{
                rotate: [0, 20, 0, -20, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <MoonStars
                width={20}
                height={20}
                className='fill-primary-700 dark:fill-primary-400 group-hover:fill-primary-800 group-hover:dark:fill-primary-300 '
              />
            </motion.div>
          )}
        </Button>
      </header>
      <div
        className={`fixed z-10 h-screen w-screen bg-neutral-600/70 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={menuOpenHandler}
      /> */}
    </>
  );
};

export default Navbar;
