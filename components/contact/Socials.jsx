import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components';
import { Github, Instagram, LinkedIn, WhatsApp, X } from '@/assets/icons';

const Socials = () => {
  return (
    <div className='w-full h-full md:basis-1/2 flex flex-col justify-center items-center'>
      <Image
        src='/hero2.webp'
        alt='Hero'
        width={1500}
        height={1198}
        className='w-full max-w-[360px] h-auto mb-4 hidden md:block'
        priority
      />
      <div className='flex flex-row gap-2 justify-center items-center'>
        <Link
          href='https://wa.me/+6285791336463'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' intent='secondary' icon='only' radius='full'>
            <WhatsApp className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 group-hover:dark:fill-primary-200 duration-300 transition-all ease-in-out' />
          </Button>
        </Link>
        <Link
          href='https://id.linkedin.com/in/anisa-permatasari-727094235'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' intent='secondary' icon='only' radius='full'>
            <LinkedIn className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 group-hover:dark:fill-primary-200 duration-300 transition-all ease-in-out' />
          </Button>
        </Link>
        <Link
          href='https://github.com/anisacchi'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' intent='secondary' icon='only' radius='full'>
            <Github className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 group-hover:dark:fill-primary-200 duration-300 transition-all ease-in-out' />
          </Button>
        </Link>
        <Link
          href='https://twitter.com/anisacchii'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' intent='secondary' icon='only' radius='full'>
            <X className='w-10 h-10 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 group-hover:dark:fill-primary-200 duration-300 transition-all ease-in-out' />
          </Button>
        </Link>
        <Link
          href='https://www.instagram.com/anisa.__.chi/'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' intent='secondary' icon='only' radius='full'>
            <Instagram className='w-10 h-10 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 group-hover:dark:fill-primary-200 duration-300 transition-all ease-in-out' />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
