import { DEFAULT_IMAGE } from '@/constants';
import { formatStartDate } from '@/utils/formatDate';
import { Performance } from '@/types/performance';

const openingDate = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

interface PerformanceCardProps {
  performance: Performance;
  isUpcoming: boolean;
  daysUntilEnd: number;
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

export default function PerformanceCard({
  performance,
  isUpcoming,
  daysUntilEnd,
}: PerformanceCardProps) {
  let timingLabel = `${daysUntilEnd} ${daysUntilEnd === 1 ? 'day' : 'days'} left`;

  if (isUpcoming) {
    timingLabel = `Opens ${openingDate.format(new Date(performance.startDate))}`;
  } else if (daysUntilEnd === 0) {
    timingLabel = 'Last day';
  }

  const content = (
    <>
      {/* Image */}
      <div className="mb-3">
        <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
          <img
            src={getCardImageUrl(performance.imageUrl)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            onError={e => {
              if (e.currentTarget.getAttribute('src') !== DEFAULT_IMAGE) {
                e.currentTarget.src = DEFAULT_IMAGE;
              }
            }}
          />
          <span
            className={`absolute top-2 left-2 px-2.5 py-1 text-xs font-medium leading-4 ${
              isUpcoming
                ? 'bg-paper/90 text-ink'
                : 'bg-[#f0d6c8] text-[#623524]'
            }`}
          >
            {timingLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pb-1 space-y-1 flex-1 flex flex-col">
        <h3
          className="text-sm md:text-base lg:text-lg font-semibold leading-snug group-hover:underline group-focus-visible:underline"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {performance.title}
        </h3>
        <p className="text-xs lg:text-sm text-gray-600">{performance.venue}</p>
        <p className="text-[11px] lg:text-xs text-gray-400">
          {performance.genre}
        </p>
      </div>

      <p className="pt-3 text-xs text-muted">
        {formatStartDate(performance.startDate)}
        {performance.endDate &&
          performance.endDate !== performance.startDate &&
          ` – ${formatStartDate(performance.endDate)}`}
      </p>
    </>
  );

  if (!performance.ticketUrl) {
    return <article className="flex flex-col text-left">{content}</article>;
  }

  return (
    <a
      href={performance.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      {content}
    </a>
  );
}
