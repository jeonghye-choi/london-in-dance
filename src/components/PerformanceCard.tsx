import { DEFAULT_IMAGE } from '@/constants';
import { formatStartDate } from '@/utils/formatDate';
import { Performance } from '@/types/performance';

interface PerformanceCardProps {
  performance: Performance;
}

function getCardImageUrl(imageUrl: string | undefined) {
  if (!imageUrl) return DEFAULT_IMAGE;

  const url = new URL(imageUrl, window.location.origin);

  if (url.hostname === 'images.sadlerswells.com') {
    url.searchParams.set('resize', '720,900');
    url.searchParams.set('webp', '1');
    return url.href;
  }

  if (url.hostname === 'images.prismic.io') {
    url.searchParams.set('w', '720');
    url.searchParams.set('h', '900');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('q', '75');
    return url.href;
  }

  return imageUrl;
}

export default function PerformanceCard({ performance }: PerformanceCardProps) {
  return (
    <div className="text-left card-border flex flex-col">
      {/* Image */}
      <div className="p-5 lg:p-7">
        <div className="aspect-[4/3] md:aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={getCardImageUrl(performance.imageUrl)}
            alt={performance.title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={e => {
              if (e.currentTarget.getAttribute('src') !== DEFAULT_IMAGE) {
                e.currentTarget.src = DEFAULT_IMAGE;
              }
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 lg:px-7 pb-1 space-y-1 flex-1 flex flex-col">
        <h3
          className="text-sm md:text-base lg:text-lg font-semibold leading-snug"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {performance.title}
        </h3>
        <p className="text-xs lg:text-sm text-gray-600">{performance.venue}</p>
        <p className="text-[11px] lg:text-xs text-gray-400">
          {performance.genre}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-5 lg:px-7 pb-3 lg:pb-5 pt-2">
        <p className="text-[10px] lg:text-xs text-gray-500 whitespace-nowrap">
          {formatStartDate(performance.startDate)}
          {performance.endDate && ` - ${formatStartDate(performance.endDate)}`}
        </p>

        <a
          href={performance.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] lg:text-xs underline text-gray-700 hover:text-black transition-colors duration-150"
        >
          View Details →
        </a>
      </div>
    </div>
  );
}
