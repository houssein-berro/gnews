// src/components/PlaceholderCard.tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function PlaceholderCard() {
  return (
    <View style={styles.card}>
      <View style={styles.placeholderTitle} />
      <View style={styles.placeholderAuthor} />
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
  placeholderTitle: {
    height: 20,
    backgroundColor: '#e1e9ee',
    borderRadius: 4,
    marginBottom: 8,
  },
  placeholderAuthor: {
    height: 14,
    width: '40%',
    backgroundColor: '#e1e9ee',
    borderRadius: 4,
  },
})
