import { performances } from '@/data/performances';
import { DatePreset, Genre } from '@/types/performance';
import filterUpcomingPerformances from '@/utils/filterUpcomingPerformances';
import matchesDatePreset from '@/utils/matchesDatePreset';
import { useMemo, useState } from 'react';

const upcomingPerformances = filterUpcomingPerformances(performances);

export function useFilteredPerformancesTest() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedDatePreset, setSelectedDatePreset] =
    useState<DatePreset | null>(null);

  const filteredPerformances = useMemo(
    () =>
      upcomingPerformances.filter(performance => {
        const matchesGenre =
          selectedGenres.length === 0 ||
          selectedGenres.includes(performance.genre);

        const matchesDate =
          selectedDatePreset === null ||
          matchesDatePreset(performance, selectedDatePreset);

        return matchesGenre && matchesDate;
      }),
    [selectedGenres, selectedDatePreset, upcomingPerformances]
  );

  const onGenresChange = (genre: Genre) => {
    selectedGenres.includes(genre)
      ? setSelectedGenres(prev => prev.filter(item => item !== genre))
      : setSelectedGenres(prev => [...prev, genre]);
  };
  const onDatePresetChange = (datePreset: DatePreset) => {
    selectedDatePreset === datePreset
      ? setSelectedDatePreset(null)
      : setSelectedDatePreset(datePreset);
  };

  const onClearGenre = () => {
    if (selectedGenres.length === 0) return;
    setSelectedGenres([]);
  };

  const onClearDatePreset = () => {
    if (!selectedDatePreset) return;
    setSelectedDatePreset(null);
  };

  return {
    filteredPerformances,
    selectedGenres,
    selectedDatePreset,
    onGenresChange,
    onDatePresetChange,
    onClearGenre,
    onClearDatePreset,
  };
}
