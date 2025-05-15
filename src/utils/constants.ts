export const BASE_URL = 'https://gnews.io/api/v4/top-headlines';
export const TIMEOUT_MS = 15000;
export const MAX_FONT_MULTIPLIER= 1.2;
export interface Article {
  title:       string
  description: string
  content:     string
  url:         string
  image:       string
  publishedAt: string
  source:      Source
}
export interface Source {
  name: string
  url:  string
}