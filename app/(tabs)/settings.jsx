import RadioButtonRN from 'radio-buttons-react-native';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useColorScheme } from "nativewind";
import { DownOutlined } from '@ant-design/icons';


const Settings = () => {
const [isThemeOpen, setThemeOpen] = useState(false);
const [isNotificationsOpen, setNotificationsOpen] = useState(false);

const { colorScheme, setColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const isLightMode = colorScheme === "light";
  const toggleTheme = () => {
    setColorScheme(isDarkMode ? "light" : "dark");
    setColorScheme(isLightMode ? "dark" : "light");
  };

const themeExpanded = () => {
  setThemeOpen(!isThemeOpen)
}
const notificationsExpanded = () => {
  setNotificationsOpen(!isNotificationsOpen)
}

  return (
    <>
    
      <View className="w-full h-full dark:bg-primary">
      <Text className="dark:text-secondary text-3xl top-0 mt-5 mb-5 text-center">
        Settings
      </Text>
        <TouchableOpacity onPress={themeExpanded} className="border-t dark:border-secondary">
          <Text className="dark:text-secondary text-xl ml-[25] mt-[10] mb-[10]">Theme</Text>
          
        </TouchableOpacity>
        {isThemeOpen && (
        <View className="border-t dark:border-secondary">
          <TouchableOpacity className="" onPress={toggleTheme}>
            <Text className="dark:text-secondary ml-[35] mt-[10] mb-[10]">Light</Text>
            
            </TouchableOpacity>
          <TouchableOpacity onPress={toggleTheme}>
            <Text className="dark:text-secondary ml-[35] mt-[10] mb-[10]">Dark</Text>
            </TouchableOpacity>
        </View>
        )}
        
        <TouchableOpacity onPress={notificationsExpanded} className="border dark:border-secondary">
          <Text className="dark:text-secondary text-xl ml-[25] mt-[10] mb-[10]">
            Notifications
          </Text>
        </TouchableOpacity>

        {isNotificationsOpen && (
        <View className="border-b dark:border-secondary">
          <Text className="dark:text-secondary ml-[35] mt-[10] mb-[10]">
            Do not disturb
          </Text>
          <Text className="dark:text-secondary ml-[35] mt-[10] mb-[10]">
            External Notifications
            </Text>
        </View>
        )}

        <TouchableOpacity className="">
          <Text className="dark:text-secondary text-center text-xl mt-[10] mb-[10]">Language</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Settings