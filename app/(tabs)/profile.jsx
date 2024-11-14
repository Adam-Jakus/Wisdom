import {ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
//this will be dynamically rendered from db data but just layout for now
const Profile = () => {
  return (
    <View className="w-full justify-center items-center h-full bg-primary">
        <Text className="text-white text-2xl top-0 absolute mt-5">Profile</Text>
        <Image source={images.Profile} 
                    className="w-[250px] h-[250px]" 
                    resizeMode="contain"
                    />
    </View>
  )
}

export default Profile
