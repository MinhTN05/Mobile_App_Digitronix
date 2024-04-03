import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DeliveryHistoryScreen } from '../../screens';
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.yellow
            },
            headerTintColor : COLORS.second
        }}
    >
      <HistoryStack.Screen name="DeliveryHistoryScreen" component={DeliveryHistoryScreen} options={{title : 'Delivery history', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      {/* <HistoryStack.Screen name="DriverDetailsScreen" component={DriverDetailsScreen} options={{title : 'Đã vào xem thông tin chi tiết lịch sử giao hàng'}}/> */}
    </HistoryStack.Navigator>
  );
}

export default HistoryStackScreen