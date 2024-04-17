import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DeliveriedOnchedulesScreen } from '../../screens';
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const OnDeliverStack = createStackNavigator();

const OnDeliverStackScreen = () => {
  return (
    <OnDeliverStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <OnDeliverStack.Screen name="DeliveriedOnchedulesScreen" component={DeliveriedOnchedulesScreen} options={{title : 'On Deliver', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      {/* <OnDeliverStack.Screen name="DriverDetailsScreen" component={DriverDetailsScreen} options={{title : 'Đã vào xem thông tin chi tiết lịch sử giao hàng'}}/> */}
    </OnDeliverStack.Navigator>
  );
}

export default OnDeliverStackScreen