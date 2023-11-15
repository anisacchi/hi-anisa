import { ArrowOut } from '@/assets/icons';
import { Button } from '@/components';
import { certificatesData } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CertificatesContent = () => {
  return (
    <div className='flex flex-col'>
      {certificatesData.map((certificate, index) => (
        <div
          key={`certificate-${index}`}
          className='flex gap-4 p-4 border-y border-y-primary-300/20'
        >
          <Image
            src={certificate.icon}
            width={400}
            height={400}
            alt='Logo'
            className='w-8 h-8'
          />

          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center text-base lg:text-lg'>
              <span className='font-medium'>{certificate.organization}</span>
              <span className='hidden md:block font-bold'> · </span>
              <span className='mt-2 md:mt-0 text-sm md:text-base text-neutral-300 dark:text-neutral-200'>
                {certificate.issueDate}
              </span>
            </div>

            <span className='mt-2 font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100'>
              {certificate.name}
            </span>
          </div>
          <Link
            href={certificate.credentialUrl}
            target='_blank'
            className='ml-auto'
          >
            <Button
              type='button'
              intent='secondary'
              icon='only'
              radius='normal'
            >
              <ArrowOut className='w-4 h-4 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200' />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CertificatesContent;
