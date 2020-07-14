import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MembersScreen } from '../screens/MembersScreen';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainStack = createStackNavigator();

// Members Stack
const MemberstackScreen = ({navigation}) => (
    <MainStack.Navigator>
      <MainStack.Screen name={'Memebrs'} component={MembersScreen} 
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Feather style={styles.headerLeft} name='menu' size={35}
              onPress = {() => navigation.openDrawer()}>
            </Feather>
          ),
          headerRight: () => (
            <Feather style={styles.headerRight} name='user-plus' size={35}
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

export default MemberstackScreen; 