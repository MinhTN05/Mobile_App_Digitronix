import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
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

  const openMaps = () => {
    if (deliveryDetails && deliveryDetails.orderResponse && deliveryDetails.orderResponse.customerAddress) {
      const address = deliveryDetails.orderResponse.customerAddress;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      Linking.openURL(url);
    }
  };

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
              <Text style={styles.detailLabel}>Customer Phone:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.customerPhone}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Address:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.customerAddress}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Delivery Method:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.delivery_method}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Payment Method:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.payment_method}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Total Price:</Text>
              <Text style={styles.detailText}>{deliveryDetails.orderResponse.total_price}</Text>
            </View>
            <View style={styles.orderResponse}>
              <Text style={styles.detailLabel}>Delivery Date:</Text>
              <Text style={styles.detailText}>{deliveryDetails.delivery_date}</Text>
            </View>
            <TouchableOpacity style={styles.orderResponse1} onPress={openMaps}>
              <Text style={styles.detailLabel}>View the map</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DeliveriedDetailsScreen;