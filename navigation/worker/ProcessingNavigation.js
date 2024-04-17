import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProcessingScreen } from '../../screens'
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const ProcessingStack = createStackNavigator();

const ProcessingStackScreen = () => {
  return (
    <ProcessingStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <ProcessingStack.Screen name="WorkschedulesScreen" component={ProcessingScreen} options={{title : 'Production Task', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
    </ProcessingStack.Navigator>
  );
}

export default ProcessingStackScreen