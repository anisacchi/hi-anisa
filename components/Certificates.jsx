'use client';

import { certificates } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowOut } from './icons';
import Link from 'next/link';

const CertificateDetails = ({ certificate }) => {
  return (
    <div className='flex gap-4 items-start'>
      <div className='relative basis-2/12 w-16 mt-1 flex justify-center'>
        <Image
          src='/SakuraRegular.svg'
          width={48}
          height={48}
          alt='Cherry Blossom'
        />
        <Image
          src={certificate.icon}
          width={18}
          height={18}
          alt={certificate.name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='relative basis-10/12 flex flex-col border border-primary-300 rounded-lg p-4'>
        <h3 className='lg:text-xl text-lg font-semibold text-primary-400'>
          {certificate.name}
        </h3>
        <span className='text-primary-300 dark:text-primary-300'>
          {certificate.organization}
        </span>
        <span className='text-neutral-400 dark:text-neutral-200 text-xs'>
          {certificate.issueDate}
        </span>
        <Link
          href={certificate.credentialUrl}
					target='_blank'
          className='absolute bottom-2 right-2 rounded-md bg-primary-300'
        >
          <motion.div
            whileHover={{
              y: -5,
              x: 5,
              transition: { duration: 0.8, ease: 'easeInOut' },
            }}
          >
            <ArrowOut width={18} height={18} color='#fefefe' className='m-2' />
          </motion.div>
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
