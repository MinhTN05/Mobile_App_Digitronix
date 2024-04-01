import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkschedulesScreen, WorksDetailsScreen } from '../../screens'
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';

const WorkschedulesStack = createStackNavigator();

const WorkschedulesStackScreen = () => {
  return (
    <WorkschedulesStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.yellow
            },
            headerTintColor : COLORS.second
        }}
    >
      <WorkschedulesStack.Screen name="WorkschedulesScreen" component={WorkschedulesScreen} options={{title : 'Production Task', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )}}/>
      <WorkschedulesStack.Screen name="WorksDetailsScreen" component={WorksDetailsScreen} options={{title : 'Task'}}/>
    </WorkschedulesStack.Navigator>
  );
}

export default WorkschedulesStackScreen