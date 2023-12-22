import React from 'react';
import { Footer, Header } from '@/components/shared';

type LayoutProps = {
	children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='w-full flex-1 padding'>
				{children}
			</main>
      <Footer />
    </>
  );
};

export default layout;
