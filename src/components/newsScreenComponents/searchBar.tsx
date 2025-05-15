import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { MAX_FONT_MULTIPLIER } from '../../utils/constants'

interface SearchBarProps {
  value: string
  onChange: (text: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search by title or author"
      value={value}
      onChangeText={onChange}
      allowFontScaling
      maxFontSizeMultiplier={MAX_FONT_MULTIPLIER}
      numberOfLines={1}
      maxLength={70}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
})
