import { experiences } from '@/constants';
import Image from 'next/image';
import React from 'react';

const ExperienceDetails = ({ experience }) => {
  return (
    <div className='flex gap-4 items-start'>
      <div className='relative basis-2/12 w-16 mt-1 flex justify-center'>
        <Image
          src='/SakuraRegular.svg'
          width={80}
          height={80}
          alt='Cherry Blossom'
        />
        <Image
          src={experience.icon}
          width={32}
          height={32}
          alt={experience.company_name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='basis-10/12 flex flex-col border border-primary-500 rounded-lg p-4'>
        <h2 className='lg:text-2xl text-xl font-bold text-primary-600 dark:text-primary-300'>
          {experience.title}
        </h2>
        <span className='text-primary-700 dark:text-primary-400 font-semibold'>
          {experience.company_name}
        </span>
        <span className='text-neutral-500 dark:text-neutral-200 text-sm'>
          {experience.date}
        </span>
        <ul className='mt-5 ml-5 list-disc space-y-2'>
          {experience.job_desc.map((desc, index) => (
            <li key={`job-desc-${index}`}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <div className='relative w-full h-full flex flex-col gap-8'>
      {experiences.map((experience, index) => (
        <ExperienceDetails
          key={`experience-${index}`}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default Experiences;
