import { Message, Socials, Transition } from '@/components';
import React from 'react';

const Contact = () => {
  return (
    <>
      <Transition />

      <div className='w-full md:h-screen padding flex flex-col-reverse md:flex-row gap-6 justify-center items-center'>
				<Socials />
				<Message />
			</div>
    </>
  );
};

export default Contact;
