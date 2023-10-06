import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full padding bg-primary-100 dark:bg-neutral-500 flex sm:flex-row flex-col justify-between items-center text-sm text-neutral-500 dark:text-neutral-200'>
      <span>©️ 2023</span>
      <p>
        Created with <span className='text-base text-primary-300'>♥</span> by{' '}
        <span className='font-semibold'>Anisa Permatasari</span>
      </p>
    </footer>
  );
};

export default Footer;
