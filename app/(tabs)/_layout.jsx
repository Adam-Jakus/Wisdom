import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants';
import { GestureHandlerRootView, PanGestureHandler, ScrollView, Swipeable } from 'react-native-gesture-handler';
import Animated , { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import Home from './home';
import Tracker from './tracker';
import Notifications from './notifications';
import Requests from './requests';
import Profile from './profile';
import Settings from './settings';
import Index from '../index'

//test stylesheet temporary
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250, // Adjust width as needed
    backgroundColor: 'white',
  },
});

function Logout() {
  return alert("Logging out...")
}

// menu and routing... vision is to have a footer and header be rendered as template for all pages
const Drawer = createDrawerNavigator();

function HamburgerMenu({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: isOpen ? 0 : -250 }], // Adjust -250 as needed
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
    
      </TouchableOpacity>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Home')}>Home</Text>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Tracker')}>Tracker</Text>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Notifications')}>Notifications</Text>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Requests')}>Requests</Text>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Profile')}>Profile</Text>
      <Text className="text-2xl" 
      onPress={() => navigation.navigate('Settings')}>Settings</Text>
      
      <Text className="text-2xl text-secondary bottom-0 absolute h-[100]"  
      onPress={() => Logout()} >Logout</Text>
      {/* <Animated.View style={[styles.menu, animatedStyle]} >
        <Text onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text onPress={() => navigation.navigate('Settings')}>Settings</Text>
      </Animated.View> */}
    </View>
  );
}
// while active tab set color to grayed out?
const TabsLayout = () => {
  return (
  <NavigationIndependentTree>
    <NavigationContainer independent={true} className="bg-primary">
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <HamburgerMenu {...props} />}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Tracker" component={Tracker}/>
        <Drawer.Screen name="Notifications" component={Notifications}/>
        <Drawer.Screen name="Requests" component={Requests}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>
    </NavigationContainer>
  </NavigationIndependentTree>
  )
}

export default TabsLayout