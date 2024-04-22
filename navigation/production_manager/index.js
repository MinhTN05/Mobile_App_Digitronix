import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import ManufactureStackScreen from './ManufactureNavigation';
import OrderStatusStackScreen from './OrderStatusNavigation';

const Tab = createBottomTabNavigator();

const MyTabsProduction = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Production':
              return (
                <Image
                  source={focused ? require('../../assets/images/Manufacturing_2.png') : require('../../assets/images/Manufacturing_1.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            case 'Order':
              return (
                <Image
                  source={focused ? require('../../assets/images/Mobile Order_2.png') : require('../../assets/images/Mobile Order_1.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            default:
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.second,
        tabBarInactiveTintColor: COLORS.second,
        tabBarStyle: {
          backgroundColor: COLORS.yellow,
          height: 70,
          paddingBottom: 1
        },
        tabBarLabelStyle: {
          fontSize: 16
        },
        tabBarActiveBackgroundColor: COLORS.gray, // Màu nền khi được chọn
        tabBarInactiveBackgroundColor: COLORS.white, // Màu nền khi không được chọn
        headerShown: false
      })}
    >
      <Tab.Screen name="Production" component={ManufactureStackScreen} />
      <Tab.Screen name="Order" component={OrderStatusStackScreen} />
    </Tab.Navigator>
  )
}
export default MyTabsProduction