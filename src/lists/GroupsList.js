
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
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    amount={item.amount}
                    image_url={item.image_url}
                />}
            />

    </View>
);

export default GroupsList;