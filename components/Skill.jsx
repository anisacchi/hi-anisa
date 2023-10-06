import Image from 'next/image';
import React from 'react';
import { skills } from '@/constants';
import Marquee from 'react-fast-marquee';

const Skill = () => {
  return (
    <div className='w-full flex gap-2 overflow-x-hidden'>
      <Marquee
        play={true}
        pauseOnHover={true}
        pauseOnClick={true}
        speed={30}
        delay={5}
				gradient={false}
      >
        {skills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className='p-2 flex flex-col justify-center items-center'
          >
            <div className='relative w-16 flex justify-center items-center'>
              <Image
                src='/SakuraRegular.svg'
                width={64}
                height={64}
                alt='Cherry Blossom'
              />
              <Image
                src={skill.icon}
                width={28}
                height={28}
                alt={skill.name}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              />
            </div>
            <span className='md:text-xs text-sm'>{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skill;
