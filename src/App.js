import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { lightTheme } from './themes/light';
import { AuthContext } from './contexts/AuthContext';
import { LoginScreen } from './screens/LoginScreen';
import { MainScreen } from './screens/MainScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from './screens/AboutScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import Icon from 'react-native-ionicons';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './components/DrawerContent'
import { ProfileScreen } from './screens/ProfileScreen';

// Create a root stack that will contain all the screens
const RootStack = createStackNavigator();

// Create screen stacks
const LogInStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const AboutStack = createStackNavigator();

// Create a drawer navigation element
const Drawer = createDrawerNavigator();



// About Stack
const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator>
    <AboutStack.Screen name={'About'} component={AboutScreen} 
      options={{
        title: 'About',
        headerLeft: () => (
          <Icon name='menu' size={30} backgroundColor={'#ffff'} color={'white'}
          onPress = {() => navigation.openDrawer()}></Icon>
        ),
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
        // Add a font style here
        }
    }}/>
  </AboutStack.Navigator>
);

export default function() {
  return (
    <NavigationContainer theme={lightTheme}>
      <Drawer.Navigator drawerStyle ={{backgroundColor: '#F7F7F7', width: 240}} drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainTabScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="About" component={AboutStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 

