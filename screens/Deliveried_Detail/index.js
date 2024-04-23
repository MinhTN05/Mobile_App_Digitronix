import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import DeliveryService from '../../services/delivery';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DeliveriedDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [access_token, setAccessToken] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    DeliveryService.getDeliveryDetail(id)
      .then(response => {
        setDeliveryDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching order details:', error);
      });

    const fetchAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        setAccessToken(token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    }

    fetchAccessToken();
  }, [id]);

  console.log(deliveryDetails);

  return (
    <View style={styles.container}>
      {deliveryDetails ? (
        <>
          <View style={styles.detailContainer}>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Customer Name:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.customer_name}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Address:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.customerAddress}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Thanh tìm kiếm:</Text>
            </View>
            <View style={styles.orderResponse1}>
              <Text style={styles.detailLabel}>Map</Text>
            </View>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DeliveriedDetailsScreen;