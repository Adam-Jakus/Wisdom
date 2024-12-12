import { View, Text, Button, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

import ManualRequest from '../../components/ManualRequest';
import OvertimeRequest from '../../components/OvertimeRequest';
import RadioButtonRN from 'radio-buttons-react-native';

const Requests = () => {

  const [isOtOpen, setOtOpen] = useState(false);
  const [isMtOpen, setMtOpen] = useState(false);
  
  
  const otExpanded = () => {
    setOtOpen(!isOtOpen)
  }
  const mtExpanded = () => {
    setMtOpen(!isMtOpen)
  }

  return (
    <View className="w-full items-center h-full dark:bg-primary">
        <Text className="dark:text-secondary text-2xl top-0 mt-5 mb-5">Requests</Text>

          <View className="flex flex-row">
            <View className="flex flex-col">
              <OvertimeRequest></OvertimeRequest>
            </View>
            <View className="flex flex-col">
              <ManualRequest ></ManualRequest>
            </View>
          </View>

          <Text className="dark:text-secondary m-[25] text-xl">Your requests</Text>

              <View className="flex flex-row border dark:border-secondary justify-evenly min-w-[300px]">
                <View className="flex flex-col">
                  <Text className="dark:text-secondary m-[10]">Date</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="dark:text-secondary m-[10]">Type</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="dark:text-secondary m-[10]">Duration</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="dark:text-secondary m-[10]">Status</Text>
                </View>
              </View>

          <ScrollView className="min-w-[300px] border dark:border-secondary max-h-[350px] ">

          
          {/* this will be dynamically rendered from db context but just labels for demo */}
          <View className="flex flex-row border dark:border-secondary justify-evenly">
            <View className="flex flex-col border dark:border-secondary">
              <Text className="dark:text-secondary m-[10]">DATA</Text>
            </View>
            <View className="flex flex-col border dark:border-secondary">
              <Text className="dark:text-secondary m-[10] ">DATA</Text>
            </View>
            <View className="flex flex-col border dark:border-secondary">
              <Text className="dark:text-secondary m-[10]">DATA</Text>
            </View>
            <View className="flex flex-col border dark:border-secondary">
              <Text className="dark:text-secondary m-[10]">DATA</Text>
            </View>
          </View>
          
          </ScrollView>

          <View className="flex flex-col">
            <TouchableOpacity className="dark:bg-accent rounded-xl min-h-[35px] min-w-[50] justify-center m-5 ">
              <Text className="dark:text-secondary text-center justify-center w-[100px] ">Load More</Text>
            </TouchableOpacity>
          </View>

    </View>
  )
}

export default Requests