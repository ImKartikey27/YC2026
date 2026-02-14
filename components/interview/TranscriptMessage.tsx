'use client';

import { cn } from '@/lib/utils';
import { StatusBadge } from '@/components/shared/StatusBadge';
import type { TranscriptMessage as TranscriptMessageType } from '@/lib/types/transcript';

interface TranscriptMessageProps {
  message: TranscriptMessageType;
  isCurrentQuestion?: boolean;
  isRecording?: boolean;
  isFaded?: boolean;
}

export function TranscriptMessage({ 
  message, 
  isCurrentQuestion,
  isRecording,
  isFaded 
}: TranscriptMessageProps) {
  const isAI = message.role === 'assistant';

  if (isAI) {
    return (
      <div
        className={cn(
          'p-4 bg-white rounded-xl shadow-sm border border-slate-100',
          isFaded && 'opacity-40',
          isCurrentQuestion && 'border-l-4 border-l-[#E95335]'
        )}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#E95335] text-[18px]">
            smart_toy
          </span>
          <p className="text-sm font-semibold text-[#E95335]">
            AI Interviewer
            {isCurrentQuestion && (
              <span className="font-normal text-slate-500"> • Current Question</span>
            )}
          </p>
        </div>
        <p className="text-base text-slate-900 leading-relaxed">
          {message.content}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'p-4 border-l-2 border-[#E95335]/20',
        isFaded && 'opacity-40'
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-slate-400 text-[18px]">
          person
        </span>
        <span className="text-sm font-medium text-slate-600">You</span>
        {isRecording && <StatusBadge variant="recording" />}
      </div>
      <p className="text-base text-slate-700 leading-relaxed">
        {message.content}
        {isRecording && (
          <span className="inline-block w-0.5 h-5 bg-[#E95335] ml-1 animate-pulse" />
        )}
      </p>
    </div>
  );
}
