'use client';

import Image from 'next/image';
import { Button, Transition } from '@/components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import Link from 'next/link';
import { Github, Instagram, LinkedIn, X } from '@/components/icons';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Anisa Permatasari',
          from_email: form.email,
          to_email: 'anisa.psari24@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            'Thank You. I will contact you as soon as possible 💚',
            {
              position: 'top-center',
              duration: 5000,
              style: {
                border: '1px solid #57CC7C',
              },
              iconTheme: {
                primary: '#57CC7C',
              },
            }
          );

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error('Sorry, something went wrong. Please try again 😔', {
            position: 'top-center',
            duration: 5000,
            style: {
              border: '1px solid #FF653F',
            },
            iconTheme: {
              primary: '#FF653F',
            },
          });
        }
      );
  };

  return (
    <>
      <Transition />
      <section className='w-full flex sm:flex-row flex-col-reverse justify-center items-center gap-6'>
        <div className='h-full sm:basis-1/2 w-full flex flex-col justify-center items-center'>
          <Image
            src='/hero2.webp'
            alt='Hero'
            width={1500}
            height={1198}
            className='w-full sm:block hidden max-w-[360px] h-auto mb-4'
						priority
          />
          <div className='flex gap-2 justify-center items-center'>
            <Link
              href='https://id.linkedin.com/in/anisa-permatasari-727094235'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                type='button'
                intent='secondary'
                icon='only'
                radius='full'
              >
                <LinkedIn className='h-5 w-5 fill-primary-700 dark:fill-primary-400' />
              </Button>
            </Link>
            <Link
              href='https://github.com/anisacchi'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                type='button'
                intent='secondary'
                icon='only'
                radius='full'
              >
                <Github className='h-5 w-5 fill-primary-700 dark:fill-primary-400' />
              </Button>
            </Link>
            <Link
              href='https://twitter.com/anisacchii'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                type='button'
                intent='secondary'
                icon='only'
                radius='full'
              >
                <X className='h-10 w-10 fill-primary-700 dark:fill-primary-400' />
              </Button>
            </Link>
            <Link
              href='https://www.instagram.com/anisa.__.chi/'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                type='button'
                intent='secondary'
                icon='only'
                radius='full'
              >
                <Instagram className='h-5 w-5 fill-primary-700 dark:fill-primary-400' />
              </Button>
            </Link>
          </div>
        </div>
        <div className='sm:basis-1/2 w-full max-w-sm p-4 flex flex-col gap-6 justify-center items-center bg-neutral-100 dark:bg-neutral-800 border border-primary-700 dark:border-primary-400 shadow-shadow-pink rounded-lg'>
          <h1 className='text-primary-700 dark:text-primary-400 lg:text-4xl text-2xl font-bold tracking-wide'>
            Get In Touch <span className='inline-block animate-wiggle'>👋</span>
          </h1>
          <form
            ref={formRef}
            onSubmit={submitHandler}
            className='w-full flex flex-col justify-center items-center gap-4'
          >
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-neutral-100 dark:bg-neutral-800 px-1'>
                Name
              </label>
              <input
                type='text'
                name='name'
                placeholder='Your Beautiful Name'
                value={form.name}
                onChange={changeInputHandler}
                autoComplete='off'
                required
                className='w-full mt-2 pt-4 pb-3 px-4 rounded-lg outline-none border border-primary-700 dark:border-primary-400 md:text-sm text-base bg-neutral-100 dark:bg-neutral-800 focus:border-2 focus:border-primary-800 dark:focus:border-primary-300'
              />
            </div>
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-neutral-100 dark:bg-neutral-800 px-1'>
                Email
              </label>
              <input
                type='text'
                name='email'
                placeholder='youremail@address.com'
                value={form.email}
                onChange={changeInputHandler}
                autoComplete='off'
                required
                className='w-full mt-2 pt-4 pb-3 px-4 rounded-lg outline-none border border-primary-700 dark:border-primary-400 md:text-sm text-base bg-neutral-100 dark:bg-neutral-800 focus:border-2 focus:border-primary-800 dark:focus:border-primary-300'
              />
            </div>
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-neutral-100 dark:bg-neutral-800 px-1'>
                Email
              </label>
              <textarea
                rows={3}
                name='message'
                placeholder='Say hi to me'
                value={form.message}
                onChange={changeInputHandler}
                autoComplete='off'
                required
                className='w-full mt-2 pt-4 pb-3 px-4 rounded-lg outline-none border border-primary-700 dark:border-primary-400 md:text-sm text-base bg-neutral-100 dark:bg-neutral-800 focus:border-2 focus:border-primary-800 dark:focus:border-primary-300'
              />
            </div>
            <div className='w-full flex justify-start'>
              <Button type='submit' intent='primary' icon='none'>
                <span>{loading ? 'Sending...' : 'Send'}</span>
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
}
