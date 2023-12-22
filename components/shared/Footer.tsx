import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className='w-full mt-4 padding flex flex-col sm:flex-row justify-between items-center text-xs bg-primary-100 dark:bg-neutral-400'>
      <span>©️ 2023</span>
      <p>
        {t('text1')}{' '}
        <span className='text-primary-400 dark:text-primary-200'>❤</span>
        {' '}{t('text2')}{' '}
        <span className='text-primary-400 dark:text-primary-200 font-semibold tracking-wide'>
          Anisa Permatasari
        </span>
      </p>
    </footer>
  );
};

export default Footer;
