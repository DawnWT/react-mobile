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
    <View style={{ width }}>
      <Text style={{ color: '#FAFBFD', fontWeight: 'bold', fontSize: 26 }}>{title}</Text>
      <Text style={{ color: '#B2BBCE', fontSize: 18 }}>{description}</Text>
    </View>
  )
}

export const OnboardingCarousel: FC<OnboardingCarouselProps> = ({ data }) => {
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

  const { width } = Dimensions.get('window')

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    getItemLayout: useCallback(
      (_: ArrayLike<OnboardingCarouselData> | null | undefined, index: number) => ({
        index,
        length: width,
        offset: index * width,
      }),
      []
    ),
  }

  return (
    <View style={{display: 'flex', flexDirection: 'column', gap: 40, maxHeight: '100%', overflow: 'hidden'}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OnboardingCarouselItem title={item.title} description={item.description} width={width} />
        )}
        onScroll={onScroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={useCallback((e: OnboardingCarouselData) => e.title, [])}
        {...flatListOptimizationProps}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
        }}
      >
        {data.map((_, i) => (
          <OnboardingCarouselPaginationItem isActive={index === i} />
        ))}
      </View>
    </View>
  )
}
