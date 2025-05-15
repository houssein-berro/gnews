// src/screens/newsScreen/NewsScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  ListRenderItemInfo,
  TextInput,
} from 'react-native';
import {fetchNews} from '../../utils/fetchNews';
import {Article} from '../../utils/constants';
import SearchBar from '../../components/newsScreenComponents/searchBar';
import ArticleCard from '../../components/newsScreenComponents/articleCard';
import PlaceholderCard from '../../components/newsScreenComponents/placeholderCard';

export default function NewsScreen() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filtered, setFiltered] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState('10');

  const loadNews = async (n: number) => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchNews(n);
      setArticles(data);
      const term = searchTerm.trim().toLowerCase();
      setFiltered(
        term
          ? data.filter(
              a =>
                a.title.toLowerCase().includes(term) ||
                a.source.name.toLowerCase().includes(term),
            )
          : data,
      );
    } catch (err: any) {
      setError(err.message);
      setArticles([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadNews(Number(count) || 0);
    setRefreshing(false);
  };

  useEffect(() => {
    loadNews(Number(count) || 0);
  }, []);

  const onChangeSearch = (text: string) => {
    setSearchTerm(text);
    const term = text.trim().toLowerCase();
    setFiltered(
      articles.filter(
        a =>
          a.title.toLowerCase().includes(term) ||
          a.source.name.toLowerCase().includes(term),
      ),
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchTerm} onChange={onChangeSearch} />
      <FlatList
        contentContainerStyle={styles.list}
        data={
          loading ? Array(Number(count) || 0).fill({} as Article) : filtered
        }
        keyExtractor={(_, idx) =>
          loading ? idx.toString() : filtered[idx].url
        }
        renderItem={({item}: ListRenderItemInfo<Article>) =>
          loading ? <PlaceholderCard /> : <ArticleCard article={item} />
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingVertical: 8},
  countInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 16,
    flexGrow: 1
    },
});
