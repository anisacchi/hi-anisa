import React from 'react';
import { AboutMe, Profile, Transition } from '@/components';

const About = () => {
  return (
    <>
      <Transition />

      <div className='padding-x'>
				<Profile />
			</div>

			<div className='padding'>
				<AboutMe />
			</div>
    </>
  );
};

export default About;
