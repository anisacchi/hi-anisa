import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyle = cva(
  'w-full flex justify-center items-center gap-2 group cursor-pointer transition-all duration-300 ease-in-out',
  {
    variants: {
      type: {
        primary: [
          'bg-primary-700 dark:bg-primary-400 hover:bg-primary-800 hover:dark:bg-primary-300 focus:bg-primary-900 focus:dark:bg-primary-200',
          'text-sm text-neutral-100 dark:text-neutral-700 font-semibold',
        ],
        secondary: [
          'bg-neutral-100 dark:bg-neutral-800',
          'border border-primary-700 dark:border-primary-400 hover:border-primary-800 hover:dark:border-primary-300 focus:border-primary-900 focus:dark:border-primary-200',
          'text-sm font-semibold text-primary-700 dark:text-primary-400 hover:text-primary-800 hover:dark:text-primary-300 focus:text-primary-900 focus:dark:text-primary-200',
        ],
        disabled: [
          'bg-neutral-200 dark:bg-neutral-600',
          'text-neutral-300 dark:text-neutral-400',
        ],
      },
      icon: {
        none: 'px-3 py-3',
        right: 'py-3 pr-[18px] pl-4',
        left: 'py-3 pr-4 pl-[18px]',
        only: 'w-11 h-11 p-3',
      },
      radius: {
        normal: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      type: 'primary',
      icon: 'none',
      radius: 'normal',
    },
  }
);

const Button = ({ type, icon, radius, className, children, ...props }) => {
  return (
    <button
      className={twMerge(buttonStyle({ type, icon, radius }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
