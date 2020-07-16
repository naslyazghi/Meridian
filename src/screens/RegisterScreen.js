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

const RegisterScreen = ({navigation}) => {
  
  const {logIn} = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    check_emailInputChange: false,
    check_userNameInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidEmail: true,
    message: '',
  });

  const emailInputChange = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const userNameInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_userNameInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_userNameInputChange: false,
        isValidUser: false,
      });
    }
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

  const handleValidEmail = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  // Password has to be at least 8 charachters long
  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
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

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };


  // Register
  const registerHandle = async (email, username, password, confirm_password) => {
    // email = "test@test.com";
    // username = "testes";
    // password = "123456789";

    const js =
      '{"name":"' +
      username +
      '","email":"' +
      email +
      '","password":"' +
      password +
      '","password2":"' +
      confirm_password +
      '"}';

    // email or Password is empty
    if (email.length == 0 || username.length == 0 || password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'email, username or password field cannot be empty.',
        [{text: 'OK'}],
      );
      return;
    }

    if (password != confirm_password){
      Alert.alert(
        'Error!',
        'Password Missmatch',
        [{text: 'OK'}],
      );
      return;
    }

    try {
      // 1 - Respone variable from the API
      const response = await fetch(BASE_URL + 'api/users/register', {
        method: 'POST',
        body: js,
        headers: {'Content-Type': 'application/json'},
      });

      // 2 - Parsing the response
      var res = JSON.parse(await response.text());
      console.log(res);

      // 3 - Processing the response
      // User successfully added to the database
      if (res.name === username) {
        var user = {
          firstName: res.firstName,
          lastName: res.lastName,
          id: res.id,
        };

        //setMessage('');
        setData({
          ...data,
          message: 'User Registred',
        });
        // Show an alert box
        Alert.alert(
          'Meridian Registration',
          'User Succesfully Registred\nname: ' +
            res.name +
            '\nemail: ' +
            res.email +
            '\npassword: ' +
            res.password,
          +[{text: 'OK'}],
        );

        navigation.navigate('LoginScreen');
        return;
        // TODO: Direct the user to the main screen
      }
      // User wss not added to the database
      else {
        setData({
          ...data,
          message: 'User failed to register',
        });
        // Show an alert box
        Alert.alert('Error', 'User failed to register', [{text: 'OK'}]);
        return;
      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
      return;
    }
  };

  return (
    <View style={styles.container}>
      {/*Show Status bar on top of the screen*/}
      <StatusBar backgroundColor="#1B1921" barstyle="light-content" />

      {/*Title of the page*/}
      <Heading style={styles.title}>Register</Heading>
      <Error error={''} />

      {/*email*/}
      <View style={styles.action}>
        <Feather name={'mail'} color="white" size={22} />
        <TextInput
          style={styles.inputemail}
          placeholder={'email'}
          placeholderTextColor={'grey'}
          onChangeText={val => emailInputChange(val)}
          onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
        />
        {data.check_emailInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#009387" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {/*Show error messgae for a non valid email*/}
      {data.isValidEmail ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>email must be 10 characters long.</Text>
        </Animatable.View>
      )}

      {/*UserName*/}
      <View style={styles.action}>
        <FontAwesome name={'user-o'} color="white" size={22} />
        <TextInput
          style={styles.inputemail}
          placeholder={'UserName'}
          placeholderTextColor={'grey'}
          onChangeText={val => userNameInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        {data.check_userNameInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#009387" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {/*Show error messgae for a non valid userName*/}
      {data.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>User must be 4 characters long.</Text>
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
      {/*Show error messgae for a non valid Password*/}
      { data.isValidPassword ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
        </Animatable.View>
      }

      {/*retype password*/}
      <View style={styles.action}>
        <Feather
          style={styles.fontAwesome}
          name={'lock'}
          color="white"
          size={22}
        />
        <TextInput
          style={styles.inputemail}
          placeholder={'Confirm Password'}
          placeholderTextColor={'grey'}
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={val => handleConfirmPasswordChange(val)}
        />
        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="white" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {/*Show error messgae for a non valid email*/}
      {/* { data.isValidPassword ? null : 
        <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
        </Animatable.View>
      } */}

      {/*Register*/}
      <FilledButton
        title={'Register'}
        style={styles.loginButton}
        onPress={() => {
          registerHandle(data.email, data.username, data.password, data.confirm_password);
        }}
      />
    </View>
  );
};

export default RegisterScreen;

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
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#009387',
  },
  errorMsg: {
    color: '#FF871D',
    fontSize: 14,
  },
});