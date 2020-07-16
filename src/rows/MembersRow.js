import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-ionicons';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 2,
        marginLeft:5,
        marginRight:10,
        marginTop: 1,
        marginBottom: 4,
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
        fontSize: 12,
        fontStyle: 'italic',
        color: '#FF871D'
    },
    balance: {
        fontSize: 25,
        fontFamily: 'sans serif',
        marginTop: 30,
    },
    icon: {
        margin: 15,
    },
});

const MembersRow = ({ name, lastActivityDate, lastActivity, balance, statusColor, profileImage }) => (
    <View style={styles.container}>
        
        <Feather style={styles.icon} name= { profileImage } color={statusColor} size={40} />
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

export default MembersRow;