import React from 'react';
import { useTranslations } from 'next-intl';
import { TypeWriterEffect } from '@/components/shared';

const Greeting = () => {
  const t = useTranslations('home.greeting');
  const jobs = ['React Developer', 'Front-End Developer'];

  return (
    <div className='w-full flex flex-col'>
      <span className='font-medium text-lg'>
        {t.rich('hi', {
          mark: (chunks) => <span className='text-primary-300'>{chunks}</span>,
        })}
      </span>

      <h1 className='text-2xl lg:text-4xl font-bold'>
        {t.rich('name', {
          name: (chunks) => <span className='text-primary-300'>{chunks}</span>,
          point: (chunks) => <span className='text-primary-300'>{chunks}</span>,
        })}
      </h1>

      <div className='flex flex-row gap-2 items-center'>
        <span>{t('intro1')}</span>
        <TypeWriterEffect
          strings={jobs}
          wrapperClassName='text-lg text-primary-300 font-semibold'
        />
      </div>
      <p className=''>
        {t.rich('intro2', {
          highlight: (chunks) => (
            <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-[-2px] before:w-[105%] before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-300/60'>
              {chunks}
            </span>
          ),
          heart: (chunks) => <span className='text-primary-300'>{chunks}</span>,
        })}
      </p>
    </div>
  );
};

export default Greeting;
