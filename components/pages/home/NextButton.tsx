import { ArrowRight } from '@/assets/icons';
import { Button } from '@/components/ui';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NextButtonProps = {
  value: string;
};

const NextButton = ({ value }: NextButtonProps) => {
  const localeId = useLocale();

  return (
    <Link href={`/${localeId}/about`} className='w-full'>
      <Button variant='primary' icon='right' radius='normal'>
        <span>{value}</span>
        <ArrowRight
          width={16}
          height={16}
          className='fill-neutral-100 dark:fill-neutral-500 translate-x-0 transition-all duration-300 ease-linear group-hover:translate-x-1'
        />
      </Button>
    </Link>
  );
};

export default NextButton;
