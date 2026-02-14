interface ProgressPillProps {
  current: number;
  total: number;
}

export function ProgressPill({ current, total }: ProgressPillProps) {
  return (
    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Question
      </span>
      <span className="text-sm font-bold text-slate-900">
        {current}{' '}
        <span className="text-slate-400 font-normal">of</span>{' '}
        {total}
      </span>
    </div>
  );
}
