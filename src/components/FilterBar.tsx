import { Genre } from '@/data/performances';

export type DateFilter = 'all' | 'thisWeek' | 'thisMonth';

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

  const getGenreLabel = (genre: Genre | 'All'): string => {
    if (genre === 'All') return 'All';
    if (genre === 'Ballet') return 'Ballet';
    return 'Contemporary';
  };

  const getDateLabel = (date: DateFilter): string => {
    if (date === 'all') return 'All';
    if (date === 'thisWeek') return 'This Week';
    return 'This Month';
  };

  return (
    <div className="sticky top-[41px] md:top-[53px] z-40 bg-white border-b border-black">
      <div className="container py-4 md:py-5">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Genre Filter */}
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-wide text-gray-900 whitespace-nowrap">
              Genre
            </p>
            <div className="flex gap-1 md:gap-2">
              {genreOptions.map(genre => (
                <button
                  key={genre}
                  onClick={() => onGenreChange(genre)}
                  className={`text-[10px] md:text-sm font-medium px-2 py-1 md:px-5 md:py-2 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedGenre === genre
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {getGenreLabel(genre)}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filter */}
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-wide text-gray-900 whitespace-nowrap">
              Date
            </p>
            <div className="flex gap-1 md:gap-2">
              {dateOptions.map(date => (
                <button
                  key={date}
                  onClick={() => onDateChange(date)}
                  className={`text-[10px] md:text-sm font-medium px-2 py-1 md:px-5 md:py-2 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedDate === date
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {getDateLabel(date)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
