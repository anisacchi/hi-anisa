import Image from 'next/image';
import React from 'react';

type InputProps = {
  placeholder: string;
  icon: React.ReactNode;
};

const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <div className='w-full px-4 py-3 flex flex-row items-center rounded-lg border border-primary-400 dark:border-primary-300'>
      <div className='pr-4 border-r border-r-primary-400 dark:border-r-primary-300'>
        {icon}
      </div>
      <div className='pl-4'>
        {placeholder.includes('assets') ? (
          <div className='flex flex-row gap-2'>
            <Image src={placeholder} width={14} height={14} alt='Password' />
						<Image src={placeholder} width={14} height={14} alt='Password' />
						<Image src={placeholder} width={14} height={14} alt='Password' />
						<Image src={placeholder} width={14} height={14} alt='Password' />
						<Image src={placeholder} width={14} height={14} alt='Password' />
						<Image src={placeholder} width={14} height={14} alt='Password' />
          </div>
        ) : (
          <span className='text-primary-400 dark:text-primary-300'>{placeholder}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
