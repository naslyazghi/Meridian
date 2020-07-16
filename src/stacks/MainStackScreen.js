import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import Feather from 'react-native-vector-icons/Feather';
import {View, Text, StyleSheet, Image} from 'react-native';

const MainStack = createStackNavigator();

// Main Stack
const MainStackScreen = ({route, navigation}) => {
  const {token} = route.params;
  console.log('Token in Main Stack: ' + token);

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'Main'}
        component={MainScreen}
        initialParams={{token: token}}
        options={{
          title: 'Meridian',
          headerLeft: () => (
            <Feather
              style={styles.headerLeft}
              name="menu"
              size={35}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Feather
              style={styles.headerRight}
              name="plus"
              size={35}
              onPress={() => navigation.navigate('AddGroup', {token: token})}
            />
          ),
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTitleStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
          },
          headerTintColor: '#ffff',
        }}
      />
    </MainStack.Navigator>
  );
};

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

export default MainStackScreen;
