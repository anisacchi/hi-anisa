'use client';

import { Button, ButtonTop, Transition, TypeWriterEffect } from '@/components';
import { ArrowRight, Key, UserRegular } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Transition />
      <section className='w-full flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-2'>
        <div className='lg:hidden w-full flex flex-col'>
          <span className='font-medium text-lg font-nunito'>
            Hi<span className='text-primary-500'>!</span>
          </span>
          <h1 className='lg:text-4xl text-2xl font-bold font-nunito'>
            {`I'm`} <span className='text-primary-500'>Anisa</span> Permatasari
            <span className='text-primary-500'>.</span>
          </h1>
          <div className='flex gap-2 items-center'>
            <span>A passionate</span>
            <TypeWriterEffect
              strings={['React Developer', 'Front-End Developer']}
              style='text-lg text-primary-500 font-semibold'
            />
          </div>
          <span>
            who also enjoys{' '}
            <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-0 before:w-full before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-200 before:dark:bg-primary-800'>
              designing
            </span>{' '}
            and I love what I do <span className='text-primary-500'>♥</span>
          </span>
        </div>
        <div className='lg:basis-1/2 w-full flex justify-center items-center'>
          <Image
            src='/hero1.webp'
            alt='Hero'
            width={1500}
            height={1500}
            className='w-full max-w-sm h-auto mb-4'
						priority
          />
        </div>
        <div className='lg:basis-1/2 w-full flex flex-col justify-center items-center gap-10'>
          <div className='lg:flex hidden flex-col'>
            <span className='font-medium text-lg font-nunito'>
              Hi<span className='text-primary-500'>!</span>
            </span>
            <h1 className='lg:text-4xl text-2xl font-bold font-nunito'>
              {`I'm`} <span className='text-primary-500'>Anisa</span>{' '}
              Permatasari
              <span className='text-primary-500'>.</span>
            </h1>
            <div className='flex gap-2 items-center'>
              <span>A passionate</span>
              <TypeWriterEffect
                strings={['React Developer', 'Front-End Developer']}
                style='text-lg text-primary-500 font-semibold'
              />
            </div>
            <span>
              who also enjoys{' '}
              <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-0 before:w-full before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-200 before:dark:bg-primary-800'>
                designing
              </span>{' '}
              and I love what I do <span className='text-primary-500'>♥</span>
            </span>
          </div>
          <div className='w-full flex flex-col gap-4 items-center justify-start'>
            <div className='w-full max-w-xs px-4 py-3 sm:flex hidden items-center rounded-lg border border-primary-700 dark:border-primary-400'>
              <div className='pr-4 border-r border-r-primary-700 dark:border-r-primary-400'>
                <UserRegular className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
              </div>
              <div className='pl-4'>
                <span className='text-sm text-primary-600 dark:text-primary-300 tracking-wide'>
                  anisacchi
                </span>
              </div>
            </div>
            <div className='w-full max-w-xs px-4 py-3 sm:flex hidden items-center rounded-lg border border-primary-700 dark:border-primary-400'>
              <div className='pr-4 border-r border-r-primary-700 dark:border-r-primary-400'>
                <Key className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
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
                icon='left'
                radius='normal'
              >
                <span>Next</span>
                <ArrowRight className='lg:w-4 w-5 lg:h-4 h-5 fill-neutral-100 dark:fill-neutral-700 translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1' />
              </Button>
            </Link>
          </div>
        </div>
        <ButtonTop />
      </section>
    </>
  );
}
