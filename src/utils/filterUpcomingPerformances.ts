import { Performance } from '@/types/performance';

export default function filterUpcomingPerformances(
  performances: Performance[]
): Performance[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return performances
    .filter(performance => {
      const end = new Date(performance.endDate ?? performance.startDate);
      end.setHours(0, 0, 0, 0);
      return today <= end;
    })
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
}
