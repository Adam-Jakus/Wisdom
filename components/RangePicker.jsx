import React, { useState, useCallback } from 'react';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

const RangePicker = () => {
  const [range, setRange] = useState({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(({ startDate, endDate }) => {
    setOpen(false);
    setRange({ startDate, endDate });
  }, [setOpen, setRange]);
//set to show current date and then show selected date in the button
  return (
    <>
      <Button onPress={() => setOpen(true)} 
      className={`bg-white rounded-xl min-h-[50px] min-w-[150] justify-center items-center`}>
      Pick Range
      </Button>
      <DatePickerModal
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default RangePicker;