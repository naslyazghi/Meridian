import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpensesLogScreen } from '../screens/ExpensesLogScreen';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainStack = createStackNavigator();

// Expenses Stack
const ExpensesStackScreen = ({navigation}) => (
    <MainStack.Navigator>
      <MainStack.Screen name={'ExpensesLog'} component={ExpensesLogScreen} 
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Feather style={styles.headerLeft} name='menu' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Feather>
          ),
          headerRight: () => (
            <Feather style={styles.headerRight} name='plus-circle' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Feather>        
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