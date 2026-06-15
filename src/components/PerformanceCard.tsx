import { DEFAULT_IMAGE } from '@/constants';
import { formatStartDate } from '@/lib/formatDate';
import { Performance } from '@/types/performance';

interface PerformanceCardProps {
  performance: Performance;
  onClick: () => void;
}

export default function PerformanceCard({
  performance,
  onClick,
}: PerformanceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left border-t border-l border-black hover:opacity-70 transition-opacity duration-150 flex flex-col"
    >
      <div className="p-3 md:p-4">
        <div className="aspect-square md:aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={performance.imageUrl ?? DEFAULT_IMAGE}
            alt={performance.title}
            className="w-full h-full object-cover"
            onError={e => {
              e.currentTarget.src = DEFAULT_IMAGE;
            }}
          />
        </div>
      </div>

      <div className="p-4 md:p-6 space-y-2 flex-1 flex flex-col">
        <h3
          className="text-lg md:text-xl font-semibold leading-snug group-hover:underline"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {performance.title}
        </h3>
        <p className="text-sm text-gray-600">{performance.venue}</p>
      </div>

      <div className="flex items-center justify-between p-3 md:p-4 bg-white">
        <p className="text-[10px] md:text-xs text-gray-700 font-medium whitespace-nowrap">
          {formatStartDate(performance.startDate)}
        </p>
        <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-700 font-medium border border-black px-2 py-0.5 md:px-3 md:py-1 rounded-full">
          {performance.genre}
        </span>
      </div>
    </button>
  );
}
