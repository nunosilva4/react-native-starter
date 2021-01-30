import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../sections/Header.js';
import Avatar from '../sections/Avatar.js';
import Menu from '../sections/Menu.js';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Header message='Press to Login'/>
            <Avatar/>
            <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})