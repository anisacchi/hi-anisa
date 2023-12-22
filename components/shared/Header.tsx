import React from 'react';
import { LocaleSwitcher, Logo, ThemeSwitcher } from '@/components/shared';

const Header = () => {
  return (
    <header className='padding flex flex-row justify-between items-center'>
      <Logo />
      <div className='flex flex-row gap-2 justify-center items-center'>
        <LocaleSwitcher render='others' />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
