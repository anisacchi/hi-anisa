import React from 'react'
import { Transition } from '@/components/shared';
import { Informations, Profile } from '@/components/pages/about';

const About = () => {
	return (
		<>
		<Transition />

		<section>
			<div className='padding-x'>
				<Profile />
			</div>

			<div className="padding">
				<Informations />
			</div>
		</section>
		</>
	)
}

export default About;