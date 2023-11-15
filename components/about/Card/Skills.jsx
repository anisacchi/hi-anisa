import { skillsData } from '@/constants';
import Image from 'next/image';
import React from 'react';

const SkillsContent = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2'>
      {skillsData.map((skill, index) => (
        <div
          key={`skill-${index}`}
          className='flex gap-4 p-4 border-y border-y-primary-300/20'
        >
          <Image
            src={skill.icon}
            width={400}
            height={400}
            className='w-8 h-8'
            alt={`Logo ${skill.name}`}
          />
          <div className='flex flex-col'>
            <span className='font-medium'>{skill.name}</span>
            <span className='text-xs text-neutral-400 dark:text-neutral-200'>{skill.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
