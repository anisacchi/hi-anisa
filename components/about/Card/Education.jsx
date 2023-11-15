import React from 'react';
import { educationsData } from '@/constants';
import Image from 'next/image';

const EducationContent = () => {
  return (
    <div className='flex gap-4 p-4 border-y border-y-primary-300/20'>
      <Image
        src={educationsData[0].icon}
        width={400}
        height={400}
        alt='Logo'
        className='w-8 h-8'
      />
      <div className='flex flex-col'>
        <div className='flex gap-2 items-center text-base lg:text-lg'>
          <span className='font-medium'>{educationsData[0].place}</span>
          <span className='font-bold'> · </span>
          <span className='text-neutral-300 dark:text-neutral-200'>
            {educationsData[0].year}
          </span>
        </div>

        <span className='font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100 tracking-wider'>
          {educationsData[0].degree}
        </span>
        <span className='text-sm lg:text-base text-neutral-300 dark:text-neutral-200'>
          Grade: {educationsData[0].gpa}
        </span>
      </div>
    </div>
  );
};

export default EducationContent;
