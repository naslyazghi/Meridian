import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const GroupsRow = ({ title, date, description, amount, image_url, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.date}>
                {date}
            </Text>            
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
        <Text style={styles.amount}>
            {amount}
        </Text>

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
        marginLeft:5,
        marginRight:5,
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
        color: 'white'
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#858486'
    },
    amount: {
        fontSize:25,
        fontFamily: 'sans serif',
        color: '#009387',
        marginTop: 20,
    },
    photo: {
        height: 50,
        width: 50,
    },
});