import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainStackScreen from '../stacks/MainStackScreen';
import MemberstackScreen from '../stacks/MemberstackScreen';
import ExpensesStackScreen from '../stacks/ExpensesStackScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="white"
      barStyle={{ backgroundColor: '#009387' }}
      shifting="true"
    >
      <Tab.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Members"
        component={MemberstackScreen}
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Expense"
        component={ExpensesStackScreen}
        options={{
          tabBarLabel: 'Expense Log',
          tabBarIcon: ({ color }) => (
            <Feather name="dollar-sign" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen; 