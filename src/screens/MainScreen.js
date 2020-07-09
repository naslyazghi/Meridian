import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GroupList from '../lists/GroupsList';


const DATA = [
  {
    title: 'Coworkers Dinner',
    date: '06/17/2020',
    description: 'Dinner with my coworkers at Olive garden',
    amount: '$143',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Disney',
    date: '03/25/2020',
    description: 'Magic kingdom with my roomates',
    amount: '$216',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Europ Trip',
    date: '10/05/2019',
    description: 'Trip with Alex and Sam to Germany and Italy',
    amount: '$1025',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Miami Boat Rental',
    date: '10/05/2019',
    description: 'Boat rental with Jason and Matt',
    amount: '$822',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Colorado trip',
    date: '10/05/2019',
    description: 'Hotel and food expenses',
    amount: '$784',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'First watch Breakfast',
    date: '10/05/2019',
    description: 'Breakfast with Sami and Youssef',
    amount: '$75',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Summer vacation',
    date: '10/05/2019',
    description: 'Summer vcation in California',
    amount: '$1156',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Barbecue Lunch',
    date: '10/05/2019',
    description: 'Trip with Alex and Sam to Germany and Italy',
    amount: '$149',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
  {
    title: 'Europ Trip',
    date: '10/05/2019',
    description: 'Trip with Alex and Sam to Germany and Italy',
    amount: '$1025',
    image_url: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
  },
];


export function MainScreen(navigation){
  return (
    <View style={styles.container}>
      <GroupList itemList= {DATA}/>
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