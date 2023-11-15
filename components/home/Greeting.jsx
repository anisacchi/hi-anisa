'use client';

import React from 'react';
import TypeWriter from 'typewriter-effect';

const Greeting = () => {
  return (
    <div className='w-full padding flex flex-col'>
      <span className='font-medium text-lg'>
        Hi<span className='text-primary-300'>!</span>
      </span>
      <h1 className='text-2xl lg:text-4xl font-bold'>
        {`I'm `}
        <span className='text-primary-300'>Anisa </span>
        Permatasari
        <span className='text-primary-300'>.</span>
      </h1>
      <div className='flex gap-2 items-center'>
        <span>A passionate</span>
        <TypeWriter
          options={{
            strings: ['React Developer', 'Front-End Developer'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'text-lg text-primary-300 font-semibold',
          }}
        />
      </div>
        <span>
          Who also enjoys{' '}
          <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-[-2px] before:w-[105%] before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-300/60'>
            designing
          </span>{' '}
          and I love what I do{' '}
					<span className='text-primary-300'>❤</span>
        </span>
    </div>
  );
};

export default Greeting;
