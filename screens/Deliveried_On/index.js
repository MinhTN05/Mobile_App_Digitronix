import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../contains';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const DeliveriedOnchedulesScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <View style={styles.column}>
          <View>
            <Text style={styles.text}>OrderId: 123</Text>
          </View>
          <View>
            <Text style={styles.text}>Customer: Mr. Bú</Text>
          </View>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.text}>Date: {date.toDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Text style={styles.text}>Time: {date.toLocaleTimeString()}</Text>
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
        <View style={styles.column}>
          <View style={styles.row2}>
            <Text style={styles.texttext}>Report</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.texttext}>Done</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveriedOnchedulesScreen;