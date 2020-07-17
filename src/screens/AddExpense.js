import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert, Picker} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FilledButton} from '../components/FilledButton';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MultiSelect from 'react-native-multiple-select';
const BASE_URL = 'https://cop4331-test-2.herokuapp.com/draftapi/group/';

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

  const members = global.members;

  console.log('User ID = ' + user.id);
  console.log('Group ID = ' + global.groupId);
  console.log('Mmebers: ');
  console.log(members);

  const [selectedMember, setSelectedMember] = useState('');
  const [userValues, setUserValues] = useState(members);

  console.log('UserValues are => ');
  console.log(userValues);

  let myUsers = userValues.map((myValue, myIndex) => {
    console.log('myValue: ' + myValue.name);

    return <Picker.Item label={myValue.name} value={myValue.id} key={myIndex} />;
  });

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

  const addGroupHandle = async (amount, description, selectedMember) => {
    console.log('Add Expense => description: ' + description);
    console.log('Add Expense => selectedMember: ' + selectedMember);

    if (amount === null)
    {
      Alert.alert('Error', 'Please add an amount.', [
        {text: 'OK'},
      ]);
      return;
    }

    if (amount < 0)
    {
      Alert.alert('Error', 'Amount must be positive.', [
        {text: 'OK'},
      ]);
      return;
    }

    if (amount == 0)
    {
      Alert.alert('Error', "Amount can't be zero.", [
        {text: 'OK'},
      ]);
      return;
    }

    // Construct the Json body for the request
    const js = '{"payer":"' + user.id + '","billed":"' + selectedMember + '","amount":"' + amount + '","description":"' +  description + '"}';
    console.log('js = ' + js);

    try {
      // 1 - Respone variable from the API
      const response = await fetch(BASE_URL + global.groupId + '/recordExpense', {
        method: 'POST',
        body: js,
        headers: {'Content-Type': 'application/json', Authorization: token},
      });

      // Parse the response
      var txt = await response.text();
      console.log('ADD Expense, txt = ' + txt);

      var res = JSON.parse(txt);
      console.log('ADD Expense, res = ' + res.success);

      // Process the response
      // Failed
      if (res.success !== true) {
        console.log('Adding Expense failed');
      }
      // Success, Data found!!
      else {
        console.log('Expense added Successfuly');
        Alert.alert('Success', 'An amount of $' + amount + ' has been recorded', [
          {text: 'OK'},
        ]);
        navigation.goBack();
      }
    } catch (e) {
      Alert.alert('Error', e.toString(), [{text: 'OK'}]);
    }
  };

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

      {/*Select Member 1*/}
      <View style={styles.memberRow}>
        <Text style={styles.member}>Billed Member</Text>
        <View style={styles.addMembers}>
          <Picker
            selectedValue={selectedMember}
            style={styles.addMemberPicker}
            onValueChange={value => setSelectedMember(value)}>
            {myUsers}
          </Picker>
        </View>
      </View>

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
          addGroupHandle(data.amount, data.description, selectedMember);
        }}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
    backgroundColor: '#1B1921',
    padding: 30,
  },

  title: {
    marginBottom: 100,
    fontSize: 27,
    color: 'white',
  },

  memberRow: {
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addMembers: {
    borderColor: 'white',
    borderWidth: 0.7,
    borderColor: '#009387',
  },

  addMemberPicker: {
    height: 50,
    width: 200,
    color: 'white',
    padding: 0,
  },

  member: {
    color: 'white',
    fontSize: 17,
    marginRight: 40,
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
    top: 40,
    right: 20,
  },
});
