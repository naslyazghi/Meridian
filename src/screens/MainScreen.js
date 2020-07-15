import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GroupList from '../lists/GroupsList';
import jwt_decode from 'jwt-decode';
import cloneDeep from 'lodash/cloneDeep';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/user/';
var data = null;
var myData = null;
window.$name = null;



export function MainScreen({route, navigation}) {
  //const Data;
  const {token} = route.params;
  console.log('Token in Main Screen: ' + token);

  // Decode the token
  var jwt_decode = require('jwt-decode');
  var decoded = jwt_decode(token);

  // Create the user object
  var user = {
    id: decoded.id,
    username: decoded.name,
    email: decoded.email,
  };

  // Retrieve groups
  async (userId) => {
    try {
      // 1 - Respone variable from the API
      const response = await fetch(BASE_URL + userId + '/groups', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': token},
      });

      // Parse the response
      var txt = await response.text();
      console.log('txt is ' + txt);

      var res = JSON.parse(txt);
      console.log('res is ' + res.groups[0].name);

      // Process the response
      // No permission
      if (response.status === 401) {
        console.log('No permission');
      } 
      // Error
      else if (response.status !== 200) {
        console.log('Error');
      } 
      // Success, Data found!!
      else {
        console.log('Successful');        
        window.$data = cloneDeep(res.groups);
        console.log('cloned data: ' + window.$data);  
        //window.$data = data;         
      }

    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
    }
  };


  myData = [
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


  console.log('--- data = ' + data);
  console.log('--- final data = ' + window.$data);

  return (
    <View style={styles.container}>
      <GroupList itemList={window.$data} />
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
