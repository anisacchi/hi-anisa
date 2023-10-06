'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from './icons';

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
    <button
      className={`${
        isVisible ? 'scale-100' : 'scale-0'
      } fixed z-50 bottom-4 right-4 rounded-full bg-primary-300 transition-all ease-out duration-300`}
      onClick={scrollToTopHandler}
    >
      <motion.div
        whileHover={{
          y: [0, -5, 0],
          transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <ArrowUp width={20} height={20} color='#fefefe' className='m-4' />
      </motion.div>
    </button>
  );
};

export default ButtonTop;
