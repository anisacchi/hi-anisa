import { experiencesData } from '@/constants';
import Image from 'next/image';
import React from 'react';

const ExperiencesContent = () => {
  return (
    <div className='flex flex-col'>
      {experiencesData.map((experience, index) => (
        <div
          key={`experience-${index}`}
          className='flex gap-4 p-4 border-y border-y-primary-300/20'
        >
          <Image
            src={experience.icon}
            width={400}
            height={400}
            alt='Logo'
            className='w-8 h-8'
          />
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center text-base lg:text-lg'>
              <span className='font-medium'>{experience.company_name}</span>
              <span className='hidden md:block font-bold'> · </span>
              <span className='text-sm md:text-base text-neutral-300 dark:text-neutral-200'>
                {experience.date}
              </span>
            </div>

            <span className='mt-2 font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100 tracking-wider'>
              {experience.title}
            </span>

            <div className='mt-2 flex flex-col gap-2'>
              <ol className='ml-5 list-disc list-outside'>
                {experience.job_desc.map((jobDesc, index) => (
                  <li key={`job-desc-${index}`}>
                    <span className='text-sm lg:text-base'>{jobDesc}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesContent;
