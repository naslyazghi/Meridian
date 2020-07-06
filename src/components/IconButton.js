import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

export function IconButton({name, style, onPress}) {
  return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
          <Icon name={name} color={'#009387'}/>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});