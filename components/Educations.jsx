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
          width={48}
          height={48}
          alt='Cherry Blossom'
        />
        <Image
          src={icon}
          width={24}
          height={24}
          alt={place}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='w-full basis-10/12 flex flex-col border border-primary-300 rounded-lg p-4'>
        <h3 className='lg:text-xl text-lg font-semibold text-primary-400'>
          {degree}
        </h3>
        <span className='text-sm'>
          <span className='text-primary-300 dark:text-primary-300'>
            {place}
          </span>{' '}
          | Grade: {gpa}
        </span>
        <span className='text-neutral-400 dark:text-neutral-200 text-xs'>
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
