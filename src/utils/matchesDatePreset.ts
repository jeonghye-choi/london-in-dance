import { DatePreset, Performance } from '@/types/performance';
import getThisWeekRange from './getThisWeekRange';
import getThisMonthRange from './getThisMonthRange';

export default function matchesDatePreset(
  performance: Performance,
  preset: DatePreset
) {
  const now = new Date();
  const start = new Date(performance.startDate);
  const end = performance.endDate ? new Date(performance.endDate) : start;

  if (preset === 'Now On') {
    return start <= now && now <= end;
  }

  if (preset === 'This Week') {
    const [weekStart, weekEnd] = getThisWeekRange();
    return start <= weekEnd && weekStart <= end;
  }

  if (preset === 'This Month') {
    const [monthStart, monthEnd] = getThisMonthRange();
    return start <= monthEnd && monthStart <= end;
  }

  return true;
}
