import React from 'react'
import { View, Text } from 'react-native'
import SVGStar from './StarSVG'
import SVGHalfStar from './halfStarSVG'

export const StarRating = ({ rating }: { rating: number }) => {
  const renderStars = () => {
    const stars = []
    const maxRating = 5

    // Calculate the number of full stars
    let fullStars = Math.floor(rating)

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<SVGStar key={i} state="full" />)
    }

    // Check if there is a fractional part for the half star
    if (rating % 1 !== 0) {
      stars.push(<SVGHalfStar key="half" />)
      fullStars += 1
    }

    // Render remaining empty stars
    for (let i = fullStars + 1; i <= maxRating; i++) {
      stars.push(<SVGStar key={i} state="empty" />)
    }

    return stars
  }

  return <View style={{ flexDirection: 'row', alignItems: 'center' }}>{renderStars()}</View>
}
