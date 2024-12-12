import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {Link, Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useEffect} from 'react';

import {images} from '../constants';
import CustomButton from '../components/CustomButton';

const waitForLoad = () => {
    setTimeout(() => {
      router.push('/sign-in')
    }, 2000); // Replace with your actual app loading time
    
}


export default function App() {
    
    return (
        <SafeAreaView className="bg-primary h-full" >
            
                <View className="w-full justify-center items-center h-full px-4 " onLayout={waitForLoad}>
                    <Image source={images.logo} 
                    className="w-[130px] h-[84px]" 
                    resizeMode="contain"
                    />
                    <Text 
                    className="text-3xl text-white font-bold text-center mt-25"
                    style={{color: "white"}}>Welcome to Wisdom Mobile</Text>
                    {/* <CustomButton title="continue to signon"
                    handlePress={() => router.push('/sign-in')}
                    containerStyles="w-full mt-7"/> */}
                </View>
            
            <StatusBar backgroundColor='#161622'
            style='light' />
                
        </SafeAreaView>
    );
    
}

