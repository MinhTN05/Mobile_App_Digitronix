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
          {showOptions && (
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Không nghe máy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Hủy đơn hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Khác...</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.option, styles.sendOption]}>
                <Text style={[styles.optionText, styles.sendText]}>Gửi</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.row2}>
            <Text style={styles.texttext}>Done</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveriedchedulesScreen;