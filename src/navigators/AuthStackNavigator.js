import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator 
      mode={'modal'} 
      screenOptions={{headerShown: false,}}>
      <AuthStack.Screen 
        name={'LoginStack'}>
          {() => (
            <LoginStack.Navigator 
              mode={'card'} 
              screenOptions={{headerShown: false,}}>
              <LoginStack.Screen 
                name={'login'} 
                component={LoginScreen}/>
            </LoginStack.Navigator>
          )}
        </AuthStack.Screen> 
        <AuthStack.Screen 
          name={'Register'} 
          component={RegisterScreen}/>
    </AuthStack.Navigator>
  );
}

