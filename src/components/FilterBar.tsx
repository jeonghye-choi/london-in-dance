import { WhenFilter, WHEN_FILTERS, Genre, GENRES } from '@/types/performance';

interface FilterBarProps {
  selectedGenres: Genre[];
  selectedWhenFilter: WhenFilter | null;
  onGenresChange: (genre: Genre) => void;
  onWhenFilterChange: (preset: WhenFilter) => void;
  onClearGenre: () => void;
  onClearWhenFilter: () => void;
}

export default function FilterBar({
  selectedGenres,
  selectedWhenFilter,
  onGenresChange,
  onWhenFilterChange,
  onClearGenre,
  onClearWhenFilter,
}: FilterBarProps) {
  const isAllGenresSelected = selectedGenres.length === 0;
  const isAllWhenFilterSelected = selectedWhenFilter === null;
  return (
    <div className="mx-auto grid w-fit max-w-full gap-2.5">
      <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-3">
        <p className="pt-1.5 text-[11px] leading-4 uppercase text-ink">Genre</p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 sm:gap-x-2">
          <button
            type="button"
            aria-pressed={isAllGenresSelected}
            onClick={onClearGenre}
            className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
              isAllGenresSelected
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink hover:border-ink'
            }`}
          >
            All
          </button>

          {GENRES.map(genre => (
            <button
              key={genre}
              type="button"
              aria-pressed={selectedGenres.includes(genre)}
              onClick={() => onGenresChange(genre)}
              className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
                selectedGenres.includes(genre)
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-ink hover:border-ink'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-3">
        <p className="pt-1.5 text-[11px] leading-4 uppercase text-ink">When</p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 sm:gap-x-2">
          <button
            type="button"
            aria-pressed={isAllWhenFilterSelected}
            onClick={onClearWhenFilter}
            className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
              isAllWhenFilterSelected
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink hover:border-ink'
            }`}
          >
            All
          </button>
          {WHEN_FILTERS.map(preset => (
            <button
              key={preset}
              type="button"
              aria-pressed={selectedWhenFilter === preset}
              onClick={() => onWhenFilterChange(preset)}
              className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
                selectedWhenFilter === preset
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-ink hover:border-ink'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
