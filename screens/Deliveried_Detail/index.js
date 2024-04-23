import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import DeliveryService from '../../services/delivery';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DeliveriedDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [deliveryDetails, setDeliveryDetails] = useState(null);
  const [access_token, setAccessToken] = useState("");
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setIsLocationLoaded(true);
      } catch (error) {
        console.error('Lỗi khi lấy vị trí hiện tại:', error);
        setErrorMsg('Lỗi khi lấy vị trí hiện tại');
      }
    })();
  }, []);

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
              {errorMsg ? <Text>{errorMsg}</Text> : null}
              {isLocationLoaded && location ? (
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: location.coords.latitude,
                      longitude: location.coords.longitude,
                    }}
                    title="Your Location"
                    description="You are here!"
                  />
                </MapView>
              ) : (
                <Text style={styles.Loading}>Loading...</Text>
              )}
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