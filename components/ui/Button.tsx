import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/twMerge';

const buttonVariant = cva(
  'w-full flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out group',
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-400 dark:bg-primary-300',
          'hover:bg-primary-500 dark:hover:bg-primary-200',
          'text-xs md:text-sm font-medium text-neutral-100 dark:text-neutral-500',
        ],
        secondary: [
          'border border-primary-400 dark:border-primary-300 bg-neutral-100 dark:bg-neutral-500',
          'hover:border-primary-500 dark:hover:border-primary-200 hover:bg-primary-100 dark:hover:bg-neutral-400',
          'text-xs md:text-sm font-medium text-primary-400 dark:text-primary-300',
          'hover:text-primary-500 dark:hover:text-primary-200',
        ],
        disabled: [
          'bg-neutral-200/20 dark:bg-neutral-400',
          'text-xs md:text-sm text-neutral-300',
          'cursor-default',
        ],
      },
      icon: {
        none: 'px-6 py-3',
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
      variant: 'primary',
      icon: 'none',
      radius: 'normal',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, icon, radius, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariant({ variant, icon, radius, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
