import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchWorker } from '../../store/slices/worker';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const workerData = useSelector(state => state.Worker.items);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredWorker, setFilteredWorker] = useState([]);

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    dispatch(fetchWorker());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('user_id');
        // console.log("userId from AsyncStorage:", userId);
        // Sau khi lấy userId thành công, tiếp tục xử lý lọc danh sách công việc dựa trên userId
        const filtered = workerData.filter(worker => worker.user_id == userId);
        // console.log(filtered)
        setFilteredWorker(filtered);
      } catch (error) {
        console.error("Error fetching userId from AsyncStorage:", error);
      }
    };

    fetchUserId();
  }, [workerData]);

  useEffect(() => {
    if (searchKeyword.trim() === '') {
      setFilteredWorker(workerData);
    } else {
      const filtered = workerData.filter(worker =>
        worker.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredWorker(filtered);
    }
  }, [searchKeyword, workerData]);

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
      <FlatList
        data={filteredWorker}
        renderItem={({ item }) => (
          <View style={styles.workerContainer}>
            <View style={styles.worker}>
              <View style={styles.workerInfo}>
                <Text style={styles.workerName}>Name: {item.name}</Text>
                <View style={styles.workerStatusPriceContainer}>
                  <Text style={styles.workerStatus}>Status: {item.status}</Text>
                  <Text style={styles.workerTotalPrice}>In material quantity: {item.in_material_quantity}</Text>
                  <Text style={styles.workerTotalPrice}>Out quantity: {item.out_quantity}</Text>
                  <Text style={styles.workerTotalPrice}>Status: {item.status}</Text>
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
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ToDoScreen;
