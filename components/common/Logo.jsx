import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='w-10 h-10 relative flex justify-center items-center'>
      <Image
        src='/SakuraFill.svg'
        width={40}
        height={40}
        alt='Anisa Permatasari logo'
				className='absolute -z-10 top-0 left-0'
      />
			<span className='font-bold text-neutral-100'>A</span>
    </div>
  );
};

export default Logo;
