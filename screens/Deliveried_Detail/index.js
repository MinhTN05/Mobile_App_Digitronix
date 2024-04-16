import React from 'react';
import { View, useWindowDimensions, Text, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';

const OrdersList = ({ orders }) => (
  <View style={styles.orderListContainer}>
    {orders.map(order => (
      <View key={order.id} style={styles.orderContainer}>
        {/* Phần nội dung của đơn hàng */}
        <View style={styles.orderContent}>
          <Text style={styles.orderText}>{`Customer: ${order.customer}`}</Text>
          <Text style={styles.orderText}>{`Phone: ${order.phone}`}</Text>
          <Text style={styles.orderText}>{`Address: ${order.address}`}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Close Window.png')} style={styles.image} />
          <Image source={require('../../assets/images/Checkbox.png')} style={styles.image} />
        </View>
      </View>
    ))}
  </View>
);

const FirstRoute = () => (
  <OrdersList
    orders={[
      { id: 1, customer: 'Messi', phone: '123-456-7890', address: '170/1 vườn lài' },
      { id: 2, customer: 'Ri Đỗ', phone: '987-654-3210', address: 'Khách sạn tình ái' },
      // Add more orders as needed
    ]}
  />
);

const SecondRoute = () => (
  <OrdersList
    orders={[
      // Define orders for "Đã lấy Hàng" status
    ]}
  />
);

const ThirdRoute = () => (
  <OrdersList
    orders={[
      // Define orders for "Đang giao hàng" status
    ]}
  />
);

const FourthRoute = () => (
  <OrdersList
    orders={[
      // Define orders for "Giao hàng thành công" status
    ]}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

const DeliveriedDetailsScreen = () => {
  const layout = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index: 0, routes: [{ key: 'first', title: 'Chờ lấy hàng' }, { key: 'second', title: 'Đã lấy Hàng' }, { key: 'third', title: 'Đang giao hàng' }, { key: 'fourth', title: 'Giao hàng thành công' }] }}
        renderScene={renderScene}
        onIndexChange={() => { }}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default DeliveriedDetailsScreen;