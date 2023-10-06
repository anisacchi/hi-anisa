'use client';

import React, { useContext } from 'react';
import { TypeWriterEffect } from '.';
import { Download, Location } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import ThemeContext from '@/context/ThemeContext';

const CardProfile = () => {
	const themeContext = useContext(ThemeContext);

  return (
    <div className='md:fixed md:flex-col min-[520px]:flex-row p-4 flex flex-col gap-4 justify-center items-center rounded-lg border border-primary-300 shadow-shadow-pink bg-neutral-100 dark:bg-neutral-600'>
      <Image
        src='/profile.webp'
        width={1308}
        height={1442}
        alt='Anisa Permatasari'
        className='max-w-[180px] md:w-32'
      />
      <div className='w-full flex flex-col justify-center items-center'>
        <span className='font-semibold'>Anisa Permatasari</span>
        <div className='flex gap-1 justify-center items-start'>
          <Location width={14} height={14} color={themeContext.isDarkTheme ? '#CCCCCC' : '#414141'} />
          <span className='text-xs text-neutral-500 dark:text-neutral-200'>
            Malang, East Java, Indonesia
          </span>
        </div>
        <TypeWriterEffect
          strings={['React Developer', 'Front-End Developer']}
          style='text-primary-300 text-sm font-semibold'
        />
        <div className='w-full mt-4 flex gap-4 justify-center items-center'>
          <Link
            href='https://drive.google.com/file/d/1EFCp9Tw9p_pdQ-iBuy_cdD8RiT50hxNq/view?usp=sharing'
            target='_blank'
            className='w-full flex gap-2 justify-center items-center py-2 px-4 bg-primary-300 hover:bg-primary-300/80 rounded-lg transition-all duration-300 ease-in-out'
          >
            <span className='text-neutral-100'>Resume</span>
            <Download width={18} height={18} color='#FEFEFE' />
          </Link>
          <Link
            href='/contact'
            className='w-full flex gap-2 justify-center items-center py-2 px-4 border border-primary-300 hover:text-primary-300 rounded-lg text-sm transition-all duration-300 ease-in-out'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
