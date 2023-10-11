'use client';

import React from 'react';
import { Button, TypeWriterEffect } from '.';
import { Download, Location } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CardProfile = () => {
  return (
    <div className='lg:mr-10 lg:flex-col lg:left-40 min-[520px]:flex-row w-full max-w-lg p-4 flex flex-col gap-4 justify-center items-center rounded-lg border border-primary-700 dark:border-primary-400 bg-neutral-100 dark:bg-neutral-800'>
      <Image
        src='/profile.webp'
        width={1308}
        height={1442}
        alt='Anisa Permatasari'
        className='max-w-[180px] lg:w-48'
				priority
      />
      <div className='w-full flex flex-col justify-center items-center'>
        <span className='font-semibold text-lg'>Anisa Permatasari</span>
        <div className='flex gap-1 justify-center items-start'>
          <Location className='w-4 h-4 fill-neutral-500 dark:fill-neutral-200' />
          <span className='text-sm text-neutral-500 dark:text-neutral-200'>
            Malang, East Java, Indonesia
          </span>
        </div>
        <TypeWriterEffect
          strings={['React Developer', 'Front-End Developer']}
          style='text-primary-600 dark:text-primary-500 font-semibold'
        />
        <div className='w-full mt-4 flex gap-4 justify-center items-center'>
          <Link
            href='https://drive.google.com/file/d/1EFCp9Tw9p_pdQ-iBuy_cdD8RiT50hxNq/view?usp=sharing'
            target='_blank' className='w-full'
          >
            <Button type='button' intent='primary' icon='right' >
              <span>Resume</span>
              <Download className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700 translate-y-0 group-hover:-translate-y-1 duration-300 transition-all ease-in-out' />
            </Button>
          </Link>
          <Link href='/contact' className='w-full' scroll={false}>
            <Button type='button' intent='secondary' icon='none'>
              <span>Contact</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
