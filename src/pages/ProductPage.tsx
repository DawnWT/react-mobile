import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import SVGArrowLeft from '../components/arrowLeftSVG'
import { useFakeStoreGetProduct } from '../hooks/useFakeStoreApi'
import { StackParamList } from '../../App'
import { StackScreenProps } from '@react-navigation/stack'
import SVGCart from '../components/cartSVG'
import SVGStar from '../components/StarSVG'
import { StarRating } from '../components/starRating'
import { StatusBar } from 'expo-status-bar'

type props = StackScreenProps<StackParamList, 'ProductDetails'>

export const ProductPage: FC<props> = function ({ navigation, route }) {
  const { productId } = route.params
  const { data } = useFakeStoreGetProduct({ id: productId })

  const pageWithData = (
    <>
      <StatusBar style="dark" />
      <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            padding: 3,
            backgroundColor: '#F8F9FB',
            borderRadius: 50,
            left: 0,
            zIndex: 1000,
          }}
        >
          <SVGArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', right: 0, zIndex: 1000 }}>
          <SVGCart color="#000" />
        </TouchableOpacity>

        <Image
          source={{ uri: data?.image }}
          defaultSource={require('../../medias/icon/medias.png')}
          style={{ marginTop: 30 }}
          width={200}
          height={200}
        />
      </View>
      <Text
        style={{ maxWidth: '70%', alignSelf: 'flex-start', fontSize: 20, fontWeight: '700', lineHeight: 26 }}
        numberOfLines={2}
      >
        {data?.title}
      </Text>
      <Text
        style={{ color: '#2A4BA0', alignSelf: 'flex-start', fontSize: 16, fontWeight: '700', lineHeight: 24 }}
        numberOfLines={2}
      >
        ${data?.price}
      </Text>
      {/* <Text>
        {data?.rating.count} / {data?.rating.rate}
      </Text> */}
      <View
        style={{ display: 'flex', alignSelf: 'flex-start', flexDirection: 'row', gap: 5, justifyContent: 'center' }}
      >
        <StarRating rating={data?.rating.rate ?? 0} />
        <Text style={{ color: '#A1A1AB', fontSize: 14, fontWeight: '400', lineHeight: 20 }}>
          {data?.rating.count} Reviews
        </Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, height: 56 }}>
        <TouchableOpacity
          style={{
            borderBlockColor: '#2A4BA0',
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
          }}
        >
          <Text style={{ color: '#2A4BA0', fontSize: 14, fontWeight: '600' }}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#2A4BA0',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 14, fontWeight: '600' }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>Details</Text>
        <Text style={{ color: '#8891A5', fontSize: 16, fontWeight: '400', lineHeight: 24 }}>{data?.description}</Text>
      </View>
    </>
  )
  return (
    <View style={{ display: 'flex', flex: 1, alignItems: 'center', marginTop: 50, paddingHorizontal: 24, gap: 20 }}>
      {data ? pageWithData : <Text>Loading ...</Text>}
    </View>
  )
}
