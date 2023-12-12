import * as React from 'react'
import { View, TextInput, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useFakeStoreGetProduct } from '../hooks/useFakeStoreApi'
import { Dropdown } from 'react-native-element-dropdown'
import { ProductCard } from '../components/productCard'
import { StatusBar } from 'expo-status-bar'
import SVGCart from '../components/cartSVG'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../../App'

const addressDropdownDatas = [{ address: 'Green Way 3000, Sylhet', id: 1 }]

const withinDropdownDatas = [
  { within: '1 Hour', id: 1 },
  { within: '2 Hour', id: 2 },
  { within: '3 Hour', id: 3 },
]

export const HomePage = () => {
  const { data } = useFakeStoreGetProduct()
  const navigation = useNavigation<StackNavigationProps<'App'>>()

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, fontWeight: '600', color: '#F8F9FB', flexGrow: 1 }}>Hey, Halal</Text>
          <SVGCart />
        </View>

        <View style={styles.searchBar}>
          <Image source={require('../../medias/icon/Search_Icon.png')} />
          <TextInput
            style={styles.searchBarInput}
            placeholder="Search Products or store"
            placeholderTextColor="#8891A5"
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.dropdownLabel}>delivery to</Text>
            <Dropdown
              data={addressDropdownDatas}
              labelField="address"
              valueField="id"
              placeholder={'delivery to'.toUpperCase()}
              value={addressDropdownDatas[0]}
              onChange={() => void 0}
              style={{ width: 180 }}
              selectedTextStyle={styles.dropdownSelected}
              iconColor="#B2BBCE"
            />
          </View>
          <View>
            <Text style={styles.dropdownLabel}>Within</Text>
            <Dropdown
              data={withinDropdownDatas}
              labelField="within"
              valueField="id"
              value={withinDropdownDatas[0]}
              onChange={() => void 0}
              style={{ width: 70 }}
              selectedTextStyle={styles.dropdownSelected}
              iconColor="#B2BBCE"
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        {data && (
          <SafeAreaView>
            <FlatList
              style={styles.bodyContainer}
              data={data}
              renderItem={(data) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails', { productId: data.item.id })}
                  style={{ width: '48%' }}
                >
                  <ProductCard product={data.item} />
                </TouchableOpacity>
              )}
              keyExtractor={(data) => data.title}
              numColumns={2}
              columnWrapperStyle={{ gap: 20, marginBottom: 10 }}
            />
          </SafeAreaView>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A4BA0',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    backgroundColor: '#2A4BA0',
    padding: 20,
    paddingBottom: 12,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#153075',
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 28,
    alignItems: 'center',
    gap: 12,
  },
  searchBarInput: {
    flexGrow: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#F8F9FB',
    // width: 335,
    // height: 56,
  },
  dropdownSelected: {
    color: '#F8F9FB',
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownLabel: {
    color: '#F8F9FB',
    opacity: 0.5,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.22,
    textTransform: 'uppercase',
  },
  body: {
    backgroundColor: '#FFF',
    flexGrow: 1,
    marginBottom: 223,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // paddingHorizontal: 20,
    // rowGap: 20,
    // columnGap: 10,
    // justifyContent: 'space-between',
  },
})
