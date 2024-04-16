import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const DeliveriedchedulesScreen = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handlePress = () => {
    navigation.push('DeliveriedDetailsScreen', {});
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOptionSelected(true);
  };

  const handleSend = () => {
    if (isOptionSelected) {
      // Do something when option is selected and "Sent" is pressed
      console.log("Option selected:", selectedOption);
      setShowOptions(false); // Close the modal
    } else {
      // Alert user to select an option
      console.log("Bạn hãy lựa chọn.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={handlePress}>
        <View style={styles.column}>
          <View>
            <Text style={styles.text}>OrderId: 123</Text>
          </View>
          <View>
            <Text style={styles.text}>Customer: Mr. Bú</Text>
          </View>
          <View>
            <Text style={styles.text}>Date: {date.toDateString()}</Text>
          </View>
          <View>
            <Text style={styles.text}>Time: {date.toLocaleTimeString()}</Text>
          </View>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )}
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.row2} onPress={toggleOptions}>
            <Text style={styles.texttext}>Report</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={showOptions}
            onRequestClose={() => setShowOptions(false)}
          >
            <TouchableOpacity
              style={styles.modalContainer}
              activeOpacity={1}
              onPress={() => setShowOptions(false)}
            >
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOption === 'Không nghe máy' && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect('Không nghe máy')}
                >
                  <Text style={styles.optionText}>Don't answer the phone.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOption === 'Hủy đơn hàng' && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect('Hủy đơn hàng')}
                >
                  <Text style={styles.optionText}>Cancel order.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOption === 'Khác...' && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect('Khác...')}
                >
                  <Text style={styles.optionText}>Other...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, styles.sendOption]} onPress={handleSend}>
                  <Text style={[styles.optionText, styles.sendText]}>Sent</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
          <TouchableOpacity style={styles.row2}>
            <Text style={styles.texttext}>Done</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveriedchedulesScreen;