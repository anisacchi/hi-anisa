'use client';

import { certificates } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowOut } from './icons';
import Link from 'next/link';
import { Button } from '.';

const CertificateDetails = ({ certificate }) => {
  return (
    <div className='flex gap-4 items-start'>
      <div className='relative basis-2/12 w-16 mt-1 flex justify-center'>
        <Image
          src='/SakuraRegular.svg'
          width={80}
          height={80}
          alt='Cherry Blossom'
        />
        <Image
          src={certificate.icon}
          width={32}
          height={32}
          alt={certificate.name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='relative basis-10/12 flex flex-col border border-primary-500 rounded-lg p-4'>
        <h2 className='lg:text-2xl text-xl font-bold text-primary-600 dark:text-primary-300'>
          {certificate.name}
        </h2>
        <span className='text-primary-700 dark:text-primary-400 font-semibold'>
          {certificate.organization}
        </span>
        <span className='text-neutral-500 dark:text-neutral-200 text-sm'>
          {certificate.issueDate}
        </span>
        <Link
          href={certificate.credentialUrl}
          target='_blank'
          className='absolute bottom-2 right-2 rounded-md bg-primary-300'
        >
          <Button type='button' intent='secondary' icon='only'>
            <motion.div
              whileHover={{
                y: -5,
                x: 5,
                transition: { duration: 0.8, ease: 'easeInOut' },
              }}
            >
              <ArrowOut
                className='w-5 h-5 fill-primary-700 dark:fill-primary-400 m-2'
              />
            </motion.div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className='relative w-full h-full flex flex-col gap-8'>
      {certificates.map((certificate, index) => (
        <CertificateDetails
          key={`certificate-${index}`}
          certificate={certificate}
        />
      ))}
    </div>
  );
};

export default Certificates;
