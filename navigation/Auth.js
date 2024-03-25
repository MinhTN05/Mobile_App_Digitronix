import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { LoginScreen } from '../screens'

function AuthStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  );
}

export default AuthStackScreen;