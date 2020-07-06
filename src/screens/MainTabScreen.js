import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './MainScreen';
import { ExpenseLogScreen } from './ExpenseLogScreen';
import { MembersScreen } from './MembersScreen'
import Icon from 'react-native-ionicons';
//import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const MainStack = createStackNavigator();


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
          tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Members"
        component={MembersScreen}
        options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Expense"
        component={ExpenseLogScreen}
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

// Main Stack
const MainStackScreen = ({navigation}) => (
    <MainStack.Navigator>
      <MainStack.Screen name={'Main'} component={MainScreen} 
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Icon name='menu' size={30} backgroundColor={'#ffff'} color={'white'}
            onPress = {() => navigation.openDrawer()}></Icon>
          ),
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
          // Add a font style here
          }
      }}/>
    </MainStack.Navigator>
);