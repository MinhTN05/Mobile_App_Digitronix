import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ManufactureScreen, CategoryManufactureScreen } from '../../screens'
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const ManufactureStack = createStackNavigator();

const ManufactureStackScreen = () => {
  return (
    <ManufactureStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <ManufactureStack.Screen name="ManufactureScreen" component={ManufactureScreen} options={{title : 'Production Information', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <ManufactureStack.Screen name="CategoryManufactureScreen" component={CategoryManufactureScreen} options={{title : 'Production Details'}}/>
    </ManufactureStack.Navigator>
  );
}

export default ManufactureStackScreen