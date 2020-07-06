import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import { RegisterScreen } from './RegisterScreen';
import { AuthContainer } from '../components/AuthContainer';


export function LoginScreen({navigation}) {
  return (
  <AuthContainer>   
    <Heading style={styles.title}>Login</Heading>
    <Error error={""}/>
    <Input style={styles.input} keyboardType={'email-address'} placeholder={"Email"} placeholderTextColor = {"white"}/>
    <Input style={styles.input} secureTextEntry placeholder={"Password"} placeholderTextColor = {"white"}/>
    <TextButton style={{alignItems: 'flex-end'}} title={"Forgot Password?"} 
      onPress={() => {}}/>
    <FilledButton title={'Login'} style={styles.loginButton} 
      onPress={() => {navigation.navigate('Main')}}/>
    <TextButton title={"Don't have an account?  Create one"} 
      onPress={() => {navigation.navigate('Register')}}/>
  </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});