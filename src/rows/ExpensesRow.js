import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        marginLeft:5,
        marginRight:5,
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
    lastActivityDate: {
        fontSize: 11,
        color: 'white'
    },
    lastActivity: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#858486'
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

const ExpensesRow = ({ name, lastActivityDate, lastActivity, balance, statusColor, profileImage }) => (
    <View style={styles.container}>
        
        <Icon style={styles.icon} name= { profileImage } color={statusColor} size={30} />
        <View style={styles.container_text}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.lastActivityDate}>
                {lastActivityDate}
            </Text>            
            <Text style={styles.lastActivity}>
                {lastActivity}
            </Text>
        </View>
        <Text style={[styles.balance, {color: statusColor}]}>
            {balance}
        </Text>

    </View>
);

export default ExpensesRow;