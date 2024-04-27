import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../../screens';
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const MapStack = createStackNavigator();

const MapStackScreen = () => {
  return (
    <MapStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <MapStack.Screen name="MapScreen" component={MapScreen} options={{title : 'Map', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      {/* <OnDeliverStack.Screen name="DriverDetailsScreen" component={DriverDetailsScreen} options={{title : 'Đã vào xem thông tin chi tiết lịch sử giao hàng'}}/> */}
    </MapStack.Navigator>
  );
}

export default MapStackScreen