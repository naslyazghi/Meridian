import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpensesLogScreen } from '../screens/ExpensesLogScreen';
import Icon from 'react-native-ionicons';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainStack = createStackNavigator();

// Expenses Stack
const ExpensesStackScreen = ({navigation}) => (
    <MainStack.Navigator>
      <MainStack.Screen name={'ExpensesLog'} component={ExpensesLogScreen} 
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Icon style={styles.headerLeft} name='menu' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Icon>
          ),
          headerRight: () => (
            <Icon style={styles.headerRight} name='trending-up' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Icon>        
          ),
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
          },
          headerTintColor: '#ffff',
      }}/>
    </MainStack.Navigator>
);

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 10,
    color: 'white',
  },
  headerRight: {
    marginRight: 10,
    color: 'white',
  },
});

export default ExpensesStackScreen; 