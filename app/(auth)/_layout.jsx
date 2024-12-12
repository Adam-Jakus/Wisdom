import {StyleSheet, View, Text } from 'react-native'
import React, { useState, useCallback} from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'




const AuthLayout = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    buttonsContainer: {
      padding: 10,
    },
    textStyle: {
      textAlign: 'center',
      marginBottom: 8,
    },
  });
  
  return (
    <>
        <Stack>
          <Stack.Screen name='sign-in' options={{headerShown: false, gestureEnabled: false}}/>
        </Stack>
        {/* <StatusBar barStyle="dark-content"/> */}
    </>
  )
}

export default AuthLayout