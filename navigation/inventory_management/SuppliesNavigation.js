import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../contains';
import {SuppliesScreen, CategorySuppliesScreen, EditSuppliesScreen} from '../../screens'
import IconHeader from '../../components/iconHeader';

const SuppliesStack = createStackNavigator();

const SuppliesStackScreen = () => {
  return (
    <SuppliesStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <SuppliesStack.Screen name="SuppliesScreen" component={SuppliesScreen} options={{title : 'Materials management', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <SuppliesStack.Screen name="CategorySuppliesScreen" component={CategorySuppliesScreen} options={{title : 'Materials Information'}}/>
      <SuppliesStack.Screen name="EditSuppliesScreen" component={EditSuppliesScreen} options={{title : 'Edit Supplies'}}/>
    </SuppliesStack.Navigator>
  );
}

export default SuppliesStackScreen