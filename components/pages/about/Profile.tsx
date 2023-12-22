import Image from 'next/image';
import React from 'react';
import { ButtonProfile, InfoProfile } from '@/components/pages/about';

const Profile = () => {return (
    <>
      <div className='absolute -z-20 right-0 left-0 top-0 h-32 bg-repeat bg-contain bg-bg-header' />
      <div className='flex items-center justify-between'>
        <div className='w-28 md:w-32 md:mt-10 lg:w-40'>
          <Image
            src='/assets/images/profile.webp'
            width={1308}
            height={1442}
            alt='Anisa Permatasari'
            className='w-full max-w-[240px]'
            priority
          />
        </div>

        <div className='mt-28 hidden md:flex justify-center'>
          <ButtonProfile />
        </div>
      </div>
			
      <InfoProfile />

			<div className="mt-4 block md:hidden">
				<ButtonProfile />
			</div>
    </>
  );
};

export default Profile;
