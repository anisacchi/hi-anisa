'use client';

import ThemeContext from '@/context/ThemeContext';
import React, { useContext } from 'react';
import { Button } from '@/components';
import { Moon, Sun } from '@/assets/icons';

const ToggleTheme = () => {
  const theme = useContext(ThemeContext);
	
  const toggleThemeHandler = () => {
    theme.toggleThemeHandler();
  };

  return (
    <Button
      type='button'
      intent='secondary'
      icon='only'
      radius='full'
      onClick={toggleThemeHandler}
    >
      {theme.isDark ? (
        <Sun className='w-5 h-5 fill-primary-300 group-hover:fill-primary-200 group-hover:animate-spin-slow transition-all duration-300 ease-linear' />
      ) : (
        <Moon className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 group-hover:animate-wiggle transition-all duration-300 ease-linear' />
      )}
    </Button>
  );
};

export default ToggleTheme;
