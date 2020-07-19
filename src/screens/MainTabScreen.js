import 'react-native-gesture-handler';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainStackScreen from '../stacks/MainStackScreen';
import MemberstackScreen from '../stacks/MemberstackScreen';
import ExpensesStackScreen from '../stacks/ExpensesStackScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({route, navigation}) => {

  const {token} = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="white"
      barStyle={{backgroundColor: '#009387'}}
      shifting="true">
      
      <Tab.Screen
        name="Main"
        component={MainStackScreen}
        initialParams={{token: token}}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Members"
        component={MemberstackScreen}
        initialParams={{token: token}}
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({color}) => (
            <Feather name="users" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Expense"
        component={ExpensesStackScreen}
        initialParams={{token: token}}
        options={{
          tabBarLabel: 'Expense Log',
          tabBarIcon: ({color}) => (
            <Feather name="dollar-sign" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
