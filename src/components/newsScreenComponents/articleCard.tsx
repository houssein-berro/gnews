import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Article, MAX_FONT_MULTIPLIER } from '../../utils/constants'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <View style={styles.card}>
      <Text allowFontScaling maxFontSizeMultiplier={MAX_FONT_MULTIPLIER} style={styles.title}>
        {article.title}
      </Text>
      <Text allowFontScaling maxFontSizeMultiplier={MAX_FONT_MULTIPLIER} style={styles.author}>
        {article.source.name || 'Unknown author'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontStyle: 'italic',
    fontSize: 12,
  },
})
