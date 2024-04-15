import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const DoneScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>Date: {date.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Text style={styles.timeText}>Time: {date.toLocaleTimeString()}</Text>
        </TouchableOpacity>
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
    </View>
  );
}

export default DoneScreen