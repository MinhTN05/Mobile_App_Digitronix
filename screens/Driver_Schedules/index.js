import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';
const FirstRoute = () => (
  <View style={{ flex: 1 }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const DriverchedulesScreen = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  // Dummy data for orders
  const orders = [
    { id: 1, customer: 'Messi', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, customer: 'Ri Đỗ', phone: '987-654-3210', email: 'jane@example.com' },
    // Add more orders as needed
  ]; 

  const renderItem = ({ item }) => (
    <TouchableOpacity  onPress={() => navigation.navigate('DriverDetailsScreen', { orderId: item.id })}>
      <View style={styles.orderContainer}>
        <View style={styles.orderDetails}>
          <Text style={styles.orderText}>{`Customer: ${item.customer}`}</Text>
          <Text style={styles.orderText}>{`Phone: ${item.phone}`}</Text>
          <Text style={styles.orderText}>{`Email: ${item.email}`}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DriverDetailsScreen', { orderId: item.id })}>
          <Text style={styles.detailsButton}>Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index: 0, routes: [{ key: 'first', title: 'Đơn Hàng  Của Bạn' }, { key: 'second', title: 'Lịch sử đơn hàng' }] }}
        renderScene={renderScene}
        onIndexChange={() => {}} // Dummy function, as index change not used here
        initialLayout={{ width: layout.width }}
      />
      <FlatList style={styles.list}
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};



export default DriverchedulesScreen;