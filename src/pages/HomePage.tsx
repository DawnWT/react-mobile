import * as React from 'react'
import { View, TextInput, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AppButton } from '../components/button'

export const HomePage = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <Text>Hey, Halal</Text>
      <Image source={require('../../medias/icon/cart_icon.png')} />
🐛
      <View style={styles.searchBar}>
        <TextInput style={styles.searchBarInput} placeholder="Search Products or store" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2A4BA0',
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#153075',
    borderRadius: 45,
    padding: 8,
  },
  searchBarInput: {
    width: 335,
    height: 56,
  },
  body: {
    // Styles pour le reste du corps de la page
  },
})
