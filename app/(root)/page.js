import { UserRegular, Key, ArrowRight } from '@/assets/icons';
import { Button, Greeting, Transition } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <Transition />
			
      <div className='w-full flex flex-col lg:flex-row justify-center lg:gap-4'>
        {/* Start Mobile */}
        <div className='lg:hidden'>
          <Greeting />
        </div>
        {/* End Mobile */}

        <div className='lg:basis-1/2 w-full flex justify-center items-center'>
          <Image
            src='/hero1.webp'
            alt='Hero'
            width={1500}
            height={1500}
            className='w-full max-w-sm'
            priority
          />
        </div>
        <div className='lg:basis-1/2 w-full'>
          <div className='hidden lg:block'>
            <Greeting />
          </div>
          <div className='w-full padding lg:mt-4 flex flex-col gap-4 items-center justify-center'>
            <div className='w-full max-w-xs px-4 py-3 hidden sm:flex items-center rounded-lg border border-primary-400 dark:border-primary-300'>
              <div className='pr-4 border-r border-r-primary-400 dark:border-r-primary-300'>
                <UserRegular className='w-5 h-5 fill-primary-400 dark:fill-primary-300' />
              </div>
              <div className='pl-4'>
                <span className='text-sm text-primary-400 dark:text-primary-200'>
                  anisacchi
                </span>
              </div>
            </div>
            <div className='w-full max-w-xs px-4 py-3 hidden sm:flex items-center rounded-lg border border-primary-400 dark:border-primary-300'>
              <div className='pr-4 border-r border-r-primary-400 dark:border-r-primary-300'>
                <Key className='w-5 h-5 fill-primary-400 dark:fill-primary-300' />
              </div>
              <div className='pl-4 flex gap-2'>
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
                <Image
                  src='/SakuraFill.svg'
                  width={14}
                  height={14}
                  alt='Password'
                  className='animate-wiggle'
                />
              </div>
            </div>
            <Link href='/about' className='w-full max-w-xs' scroll={false}>
              <Button
                type='button'
                intent='primary'
                icon='right'
                radius='normal'
              >
                <span>Next</span>
                <ArrowRight className='w-4 h-4 fill-neutral-100 dark:fill-neutral-500 translate-x-0 transition-all duration-300 ease-linear group-hover:translate-x-1' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
