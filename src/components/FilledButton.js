import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export function FilledButton({title, style, onPress}) {
  return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
          <Text style={styles.text}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ff87',
    width: '60%',
    height: 40,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    fontSize: 18,
  }
});