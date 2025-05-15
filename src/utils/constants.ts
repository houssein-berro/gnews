export const BASE_URL = 'https://gnews.io/api/v4/top-headlines';
export const TIMEOUT_MS = 15000;
export interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {name: string; url: string};
  author: string;
}
