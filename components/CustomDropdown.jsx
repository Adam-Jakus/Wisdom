import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Light', value: '1' },
  { label: 'Dark', value: '2' },
  
];

const CustomDropdown = () => {
  const [value, setValue] = useState(null);

  return (
    <View className="bg-white">
        <Text className="m-[10px] text-xl">Theme</Text>
      <Dropdown
        iconColor='white'
        backgroundColor='#2a4252'
        placeholder="Theme"
        placeholderStyle={styles.placeholderStyle}
        className="w-full h-[50px] "
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        value={value}
        labelField="label"
        onChange={item => {
          setValue(item.value);
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'primary',
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 25
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: 'white'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CustomDropdown;