import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MembersList from '../lists/MembersList';

const DATA = [
  {
    name: 'Eric',
    lastActivityDate: '06/17/2020',
    lastActivity: 'Breakfast at FirstWatch for GROUP',
    balance: '-$53',
    statusColor: '#FF1DA2',
    profileImage: "person",
  },
  {
    name: 'Jeff',
    lastActivityDate: '06/16/2020',
    lastActivity: 'Uber and Pizza for Austin, Eric, Nas',
    balance: '+$216',
    statusColor: '#23EC89',
    profileImage: "person",
  },
  {
    name: 'Ryan',
    lastActivityDate: '06/15/2020',
    lastActivity: 'Airplane Ticket for David',
    balance: '-$44',
    statusColor: '#FF1DA2',
    profileImage: "person",
  },
  {
    name: 'David',
    lastActivityDate: '10/16/2020',
    lastActivity: 'RBNB for Group',
    balance: '0$',
    statusColor: '#23EC89',
    profileImage: "person",
  },
  {
    name: 'Austin',
    lastActivityDate: '06/18/2020',
    lastActivity: 'Dinner at Olive Garden for Group',
    balance: '+$13',
    statusColor: '#23EC89',
    profileImage: "person",
  },
];


export function MembersScreen(navigation){
  return (



    <View style={styles.container}>
      <MembersList
        itemList= {DATA}
      />
    </View>


//     <View style={styles.container}>
//       <Text style={styles.text}>Main Screen</Text>
//     </View>


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