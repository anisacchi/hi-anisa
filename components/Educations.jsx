'use client';

import React from 'react';
import { educationsData } from '@/constants';
import Image from 'next/image';

const EducationDetails = ({ degree, place, year, gpa, icon }) => {
  return (
    <div className='w-full flex gap-4 items-start'>
      <div className='relative basis-2/12 w-16 mt-1 flex justify-center'>
        <Image
          src='/SakuraRegular.svg'
          width={80}
          height={80}
          alt='Cherry Blossom'
        />
        <Image
          src={icon}
          width={32}
          height={32}
          alt={place}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='w-full basis-10/12 flex flex-col border border-primary-500 rounded-lg p-4'>
        <h2 className='lg:text-2xl text-xl font-bold text-primary-600 dark:text-primary-300'>
          {degree}
        </h2>
        <span>
          <span className='text-primary-700 dark:text-primary-400 font-semibold'>
            {place}
          </span>{' '}
          | Grade: {gpa}
        </span>
        <span className='text-neutral-500 dark:text-neutral-200 text-sm'>
          {year}
        </span>
      </div>
    </div>
  );
};

const Educations = () => {
  return (
    <div className='relative w-full h-full'>
      {educationsData.map((education, index) => (
        <EducationDetails
          key={`education-${index}`}
          degree={education.degree}
          place={education.place}
          year={education.year}
          gpa={education.gpa}
          icon={education.icon}
        />
      ))}
    </div>
  );
};

export default Educations;
