
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MembersRow from '../rows/MembersRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});




const MembersList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <MembersRow
                    name={item.name}
                    lastActivityDate={item.lastActivityDate}
                    lastActivity={item.lastActivity}
                    balance={item.balance}
                    statusColor={item.statusColor}
                    profileImage={item.profileImage}
                />}
            />

    </View>
);

export default MembersList;