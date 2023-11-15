import { Header, Navbar } from '@/components';
import React from 'react';

const layout = ({ children }) => {
  return (
    <>
      <div className='md:hidden'>
        <Header />
      </div>
      <Navbar />
      <main className='mb-[70px] md:mb-0 md:ml-20 lg:ml-60'>{children}</main>
    </>
  );
};

export default layout;
