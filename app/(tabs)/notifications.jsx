import {ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSearchBar from '../../components/CustomSearchBar';


const Notifications = () => {
  return (
    
    <View className="w-full items-center h-full dark:bg-primary">

        <Text className="dark:text-secondary text-2xl top-0 mt-5 ">Notifications</Text>
        <CustomSearchBar className="min-w-[350px]" />

<View className="flex flex-row  justify-evenly m-5">
  <View className="flex flex-col justify-center">
    <TouchableOpacity className="justify-center bg-white rounded-xl min-h-[35px] min-w-[50]">
      <Text className="text-center">All</Text></TouchableOpacity>
  </View>
  <View className="flex flex-col ">
    <TouchableOpacity className="justify-center bg-white rounded-xl min-h-[35px] min-w-[75]">
      <Text className="text-center">Unread</Text></TouchableOpacity>
  </View>
  <View className="flex flex-col justify-center">
    <TouchableOpacity className="justify-center bg-white rounded-xl min-h-[35px] min-w-[50] ">
      <Text className="text-center">Read</Text></TouchableOpacity>
  </View>
</View>

<ScrollView className="min-w-[300px] max-h-[500px] border dark:border-secondary">

  <View className="flex flex-row  justify-evenly border dark:border-secondary">
    <View className="flex flex-col justify-center">
      <Text className="dark:text-secondary m-[10]">Icon</Text>
    </View>
    <View className="flex flex-col ">
      <Text className="dark:text-secondary m-[10] ">Message</Text>
      <Text className="dark:text-secondary m-[10]">Date</Text>
    </View>
    <View className="flex flex-col ">
      <TouchableOpacity 
      className="dark:bg-secondary rounded-xl min-h-[25px] min-w-[25] justify-center">
        <Text className=" text-center">x</Text>
      </TouchableOpacity>
    </View>
  </View>

</ScrollView>
  <View className="flex flex-col">
    <TouchableOpacity className=" bg-white rounded-xl min-h-[35px] min-w-[50] justify-center m-5">
      <Text className="text-center justify-center w-[100px]">Load More</Text>
    </TouchableOpacity>
  </View>
    </View>
  )
}

export default Notifications