
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ExpensesRow from '../rows/ExpensesRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});




const ExpensesList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ExpensesRow
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

export default ExpensesList;