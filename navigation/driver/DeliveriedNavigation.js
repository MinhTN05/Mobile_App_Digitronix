import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DeliveriedchedulesScreen, DeliveriedDetailsScreen } from '../../screens'
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
      <DeliveriedStack.Screen name="DriverchedulesScreen" component={DeliveriedchedulesScreen} options={{title : 'Driver', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <DeliveriedStack.Screen name="DeliveriedDetailsScreen" component={DeliveriedDetailsScreen} options={{title : 'Order details'}}/>
    </DeliveriedStack.Navigator>
  );
}

export default DeliveriedStackScreen