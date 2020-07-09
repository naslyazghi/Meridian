import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MembersScreen } from '../screens/MembersScreen';
import Icon from 'react-native-ionicons';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainStack = createStackNavigator();

// Members Stack
const MemberstackScreen = ({navigation}) => (
    <MainStack.Navigator>
      <MainStack.Screen name={'Memebrs'} component={MembersScreen} 
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Icon style={styles.headerLeft} name='menu' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Icon>
          ),
          headerRight: () => (
            <Icon style={styles.headerRight} name='person-add' size={35}
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

export default MemberstackScreen; 