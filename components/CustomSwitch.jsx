import React, {useState} from 'react';
import {Switch, StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//what if this online switch could be shown at all times from a side tab or something?
  return (
    <View className="justify-center m-5">
        <Switch
          trackColor={{false: '#767577', true: '#38ff45'}}
          thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
  );
};

export default CustomSwitch;
