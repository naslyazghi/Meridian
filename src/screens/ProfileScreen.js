import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Avatar } from "react-native-elements";
import Feather from 'react-native-vector-icons/Feather';

export function ProfileScreen({route, navigation}) {
  //const Data;
  const {token} = route.params;

  // Decode the token
  var jwt_decode = require('jwt-decode');
  var decoded = jwt_decode(token);

  // Create the user object
  var user = {
    id: decoded.id,
    username: decoded.name,
    email: decoded.email,
    date: decoded.date
  };

  return (
    <View style={styles.container}>
    <Feather
      style={styles.closeIcon}
      name={'x-circle'}
      color="#009387"
      size={30}
      onPress={() => {
        navigation.goBack();
      }}
    />
    <Avatar size = "xlarge"
      overlayContainerStyle={{backgroundColor: '#009387'}}
      rounded title={user.username.substring(0,1)}/>
      <Text style={styles.nameText}>{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.date}>Member since {user.date.substring(0, user.date.indexOf('T'))}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200
  },

  nameText: {
    fontSize: 48,
    paddingTop: 32,
    color: 'white'
  },

  email: {
    fontSize: 24,
    paddingTop: 5,
    color: 'white'
  },

  date: {
    fontSize: 16,
    justifyContent: 'flex-end',
    paddingTop: 240,
    color: 'white'
  },

  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
});
