'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-xl border bg-[#FFF3ED] p-4 text-sm font-medium shadow-sm resize-none text-black',
            'transition-all focus:border-[#E95335] focus:ring-4 focus:ring-[#E95335]/10 focus:outline-none',
            'placeholder-gray-400',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
              : 'border-[#E95335]/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
