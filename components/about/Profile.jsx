'use client';

import { Download, LetterRegular, Location } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TypeWriter from 'typewriter-effect';
import { Button } from '@/components';

const Profile = () => {
  return (
    <div>
      <div className='absolute -z-20 right-0 left-0 top-0 h-32 bg-primary-300/20' />
      <div className='flex items-end justify-between'>
        <div className='w-28 md:w-32 md:mt-10 lg:w-40'>
          <Image
            src='/profile.webp'
            width={1308}
            height={1442}
            alt='Anisa Permatasari'
            className='w-full max-w-[240px]'
            priority
          />
        </div>

        {/* Display when >medium screen */}
        <div className='hidden md:flex justify-center items-center gap-2'>
          <Link href='/contact' scroll={false} className='md:mb-0 lg:mb-8'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <LetterRegular className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 transition-all duration-300 ease-in-out' />
            </Button>
          </Link>
          <Link
            href='https://drive.google.com/file/d/1EFCp9Tw9p_pdQ-iBuy_cdD8RiT50hxNq/view?usp=sharing'
            target='_blank'
            className='md:mb-0 lg:mb-8'
          >
            <Button type='button' intent='primary' icon='none' radius='full'>
              <span className='font-medium'>Resume</span>
            </Button>
          </Link>
        </div>
        {/* End */}
      </div>
      <div className='mt-4 flex flex-col justify-center'>
        <span className='text-xl md:text-2xl font-medium'>
          Anisa Permatasari
        </span>
        <TypeWriter
          options={{
            strings: ['React Developer', 'Front-End Developer'],
            autoStart: true,
            loop: true,
            wrapperClassName:
              'text-sm lg:text-base font-medium text-primary-300',
          }}
        />
        <div className='mt-1 flex gap-1 items-center'>
          <Location className='w-3 h-3 mb-[2px] fill-neutral-300 dark:fill-neutral-200' />
          <span className='text-xs lg:text-sm text-neutral-300 dark:text-neutral-200'>
            Malang, East Java, Indonesia
          </span>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-sm lg:text-base'>
          Hi, I am a passionate React/Front-End Developer and have a deep love
          for learning, especially about IT, where I am constantly looking for
          opportunities to expand my knowledge. In addition to my love for
          coding, I also have a creative side that I indulge in by designing
          graphics and drawing.{' '}
          <span className='font-medium'>
            {`Let's collaborate and create something amazing!`}
          </span>
        </p>
      </div>

      {/* Display when small screen */}
      <div className='mt-4 flex md:hidden justify-between items-center gap-2'>
        <Link href='/contact' scroll={false} className='w-full'>
          <Button type='button' intent='secondary' icon='none' radius='normal'>
            <span>Contact</span>
          </Button>
        </Link>
        <Link
          href='https://drive.google.com/file/d/1EFCp9Tw9p_pdQ-iBuy_cdD8RiT50hxNq/view?usp=sharing'
          target='_blank'
          className='w-full'
        >
          <Button type='button' intent='primary' icon='none' radius='normal'>
            <span>Resume</span>
          </Button>
        </Link>
      </div>
      {/* End */}
    </div>
  );
};

export default Profile;
