import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import DeliveriedStackScreen from './DeliveriedNavigation';
import OnDeliverStackScreen from './OnDeliverNavigation';
import MapStackScreen from './MapNavigation';


const Tab = createBottomTabNavigator();

const MyTabsDriver = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Driver':
              return (
                <Image
                  source={focused ? require('../../assets/images/Van_2.png') : require('../../assets/images/Van_1.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
              case 'Map':
              return (
                <Image
                  source={focused ? require('../../assets/images/Map Marker_2.png') : require('../../assets/images/Map Marker_1.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            case 'History':
              return (
                <Image
                  source={focused ? require('../../assets/images/Shipped_2.png') : require('../../assets/images/Shipped_1.png')}
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
      <Tab.Screen name="Driver" component={DeliveriedStackScreen} options={{ title: 'Deliveried' }} />
      <Tab.Screen name="Map" component={MapStackScreen} options={{ title: 'Map' }} />
      <Tab.Screen name="History" component={OnDeliverStackScreen} options={{ title: 'On Deliver' }} />
    </Tab.Navigator>
  )
}
export default MyTabsDriver