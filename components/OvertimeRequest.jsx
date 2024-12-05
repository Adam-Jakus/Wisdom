import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import RangePicker from './RangePicker';
import CustomDateTimePicker from './CustomDateTimePicker';

const OvertimeRequest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="m-[10px]">
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Overtime request form</Text>
              <Text className="text-primary align-left border">This feature will allow you to extend your project weekly hour cap.
        It will extend the maximum hours counted toward your payroll time.
        It will not add time to your total time.
        Example: Cap time is 40 hrs, with OT of 4 hrs, your maximum payroll time will be 44hr.
        Please be mindful that those additional 4 hrs still need to be tracked.
        Please select time according to your timezone.</Text>
        <Text className="text-lg">Select the date and time:</Text>
              <RangePicker></RangePicker>
              <CustomDateTimePicker></CustomDateTimePicker>
              <Text>____ hours</Text>
        <TouchableOpacity className="bg-secondary rounded-xl min-h-[25px] min-w-[50] justify-center m-[10px]" 
              onPress={() => setModalVisible(!modalVisible)}>
                <Text className="text-center text-white">Exit</Text>
              </TouchableOpacity>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} 
        className="bg-white rounded-xl min-h-[50px] min-w-[150] justify-center">
          <Text className="text-center">Request Overtime</Text>
        </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default OvertimeRequest;