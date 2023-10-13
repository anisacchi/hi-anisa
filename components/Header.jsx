'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Button, Logo, Navbar } from '.';
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
import Link from 'next/link';

const Header = () => {
  const path = usePathname();
  const themeContext = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeContext.toggleThemeHandler();
  };
  return (
    <>
      {path === '/' ? (
        ''
      ) : (
        <>
          <header className='w-full flex justify-between items-center padding-x py-2'>
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
          <nav className='fixed z-10 bottom-0 w-full px-4 flex justify-between items-center bg-neutral-100 dark:bg-neutral-700'>
            <Link
              href='/'
              className={`w-full p-4 flex justify-center items-center transition-all duration-300 ease-out ${path === '/' ? 'border-b-2 border-primary-700 dark:border-primary-400' : 'border-b-0'}`}
              scroll={false}
            >
              {path === '/' ? (
                <HouseFill className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              ) : (
                <HouseRegular className='w-5 h-5 fill-neutral-700 dark:fill-neutral-100' />
              )}
            </Link>
            <Link
              href='/about'
              className={`w-full p-4 flex justify-center items-center transition-all duration-300 ease-out ${path === '/about' ? 'border-b-2 border-primary-700 dark:border-primary-400' : 'border-b-0'}`}
              scroll={false}
            >
              {path === '/about' ? (
                <UserFill className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              ) : (
                <UserRegular className='w-5 h-5 fill-neutral-700 dark:fill-neutral-100' />
              )}
            </Link>
            <Link
              href='/projects'
              className={`w-full p-4 flex justify-center items-center transition-all duration-300 ease-out ${path === '/projects' ? 'border-b-2 border-primary-700 dark:border-primary-400' : 'border-b-0'}`}
              scroll={false}
            >
              {path === '/projects' ? (
                <LaptopFill className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              ) : (
                <LaptopRegular className='w-5 h-5 fill-neutral-700 dark:fill-neutral-100' />
              )}
            </Link>
            <Link
              href='/contact'
              className={`w-full p-4 flex justify-center items-center transition-all duration-300 ease-out ${path === '/contact' ? 'border-b-2 border-primary-700 dark:border-primary-400' : 'border-b-0'}`}
              scroll={false}
            >
              {path === '/contact' ? (
                <LetterFill className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              ) : (
                <LetterRegular className='w-5 h-5 fill-neutral-700 dark:fill-neutral-100' />
              )}
            </Link>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
