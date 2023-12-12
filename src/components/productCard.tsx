import { FC } from 'react'
import { Product } from '../hooks/useFakeStoreApi'
import { Image, StyleSheet, Text, View } from 'react-native'
import SVGPlus from './plusSVG'

interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = function ({ product }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: product.image }}
          defaultSource={require('../../medias/icon/medias.png')}
          // style={styles.image}
          width={100}
          height={100}
        />
        <View style={styles.plusSvg}>
          <SVGPlus />
          {/* <Text>+</Text> */}
        </View>
      </View>
      <View>
        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 200,
    // width: '48%',
    flexGrow: 1,
    padding: 17,
    borderRadius: 12,
    backgroundColor: '#F8F9FB',
    // borderBlockColor: 'black',
    // borderWidth: 1,
  },
  image: {
    position: 'relative',
  },
  plusSvg: {
    position: 'absolute',
    bottom: -10,
    right: -10,

    backgroundColor: '#2A4BA0',
    padding: 8,
    borderRadius: 50,
  },
  price: { fontSize: 14, fontWeight: '600', lineHeight: 20 },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.24,
    color: '#616A7D',
  },
  buyButton: {
    borderRadius: 12,
  },
})
