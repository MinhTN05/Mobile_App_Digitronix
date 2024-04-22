import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../contains';
import {OrderStatusScreen, CategoryOrderStatusScreen} from '../../screens'
import IconHeader from '../../components/iconHeader';

const OrderStatusStack = createStackNavigator();

const OrderStatusStackScreen = () => {
  return (
    <OrderStatusStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <OrderStatusStack.Screen name="OrderStatusScreen" component={OrderStatusScreen} options={{title : 'Order', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <OrderStatusStack.Screen name="CategoryOrderStatusScreen" component={CategoryOrderStatusScreen} options={{title : 'Order Detailed'}}/>
    </OrderStatusStack.Navigator>
  );
}

export default OrderStatusStackScreen