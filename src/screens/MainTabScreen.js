import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainStackScreen from '../stacks/MainStackScreen';
import MemberstackScreen from '../stacks/MemberstackScreen';
import ExpensesStackScreen from '../stacks/ExpensesStackScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({route, navigation}) => {

  const {token} = route.params;

   console.log('Token in main tab: ' + token);
  // // Decode the token
  // var jwt_decode = require('jwt-decode');
  // var decoded = jwt_decode(token);

  // var user = {
  //   id: decoded.id,
  //   username: decoded.name,
  //   email: decoded.email,
  // };

  // console.log('Id in main screen: ' + user.id);

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
        options={{
          tabBarLabel: 'Mmebers',
          tabBarIcon: ({color}) => (
            <Feather name="users" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Expense"
        component={ExpensesStackScreen}
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
