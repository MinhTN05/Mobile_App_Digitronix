import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ToDoScreen } from '../../screens';
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const ToDoStack = createStackNavigator();

const ToDoStackScreen = () => {
  return (
    <ToDoStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <ToDoStack.Screen name="WorkschedulesScreen" component={ToDoScreen} options={{title : 'Production Task', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
    </ToDoStack.Navigator>
  );
}

export default ToDoStackScreen