import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: string;
  color?: 'indigo' | 'teal' | 'green' | 'orange' | 'pink' | 'purple' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  filled?: boolean;
  className?: string;
}

const colorStyles = {
  indigo: 'bg-indigo-50 text-indigo-600',
  teal: 'bg-teal-50 text-teal-600',
  green: 'bg-green-50 text-green-600',
  orange: 'bg-orange-50 text-orange-600',
  pink: 'bg-pink-50 text-pink-600',
  purple: 'bg-purple-50 text-purple-600',
  primary: 'bg-[#E95335]/10 text-[#E95335]',
};

const sizeStyles = {
  sm: 'size-8 rounded-md',
  md: 'size-10 rounded-lg',
  lg: 'size-12 rounded-xl',
};

export function IconWrapper({ icon, color = 'primary', size = 'md', filled, className }: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
    >
      <span className={cn('material-symbols-outlined', filled && 'filled')}>
        {icon}
      </span>
    </div>
  );
}
