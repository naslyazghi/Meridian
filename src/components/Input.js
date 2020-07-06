import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export function Input({style, ...props}) {
  return <TextInput {...props} style={[styles.input, style]}/>
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'white',
    borderColor: '#009387',
    borderBottomWidth: 1,
  },
});

