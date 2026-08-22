import { useEffect, useRef, useState } from 'react';
import { DatePreset, DATE_PRESETS, Genre, GENRES } from '@/types/performance';

interface FilterBarProps {
  selectedGenres: Genre[];
  selectedDatePreset: DatePreset | null;
  onGenresChange: (genre: Genre) => void;
  onDatePresetChange: (preset: DatePreset) => void;
  onClearGenre: () => void;
  onClearDatePreset: () => void;
}

export default function FilterBarTest({
  selectedGenres,
  selectedDatePreset,
  onGenresChange,
  onDatePresetChange,
  onClearGenre,
  onClearDatePreset,
}: FilterBarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isAllGenresSelected = selectedGenres.length === 0;
  const isAllDatePresetSelected = selectedDatePreset === null;

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
      className={`sticky top-8 z-40 bg-white transition-all duration-150 ${
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
              <button
                onClick={onClearGenre}
                className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                  isAllGenresSelected
                    ? 'border-black bg-black text-white'
                    : 'border-black text-black hover:bg-gray-50'
                }`}
              >
                All
              </button>

              {GENRES.map(genre => (
                <button
                  key={genre}
                  onClick={() => onGenresChange(genre)}
                  className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedGenres.includes(genre)
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-gray-900 whitespace-nowrap w-12">
              Date
            </p>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={onClearDatePreset}
                className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                  isAllDatePresetSelected
                    ? 'border-black bg-black text-white'
                    : 'border-black text-black hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {DATE_PRESETS.map(preset => (
                <button
                  key={preset}
                  onClick={() => onDatePresetChange(preset)}
                  className={`text-[10px] font-medium px-2 py-1 border rounded-full transition-all duration-150 whitespace-nowrap ${
                    selectedDatePreset === preset
                      ? 'border-black bg-black text-white'
                      : 'border-black text-black hover:bg-gray-50'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
