export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const startMonth = startDate.toLocaleDateString('en-GB', { month: 'short' });
  const startDay = startDate.getDate();
  const endMonth = endDate.toLocaleDateString('en-GB', { month: 'short' });
  const endDay = endDate.getDate();

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} – ${endDay}`;
  }
  return `${startMonth} ${startDay} – ${endMonth} ${endDay}`;
}

export function formatStartDate(start: string): string {
  const startDate = new Date(start);
  const month = startDate.toLocaleDateString('en-GB', { month: 'short' });
  const day = startDate.getDate();
  const year = startDate.getFullYear();
  return `${month} ${day}, ${year}`;
}
