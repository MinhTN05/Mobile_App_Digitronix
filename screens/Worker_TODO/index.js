import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ToDoScreen = () => {
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
      <View style={[styles.dateContainer, styles.rightAligned]}>
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
      <View style={styles.textContainer}>
        <View style={styles.texttext}>
          <View style={styles.rowContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Production_Detail</Text>
            </View>
            <View style={[styles.columnContainer, styles.quantityContainer]}>
              <Text style={styles.label}>Quantity: 500</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Time: {date.toLocaleTimeString()}</Text>
            </View>
            <View style={[styles.columnContainer, styles.rightAligned]}>
              <TouchableOpacity style={styles.startButton}>
                <Image source={require('../../assets/images/Start.png')} style={styles.startIcon} />
                <Text style={styles.startText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ToDoScreen;
