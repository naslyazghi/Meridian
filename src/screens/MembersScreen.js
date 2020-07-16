import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MembersList from '../lists/MembersList';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/group/';

// const DATA = [
//   {
//     name: 'Eric',
//     lastActivityDate: '06/17/2020',
//     lastActivity: 'Breakfast at FirstWatch for GROUP',
//     balance: '-$53',
//     statusColor: '#FF1DA2',
//     profileImage: "person",
//   },
//   {
//     name: 'Jeff',
//     lastActivityDate: '06/16/2020',
//     lastActivity: 'Uber and Pizza for Austin, Eric, Nas',
//     balance: '+$216',
//     statusColor: '#23EC89',
//     profileImage: "person",
//   },
//   {
//     name: 'Ryan',
//     lastActivityDate: '06/15/2020',
//     lastActivity: 'Airplane Ticket for David',
//     balance: '-$44',
//     statusColor: '#FF1DA2',
//     profileImage: "person",
//   },
//   {
//     name: 'David',
//     lastActivityDate: '10/16/2020',
//     lastActivity: 'RBNB for Group',
//     balance: '0$',
//     statusColor: '#23EC89',
//     profileImage: "person",
//   },
//   {
//     name: 'Austin',
//     lastActivityDate: '06/18/2020',
//     lastActivity: 'Dinner at Olive Garden for Group',
//     balance: '+$13',
//     statusColor: '#23EC89',
//     profileImage: "person",
//   },
// ];


export function MembersScreen(navigation){

  console.log('Members Screen');
  console.log('Global members id in Members Screen= ' + global.groupId);
  console.log('Global user id in Members Screen= ' + global.userId);
  console.log('Global token in Members Screen= ' + global.token);

  // Set the groups variable
  const [members, setMembers] = React.useState(null);

  // Retrieve groups
  const handleMembers = async () => {
    try {
      // Respone variable from the API
      const response = await fetch(BASE_URL + global.groupId + '/balance/' + global.userId, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization: global.token},
      });

      // Parse the response
      var txt = await response.text();
      //console.log('Members Screen - txt = ' + txt);
      var res = JSON.parse(txt);
      //console.log('Members Screen - res = ' + res);

      // Process the response
      // No permission
      if (response.status === 401) {
        //Alert.alert('Permission Error', response.status, [{text: 'OK'}]);
        //console.log("Permission Error");
      }
      // Error
      else if (response.status !== 200) {
        //Alert.alert('Error', response.status, [{text: 'OK'}]);
        //console.log("Failed");
      }
      // Success, Data found!!
      else {
        //setGroups(cloneDeep(res.groups));
        //Alert.alert('Success', 'Data Found!!', [{text: 'OK'}]);
        setMembers(res.members);
        //console.log('Inside Members Screen => ' + members);
      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
      //console.log("Error: " + e.toString());
    }
  };

  handleMembers();


  return (
    <View style={styles.container}>
      <MembersList
        itemList= {members}
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