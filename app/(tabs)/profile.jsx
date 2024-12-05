import {ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../../constants';
import EmployeeCard from '../../components/EmployeeCard';
//this will be dynamically rendered from db data but just layout for now
const Profile = () => {
  return (
    <View className="w-full items-center h-full dark:bg-primary">
        <Text className="dark:text-secondary text-3xl top-0 mt-5 mb-5">Profile</Text>
        <TouchableOpacity className="bg-white w-[150px] h-[150px] items-center justify-center border-black-200 rounded-2xl">
          <Image source={icons.profile} 
          className="w-[100px] h-[100px]" 
          resizeMode="contain"/>
        </TouchableOpacity>
        <Text className="dark:text-secondary m-3">England/London</Text>

        <EmployeeCard></EmployeeCard>
        <Text className="flex dark:text-secondary text-2xl ml-5 self-center m-5">Employee ID: 233</Text>
        <View className="border-white-200">
        
        <View className="flex flex-row ">
        <View className="flex flex-col items-center justify-items-center gap-3">
          <Text className="dark:text-secondary flex text-xl">First Name:</Text>
          <Text className="dark:text-secondary flex text-xl">Last Name:</Text>
          <Text className="dark:text-secondary flex text-xl">Title:</Text>
          <Text className="dark:text-secondary flex text-xl">Phone #:</Text>
          <Text className="dark:text-secondary flex text-xl">Birthday-(yyy/mm/dd):</Text>
          <Text className="dark:text-secondary flex text-xl">Preffered Pronouns:</Text>
          <Text className="dark:text-secondary flex text-xl">Contract Status:</Text>
        </View>
        <View className="flex flex-col items-center gap-3">
          <Text className="flex dark:text-secondary text-xl ml-5">John</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">Doe</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">Employee</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">123-456-7890</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">2002/04/11</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">He/him</Text>
          <Text className="flex dark:text-secondary text-xl ml-5">Signed</Text>
        </View>
        </View>
        </View>
        

    </View>
  )
}

export default Profile
