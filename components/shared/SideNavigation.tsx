import React from 'react'
import { LocaleSwitcher, Logo, Navigation, ThemeSwitcher } from '@/components/shared'

const SideNavigation = ({}) => {
	return (
		<div className='fixed z-20 w-20 lg:w-60 bottom-0 top-0 left-0 padding-y flex flex-col items-center border-r border-primary-300/20 bg-neutral-100 dark:bg-neutral-500'>
			<div className='w-full flex justify-center'>
				<Logo />
			</div>
			<div className='w-full mt-6'>
				<Navigation />
			</div>
			<div className='w-full mt-auto flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4'>
				<LocaleSwitcher render='sideNavbar' />
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default SideNavigation