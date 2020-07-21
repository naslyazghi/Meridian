import React from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FilledButton} from '../components/FilledButton';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MultiSelect from 'react-native-multiple-select';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/user/';



export function AddExpense({route, navigation}) {

  //const Data;
  const {token} = route.params;
  console.log('Token in Main Screen: ' + token);

  // Decode the token
  var jwt_decode = require('jwt-decode');
  var decoded = jwt_decode(token);

  // Create the user object
  var user = {
    id: decoded.id,
    username: decoded.name,
    email: decoded.email,
  };

  // Declare variables ans states
  const [data, setData] = React.useState({
    check_amountInputChange: false,
    check_descriptionInputChange: false,
    isValidAmount: true,
    isValidDescription: true,
    amount: null,
    description: '',
  });

  const amountInputChange = val => {
    if (val.trim().length <= 7 && val.trim().length >= 1) {
      setData({
        ...data,
        amount: val,
        check_amountInputChange: true,
        isValidAmount: true,
      });
    } else {
      setData({
        ...data,
        amount: val,
        check_amountInputChange: false,
        isValidAmount: false,
      });
    }
  };

  const descriptionInputChange = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        description: val,
        check_descriptionInputChange: true,
        isValidDescription: true,
      });
    } else {
      setData({
        ...data,
        description: val,
        check_descriptionInputChange: false,
        isValidDescription: false,
      });
    }
  };

  const handleValidAmount = val => {
    if (val.trim().length <= 7 && val.trim().length >= 1) {
      setData({
        ...data,
        isValidAmount: true,
      });
    } else {
      setData({
        ...data,
        isValidAmount: false,
      });
    }
  };

  const handleValidDescription = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        isValidDescription: true,
      });
    } else {
      setData({
        ...data,
        isValidDescription: false,
      });
    }
  };

  //   const addGroupHandle = async (amount, description) => {
  //     console.log('Add group => description: ' + description);

  //     // Construct the Json body for the request
  //     const js ='{"name":"' + amount + '","description":"' + description + '"}';
  //     console.log('js = ' + js);

  //     try {
  //       // 1 - Respone variable from the API
  //       const response = await fetch(BASE_URL + user.id + '/createGroup', {
  //         method: 'POST',
  //         body: js,
  //         headers: {'Content-Type': 'application/json', Authorization: token},
  //       });

  //       // Parse the response
  //       var txt = await response.text();
  //       console.log('ADD GROUP, txt = ' + txt);

  //       var res = JSON.parse(txt);
  //       console.log('ADD GROUP, res = ' + res.success);

  //       // Process the response
  //       // Failed
  //       if (res.success !== true) {
  //         console.log('Adding Group failed');
  //       }
  //       // Success, Data found!!
  //       else {
  //         console.log('Group added Successfuly => ' + res.group);
  //         Alert.alert('Add Group', res.group.name + ' added successfuly', [
  //           {text: 'OK'},
  //         ]);
  //         navigation.goBack();
  //       }
  //     } catch (e) {
  //       Alert.alert('Error', e.toString(), [{text: 'OK'}]);
  //     }
  //   };



  return (
    <View style={styles.container}>
      {/*Go Back*/}
      <Feather
        style={styles.closeIcon}
        name={'x-circle'}
        color="#009387"
        size={30}
        onPress={() => {
          navigation.goBack();
        }}
      />

      {/*Title*/}
      <Text style={styles.title}>Add Expense</Text>
      
      {/*Select Members*/}
      <TouchableOpacity style={styles.addMemberButton} onPress={() => {navigation.navigate('SelectMembers')}}>
        <Text style={styles.addMembers}>Select Members</Text>
      </TouchableOpacity>


      {/*Amount*/}
      <View style={styles.action}>
        <Feather name={'dollar-sign'} color="white" size={22} />
        <TextInput
          style={styles.inputemail}
          keyboardType={'number-pad'}
          placeholder={'Amount'}
          placeholderTextColor={'grey'}
          onChangeText={val => amountInputChange(val)}
          onEndEditing={e => handleValidAmount(e.nativeEvent.text)}
        />
        {data.check_amountInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#009387" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {/*Show error message for a non valid Group name*/}
      {data.isValidAmount ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Invalid Number</Text>
        </Animatable.View>
      )}

      {/*Description*/}
      <View style={styles.action}>
        <Feather name={'list'} color="white" size={22} />
        <TextInput
          style={styles.inputemail}
          placeholder={'Description'}
          placeholderTextColor={'grey'}
          onChangeText={val => descriptionInputChange(val)}
          onEndEditing={e => handleValidDescription(e.nativeEvent.text)}
        />
        {data.check_desciptionInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#009387" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {/*Show error messgae for a non valid email*/}
      {data.isValidDescription ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Description is too short</Text>
        </Animatable.View>
      )}

      {/*Add*/}
      <FilledButton
        title={'Add'}
        style={styles.loginButton}
        onPress={() => {
          addGroupHandle(parseInt(data.amount), data.description);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
    backgroundColor: '#1B1921',
    padding: 30,
  },

  addMembers: {
    fontSize: 16,
    color: 'white',
    padding: 7,
  },

  addMemberButton: {
    marginTop: 15,
    borderColor:'#009387',
    borderWidth: 1,
  },

  title: {
    marginBottom: 30,
    fontSize: 27,
    color: 'white',
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
});
