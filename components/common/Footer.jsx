import React from 'react'

const Footer = () => {
	return (
		<footer className='w-full mt-4 padding flex flex-col sm:flex-row justify-between items-center text-xs bg-primary-100 dark:bg-neutral-400'>
			<span>©️ 2023</span>
			<span>
				Created with {' '}
				<span className='text-primary-400 dark:text-primary-200'>❤</span>
				{' '}by{' '}
				<span className='text-primary-400 dark:text-primary-200 font-semibold tracking-wide'>Anisa Permatasari</span>
			</span>
		</footer>
	)
}

export default Footer