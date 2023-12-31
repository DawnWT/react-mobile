import { FC } from 'react'
import { Image, View } from 'react-native'
import { OnboardingCarousel, OnboardingCarouselData } from '../components/onboarding-carousel'
import { AppButton } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps, StackParamList } from '../../App'

const onBoardingData: Array<OnboardingCarouselData> = [
  {
    title: 'Your holiday shopping delivered to your home',
    description: "There's something for everyone to enjoy with Sweet Shop Favourites",
  },
  { title: 'title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'title 3', description: 'Morbi varius, massa at tempor hendrerit, erat neque sagittis turpis.' },
]

export const OnBoardingPage = () => {
  const navigation = useNavigation<StackNavigationProps<'OnBoarding'>>()

  const handleGetStarted = () => {
    navigation.navigate('App')
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 117,
        width: '100%',
        paddingVertical: 33,
        paddingHorizontal: 42,
        backgroundColor: '#2A4BA0',
      }}
    >
      <OnboardingCarousel data={onBoardingData} width={300} />
      <Image source={require('../../medias/icon/medias.png')} tintColor="#FFFFFF45" />
      <AppButton arrowIcon={true} text="Get Started" onClick={handleGetStarted} />
    </View>
  )
}
