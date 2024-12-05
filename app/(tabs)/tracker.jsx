import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

import EmployeeCard from '../../components/EmployeeCard'
import CustomSwitch from '../../components/CustomSwitch'
import CustomDropdown from '../../components/CustomDropdown';

const Tracker = () => {
  const [isOnline, setOnline] = useState(false);
  const [isSelected, setProj] = useState(false);

  const startOnline = () => {
    setOnline(!isOnline)
  }
  const showProjects = () => {
    setProj(!isSelected)
  }

  return (
    <View className="w-full items-center h-full dark:bg-primary">
        <Text className="dark:text-secondary text-2xl top-0 mt-5 mb-5">Tracker</Text>
        <EmployeeCard className="m-5"></EmployeeCard>
        <TouchableOpacity onPress={showProjects} 
        className="border dark:border-secondary justify-center mt-4">
          <Text className="dark:text-secondary text-xl m-2 text-center">
            Select a project
          </Text>
        </TouchableOpacity>
        {isSelected && (
        <View className="border dark:border-secondary">
          <Text className="dark:text-secondary m-2 text-lg">Training</Text>
          <Text className="dark:text-secondary m-2 text-lg">Avantive</Text>
        </View>
        )}
        <CustomSwitch onPress={startOnline} className="m-5"/>


        <Text className="dark:text-secondary text-2xl m-5">This week:</Text>
          <Text className="dark:text-secondary text-xl">DATA</Text>
        <Text className="dark:text-secondary text-2xl m-5">Current Session:</Text>
          <Text className="dark:text-secondary text-xl">DATA</Text>
        <Text className="dark:text-secondary text-2xl m-5">Today:</Text>
          <Text className="dark:text-secondary text-xl">DATA</Text>
        
        
        {isOnline && (
        <View className="">
          <Text className="dark:text-secondary">Online</Text>
        </View>
        )}
    </View>
  )
}

export default Tracker