import { Performance } from '@/data/performances';
import { formatStartDate } from '@/lib/formatDate';

interface PerformanceCardProps {
  event: Performance;
  onClick: () => void;
}

export default function PerformanceCard({
  event,
  onClick,
}: PerformanceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left border-t border-l border-black hover:opacity-70 transition-opacity duration-150 flex flex-col"
    >
      {/* Image */}
      <div className="p-3 md:p-4">
        <div className="aspect-square md:aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={e => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-2 flex-1 flex flex-col">
        <h3
          className="text-lg md:text-xl font-semibold leading-snug group-hover:underline"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {event.title}
        </h3>
        <p className="text-sm text-gray-600">{event.venue}</p>
      </div>

      {/* Bottom Section: Date and Genre Tag */}
      <div className="flex items-center justify-between p-3 md:p-4 bg-white">
        <p className="text-[10px] md:text-xs text-gray-700 font-medium whitespace-nowrap">
          {formatStartDate(event.startDate)}
        </p>
        <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-700 font-medium border border-black px-2 py-0.5 md:px-3 md:py-1 rounded-full">
          {event.genre}
        </span>
      </div>
    </button>
  );
}
