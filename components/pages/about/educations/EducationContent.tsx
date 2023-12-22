'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

import dataEn from '@/constants/educations/en.json';
import dataId from '@/constants/educations/id.json';

type EducationContentProps = {
  locale: string;
};

const EducationContent = ({ locale }: EducationContentProps) => {
  const contents = locale === 'en' ? dataEn : dataId;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', delay: 0.6, duration: 1 },
      });
    }
  }, [control, isInView]);

  return (
    <>
      {contents.map((content) => (
        <div ref={ref} key={content.id} className='overflow-hidden'>
          <motion.div
            key={content.id}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={control}
            className='flex gap-4 p-4 border-y border-y-primary-300/20 '
          >
            <Image
              src={content.icon}
              width={400}
              height={400}
              alt='Logo'
              className='w-8 h-8'
            />
            <div className='flex flex-col'>
              <div className='flex flex-row gap-2 items-baseline text-base lg:text-lg'>
                <span className='font-medium'>{content.place}</span>
                <span className='font-bold'> · </span>
                <span className='text-sm md:text-base text-neutral-300 dark:text-neutral-200'>
                  {content.year}
                </span>
              </div>

              <span className='font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100 tracking-wide'>
                {content.degree}
              </span>
              <div className='text-sm lg:text-base text-neutral-300 dark:text-neutral-200'>
                {content.gpa_text}: {content.gpa_number}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default EducationContent;
