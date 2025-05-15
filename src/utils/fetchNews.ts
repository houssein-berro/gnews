import AsyncStorage from '@react-native-async-storage/async-storage';
import { timeoutPromise } from "./timeoutPromise";
import { GNEWS_API_KEY } from 'react-native-dotenv';
import { Article, BASE_URL, TIMEOUT_MS } from './constants';


function fetchWithTimeout(url: string, opts: RequestInit = {}): Promise<Response> {
  return Promise.race([
    fetch(url, opts),
    timeoutPromise(TIMEOUT_MS),
  ]) as Promise<Response>;
}

export async function fetchNews(n: number = 1): Promise<Article[]> {
  const url = `${BASE_URL}?token=${GNEWS_API_KEY}&lang=en&max=${n}`;

  try {
    const response = await fetchWithTimeout(url);
    if (!response.ok) {
      console.log(`HTTP ${response.status}: ${response.statusText}`);
    }

    const { articles } = (await response.json()) as { articles: Article[] };
    console.log(articles);
    
    await AsyncStorage.setItem('newsData', JSON.stringify(articles));
    return articles;
  } catch (error) {
    console.error('fetchNews error:', error);
    throw error;
  }
}