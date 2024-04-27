import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchWorker } from '../../store/slices/worker';
import { useDispatch, useSelector } from 'react-redux';
import { updateDone } from '../../store/slices/worker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProcessingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const workerData = useSelector(state => state.Worker.items);
  const [filteredWorker, setFilteredWorker] = useState([]);
  const [statusFilter, setStatusFilter] = useState("processing");// State để lưu trữ trạng thái bạn muốn lọc
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchWorker());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('user_id');
        const filtered = workerData.filter(worker => worker.user_id == userId && worker.status == statusFilter);
        setFilteredWorker(filtered);
      } catch (error) {
        console.error("Error fetching userId from AsyncStorage:", error);
      }
    };

    fetchUserId();
  }, [workerData, statusFilter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = async (item) => {
    try {
      const name = item.name;
      const id = item.id;
      const in_material_quantity = item.in_material_quantity;
      const currentTime = new Date();
      const formattedDate = currentTime.toISOString().split('T')[0];
      const formattedTime = currentTime.toLocaleTimeString();
      const time_end = `${formattedDate} ${formattedTime}`;
      const status = "done";
      const cost = item.cost;
      const user_id = item.user_id;
      const process_detail_id = item.process_detail_id;
      const production_id = item.production_id;
      const out_quantity = item.out_quantity;
      dispatch(updateDone({
        id,
        name,
        in_material_quantity,
        time_end,
        status,
        cost,
        user_id,
        process_detail_id,
        production_id,
        out_quantity,
      }));
    } catch (error) {
      console.error("Error updating worker:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.dateContainer, styles.rightAligned]}>
        <View>
          <Text style={styles.dateText}>Date: {date.toDateString()}</Text>
        </View>
        <View>
          <Text style={styles.timeText}>Time: {date.toLocaleTimeString()}</Text>
        </View>
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
                  <Text style={styles.workerTotalPrice}>Time Start: {item.time_start ? item.time_start.split("T").join(" ") : "N/A"}</Text>
                </View>
                <View style={[styles.columnContainer, styles.rightAligned]}>
                  <TouchableOpacity style={styles.startButton} onPress={() => handleStart(item)}>
                    <Image source={require('../../assets/images/Done.png')} style={styles.startIcon} />
                    <Text style={styles.startText}>Done</Text>
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

export default ProcessingScreen;