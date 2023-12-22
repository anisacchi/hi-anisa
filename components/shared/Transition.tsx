'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='fixed z-50 top-0 bottom-0 right-full h-full rounded-r-lg bg-primary-300'
      />
			<motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.15, duration: 1, ease: 'easeInOut' }}
        className='fixed z-40 top-0 bottom-0 right-full h-full rounded-r-lg bg-primary-200 dark:bg-primary-400'
      />
			<motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        className='fixed z-30 top-0 bottom-0 right-full h-full rounded-r-lg bg-primary-100 dark:bg-primary-500'
      />
    </>
  );
};

export default Transition;
