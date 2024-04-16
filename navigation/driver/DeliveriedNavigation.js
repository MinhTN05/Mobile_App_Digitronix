import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DriverchedulesScreen, DriverDetailsScreen } from '../../screens'
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const DeliveriedStack = createStackNavigator();

const DeliveriedStackScreen = () => {
  return (
    <DeliveriedStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.yellow
            },
            headerTintColor : COLORS.second
        }}
    >
      <DeliveriedStack.Screen name="DriverchedulesScreen" component={DriverchedulesScreen} options={{title : 'Driver', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <DeliveriedStack.Screen name="DriverDetailsScreen" component={DriverDetailsScreen} options={{title : 'Order details'}}/>
    </DeliveriedStack.Navigator>
  );
}

export default DeliveriedStackScreen