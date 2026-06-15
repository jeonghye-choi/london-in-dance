import { useEffect, useRef, useState } from 'react';
import { Genre } from '@/types/performance';

export type DateFilter = 'all' | 'thisWeek' | 'thisMonth';

const GENRE_LABELS: Record<Genre | 'All', string> = {
  All: 'All',
  Ballet: 'Ballet',
  Contemporary: 'Contemporary',
};

const DATE_LABELS: Record<DateFilter, string> = {
  all: 'All',
  thisWeek: 'This Week',
  thisMonth: 'This Month',
};

interface FilterBarProps {
  selectedGenre: Genre | 'All';
  selectedDate: DateFilter;
  onGenreChange: (genre: Genre | 'All') => void;
  onDateChange: (date: DateFilter) => void;
}

export default function FilterBar({
  selectedGenre,
  selectedDate,
  onGenreChange,
  onDateChange,
}: FilterBarProps) {
  const genreOptions: (Genre | 'All')[] = ['All', 'Ballet', 'Contemporary'];
  const dateOptions: DateFilter[] = ['all', 'thisWeek', 'thisMonth'];
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.createElement('div');
    ref.current?.parentElement?.insertBefore(sentinel, ref.current);

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`sticky top-[33px] md:top-[41px] z-40 bg-white transition-all duration-150 ${
        isSticky ? 'border-b border-black' : ''
      }`}
    >
      <div className="container py-3 lg:py-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-gray-900 whitespace-nowrap w-12">
              Genre
            </p>
            <div className="flex flex-wrap gap-1">
              {genreOptions.map(genre => (
                <button
                  key={genre}
                  onClick={() => onGenreChange(genre)}
                  className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedGenre === genre
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {GENRE_LABELS[genre]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-gray-900 whitespace-nowrap w-12">
              Date
            </p>
            <div className="flex flex-wrap gap-1">
              {dateOptions.map(date => (
                <button
                  key={date}
                  onClick={() => onDateChange(date)}
                  className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedDate === date
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {DATE_LABELS[date]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
