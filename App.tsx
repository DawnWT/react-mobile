import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { OnBoardingPage } from './src/pages/onBoarding'
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native'
import { HomePage } from './src/pages/HomePage'
import { CategoriesPage } from './src/pages/CategoriesPage'
import { MorePage } from './src/pages/MorePage'
import { FavoritePage } from './src/pages/FavoritePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductPage } from './src/pages/ProductPage'

export type StackParamList = {
  OnBoarding: undefined
  App: undefined
  ProductDetails: {
    productId: number
  }
}

export type TabParamList = {
  Home: undefined
  Categories: undefined
  Favorite: undefined
  More: undefined
}

export type StackNavigationProps<T extends keyof StackParamList> = CompositeNavigationProp<
  StackNavigationProp<StackParamList, T>,
  BottomTabNavigationProp<TabParamList>
>

export type TabNavigationProps<T extends keyof TabParamList> = CompositeNavigationProp<
  StackNavigationProp<StackParamList>,
  BottomTabNavigationProp<TabParamList, T>
>

const queryClient = new QueryClient()

const Tab = createBottomTabNavigator<TabParamList>()
const Stack = createStackNavigator<StackParamList>()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent

          if (route.name === 'Home') {
            iconComponent = <Image style={{ width: 24, height: 24 }} source={require('./medias/icon/home.png')} />
          } else if (route.name === 'Categories') {
            iconComponent = <Image style={{ width: 24, height: 24 }} source={require('./medias/icon/category.png')} />
          } else if (route.name === 'Favorite') {
            iconComponent = <Image style={{ width: 24, height: 24 }} source={require('./medias/icon/Heart.png')} />
          } else if (route.name === 'More') {
            iconComponent = (
              <Image style={{ width: 24, height: 24 }} source={require('./medias/icon/more-vertical.png')} />
            )
          }

          return iconComponent
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Categories" component={CategoriesPage} />
      <Tab.Screen name="Favorite" component={FavoritePage} />
      <Tab.Screen name="More" component={MorePage} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoarding">
          <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
          <Stack.Screen name="App" component={HomeTabs} />
          <Stack.Screen name="ProductDetails" component={ProductPage} initialParams={{ productId: 0 }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A4BA0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
