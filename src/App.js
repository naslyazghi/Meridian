import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {lightTheme} from './themes/light';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutScreen} from './screens/AboutScreen';
import {AddGroup} from './screens/AddGroup';
import {AddExpense} from './screens/AddExpense';
import {SelectMembers} from './screens/SelectMembers';
import MemberstackScreen, {Members} from './stacks/MemberstackScreen';
import {SettingsScreen} from './screens/SettingsScreen';
import Icon from 'react-native-ionicons';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './components/DrawerContent';
import {ProfileScreen} from './screens/ProfileScreen';
import RootStackScreen from './screens/RootStackScreen';
import {AuthContext} from './contexts/AuthContext';
import {ActivityIndicator} from 'react-native-paper';
import {AsyncStorage, Linking, Alert} from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {LogIn, Navigation} from 'react-feather';

global.userTokenConst = null;

// Create a root stack that will contain all the screens
const RootStack = createStackNavigator();

// Create screen stacks
const LogInStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const AboutStack = createStackNavigator();

// Create a drawer navigation element
const Drawer = createDrawerNavigator();

//About Stack
// const AboutStackScreen = ({navigation}) => (
//   <AboutStack.Navigator>
//     <AboutStack.Screen name={'About'} component={AboutScreen}
//       options={{
//         title: 'About',
//         headerLeft: () => (
//           <Icon name='menu' size={30} backgroundColor={'#ffff'} color={'white'}
//           onPress = {() => navigation.openDrawer()}></Icon>
//         ),
//         headerStyle: {
//           backgroundColor: '#009387',
//         },
//         headerTintColor: '#ffff',
//         headerTitleStyle: {
//         // Add a font style here
//         }
//     }}/>
//   </AboutStack.Navigator>
// );

const useMount = func => useEffect(() => func(), []);
const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const handleURL = (input) => {
    if (input == null)
      return;
    const res = input.match(/https:\/\/cop4331-test-2\.herokuapp\.com\/group\/([0-9A-f]+)\/join\/([0-9A-f]+)/);
    if (res == null) {
      console.log("Invalid invite code");
      return;
    }
	const [entireMatch, group, inviteCode] = res;
    console.log("Group invite debug"+group+" | "+inviteCode);
    Alert.alert('Group invite debug', 'Group: '+group+" Invite: "+inviteCode, [
        {text: 'OK'},
      ]);
  }
  useMount(() => {
    Linking.getInitialURL().then(m => {
      handleURL(m);
    });
    Linking.addEventListener("url", (m) => {
      let input = m.url;
      handleURL(input);
    });
  });


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      // Sign In
      logIn: async user => {
        const userToken = String(user.userToken);
        const userName = user.username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      // Sign Out
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      // Sign Up
      signUp: () => {},
      // Toggle Theme
      // toggleTheme: () => {
      //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
      // }
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  global.userTokenConst = loginState.userToken;
  console.log('token = ' + loginState.userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={lightTheme}>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerStyle={{backgroundColor: '#F7F7F7', width: 240}}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="Main"
              component={MainTabScreen}
              initialParams={{token: loginState.userToken}}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              initialParams={{token: loginState.userToken}}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="AddGroup" component={AddGroup} />
            <Drawer.Screen name="AddExpense" component={AddExpense} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
