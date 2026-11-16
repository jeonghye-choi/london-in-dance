export const GENRES = [
  'Ballet',
  'Contemporary',
  'Jazz',
  'National Dance',
] as const;
export type Genre = (typeof GENRES)[number];

export const WHEN_FILTERS = ['Now on', 'Ending soon', 'Coming up'] as const;
export type WhenFilter = (typeof WHEN_FILTERS)[number];

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
