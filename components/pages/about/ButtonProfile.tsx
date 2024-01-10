import { Envelope } from '@/assets/icons';
import { Button } from '@/components/ui';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const ButtonProfile = () => {
  const t = useTranslations('about');

  return (
    <div className='mt-4 md:mt-0 flex flex-row justify-center items-center gap-2'>
      <Link href='/contact' scroll={false} className='w-full'>
        <Button
          type='button'
          variant='secondary'
          icon='only'
          radius='full'
          className='hidden md:block'
        >
          <Envelope
            height={20}
            width={20}
            className='fill-primary-400 dark:fill-primary-300 group-hover:fill-primary-500 dark:group-hover:fill-primary-200 transition-all duration-300 ease-in-out'
          />
        </Button>

        <Button
          type='button'
          variant='secondary'
          icon='none'
          radius='normal'
          className='block md:hidden'
        >
          <span>{t('contactButtonText')}</span>
        </Button>
      </Link>

      <Link
        href='https://drive.google.com/file/d/15QdjBsQ9Jlg1leM2SWATqiDRJVMfm4h6/view?usp=sharingg'
        target='_blank'
        className='w-full md:mb-0 lg:mb-0'
      >
        <Button
          type='button'
          variant='primary'
          icon='none'
          radius='full'
          className='hidden md:block'
        >
          <span>Resume</span>
        </Button>

        <Button
          type='button'
          variant='primary'
          icon='none'
          radius='normal'
          className='block md:hidden'
        >
          <span>Resume</span>
        </Button>
      </Link>
    </div>
  );
};

export default ButtonProfile;
