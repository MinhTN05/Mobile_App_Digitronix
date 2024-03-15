import React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// Function to render the list of orders
const OrdersList = ({ orders }) => (
  <View>
    {orders.map(order => (
      <View key={order.id}>
        <Text>{`Customer: ${order.customer}`}</Text>
        <Text>{`Phone: ${order.phone}`}</Text>
        <Text>{`Email: ${order.email}`}</Text>
      </View>
    ))}
  </View>
);

const FirstRoute = () => (
  <OrdersList
    orders={[
      { id: 1, customer: 'Messi', phone: '123-456-7890', email: 'john@example.com' },
      { id: 2, customer: 'Ri Đỗ', phone: '987-654-3210', email: 'jane@example.com' },
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

const DriverDetailsScreen = () => {
  const layout = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index: 0, routes: [{ key: 'first', title: 'Chờ lấy hàng' }, { key: 'second', title: 'Đã lấy Hàng' }, { key: 'third', title: 'Đang giao hàng' }, { key: 'fourth', title: 'Giao hàng thành công' }] }}
        renderScene={renderScene}
        onIndexChange={() => {}} // Dummy function, as index change not used here
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default DriverDetailsScreen;