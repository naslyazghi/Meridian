import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GroupList from '../lists/GroupsList';
import jwt_decode from 'jwt-decode';
import cloneDeep from 'lodash/cloneDeep';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/user/';

export function MainScreen({route, navigation}) {
  // Set the groups variable
  const [groups, setGroups] = React.useState(null);

  // Get the token;
  const {token} = route.params;

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
  const handleGroup = async () => {
    try {
      // Respone variable from the API
      const response = await fetch(BASE_URL + user.id + '/groups', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization: token},
      });

      // Parse the response
      var txt = await response.text();
      var res = JSON.parse(txt);

      // Process the response
      // No permission
      if (response.status === 401) {
        Alert.alert('Permission Error', response.status, [{text: 'OK'}]);
      }
      // Error
      else if (response.status !== 200) {
        Alert.alert('Error', response.status, [{text: 'OK'}]);
      }
      // Success, Data found!!
      else {
        //setGroups(cloneDeep(res.groups));
        setGroups(res.groups);

      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
    }
  };

  handleGroup();

  console.log('--- data = ' + groups);

  return (
    <View style={styles.container}>
      <GroupList itemList={groups} />
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
