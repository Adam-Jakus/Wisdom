import {ScrollView, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Notifications = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full bg-primary">
          <Text className="text-white text-2xl top-0 absolute mt-5">Notifications</Text>
      </View>
      <ScrollView className="h-full">
        <Text className="text-white">Notifications go here</Text>
      </ScrollView>  
    </SafeAreaView>
  )
}

export default Notifications