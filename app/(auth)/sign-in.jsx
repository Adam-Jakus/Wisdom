import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useState} from 'react'
import {Link, router} from 'expo-router'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import Users from '../../config/users.json';
import Home from '../(tabs)/home';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  // const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [error, setError] = useState(false);
  
    const handleLogin = async () => {
      try {
        console.log('Login attempt');
        const response = await fetch('../../config/users.json'); 
        // Fetch local JSON due to lack of data connection method... API or db context can be used in future
        
        const users = await response.json();
        
        console.log(users)
        const user = users.find(

        (user) => user.username === username && user.password === password
          
        );
        
        if ( user) {
          // Successful login
          console.log('Login successful!' + user);
          router.push(Home)
        } else {
          setError('Invalid username or password');
          console.log('Login not successful!');
        }
      } catch (e) {
        setError('Error fetching user data');
        console.log('failed to log')
      }
      return error;
    }
  

//configure so no going back to login screen once logged in
  return (
    <SafeAreaView className="h-full bg-primary">
      <Image source={images.logo} resizeMode='contain' className="w-full mt-10"/>
        <Text className="text-2xl text-white text-semibold mt-[25px] font-psemibold text-center">
          Log in 
        </Text>
        <View className="w-full  h-full px-4 my-6">
        
        <FormField
         title="Email"
         value={username}
        //  handleChangeText={(e) => setForm({...form, email: e })}
         otherStyles=""
         keyboardType="email-address"
         onChangeText={setUsername}
        />
        <FormField    
         title="Password"
         value={password}
        //  handleChangeText={(e) => setForm({...form, password: e })}
         otherStyles="mt-7"
         onChangeText={setPassword}
        />
        
        <CustomButton title='Sign In' 
        handlePress={handleLogin}
        containerStyles="mt-7"
        
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-white">Forgot Password?</Text>
          <Link href='../../home' className="text-black">Click to Nav</Link>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default SignIn