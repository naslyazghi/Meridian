
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
                    id={item._id}
                    groupId={item.groupId}
                    description={item.description}
                    name={item.payer.name + " payed for " + item.billed.name}
                    date={item.time}
                    balance={'$' + item.amount}
                    statusColor={'#009387'}
                    profileImage={'trending-up'}
                />}
            />

    </View>
);

export default ExpensesList;