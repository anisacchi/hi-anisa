import React from 'react';
import { Navigation } from '@/components/shared';

const BottomNavigation = () => {
  return (
    <div className='fixed z-20 padding-x flex flex-row items-center bottom-0 left-0 right-0 border-t border-t-primary-300/10 bg-neutral-100 dark:bg-neutral-500'>
      <Navigation />
    </div>
  );
};

export default BottomNavigation;
