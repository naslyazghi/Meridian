import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import Icon from 'react-native-ionicons';
import { color } from 'react-native-reanimated';


export function DrawerContent(props, navigation) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            {/* <Avatar.Image
                                source={{
                                    uri:''
                                }}
                                size={50}
                            /> */}
                            <Icon
                                name= "person"
                                color={'#009387'}
                                size={49}
                            />
                            <View style={{marginLeft:15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Nas Lyazghi</Title>
                                <Caption style={styles.caption}>ID: 8225499</Caption>
                            </View>
                        </View>
                        
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>6</Paragraph>
                                <Caption style={styles.caption}>Groups</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>34</Paragraph>
                                <Caption style={styles.caption}>Connections</Caption>
                            </View>
                        </View>
                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name= "home"
                                    color={color}
                                    size={size}
                                />
                            )}    
                            label="Groups"
                            onPress={() => {props.navigation.navigate('Main')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name= "contact"
                                    color={color}
                                    size={size}
                                />
                            )}    
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name= "cog"
                                    color={color}
                                    size={size}
                                />
                            )}    
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name= "code-working"
                                    color={color}
                                    size={size}
                                />
                            )}    
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title='Preferences'>
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name= "exit"
                            color={color}
                            size={size}
                        />
                    )}    
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

// STYLES
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 0,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      marginTop: 0,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });