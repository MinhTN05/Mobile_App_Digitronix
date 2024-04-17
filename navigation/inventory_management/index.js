import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import ProductStackScreen from './ProductNavigation';
import SuppliesStackScreen from './SuppliesNavigation';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Product':
              return (
                <Image
                  source={focused ? require('../../assets/images/Product_2.png') : require('../../assets/images/Product_1.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            case 'Supplies':
              return (
                <Image
                  source={focused ? require('../../assets/images/Materials_2.png') : require('../../assets/images/Materials_1.png')}
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
          backgroundColor: COLORS.white,
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
      <Tab.Screen name="Product" component={ProductStackScreen} />
      <Tab.Screen name="Supplies" component={SuppliesStackScreen} options={{ title: 'Materials' }} />
    </Tab.Navigator>
  )
}
export default MyTabs