import { experiences } from '@/constants';
import Image from 'next/image';
import React from 'react';

const ExperienceDetails = ({ experience }) => {
  return (
    <div className='flex gap-4 items-start'>
      <div className='relative basis-2/12 w-16 mt-1 flex justify-center'>
        <Image
          src='/SakuraRegular.svg'
          width={48}
          height={48}
          alt='Cherry Blossom'
        />
        <Image
          src={experience.icon}
          width={18}
          height={18}
          alt={experience.company_name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='basis-10/12 flex flex-col border border-primary-300 rounded-lg p-4'>
        <h3 className='lg:text-xl text-lg font-semibold text-primary-400'>
          {experience.title}
        </h3>
        <span className='text-primary-300 dark:text-primary-300'>
          {experience.company_name}
        </span>
        <span className='text-neutral-400 dark:text-neutral-200 text-xs'>
          {experience.date}
        </span>
        <ul className='mt-5 ml-5 list-disc space-y-2 text-neutral-500 dark:text-neutral-200'>
          {experience.job_desc.map((desc, index) => (
            <li key={`job-desc-${index}`} className='md:text-sm text-base'>{desc}</li>
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
