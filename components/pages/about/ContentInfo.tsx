'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { animate } from '@/lib/animate';

type ContentInfoProps = {
  id: string;
  title: string;
  subtitle: string;
  content: React.JSX.Element;
};

const ContentInfo = ({ id, title, subtitle, content }: ContentInfoProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start('show');
    }
  }, [control, isInView]);

  return (
    <div className='flex flex-col gap-4'>
      <motion.div
        ref={ref}
        variants={animate}
        initial='hidden'
        animate='show'
        className='flex flex-col overflow-y-hidden'
      >
        <motion.span
          key={`sub-${id}`}
          initial={animate.hidden}
          animate={animate.show(0)}
          className='inline-block text-xs lg:text-sm text-primary-400 dark:text-primary-200'
        >
          {subtitle}
        </motion.span>
        <motion.span
          key={`title-${id}`}
          initial={animate.hidden}
          animate={animate.show(1)}
          className='inline-block text-xl md:text-2xl font-bold tracking-wide text-primary-500 dark:text-primary-100'
        >
          {title}
        </motion.span>
      </motion.div>

      {content}
    </div>
  );
};

export default ContentInfo;
