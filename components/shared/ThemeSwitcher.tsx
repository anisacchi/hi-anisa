'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import Button from '@/components/ui/Button';
import { Moon, Sun } from '@/assets/icons';

const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    theme.toggleThemeHandler();
  };

  return (
    <Button
      aria-label='Theme Switcher'
      variant='secondary'
      icon='only'
      radius='full'
      onClick={toggleThemeHandler}
    >
      {theme.isDark ? (
        <Sun
          height={20}
          width={20}
          className='fill-primary-300 group-hover:fill-primary-200'
        />
      ) : (
        <Moon
          height={20}
          width={20}
          className='fill-primary-400 group-hover:fill-primary-500'
        />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
