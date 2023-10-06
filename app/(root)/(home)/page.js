'use client';

import { Transition, TypeWriterEffect } from '@/components';
import { ArrowRight, Key, UserRegular } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Transition />
      <section className='w-full flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-2'>
        <div className='lg:hidden w-full flex flex-col'>
          <span className='font-medium'>
            Hi<span className='text-primary-300'>!</span>
          </span>
          <h1 className='text-3xl font-bold'>
            {`I'm`} <span className='text-primary-300'>Anisa</span> Permatasari
            <span className='text-primary-300'>.</span>
          </h1>
          <div className='flex gap-2 items-center'>
            <span>A passionate</span>
            <TypeWriterEffect
              strings={['React Developer', 'Front-End Developer']}
              style='text-lg text-primary-300 font-semibold'
            />
          </div>
          <span>
            who also enjoys{' '}
            <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-0 before:w-full before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-200 before:dark:bg-primary-400'>
              designing
            </span>{' '}
            and I love what I do ♥
          </span>
        </div>
        <div className='lg:basis-1/2 w-full flex justify-center items-center'>
          <Image
            src='/hero1.webp'
            alt='Hero'
            width={1500}
            height={1500}
            className='w-full max-w-[360px] h-auto mb-4'
          />
        </div>
        <div className='lg:basis-1/2 w-full flex flex-col justify-center items-center gap-10'>
          <div className='lg:flex hidden w-full flex-col'>
            <span className='font-medium'>
              Hi<span className='text-primary-300'>!</span>
            </span>
            <h1 className='text-4xl font-bold'>
              {`I'm`} <span className='text-primary-300'>Anisa</span>{' '}
              Permatasari
              <span className='text-primary-300'>.</span>
            </h1>
            <div className='flex gap-2 items-center'>
              <span>A passionate</span>
              <TypeWriterEffect
                strings={['React Developer', 'Front-End Developer']}
                style='text-lg text-primary-300 font-semibold'
              />
            </div>
            <span>
              who also enjoys{' '}
              <span className='relative font-semibold before:absolute before:-z-10 before:bottom-[2px] before:left-0 before:w-full before:h-2 before:rounded-lg before:rotate-1 before:bg-primary-200 before:dark:bg-primary-400'>
                designing
              </span>{' '}
              and I love what I do ♥
            </span>
          </div>
          <div className='w-full flex flex-col gap-4 md:items-center lg:justify-start'>
            <div className='md:max-w-[360px] w-full px-4 py-3 sm:flex hidden items-center rounded-lg border border-primary-300'>
              <div className='pr-4 border-r border-r-primary-300'>
                <UserRegular width={20} height={20} color='#FFA7A6' />
              </div>
              <div className='pl-4'>
                <span className='text-sm text-neutral-300 dark:text-neutral-400'>
                  anisacchi
                </span>
              </div>
            </div>
            <div className='md:max-w-[360px] w-full px-4 py-3 sm:flex hidden items-center rounded-lg border border-primary-300'>
              <div className='pr-4 border-r border-r-primary-300'>
                <Key width={20} height={20} color='#FFA7A6' />
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
            <Link href='/about' className='md:max-w-[120px] w-full'>
              <button className='w-full flex min-w-28 px-4 py-2 justify-center items-center gap-2 rounded-lg bg-primary-300 hover:bg-primary-300/80 group'>
                <span className='font-medium text-neutral-100'>Next</span>
                <ArrowRight
                  width={20}
                  height={20}
                  color='#FEFEFE'
                  className='translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-2'
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
