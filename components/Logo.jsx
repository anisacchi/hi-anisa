import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ isDarkTheme }) => {
  return (
    <div className='flex justify-center items-center'>
      <Link
        href='/'
        className='relative w-10 h-10 flex justify-center items-center'
      >
        {isDarkTheme ? (
          <Image
            src='/SakuraFill.svg'
            width={40}
            height={40}
            alt='Anisa Permatasari logo'
            className='absolute -z-10 top-0 left-0'
          />
        ) : (
          <Image
            src='/SakuraRegular.svg'
            width={40}
            height={40}
            alt='Anisa Permatasari logo'
            className='absolute -z-10 top-0 left-0'
          />
        )}
        <span className='font-bold text-primary-500 dark:text-primary-100'>A</span>
      </Link>
    </div>
  );
};

export default Logo;
