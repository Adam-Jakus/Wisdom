import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants'
import Profile from '../app/(tabs)/profile'

const EmployeeCard = ({title, containerStyles, handlePress, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-white border-black-200 rounded-xl min-h-[50px] min-w-[300] justify-center items-center
     ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading} href={Profile}
    >
      <Image source={icons.profile} className="w-[25px] h-[25px] fixed right-[125] top-[7]"></Image>
      <Text className="text-primary font-psemibold text-lg absolute h-[40]">John Doe</Text>
      <Text className="h-[15]">Employee</Text>
    </TouchableOpacity>
  )
}

export default EmployeeCard