'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { LetterRegular, UserRegular } from '@/assets/icons';
import { Button } from '@/components';

const Message = () => {
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
      <div className='w-full h-full md:basis-1/2 flex justify-center items-center'>
        <div className='w-full max-w-sm flex flex-col gap-6 padding justify-center items-center bg-neutral-100 dark:bg-neutral-500 border border-primary-400 dark:border-primary-300 rounded-lg'>
          <h1 className='text-2xl lg:text-4xl font-bold tracking-wide'>
            Get In Touch <span className='inline-block animate-wiggle'>👋</span>
          </h1>

          <form
            ref={formRef}
            onSubmit={submitHandler}
            className='w-full flex flex-col justify-center items-center gap-4'
          >
            <div className='w-full px-4 py-3 flex flex-row items-center rounded-lg border border-primary-400 dark:border-primary-300'>
              <div className='pr-4 border-r border-r-primary-400 dark:border-r-primary-300'>
                <UserRegular className='w-5 h-5 fill-primary-400 dark:fill-primary-300' />
              </div>
              <div className='pl-4 w-full'>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={changeInputHandler}
                  placeholder='Your Beautiful Name'
                  className='w-full outline-none text-sm bg-neutral-100 dark:bg-neutral-500'
                  autoComplete='off'
                  required
                />
              </div>
            </div>

            <div className='w-full px-4 py-3 flex flex-row items-center rounded-lg border border-primary-400 dark:border-primary-300'>
              <div className='pr-4 border-r border-r-primary-400 dark:border-r-primary-300'>
                <LetterRegular className='w-5 h-5 fill-primary-400 dark:fill-primary-300' />
              </div>
              <div className='pl-4 w-full'>
                <input
                  type='text'
                  name='email'
                  value={form.email}
                  onChange={changeInputHandler}
                  placeholder='youremail@address.com'
                  className='w-full outline-none text-sm bg-neutral-100 dark:bg-neutral-500'
                  autoComplete='off'
                  required
                />
              </div>
            </div>

            <div className='w-full px-4 py-3 flex flex-row items-center rounded-lg border border-primary-400 dark:border-primary-300'>
              <textarea
                rows={4}
                name='message'
                value={form.message}
                onChange={changeInputHandler}
                placeholder='Say hi to me'
                className='w-full outline-none text-sm bg-neutral-100 dark:bg-neutral-500'
                autoComplete='off'
                required
              />
            </div>

            <Button type='submit' intent='primary' icon='none' radius='normal'>
              <span>{loading ? 'Sending...' : 'Send'}</span>
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Message;
