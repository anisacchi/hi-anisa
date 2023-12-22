import React from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { Button } from '@/components/ui';
import { Github, Instagram, Linkedin, Whatsapp, X } from '@/assets/icons';

const Social = () => {
  return (
    <div>
      <Image
        src='/assets/images/hero2.webp'
        alt='Hero'
        width={1500}
        height={1198}
        className='hidden md:block w-full max-w-[360px] h-auto mb-4'
        priority
      />
      <div className='flex flex-row gap-2 justify-center items-center'>
        <Link
          href='https://wa.me/+6285791336463'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' variant='secondary' icon='only' radius='full'>
            <Whatsapp
              width={24}
              height={24}
              className='fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 duration-300 transition-all ease-in-out'
            />
          </Button>
        </Link>

				<Link
          href='https://id.linkedin.com/in/anisa-permatasari-727094235'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' variant='secondary' icon='only' radius='full'>
            <Linkedin
              width={20}
              height={20}
              className='fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 duration-300 transition-all ease-in-out'
            />
          </Button>
        </Link>
				
				<Link
          href='https://github.com/anisacchi'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' variant='secondary' icon='only' radius='full'>
            <Github
              width={24}
              height={24}
              className='fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 duration-300 transition-all ease-in-out'
            />
          </Button>
        </Link>

				<Link
          href='https://twitter.com/anisacchii'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' variant='secondary' icon='only' radius='full'>
            <X
              width={20}
              height={20}
              className='fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 duration-300 transition-all ease-in-out'
            />
          </Button>
        </Link>

				<Link
          href='https://www.instagram.com/anisa.__.chi/'
          target='_blank'
          rel='noreferrer'
        >
          <Button type='button' variant='secondary' icon='only' radius='full'>
            <Instagram
              width={24}
              height={24}
              className='fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200 duration-300 transition-all ease-in-out'
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Social;
