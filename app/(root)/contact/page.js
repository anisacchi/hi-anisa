'use client';

import Image from 'next/image';
import { Transition } from '@/components';
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
        <div className='h-full basis-1/2 flex flex-col justify-center items-center'>
          <Image
            src='/hero2.webp'
            alt='Hero'
            width={1500}
            height={1198}
            className='w-full sm:block hidden max-w-[360px] h-auto mb-4'
          />
          <div className='flex gap-2 justify-center items-center'>
            <Link
              href='https://id.linkedin.com/in/anisa-permatasari-727094235'
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full border border-primary-300 bg-neutral-100 hover:bg-primary-300 dark:bg-neutral-600 dark:hover:bg-primary-300 transition-all ease-in-out duration-300'
            >
              <LinkedIn width={24} height={24} color='#FFA7A6' />
            </Link>
            <Link
              href='https://github.com/anisacchi'
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full border border-primary-300 bg-neutral-100 hover:bg-primary-300 dark:bg-neutral-600 dark:hover:bg-primary-300 transition-all ease-in-out duration-300'
            >
              <Github width={24} height={24} color='#FFA7A6' />
            </Link>
            <Link
              href='https://twitter.com/anisacchii'
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full border border-primary-300 bg-neutral-100 hover:bg-primary-300 dark:bg-neutral-600 dark:hover:bg-primary-300 transition-all ease-in-out duration-300'
            >
              <X width={24} height={24} color='#FFA7A6' />
            </Link>
            <Link
              href='https://www.instagram.com/anisa.__.chi/'
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full border border-primary-300 bg-neutral-100 hover:bg-primary-300 dark:bg-neutral-600 dark:hover:bg-primary-300 transition-all ease-in-out duration-300'
            >
              <Instagram width={24} height={24} color='#FFA7A6' />
            </Link>
          </div>
        </div>
        <div className='basis-1/2 max-w-xs p-4 flex flex-col gap-6 justify-center items-center bg-neutral-100 dark:bg-neutral-600 border border-primary-300 shadow-shadow-pink rounded-lg'>
          <h3 className='text-primary-300 lg:text-2xl text-xl font-bold tracking-wide'>
            Get In Touch <span className='inline-block animate-wiggle'>👋</span>
          </h3>
          <form
            ref={formRef}
            onSubmit={submitHandler}
            className='w-full flex flex-col justify-center items-center gap-4'
          >
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-xs font-semibold text-primary-400 dark:text-primary-200 bg-neutral-100 dark:bg-neutral-600 px-1'>
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
                className='w-full mt-2 py-3 px-4 rounded-lg outline-none border border-primary-300 md:text-sm text-base bg-transparent focus:border-2 focus:border-primary-400 dark:focus:border-primary-100'
              />
            </div>
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-xs font-semibold text-primary-400 dark:text-primary-200 bg-neutral-100 dark:bg-neutral-600 px-1'>
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
                className='w-full mt-2 py-3 px-4 rounded-lg outline-none border border-primary-300 md:text-sm text-base bg-transparent focus:border-2 focus:border-primary-400 dark:focus:border-primary-100'
              />
            </div>
            <div className='relative w-full'>
              <label className='absolute top-0 left-2 text-xs font-semibold text-primary-400 dark:text-primary-200 bg-neutral-100 dark:bg-neutral-600 px-1'>
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
                className='w-full mt-2 py-3 px-4 rounded-lg outline-none border border-primary-300 md:text-sm text-base bg-transparent focus:border-2 focus:border-primary-400 dark:focus:border-primary-100'
              />
            </div>
            <div className='w-full flex justify-start'>
              <button
                type='submit'
                className='py-2 px-4 bg-primary-300 hover:bg-primary-300/80 rounded-lg transition-all duration-300 ease-in-out'
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
}
