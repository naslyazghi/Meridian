import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { lightTheme } from './themes/light';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from './screens/AboutScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import Icon from 'react-native-ionicons';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './components/DrawerContent'
import { ProfileScreen } from './screens/ProfileScreen';
import RootStackScreen from './screens/RootStackScreen';
import {AuthContext} from './contexts/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import { LogIn } from 'react-feather';

// // Create a root stack that will contain all the screens
// const RootStack = createStackNavigator();

// // Create screen stacks
// const LogInStack = createStackNavigator();
// const RegisterStack = createStackNavigator();

const AboutStack = createStackNavigator();

// Create a drawer navigation element
const Drawer = createDrawerNavigator();


//About Stack
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


const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  
  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch( action.type) {
  //     case'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case'LOGIN':
  //     return {
  //       ...prevState,
  //       userName: action.id,
  //       userToken: action.token,
  //       isLoading: false,
  //     };    
  //     case'LOGOUT':
  //     return {
  //       ...prevState,
  //       userName: null,
  //       userToken: null,
  //       isLoading: false,
  //     };      
  //     case'REGISTER':
  //     return {
  //       ...prevState,
  //       userName: action.id,
  //       userToken: action.token,
  //       isLoading: false,
  //     };
  //   }
  // };

  // const[loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  // const authContext = React.useMemo(() => ({
  //   logIn: (userName, password) => {
  //     // setUserToken('abc');
  //     // setIsLoading(false);
  //     // We need to check through an API call
  //     let userToken;
  //     userToken = null;
  //     if(userName == 'user' && password == 'pass') {
  //       userToken = 'abc';
  //     }
  //     console.log('user token: ', userToken);
  //     dispatch({type: 'LOGIN', id: 'userName', token: userToken});
  //   },
  //   signOut: () => {
  //     // setUserToken(null);
  //     // setIsLoading(false);
  //     dispatch({type: 'LOGOUT'});
  //   },
  //   register: () => {
  //     setUserToken('abc');
  //     setIsLoading(false);
  //   },
  // }));
  
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = 'fgg';
  //     console.log('user token: ', userToken);
  //     dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  //   }, 1000);
  // }, []);
  
  
  // if (loginState.isLoading) {
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator size='large'/>
  //     </View>
  //   );
  // }
  

  // return (
  //   <AuthContext.Provider value={authContext}>
  //     <NavigationContainer theme={lightTheme}>
  //       {loginState.userToken !== null ? (
  //         <Drawer.Navigator drawerStyle ={{backgroundColor: '#F7F7F7', width: 240}} drawerContent={props => <DrawerContent {...props} />}>
  //           <Drawer.Screen name="Main" component={MainTabScreen}/>
  //           <Drawer.Screen name="Profile" component={ProfileScreen}/>
  //           <Drawer.Screen name="Settings" component={SettingsScreen}/>
  //           <Drawer.Screen name="About" component={AboutStackScreen}/>
  //         </Drawer.Navigator>)
  //       : 
  //         <RootStackScreen/>      
  //       }
  //     </NavigationContainer>
  //   </AuthContext.Provider>

  // );

  const user = null;

  return (
      <NavigationContainer theme={lightTheme}>
        {user !== null ? (
          <Drawer.Navigator drawerStyle ={{backgroundColor: '#F7F7F7', width: 240}} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Main" component={MainTabScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
            <Drawer.Screen name="About" component={AboutStackScreen}/>
          </Drawer.Navigator>)
        : 
          <RootStackScreen/>      
        }
      </NavigationContainer>

  );
}

export default App;


