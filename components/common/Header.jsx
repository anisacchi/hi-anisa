import React from 'react';
import { Button, Logo, ToggleTheme } from '@/components';

const Header = () => {
  return (
		<header className='padding flex flex-row justify-between'>
			<Logo />
			<ToggleTheme />
		</header>
	)
};

export default Header;
