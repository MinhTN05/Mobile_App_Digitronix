import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import DriverStackScreen from './DriverNavigation';
import HistoryStackScreen from './HistoryNavigation';


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
                    source={focused ? require('../../assets/images/Taxi_2.png') : require('../../assets/images/Taxi_1.png')}
                    style={{ width: 24, height: 24 }}
                  />
                );
                case 'History':
                return (
                  <Image
                    source={focused ? require('../../assets/images/Delivery_2.png') : require('../../assets/images/Delivery_1.png')}
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
          tabBarStyle : {
            backgroundColor : COLORS.yellow,
            height : 65,
            paddingBottom : 10
          },
          tabBarLabelStyle : {
            fontSize : 13
          },
          headerShown : false
        })}
      >
        <Tab.Screen name="Driver" component={DriverStackScreen} options={{title : 'Driver Shedules'}}/>
        <Tab.Screen name="History" component={HistoryStackScreen} options={{title : 'Delivery History'}}/>
      </Tab.Navigator>
    )
}
export default MyTabsDriver