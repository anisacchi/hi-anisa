import { Footer, Header } from '@/components';
import React from 'react';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='basis-full w-full flex'>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
