import { FC, useCallback, useRef, useState } from 'react'
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'

export interface OnboardingCarouselData {
  title: string
  description: string
}

interface OnboardingCarouselItemProps extends OnboardingCarouselData {
  width: number
}

interface OnboardingCarouselProps {
  data: OnboardingCarouselData[]
  width: number
}

interface OnboardingCarouselPaginationItemProps {
  isActive: boolean
}

const OnboardingCarouselPaginationItem: FC<OnboardingCarouselPaginationItemProps> = ({ isActive }) => {
  return (
    <View
      style={{
        width: isActive ? 34 : 20,
        height: 2,
        borderRadius: 5,
        backgroundColor: isActive ? '#F8F9FB' : '#F8F9FB23',
      }}
    />
  )
}

const OnboardingCarouselItem: FC<OnboardingCarouselItemProps> = ({ title, description, width }) => {
  return (
    <View style={{ overflow: 'hidden', width }}>
      <Text style={{ color: '#FAFBFD', fontWeight: '700', fontSize: 30, lineHeight: 38 }}>{title}</Text>
      <Text style={{ color: '#B2BBCE', fontSize: 18, fontWeight: '500', lineHeight: 22, paddingTop: 20 }}>{description}</Text>
    </View>
  )
}

export const OnboardingCarousel: FC<OnboardingCarouselProps> = ({ data, width }) => {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    const distance = Math.abs(roundIndex - index)

    const isNoMansLand = 0.4 < distance

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  return (
    <View
      style={{ display: 'flex', flexDirection: 'column', gap: 40, height: 220, maxWidth: '100%', overflow: 'hidden', width }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OnboardingCarouselItem title={item.title} description={item.description} width={300} />
        )}
        onScroll={onScroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={useCallback((e: OnboardingCarouselData) => e.title, [])}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
        }}
      >
        {data.map((_, i) => (
          <OnboardingCarouselPaginationItem isActive={index === i} key={i} />
        ))}
      </View>
    </View>
  )
}
