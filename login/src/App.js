import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Teste from './screens/Teste';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen component={Login}/>
        <Stack.Screen component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};