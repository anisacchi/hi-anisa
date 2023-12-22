'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { motion, useAnimation, useInView } from 'framer-motion';
import animate from '@/lib/animate';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ArrowOut } from '@/assets/icons';

type CertificateCardProps = {
  index: number;
  name: string;
  organization: string;
  issueDate: string;
  credentialUrl: string;
  icon: string;
};

const CertificateCard = ({
  index,
  name,
  organization,
  issueDate,
  credentialUrl,
  icon,
}: CertificateCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start(animate.show(index));
    }
  }, [isInView, control, index]);

  return (
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        key={name}
        variants={animate}
        initial='hidden'
        animate={control}
        className='flex flex-row gap-4 p-4 border-y border-y-primary-300/20'
      >
        <Image
          src={icon}
          width={400}
          height={400}
          alt={`Logo of ${organization}`}
					className='w-8 h-8'
        />

        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-start md:items-center text-base lg:text-lg'>
            <span className='font-medium'>{organization}</span>
            <span className='hidden md:block'> · </span>
            <span className='text-sm md:text-base text-neutral-300 dark:text-neutral-200'>
              {issueDate}
            </span>
          </div>

          <span className='mt-2 font-semibold text-lg lg:text-xl text-primary-500 dark:text-primary-100'>
            {name}
          </span>
        </div>

        <Link href={credentialUrl} target='_blank' className='ml-auto'>
          <Button type='button' variant='secondary' icon='only' radius='normal'>
            <ArrowOut
              width={20}
              height={20}
              className='fill-primary-400 dark:fill-primary-300 group-hover:fill-primary-500 dark:group-hover:fill-primary-200'
            />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CertificateCard;
