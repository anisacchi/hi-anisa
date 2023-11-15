'use client';

import { navigation } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Logo, ToggleTheme } from '@/components';

const Navbar = () => {
  const path = usePathname();

  return (
    <div className='fixed z-20 w-full md:w-20 lg:w-60 bottom-0 md:top-0 padding-x md:padding-y md:p-0 flex flex-col items-center border-t md:border-t-0 md:border-r border-primary-300/20 rounded-t-lg md:rounded-none bg-neutral-100 dark:bg-neutral-500'>
      <div className='hidden md:block'>
        <Logo />
      </div>
      <nav className='md:mt-10 w-full flex flex-row md:flex-col'>
        {navigation.map((menu) => (
          <Link
            key={menu.name}
            href={menu.link}
            scroll={false}
            className={`basis-full p-5 lg:px-10 flex justify-center lg:justify-start lg:items-center gap-5 group ${
              path === menu.link
                ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-300'
                : 'border-b-0 md:border-l-0'
            }`}
          >
            {path === menu.link ? (
              <>
                <menu.icon.fill className='w-6 h-6 fill-primary-300' />
                <span className='hidden lg:block text-primary-300 font-bold'>
                  {menu.name}
                </span>
              </>
            ) : (
              <>
                <menu.icon.regular className='w-6 h-6 fill-neutral-400 dark:fill-neutral-200 group-hover:fill-primary-400 group-hover:dark:fill-primary-100' />
                <span className='hidden lg:block text-neutral-400 dark:text-neutral-200 group-hover:text-primary-400 group-hover:dark:text-primary-100'>
                  {menu.name}
                </span>
              </>
            )}
          </Link>
        ))}
      </nav>
      <div className='hidden md:block mt-auto'>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
