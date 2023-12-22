import React from 'react';
import { BottomNavigation, Header, SideNavigation } from '@/components/shared';

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Mobile View */}
      <div className='md:hidden'>
        <Header />
        <BottomNavigation />
      </div>
      {/* End Mobile View */}

      {/* >Medium View */}
      <div className='hidden md:block'>
        <SideNavigation />
      </div>
      {/* End >Medium View */}

      <main className='mb-[70px] md:mb-0 md:ml-20 lg:ml-60'>
				{children}
			</main>
    </>
  );
};

export default layout;
