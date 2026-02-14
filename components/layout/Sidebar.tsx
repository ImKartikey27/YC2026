'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Sessions', href: '/sessions', icon: 'folder_open' },
  { label: 'Templates', href: '/templates', icon: 'auto_awesome' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-[#FFD4C4] border-r border-[#E95335]/20">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E95335] text-white">
          <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
        </div>
        <h1 className="text-base font-bold tracking-tight text-black">
          LadderFlow
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-2 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-all group',
              isActive(item.href)
                ? 'bg-[#FFF3ED] shadow-sm border border-[#E95335]/30'
                : 'hover:bg-[#FFF3ED]/60'
            )}
          >
            <span
              className={cn(
                'material-symbols-outlined text-[20px]',
                isActive(item.href)
                  ? 'text-[#E95335]'
                  : 'text-gray-500 group-hover:text-gray-700'
              )}
            >
              {item.icon}
            </span>
            <span
              className={cn(
                'text-sm font-medium',
                isActive(item.href)
                  ? 'text-black'
                  : 'text-gray-600 group-hover:text-black'
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-[#E95335]/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EF826C] to-[#E95335]" />
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-black">
              Alex Creator
            </p>
            <p className="text-[10px] text-gray-500">
              Pro Plan
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
