import { DEFAULT_IMAGE } from '@/constants';
import { formatStartDate } from '@/lib/formatDate';
import { Performance } from '@/types/performance';

interface PerformanceCardProps {
  performance: Performance;
}

export default function PerformanceCard({ performance }: PerformanceCardProps) {
  return (
    <div className="text-left border-r border-b border-black flex flex-col">
      {/* Image */}
      <div className="p-3 lg:p-5">
        <div className="aspect-[4/3] md:aspect-[3/4] bg-gray-100 overflow-hidden">
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

      {/* Content */}
      <div className="px-3 lg:px-5 pb-1 space-y-1 flex-1 flex flex-col">
        <h3
          className="text-sm md:text-base lg:text-lg font-semibold leading-snug"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {performance.title}
        </h3>
        <p className="text-xs lg:text-sm text-gray-600">{performance.venue}</p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-3 lg:px-5 pb-3 lg:pb-5 pt-2">
        <p className="text-[10px] lg:text-xs text-gray-500 whitespace-nowrap">
          {formatStartDate(performance.startDate)}
        </p>
        <a
          href={performance.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] lg:text-xs underline text-gray-700 hover:text-black transition-colors duration-150"
        >
          Book tickets →
        </a>
      </div>
    </div>
  );
}
