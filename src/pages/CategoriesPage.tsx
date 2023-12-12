import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import { useFakeStoreGetProduct } from '../hooks/useFakeStoreApi'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useDerivedValue,
  withDelay,
} from 'react-native-reanimated'

export const CategoriesPage = () => {
  const navigation = useNavigation()
  const opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500, easing: Easing.ease }),
    }
  })

  useEffect(() => {
    opacity.value = 1
  }, [])

  const { data } = useFakeStoreGetProduct({ category: 'electronics' })

  console.log(data)

  const navigateToProductDetail = (productId) => {
    // Naviguez vers la page de détails du produit avec l'ID du produit
    // navigation.navigate('ProductDetail', { productId });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Texttop}>Hey, Halal</Text>
        <Image source={require('../../medias/icon/cart_icon.png')} style={styles.cartIcon} />
        <Image source={require('../../medias/icon/search_icon.png')} style={styles.searchBarIcon} />
        <Image source={{uri: ''}} width={10} height={10} style={styles.searchBarIcon} />
        <Text style={styles.Text_up}>Shop</Text>
        <Text style={styles.Text_down}>By Category</Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            price={item.price}
            title={item.title}
            onPress={() => navigateToProductDetail(item.id)}
            image={item.image}
            
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.undercontainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    //opacity: 0,
  },

  header: {
    backgroundColor: '#2A4BA0',
    padding: 16,
    width: '100%',
  },
  Texttop: {
    color: '#F8F9FB',
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: 'semi-bold',
    marginTop: 56,
  },
  Text_up: {
    color: '#F8F9FB',
    fontFamily: 'Manrope',
    fontSize: 50,
    marginTop: 32,
    fontWeight: '100',
  },
  Text_down: {
    color: '#F8F9FB',
    fontFamily: 'Manrope',
    fontSize: 50,
    fontWeight: '900',
  },

  cartIcon: {
    position: 'absolute',
    right: 16,
    top: 56,
  },

  searchBarIcon: {
    position: 'absolute',
    right: 76,
    top: 68,
  },

  undercontainer: {
    // flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 24,
  },

 
})

export default CategoriesPage
