import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export function InputUserName({style, ...props}) {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  })
  
  const textInputChange = (val) => {
    if( val.trim().length >= 6) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
  }

  return (
    <View style={styles.action}>
      <FontAwesome {...props} style={styles.fontAwesome} name={"user-o"} color="white" size={22}/>
      <TextInput {...props} style={[styles.input, style]} 
        onChangeText={(val) => textInputChange(val)}
      />
      {data.check_textInputChange ?
        <Animatable.View animation='bounceIn'>
          <Feather name="check-circle" color="#009387" size={20}/>
        </Animatable.View>
        : null
      }
    </View>
  )
}




const styles = StyleSheet.create({
  input: {
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
  fontAwesome: {
  }
});

