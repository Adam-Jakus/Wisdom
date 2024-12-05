import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text); // Call the onSearch function to use filter and passed from parent
  };

  return (
    <View className="min-w-[300px] min-h-[35px] justify-center items-center border border-secondary rounded-lg bg-black ">
      <TextInput
        className="dark:text-secondary "
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    fontSize: 16,
  },
});

export default CustomSearchBar;