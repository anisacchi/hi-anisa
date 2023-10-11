'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from './icons';
import { Button } from '.';

const ButtonTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibilityButton = () => {
      if (window.pageYOffset > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibilityButton);

    return () => window.removeEventListener('scroll', toggleVisibilityButton);
  }, []);

  return (
    <Button
      type='button'
      intent='secondary'
      icon='only'
      radius='full'
      className={`${
        isVisible ? 'scale-100' : 'scale-0'
      } fixed z-50 bottom-4 right-4 transition-all ease-out duration-300`}
      onClick={scrollToTopHandler}
    >
      <motion.div
        whileHover={{
          y: [0, -5, 0],
          transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <ArrowUp
          width={20}
          height={20}
          className='m-4 fill-primary-700 dark:fill-primary-400'
        />
      </motion.div>
    </Button>
  );
};

export default ButtonTop;
