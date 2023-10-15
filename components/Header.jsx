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
        <header className='w-full flex justify-between items-center padding-x py-2'>
          <Logo />
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
      ) : (
        <>
          <header className='w-full md:w-[81px] lg:w-[161px] md:bg-neutral-100 md:dark:bg-neutral-700 border-r-0 md:border-r border-r-primary-200 dark:border-r-0'>
            <div className='md:hidden flex justify-between items-center padding-x py-2'>
              <Logo />
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
            </div>
            <div className='w-full md:w-20 lg:w-40 flex flex-row md:flex-col justify-center items-center border-r-0 md:border-r border-r-primary-200'>
              <div className='fixed z-10 left-0 bottom-0 md:top-8 md:bottom-8 w-full md:w-20 lg:w-36 flex flex-col justify-between items-center'>
                <div className='hidden md:block'>
                  <Logo />
                </div>
                <nav className='flex flex-row md:flex-col md:mt-10 justify-between items-center w-full border-t rounded-t-lg border-t-primary-200 md:border-t-0 dark:border-t-0 bg-neutral-100 dark:bg-neutral-700'>
                  <Link
                    href='/'
                    className={`w-full p-4 flex justify-center items-center gap-4 group ${
                      path === '/'
                        ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-700 dark:border-primary-400'
                        : 'border-b-0'
                    }`}
                    scroll={false}
                  >
                    {path === '/' ? (
                      <>
                        <HouseFill className='w-6 h-6 fill-primary-700 dark:fill-primary-400' />
                        <span className='lg:block hidden text-primary-700 dark:text-primary-400 font-semibold'>
                          Home
                        </span>
                      </>
                    ) : (
                      <>
                        <HouseRegular className='w-6 h-6 fill-neutral-500 dark:fill-neutral-100 group-hover:fill-primary-500 transition-all duration-300 ease-out' />
                        <span className='lg:block hidden text-neutral-600 dark:text-neutral-100 group-hover:text-primary-500 transition-all duration-300 ease-out'>
                          Home
                        </span>
                      </>
                    )}
                  </Link>
                  <Link
                    href='/about'
                    className={`w-full p-4 flex justify-center items-center gap-4 group ${
                      path === '/about'
                        ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-700 dark:border-primary-400'
                        : 'border-b-0'
                    }`}
                    scroll={false}
                  >
                    {path === '/about' ? (
                      <>
                        <UserFill className='w-6 h-6 fill-primary-700 dark:fill-primary-400' />
                        <span className='lg:block hidden text-primary-700 dark:text-primary-400 font-semibold'>
                          About
                        </span>
                      </>
                    ) : (
                      <>
                        <UserRegular className='w-6 h-6 fill-neutral-500 dark:fill-neutral-100 group-hover:fill-primary-500 transition-all duration-300 ease-out' />
                        <span className='lg:block hidden text-neutral-600 dark:text-neutral-100 group-hover:text-primary-500 transition-all duration-300 ease-out'>
                          About
                        </span>
                      </>
                    )}
                  </Link>
                  <Link
                    href='/projects'
                    className={`w-full p-4 flex justify-center items-center gap-4 group ${
                      path === '/projects'
                        ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-700 dark:border-primary-400'
                        : 'border-b-0'
                    }`}
                    scroll={false}
                  >
                    {path === '/projects' ? (
                      <>
                        <LaptopFill className='w-6 h-6 fill-primary-700 dark:fill-primary-400' />
                        <span className='lg:block hidden text-primary-700 dark:text-primary-400 font-semibold'>
                          Projects
                        </span>
                      </>
                    ) : (
                      <>
                        <LaptopRegular className='w-6 h-6 fill-neutral-500 dark:fill-neutral-100 group-hover:fill-primary-500 transition-all duration-300 ease-out' />
                        <span className='lg:block hidden text-neutral-600 dark:text-neutral-100 group-hover:text-primary-500 transition-all duration-300 ease-out'>
                          Projects
                        </span>
                      </>
                    )}
                  </Link>
                  <Link
                    href='/contact'
                    className={`w-full p-4 flex justify-center items-center gap-4 group ${
                      path === '/contact'
                        ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-700 dark:border-primary-400'
                        : 'border-b-0'
                    }`}
                    scroll={false}
                  >
                    {path === '/contact' ? (
                      <>
                        <LetterFill className='w-6 h-6 fill-primary-700 dark:fill-primary-400' />
                        <span className='lg:block hidden text-primary-700 dark:text-primary-400 font-semibold'>
                          Contact
                        </span>
                      </>
                    ) : (
                      <>
                        <LetterRegular className='w-66 h-6 fill-neutral-500 dark:fill-neutral-100 group-hover:fill-primary-500 transition-all duration-300 ease-out' />
                        <span className='lg:block hidden text-neutral-600 dark:text-neutral-100 group-hover:text-primary-500 transition-all duration-300 ease-out'>
                          Contact
                        </span>
                      </>
                    )}
                  </Link>
                </nav>
                <Button
                  type='button'
                  intent='secondary'
                  icon='only'
                  radius='full'
                  onClick={toggleThemeHandler}
                  className='hidden md:block mt-auto'
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
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
