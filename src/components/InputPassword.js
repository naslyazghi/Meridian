import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export function InputPassword({style, ...props}) {

  const [data, setData] = React.useState({
    password: '',
    secureTextEntry: true
  })
  
  const showPassword = (val) => {
      setData({
          ...data,
          password: val
      });
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }

  return (
    <View style={styles.action}>
      <Feather {...props} style={styles.fontAwesome} name={"lock"} color="white" size={22}/>
      <TextInput {...props}
        style={[styles.input, style]}
        secureTextEntry={data.secureTextEntry ? true : false}  
        onChangeText={(val) => showPassword(val)}
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ?
            <Feather name="eye-off" color="grey" size={20}/>
            :
            <Feather name="eye" color="white" size={20}/>
        }
      </TouchableOpacity>
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

