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
        <Tab.Screen name="Product" component={ProductStackScreen} />
        <Tab.Screen name="Supplies" component={SuppliesStackScreen} />
      </Tab.Navigator>
    )
}
export default MyTabs