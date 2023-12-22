import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='w-11 h-11 relative flex justify-center items-center'>
      <Image
        src='/assets/icons/sakura-fill.svg'
        width={44}
        height={44}
        alt='Anisa Permatasari Logo'
        className='absolute -z-10 top-0 left-0'
      />
      <span className='font-bold text-neutral-100'>A</span>
    </div>
  );
};

export default Logo;
