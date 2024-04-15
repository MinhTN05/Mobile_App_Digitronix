import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DoneScreen } from '../../screens';
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const DoneStack = createStackNavigator();

const DoneStackScreen = () => {
  return (
    <DoneStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.yellow
            },
            headerTintColor : COLORS.second
        }}
    >
      <DoneStack.Screen name="WorkschedulesScreen" component={DoneScreen} options={{title : 'Production Task', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
    </DoneStack.Navigator>
  );
}

export default DoneStackScreen