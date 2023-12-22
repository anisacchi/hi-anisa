'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import animate from '@/lib/animate';

type ExperienceCardProps = {
  index: number;
  title: string;
  company: string;
  icon: string;
  date: string;
  desc: string[];
};

const ExperienceCard = ({
  index,
  title,
  company,
  icon,
  date,
  desc,
}: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start(animate.show(index));
    }
  }, [isInView, control, index]);

  return (
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        key={title}
        variants={animate}
        initial='hidden'
        animate={control}
        className='flex gap-4 p-4 border-y border-y-primary-300/20'
      >
        <Image
          src={icon}
          width={400}
          height={400}
          alt={`Logo-${company}`}
          className='w-8 h-8'
        />
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center text-base lg:text-lg'>
            <span className='font-medium'>{company}</span>
            <span className='hidden md:block font-bold'> · </span>
            <span className='text-sm md:text-base text-neutral-300 dark:text-neutral-200'>
              {date}
            </span>
          </div>

          <span className='mt-2 font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100'>
            {title}
          </span>

          <div className='mt-2 flex flex-col gap-2'>
            <ol className='ml-5 list-disc list-outside'>
              {desc.map((jobDesc, index) => (
                <li key={`job-desc-${index}`}>
                  <span className='text-sm lg:text-base'>{jobDesc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
