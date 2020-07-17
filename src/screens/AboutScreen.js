import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';

export function AboutScreen({route, navigation}){
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
      <Text style={styles.descriptionText}>
        Meridian is a money management application that
        allows users to create, read from, update, and
        delete groups that contain other users that have
        a financial relationship to the original user.
        Meridian allows users to keep track of
        finances for all kinds of events. From vacations
        to dinners, from loans to everyday expenses, this
        application provides a platform to conveniently
        manage your finances.
      </Text>
      
      <Text style={styles.devText}>
        Developers:
      </Text>

      <Text style={styles.creditsText}>
        Nas Lyazghi
      </Text>
      <Text style={styles.creditsText}>
        Jeffrey Ramos
      </Text>
      <Text style={styles.creditsText}>
        Ryan Gordon
      </Text>
      <Text style={styles.creditsText}>
        Erik Bates
      </Text>
      <Text style={styles.creditsText}>
        Austin Traub
      </Text>
      <Text style={styles.creditsText}>
        Moises "David" Cortes Lugo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

  descriptionText: {
    fontSize: 20,
    color: 'white',
  },

  devText: {
    paddingTop: 315,
    fontSize: 25,
    color: 'white'
  },

  creditsText: {
    paddingTop: 2,
    fontSize: 14,
    color: 'white'
  },

  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
