import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements';

const GroupsRow = ({
  title,
  date,
  description,
  amount,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
    <Avatar
      size="medium"
      overlayContainerStyle={{backgroundColor: '#009387'}}
      rounded
      title={title.substring(0, 1)}
    />
    <View style={styles.container_text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date.substring(0, date.indexOf('T'))}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Text style={styles.amount}>{amount}</Text>
  </TouchableOpacity>
);

export default GroupsRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  date: {
    fontSize: 11,
    color: 'white',
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#009387',
  },
  amount: {
    fontSize: 25,
    fontFamily: 'sans serif',
    color: '#009387',
    marginTop: 20,
  },
  photo: {
    height: 50,
    width: 50,
  },
});
