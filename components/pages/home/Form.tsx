import React from 'react';
import Input from './Input';
import Image from 'next/image';
import { Key, User } from '@/assets/icons';

const Form = () => {
  const inputs = [
    {
      id: 'user',
      placeholder: 'anisacchi',
      icon: (
        <User
          width={20}
          height={20}
          className='fill-primary-400 dark:fill-primary-300'
        />
      ),
    },
    {
      id: 'password',
      placeholder: '/assets/icons/sakura-fill.svg',
      icon: (
        <Key
          width={20}
          height={20}
          className='fill-primary-400 dark:fill-primary-300'
        />
      ),
    },
  ];

  return (
    <div className='w-full padding-y lg:mt-4 flex flex-col gap-4 items-center justify-center'>
      {inputs.map((input) => (
        <Input
          key={input.id}
          placeholder={input.placeholder}
          icon={input.icon}
        />
      ))}
    </div>
  );
};

export default Form;
