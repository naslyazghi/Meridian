import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import GroupsRow from '../rows/GroupsRow';
import {createStackNavigator} from '@react-navigation/stack';
import {MembersScreen} from '../screens/MembersScreen';
import MemberstackScreen from '../stacks/MemberstackScreen';
import {useNavigation} from '@react-navigation/native';

global.groupId = null;

const GroupsList = ({navigation, itemList}) => {

  //console.log(itemList);
  const [selectedId, setSelectedId] = React.useState(null);


  // TEMP
  const renderItem = ({item}) => {
    //const backgroundColor = item.id === selectedId ? '#1B1921' : '#1B1921';
    const borderColor = item.id === selectedId ? '#009387' : '#009387';
    const borderWidth = item.id === selectedId ? 1.7 : 0.2;

    global.groupId = selectedId;
    // console.log('Id selected = ' + selectedId);
    // console.log('Global id = ' + global.id);

    return (
      <GroupsRow
        id={item.id}
        title={item.name}
        date={item.lastActivity}
        description={item.description}
        amount={'$' + item.balance}
        image_url={'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        onPress={() => {setSelectedId(item.id)}}
        style={{borderColor, borderWidth}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};


export default GroupsList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
