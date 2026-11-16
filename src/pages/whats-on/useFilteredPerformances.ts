import { performances } from '@/data/performances';
import { WhenFilter, Genre } from '@/types/performance';
import { useEffect, useMemo, useState } from 'react';

const londonDate = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function getLondonToday() {
  const parts = londonDate.formatToParts();
  const year = parts.find(part => part.type === 'year')?.value;
  const month = parts.find(part => part.type === 'month')?.value;
  const day = parts.find(part => part.type === 'day')?.value;
  return `${year}-${month}-${day}`;
}

export function useFilteredPerformances() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedWhenFilter, setSelectedWhenFilter] =
    useState<WhenFilter | null>(null);

  const [today, setToday] = useState(getLondonToday);

  useEffect(() => {
    const refresh = () => setToday(getLondonToday());
    const timer = window.setInterval(refresh, 60_000);
    window.addEventListener('focus', refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', refresh);
    };
  }, []);

  const filteredPerformances = useMemo(() => {
    return performances
      .map(performance => {
        const end = performance.endDate ?? performance.startDate;
        const isUpcoming = performance.startDate > today;
        const daysUntilEnd = (Date.parse(end) - Date.parse(today)) / 86_400_000;
        return { performance, end, isUpcoming, daysUntilEnd };
      })
      .filter(({ performance, isUpcoming, daysUntilEnd }) => {
        if (daysUntilEnd < 0) return false;
        if (
          selectedGenres.length &&
          !selectedGenres.includes(performance.genre)
        )
          return false;

        switch (selectedWhenFilter) {
          case 'Now on':
            return !isUpcoming;
          case 'Ending soon':
            return !isUpcoming && daysUntilEnd <= 7;
          case 'Coming up':
            return isUpcoming;
          default:
            return true;
        }
      })
      .sort(
        (a, b) =>
          Number(a.isUpcoming) - Number(b.isUpcoming) ||
          (a.isUpcoming
            ? a.performance.startDate.localeCompare(b.performance.startDate)
            : a.end.localeCompare(b.end))
      );
  }, [selectedGenres, selectedWhenFilter, today]);

  const onGenresChange = (genre: Genre) => {
    selectedGenres.includes(genre)
      ? setSelectedGenres(prev => prev.filter(item => item !== genre))
      : setSelectedGenres(prev => [...prev, genre]);
  };
  const onWhenFilterChange = (datePreset: WhenFilter) => {
    selectedWhenFilter === datePreset
      ? setSelectedWhenFilter(null)
      : setSelectedWhenFilter(datePreset);
  };

  const onClearGenre = () => {
    if (selectedGenres.length === 0) return;
    setSelectedGenres([]);
  };

  const onClearWhenFilter = () => {
    if (!selectedWhenFilter) return;
    setSelectedWhenFilter(null);
  };

  return {
    filteredPerformances,
    selectedGenres,
    selectedWhenFilter,
    onGenresChange,
    onWhenFilterChange,
    onClearGenre,
    onClearWhenFilter,
  };
}
