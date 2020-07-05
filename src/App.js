import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import { lightTheme } from './themes/light';

// Create a root stack that will contain all the screens
const RootStack = createStackNavigator();

export default function () {
  return (
    // Passing the theme to be used (light theme)
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator screenOptions={{headerShown:false,}}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

