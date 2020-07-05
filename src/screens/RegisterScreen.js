import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import { AuthContainer } from '../components/AuthContainer';


export function RegisterScreen({navigation}) {
  return (
  <AuthContainer>   
    <Heading style={styles.title}>Register</Heading>
    <IconButton style={styles.closeIcon} name={'close-circle-outline'} 
      onPress={() => {navigation.pop()}}/>
    <Error error={""}/>
    <Input style={styles.input} keyboardType={'email-address'} placeholder={"Email"} placeholderTextColor = {"white"}/>
    <Input style={styles.input} secureTextEntry placeholder={"Password"} placeholderTextColor = {"white"}/>
    <FilledButton title={'Register'} style={styles.loginButton} onPress={() => {}}/>
  </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#1B1921',
    padding: 20,
  },

  title : {
    marginBottom: 32,
  },

  input: {
    marginVertical: 15,
  },

  loginButton: {
    marginVertical: 23,
  },

  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20.
  }
});