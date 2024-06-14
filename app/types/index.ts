export interface linkProps {
  name: string;
  href: string;
}

export interface PropsMovieCard {
  id: number;
  title?: string;
  age?: number;
  duration?: number;
  wachlist?: boolean;
  wachlistId?: number;
  overview?: string;
  category?: string;
  videoSource?: string;
  youtubeString?: string;
  release: number;
}
