export const GENRES = [
  'Ballet',
  'Contemporary',
  'Jazz',
  'National Dance',
] as const;
export type Genre = (typeof GENRES)[number];

export const DATE_PRESETS = ['Now On', 'This Week', 'This Month'] as const;
export type DatePreset = (typeof DATE_PRESETS)[number];

export interface Performance {
  title: string;
  venue: string;
  genre: Genre;
  startDate: string;
  endDate?: string;
  description?: string;
  imageUrl?: string;
  ticketUrl?: string;
  time?: string;
  isFree?: boolean;
}
