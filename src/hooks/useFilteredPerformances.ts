import { useState, useMemo } from 'react';
import { performances } from '@/data/performances';
import { Genre } from '@/types/performance';
import { DateFilter } from '@/components/FilterBar';

export function useFilteredPerformances() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'All'>('All');
  const [selectedDate, setSelectedDate] = useState<DateFilter>('all');

  const filteredPerformances = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 지난 공연 제외 (endDate 기준, endDate 없으면 startDate 기준)
    let filtered = performances.filter(p => {
      const end = new Date(p.endDate ?? p.startDate);
      end.setHours(0, 0, 0, 0);
      return end >= today;
    });

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(p => p.genre === selectedGenre);
    }

    if (selectedDate !== 'all') {
      let endDate = new Date(today);

      if (selectedDate === 'thisWeek') {
        const daysUntilSunday = 6 - today.getDay();
        endDate.setDate(today.getDate() + daysUntilSunday);
      } else if (selectedDate === 'thisMonth') {
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      }

      filtered = filtered.filter(p => {
        const eventStart = new Date(p.startDate);
        eventStart.setHours(0, 0, 0, 0);
        return eventStart <= endDate;
      });
    }

    return filtered.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  }, [selectedGenre, selectedDate]);

  return {
    filteredPerformances,
    selectedGenre,
    selectedDate,
    setSelectedGenre,
    setSelectedDate,
  };
}
