'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[#E95335] hover:bg-[#EF826C] active:bg-[#D84428] text-white shadow-lg shadow-[#E95335]/30',
      secondary: 'bg-[#FFD4C4] hover:bg-[#F5A89A] text-black',
      outline: 'border border-[#E95335]/30 hover:border-[#E95335] hover:text-[#E95335] bg-[#FFF3ED] text-black',
      ghost: 'hover:bg-[#FFD4C4] text-gray-700',
    };

    const sizes = {
      sm: 'text-sm px-3 py-1.5 rounded-lg gap-1.5',
      md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
      lg: 'text-lg px-6 py-3 rounded-xl gap-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          !disabled && 'hover:-translate-y-0.5',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin size-4 border-2 border-current border-t-transparent rounded-full" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
