import { FC } from 'react'
import { Image, Text, View, Button, TouchableOpacity } from 'react-native'

interface AppButtonProps {
  text: string
  arrowIcon?: boolean
  onClick?: () => void
}

export const AppButton: FC<AppButtonProps> = ({ text, onClick, arrowIcon }) => {
  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 46,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: '#FAFBFD',
          paddingHorizontal: 50,
          paddingVertical: 23,
        }}
        onPress={onClick}
      >
        <Text style={{ fontSize: 16, fontStyle: 'normal', fontWeight: '600', lineHeight: 24 }}>{text}</Text>
        {arrowIcon && <Image source={require('../../medias/icon/Arrow_4.png')} tintColor='black' />}
      </TouchableOpacity>
    </View>
  )
}
