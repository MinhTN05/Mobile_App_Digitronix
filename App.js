import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from './navigation/inventory_management';
import MyTabsWorker from './navigation/worker';
import MyTabsProduction from './navigation/production_manager';
import MyTabsDriver from './navigation/driver';
import AuthStackScreen from './navigation/Auth';
import { DrawerContent } from './screens';
import { Provider } from 'react-redux';
import store from './store';


const Drawer = createDrawerNavigator();

export default function App(props) {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName='AuthStackScreen'
        >
          <Drawer.Screen name="AuthStackScreen" component={AuthStackScreen} />
          
          <Drawer.Screen name="MyTabs" component={MyTabs} />
          <Drawer.Screen name="MyTabsWorker" component={MyTabsWorker} />
          <Drawer.Screen name="MyTabsProduction" component={MyTabsProduction} />
          <Drawer.Screen name="MyTabsDriver" component={MyTabsDriver} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}