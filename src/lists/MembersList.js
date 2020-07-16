
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
                    id={item.id}
                    name={item.name}
                    lastActivityDate={'Last Activity Date'}
                    lastActivity={'Last Activity Description'}
                    balance={item.balance}
                    statusColor={'#FF1DA2'}
                    profileImage={"person"}
                />}
            />

    </View>
);

export default MembersList;