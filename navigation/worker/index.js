import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import WorkschedulesStackScreen from './WorkSchedulesNavigation';
import ProcessingScreen from './ProcessingNavigation';
import ToDoScreen from './TodoNavigation';
import DoneScreen from './DoneNavigation';


const Tab = createBottomTabNavigator();

const MyTabsWorker = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Todo':
              return (
                <Image
                  source={focused ? require('../../assets/images/To Do_1.png') : require('../../assets/images/To Do_2.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            case 'Processing':
              return (
                <Image
                  source={focused ? require('../../assets/images/Time_1.png') : require('../../assets/images/Time_2.png')}
                  style={{ width: 24, height: 24 }}
                />
              );
            case 'Done':
              return (
                <Image
                  source={focused ? require('../../assets/images/Done_2.png') : require('../../assets/images/Done_1.png')}
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
      <Tab.Screen name="Todo" component={ToDoScreen} options={{ title: 'To Do' }} />
      <Tab.Screen name="Processing" component={ProcessingScreen} options={{ title: 'Processing' }} />
      <Tab.Screen name="Done" component={DoneScreen} options={{ title: 'Done' }} />
    </Tab.Navigator>
  )
}
export default MyTabsWorker