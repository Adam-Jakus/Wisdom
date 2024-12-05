import {Image, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../components/DatePicker';
import EmployeeCard from '../../components/EmployeeCard';
import RangePicker from '../../components/RangePicker';


const Home = () => {
  return (
    <View>
            
    <View className="w-full h-full items-center dark:bg-primary">
        <Text className="dark:text-secondary text-3xl top-0 mt-5 mb-5">Dashboard</Text>
        <EmployeeCard className=""></EmployeeCard>
        <Text className="dark:text-secondary text-xl flex-5 text-center mt-5">
          Select Date Range: 
        </Text>

        <View className="flex-row mb-[15]">
        <View className="flex-col mt-5 items-center">
          <TouchableOpacity className="bg-white min-h-[35px] min-w-[100] justify-center border">
            <Text className="text-primary text-center ">
              Daily
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-col mt-5 items-center">
        <TouchableOpacity className="bg-white min-h-[35px] min-w-[100] justify-center border">
            <Text className="text-primary text-center ">
              Weekly
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-col mt-5 items-center">
        <TouchableOpacity className="bg-white min-h-[35px] min-w-[100] justify-center border">
            <Text className="text-primary text-center ">
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        

        <View className="flex-box items-center">
          {/* <DatePicker id="startDate" className="flex-row" style={{flex: 1}}/>
          <DatePicker id="endDate" className="flex-row" style={{flex: 2}}/> 
          this could realistically be a separate component that exists in tracker too?
           but this is fine for now*/}
          <RangePicker></RangePicker>

          <Text className="dark:text-secondary text-2xl mt-[25]">Tracked Time:</Text>
          <Text className="dark:text-secondary text-xl mt-3">DATA</Text>
        </View>

        <View className="flex-row mt-[25]">
        <View className="flex-col m-5 items-center">
          <Text className="dark:text-secondary text-xl">Idle Time:</Text>
          <Text className="dark:text-secondary mt-[15px]">DATA</Text>
        </View>

        <View className="flex-col m-5 items-center">
          <Text className="dark:text-secondary text-xl">Manual Time:</Text>
          <Text className="dark:text-secondary mt-[15px]">DATA</Text>
        </View>
        </View>
        <View className="flex-row ">
        <View className="flex-col m-5 items-center">
          <Text className="dark:text-secondary text-xl">Payroll Time:</Text>
          <Text className="dark:text-secondary mt-[15px]">DATA</Text>
        </View>
        <View className="flex-col m-5 items-center">
          <Text className="dark:text-secondary text-xl">Approved OT:</Text>
          <Text className="dark:text-secondary mt-[15px] ">DATA</Text>
        </View>
        </View>
        

        
          
    </View>
    

    </View>
            
  )
}

export default Home;