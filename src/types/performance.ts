export type Genre = 'Ballet' | 'Contemporary';

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
