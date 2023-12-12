import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import { useFakeStoreGetProduct } from '../hooks/useFakeStoreApi'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated'

export const CategoriesPage = () => {
  const navigation = useNavigation()
  const opacity = useSharedValue(0)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { data, isLoading } = useFakeStoreGetProduct({ category: selectedCategory })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500, easing: Easing.ease }),
    }
  })

  useEffect(() => {
    opacity.value = 1
  }, [])

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
        <Image source={{ uri: '' }} width={10} height={10} style={styles.searchBarIcon} />
        <Text style={styles.Text_up}>Shop</Text>
        <Text style={styles.Text_down}>By Category</Text>
      </View>
      <View style={styles.categoryButtons}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === null && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.categoryButtonText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'electronics' && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory('electronics')}
        >
          <Text style={styles.categoryButtonText}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'jewelery' && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory('jewelery')}
        >
          <Text style={styles.categoryButtonText}>Jewelery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === "men's clothing" && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory("men's clothing")}
        >
          <Text style={styles.categoryButtonText}>Men's Clothing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === "women's clothing" && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory("women's clothing")}
        >
          <Text style={styles.categoryButtonText}>Women's Clothing</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2A4BA0" />
        </View>
      ) : (
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
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
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

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
    padding: 8,
  },
  categoryButton: {
    padding: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 45,
    borderColor: '#C5CDD2',
  },
  selectedCategoryButton: {
    backgroundColor: '#F9B023',
    borderColor: '#F9B023',
  },

  categoryButtonText: {
    color: '#606D76',
    fontWeight: 'bold',
    fontSize: 8,
  },
})

export default CategoriesPage
