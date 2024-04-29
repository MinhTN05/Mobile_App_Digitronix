import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchDeliveries } from '../../store/slices/delivery';
import { useDispatch, useSelector } from 'react-redux';

const DeliveriedOnchedulesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deliveryData = useSelector(state => state.Delivery.item);
  const [filteredDeliverys, setFilteredDeliverys] = useState([]);
  const [statusFilter, setStatusFilter] = useState(true);

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const filtered = deliveryData.filter(delivery => delivery.status === statusFilter); // Lọc dữ liệu theo trạng thái
        setFilteredDeliverys(filtered);
      } catch (error) {
        console.error("Error fetching userId from AsyncStorage:", error);
      }
    };

    fetchUserId();
  }, [deliveryData, statusFilter]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredDeliverys}
        renderItem={({ item }) => (
          <View>
            <View style={styles.deliveryContainer}>
              <View style={styles.delivery}>
                <View style={styles.deliveryInfo}>
                  <View style={styles.column}>
                    <Text style={styles.deliveryName}>Id: {item.id}</Text>
                    <View style={styles.deliveryStatusQuantityContainer}>
                      <Text style={styles.deliveryStatus}>Status: {item.status ? "true" : "false"}</Text>
                      <View>
                        <Text style={styles.text}>Delivery Date: {item.delivery_date}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* {renderTrashIcon()} */}
            </View>
          </View>
        )}
        keyExtractor={deliveries => deliveries.id.toString()}
      />
    </View>
  );
};

export default DeliveriedOnchedulesScreen;