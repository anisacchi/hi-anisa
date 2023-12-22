'use client';

import React from 'react';
import { navigation } from '@/constants';
import { Link, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

const Navigation = () => {
  const path = usePathname();
  const locale = useLocale();

  return (
    <nav className='w-full flex flex-row md:flex-col'>
      {navigation.map((menu) => (
        <Link
          key={menu.id}
          href={menu.link}
          scroll={false}
          className={`basis-full p-5 lg:px-10 flex flex-row justify-center lg:justify-start lg:items-center gap-5 group ${
            path === menu.link
              ? 'border-b-2 md:border-b-0 md:border-l-2 border-primary-300'
              : 'border-b-0 md:border-l-0'
          }`}
        >
          {path === menu.link ? (
            <>
              <menu.icon.fill
                width={24}
                height={24}
                className='fill-primary-300'
              />
              <span className='hidden lg:block text-primary-300 font-bold'>
                {locale === 'en' && menu.name_en}
                {locale === 'id' && menu.name_id}
              </span>
            </>
          ) : (
            <>
              <menu.icon.regular
                width={24}
                height={24}
                className='fill-neutral-400 dark:fill-neutral-200 group-hover:fill-primary-400 dark:group-hover:fill-primary-100'
              />
              <span className='hidden lg:block text-neutral-400 dark:text-neutral-200 group-hover:text-primary-400 dark:group-hover:text-primary-100'>
                {locale === 'en' && menu.name_en}
                {locale === 'id' && menu.name_id}
              </span>
            </>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
