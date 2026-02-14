'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#FFF3ED] border border-[#E95335]/20 p-6 md:p-8">
      <div className="relative z-10 max-w-lg">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E95335]/10 text-[#E95335] text-xs font-semibold mb-4">
          <span className="material-symbols-outlined text-[16px]">mic</span>
          <span>Voice AI 2.0</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-2">
          Create New Content Session
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base max-w-md mb-6">
          Turn your voice conversations into high-performing social media content, blog posts, and newsletters instantly.
        </p>

        {/* CTA Button */}
        <Link href="/discover">
          <Button size="md">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Session
          </Button>
        </Link>
      </div>

      {/* Decorative Waveform Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:flex items-center justify-center opacity-50">
        <div className="flex items-end gap-1.5 h-32">
          {[20, 35, 25, 45, 60, 40, 55, 70, 45, 30, 50, 65, 35, 25, 40, 55].map((h, i) => (
            <div
              key={i}
              className="w-2 bg-[#E95335]/20 rounded-full"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E95335]/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
