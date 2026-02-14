'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <header className="w-full bg-[#FFF3ED] border-b border-[#E95335]/20 sticky top-0 z-50">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 text-black">
          <div className="size-8 rounded-lg bg-[#E95335]/10 flex items-center justify-center text-[#E95335]">
            <span className="material-symbols-outlined text-2xl">graphic_eq</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">
            LadderFlow
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link
            href="/dashboard"
            className={cn(
              'text-sm font-medium transition-colors',
              isActive('/dashboard')
                ? 'text-[#E95335] font-bold'
                : 'text-gray-600 hover:text-[#E95335]'
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/discover"
            className={cn(
              'text-sm font-medium transition-colors',
              isActive('/discover')
                ? 'text-[#E95335] font-bold'
                : 'text-gray-600 hover:text-[#E95335]'
            )}
          >
            Content
          </Link>
          <Link
            href="/settings"
            className={cn(
              'text-sm font-medium transition-colors',
              isActive('/settings')
                ? 'text-[#E95335] font-bold'
                : 'text-gray-600 hover:text-[#E95335]'
            )}
          >
            Settings
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-[#E95335]/10 text-gray-600 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="size-9 rounded-full bg-gradient-to-br from-[#EF826C] to-[#E95335] border-2 border-[#FFF3ED]" />
        </div>
      </div>
    </header>
  );
}
