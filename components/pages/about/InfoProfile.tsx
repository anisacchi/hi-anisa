import { MapPin } from '@/assets/icons';
import { TypeWriterEffect } from '@/components/shared';
import { useTranslations } from 'next-intl';
import React from 'react';

const InfoProfile = () => {
  const t = useTranslations('about');

  return (
    <>
      <div className='mt-4 flex flex-col justify-center'>
        <span className='text-xl md:text-2xl font-medium'>
          Anisa Permatasari
        </span>
        <TypeWriterEffect
          strings={['React Developer', 'Front-End Developer']}
          wrapperClassName='text-sm lg:text-base font-medium text-primary-300'
        />
        <div className='mt-1 flex gap-1 items-center'>
          <MapPin
            width={12}
            height={12}
            className='mb-[2px] fill-neutral-300 dark:fill-neutral-200'
          />
          <span className='text-xs lg:text-sm text-neutral-300 dark:text-neutral-200'>
            {t('place')}
          </span>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-sm lg:text-base'>{t('bio')}</p>
      </div>
    </>
  );
};

export default InfoProfile;
