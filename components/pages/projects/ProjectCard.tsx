'use client';

import animate from '@/lib/animate';
import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type ProjectCardProps = {
  index: number;
  cover: string;
  title: string;
  desc: string;
  techs: string[];
};

const ProjectCard = ({
  index,
  cover,
  title,
  desc,
  techs,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start(animate.show(index));
    }
  }, [isInView, control, index]);

  return (
    <motion.div
      ref={ref}
      variants={animate}
      initial='hidden'
      animate={control}
      exit='hidden'
      className='h-full w-full flex flex-col rounded-lg border border-primary-400 dark:border-primary-300 bg-neutral-100 dark:bg-neutral-500 overflow-hidden group'
    >
      <Image
        src={cover}
        width={1366}
        height={768}
        alt={`Cover ${title}`}
        priority
      />
      <div className='h-full flex flex-col p-4 gap-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-left text-lg md:text-2xl font-semibold tracking-wide text-neutral-500 dark:text-neutral-100 group-hover:text-primary-400 dark:group-hover:text-primary-200 duration-300 transition-all'>
            {title}
          </h2>
          <p className='text-left text-neutral-300 dark:text-neutral-200 text-sm md:text-base'>
            {desc}
          </p>
        </div>
        <div className='mt-auto w-full flex flex-wrap gap-2'>
          {techs.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className='px-2 py-1 text-xs rounded-lg border border-primary-400 dark:border-primary-300 text-primary-400 dark:text-primary-300'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
