import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-ionicons';
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
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Members"
        component={MemberstackScreen}
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Expense"
        component={ExpensesStackScreen}
        options={{
          tabBarLabel: 'Expense Log',
          tabBarIcon: ({ color }) => (
            <Icon name="cash" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen; 