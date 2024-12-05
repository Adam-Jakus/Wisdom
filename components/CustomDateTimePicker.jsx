import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text } from 'react-native'

const CustomDateTimePicker = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleStartTimeChange = (event, selectedDate) => {
    setStartTime(selectedDate);
  };

  const handleEndTimeChange = (event, selectedDate) => {
    setEndTime(selectedDate);
  };

  return (
    <View className="flex flex-row mt-2 mb-2">
      <DateTimePicker
        value={startTime}
        mode="time"
        onChange={handleStartTimeChange}
      />
      <DateTimePicker
        value={endTime}
        mode="time"
        onChange={handleEndTimeChange}
      />
    </View>
  );
};

export default CustomDateTimePicker;