import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        marginLeft:5,
        marginRight:10,
        marginTop: 0,
        marginBottom: 5,
        borderRadius: 2,
        backgroundColor: 'transparent',
        borderBottomColor: '#009387',
        borderBottomWidth: 0.5,

    },
    name: {
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
        color: 'white'
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#009387'
    },
    balance: {
        fontSize: 25,
        fontFamily: 'sans serif',
        marginTop: 23,
    },
    icon: {
        margin: 15,
    },
});

const ExpensesRow = ({ id, groupId, description, name, date, balance, statusColor, profileImage }) => (
    <View style={styles.container}>
        
        <Feather style={styles.icon} name= { profileImage } color={statusColor} size={30} />
        <View style={styles.container_text}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.date}>
                {date}
            </Text>            
            <Text style={[styles.description, {color: statusColor}]}>
                {description}
            </Text>
        </View>
        <Text style={[styles.balance, {color: statusColor}]}>
            {balance}
        </Text>

    </View>
);

export default ExpensesRow;