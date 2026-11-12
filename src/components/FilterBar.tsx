import { DatePreset, DATE_PRESETS, Genre, GENRES } from '@/types/performance';

interface FilterBarProps {
  selectedGenres: Genre[];
  selectedDatePreset: DatePreset | null;
  onGenresChange: (genre: Genre) => void;
  onDatePresetChange: (preset: DatePreset) => void;
  onClearGenre: () => void;
  onClearDatePreset: () => void;
}

export default function FilterBar({
  selectedGenres,
  selectedDatePreset,
  onGenresChange,
  onDatePresetChange,
  onClearGenre,
  onClearDatePreset,
}: FilterBarProps) {
  const isAllGenresSelected = selectedGenres.length === 0;
  const isAllDatePresetSelected = selectedDatePreset === null;
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
        <p className="pt-1.5 text-[11px] leading-4 uppercase text-ink">Date</p>
        <div className="flex flex-wrap gap-x-1.5 gap-y-2 sm:gap-x-2">
          <button
            type="button"
            aria-pressed={isAllDatePresetSelected}
            onClick={onClearDatePreset}
            className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
              isAllDatePresetSelected
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink hover:border-ink'
            }`}
          >
            All
          </button>
          {DATE_PRESETS.map(preset => (
            <button
              key={preset}
              type="button"
              aria-pressed={selectedDatePreset === preset}
              onClick={() => onDatePresetChange(preset)}
              className={`min-h-7 whitespace-nowrap rounded-none border px-2.5 text-[11px] leading-4 uppercase transition-colors sm:px-3.5 ${
                selectedDatePreset === preset
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
