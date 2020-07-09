import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExpensesList from '../lists/ExpensesList';

const DATA = [
  {
    name: 'Nas paid Ryan',
    lastActivityDate: '06/17/2020',
    lastActivity: 'Breakfast at FirstWatch',
    balance: '$36',
    statusColor: '#23EC89',
    profileImage: "checkbox-outline",
  },
  {
    name: 'Austin paid for Eric',
    lastActivityDate: '06/16/2020',
    lastActivity: 'Uber and Pizza for Austin, Eric, Nas',
    balance: '$21',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
  {
    name: 'Austin paid for David',
    lastActivityDate: '06/16/2020',
    lastActivity: 'Uber and Pizza',
    balance: '$21',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
  {
    name: 'David paid Jeff',
    lastActivityDate: '06/17/2020',
    lastActivity: 'Bowling at Splitsville',
    balance: '$16',
    statusColor: '#23EC89',
    profileImage: "checkbox-outline",
  },
  {
    name: 'Austin paid for jeff',
    lastActivityDate: '06/16/2020',
    lastActivity: 'Uber and Pizza',
    balance: '$21',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
  {
    name: 'Jeff paid Austin',
    lastActivityDate: '10/16/2020',
    lastActivity: 'Uber and Pizza',
    balance: '$21',
    statusColor: '#23EC89',
    profileImage: "checkbox-outline",
  },
  {
    name: 'Eric paid for Nas',
    lastActivityDate: '06/18/2020',
    lastActivity: 'Starbucks Coffee',
    balance: '$7.5',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
  {
    name: 'Ryan paid Austin',
    lastActivityDate: '10/16/2020',
    lastActivity: 'Uber and Pizza',
    balance: '$21',
    statusColor: '#23EC89',
    profileImage: "checkbox-outline",
  },
  {
    name: 'Ryan paid for David',
    lastActivityDate: '06/18/2020',
    lastActivity: 'lunch at Chipotle',
    balance: '$8.54',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
  {
    name: 'David paid for Nas',
    lastActivityDate: '06/18/2020',
    lastActivity: 'Bowling at Splitsville',
    balance: '$19',
    statusColor: '#FF871D',
    profileImage: "trending-up",
  },
];


export function ExpensesLogScreen(navigation){
  return (
    <View style={styles.container}>
      <ExpensesList
        itemList= {DATA}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    
  },

  text: {
    fontSize: 32,
    color: 'white',
  },
});