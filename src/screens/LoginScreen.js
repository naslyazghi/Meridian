import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Heading} from '../components/Heading';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import jwt_decode from 'jwt-decode';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/';

const LoginScreen = ({navigation}) => {
  // Declare variables ans states
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    message: '',
  });

  // const {logIn} = React.useContext(AuthContext);

  // email has to be atleast 4 charachters long
  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  // Password has to be at least 8 charachters long
  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  // Switch the secure Text Entry for the password
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  // logIn
  const loginHandle = async (email, password) => {
    //event.preventDefault();

    const js = '{"email":"' + email + '","password":"' + password + '"}';

    // email or Password is empty
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
        {text: 'OK'},
      ]);
      return;
    }

    try {
      // 1 - Respone variable from the API
      const response = await fetch(BASE_URL + 'routes/api/users/login', {
        method: 'POST',
        body: js,
        headers: {'Content-Type': 'application/json'},
      });

      // 2 - Parsing the response
      var res = JSON.parse(await response.text());

      // 3 - Processing the response
      // User not found
      if (res.id <= 0) {
        //setMessage('User/Password combination incorrect');
        setData({
          ...data,
          message: 'User/Password combination incorrect',
        });
        // Show an alert box
        Alert.alert('Error', 'User/Password combination incorrect', [
          {text: 'OK'},
        ]);
        return;
      }
      // User found
      else {
        var user = {
          firstName: res.firstName,
          lastName: res.lastName,
          id: res.id,
        };
        var jwt_decode = require('jwt-decode');
        var decoded = jwt_decode(res.token);
        //localStorage.setItem('user_data', JSON.stringify(user));

        //setMessage('');
        setData({
          ...data,
          message: 'Login is successful',
        });
        // Show an alert box
        Alert.alert(
          'Meridian',
          'Login is successful\nid: ' +
            decoded.id +
            '\nname: ' +
            decoded.name +
            '\nemail: ' +
            decoded.email,
          +[{text: 'OK'}],
        );
        return;
        // Direct the user to the main screen
        // window.location.href = '/cards';
      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
      return;
    }

    // if ( foundUser.length == 0 ) {
    //   Alert.alert('Invalid User!', 'email or password is incorrect.', [
    //     {text: 'Okay'}
    // ]);
    // return;
    // }

    // logIn(email, password);
  };

  return (
    <View style={styles.container}>
      {/*Show Status bar on top of the screen*/}
      <StatusBar backgroundColor="#1B1921" barstyle="light-content" />
      {/*Title of the page*/}
      <Heading style={styles.title}>Login</Heading>

      {/*Error Message*/}
      <Error error={''} />

      {/*email*/}
      <View style={styles.action}>
        <FontAwesome name={'user-o'} color="white" size={22} />
        <TextInput
          style={styles.inputemail}
          placeholder={'email'}
          placeholderTextColor={'grey'}
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#009387" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {/*Show error messgae for a non valid email*/}
      {data.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>email must be 4 characters long.</Text>
        </Animatable.View>
      )}

      {/*Password*/}
      <View style={styles.action}>
        <Feather
          style={styles.fontAwesome}
          name={'lock'}
          color="white"
          size={22}
        />
        <TextInput
          style={styles.inputemail}
          placeholder={'Password'}
          placeholderTextColor={'grey'}
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={val => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="white" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {/*Show error messgae for a non valid email*/}
      {data.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        </Animatable.View>
      )}

      {/*Forgot password*/}
      <TextButton
        style={[{alignItems: 'flex-end'}, {marginTop: 30}]}
        title={'Forgot Password?'}
        onPress={() => {}}
      />

      {/*Login Button*/}
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {
          loginHandle(data.email, data.password);
        }}
      />
      {/*onPress={() => navigation.navigate()}/>*/}

      {/*Create an account*/}
      <TextButton
        title={"Don't have an account?  Create one"}
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#1B1921',
    padding: 20,
  },

  title: {
    marginBottom: 30,
  },

  loginButton: {
    marginVertical: 23,
  },
  inputemail: {
    fontSize: 16,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#009387',
  },
  errorMsg: {
    color: '#FF871D',
    fontSize: 14,
  },
});
