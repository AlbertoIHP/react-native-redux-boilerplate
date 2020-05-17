// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginAuthScreen from '../../screens/authentication/login.screen'

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginAuthScreen} 
        options={
          { 
            title: 'Login Screen from Auth Navigator'
          }
        }/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;