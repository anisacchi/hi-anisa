import React from 'react';
import { Transition } from '@/components/shared';
import { Message, Social } from '@/components/pages/contact';

const Contact = () => {
  return (
    <>
      <Transition />

      <div className='w-full md:h-screen padding flex flex-col-reverse md:flex-row gap-6 justify-center items-center'>
        <Social />
        <Message />
      </div>
    </>
  );
};

export default Contact;
