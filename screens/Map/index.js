import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import styles from './styles';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    //async là hàm xử lý bất đồng bộ
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const handleSearch = async () => {
    // Thực hiện tìm kiếm địa điểm dựa trên destination
    // Ví dụ: Gọi API của Google Maps để tìm kiếm địa điểm
    // Sau đó cập nhật vị trí đích
  };

  return (
    <View style={styles.container}>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholder="Enter destination"
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      {location ? (
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
          {destination && (
            <MapViewDirections
              origin={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              destination={destination} // Vị trí đích
              apikey={'AIzaSyBnZYLO7iBOUM1VSQvPAuC2k7vDL7mojmM'}
              strokeWidth={3}
              strokeColor="hotpink"
            />
          )}
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default MapScreen;