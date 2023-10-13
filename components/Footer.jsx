'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const path = usePathname();
  return (
    <footer
      className={`w-full padding ${
        path === '/' ? 'mb-0' : 'mb-[58px]'
      } md:mb-0 bg-primary-100 dark:bg-neutral-900 flex sm:flex-row flex-col justify-between items-center text-xs text-neutral-500 dark:text-neutral-200`}
    >
      <span>©️ 2023</span>
      <p>
        Created with{' '}
        <span className='text-primary-600 dark:text-primary-300'>♥</span> by{' '}
        <span className='font-semibold text-primary-600 dark:text-primary-300'>
          Anisa Permatasari
        </span>
      </p>
    </footer>
  );
};

export default Footer;
