import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-white rounded-xl min-h-[50px] min-w-[150] justify-center items-center
    ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>Login/SSO</Text>
    </TouchableOpacity>
  )
}

export default CustomButton