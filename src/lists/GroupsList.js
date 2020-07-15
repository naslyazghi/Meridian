
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import GroupsRow from '../rows/GroupsRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});




const GroupsList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <GroupsRow
                    title={item.name}
                    date={item.lastActivity}
                    description={item.inviteCode}
                    amount={item.balance}
                    image_url={'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
                />}
        />

    </View>
);

export default GroupsList;