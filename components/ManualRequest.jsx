import RadioButtonRN from 'radio-buttons-react-native';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import CustomDateTimePicker from './CustomDateTimePicker';
import RangePicker from './RangePicker';

const ManualRequest = () => {
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
              <Text style={styles.modalText}>Manual time request form</Text>
              <Text className="text-primary align-left border">This feature allows you to add workhours to your timesheets, should any issues arise with the Tracker.
        For instance, if you forgot to turn on the tracker or if you have an OS that is not supported.
        MT can only be entered 7 days in the past, and please select the time based on your timezone.
        If you have any questions, please reach out to your manager.</Text>
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
          <Text className="text-center">Request Manual</Text>
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

export default ManualRequest;