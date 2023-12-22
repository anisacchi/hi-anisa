'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import animate from '@/lib/animate';

type SkillCardProps = {
  index: number;
  name: string;
  icon: string;
  category: string;
};

const SkillCard = ({ index, name, icon, category }: SkillCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start(animate.show(index));
    }
  }, [control, isInView, index]);

  return (
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        key={name}
        variants={animate}
        initial='hidden'
        animate={control}
        className='flex gap-4 p-4 border-y border-y-primary-300/20'
      >
        <Image
          src={icon}
          width={400}
          height={400}
          alt={`Logo ${name}`}
          className='w-8 h-8'
        />
        <div className='flex flex-col'>
          <span className='font-medium'>{name}</span>
          <span className='text-xs text-neutral-400 dark:text-neutral-200'>
            {category}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
