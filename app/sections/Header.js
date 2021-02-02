import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header(props) {

    const [logged, setLogged] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    let display = logged ? userLoggedIn : props.message;

    let toggleUser = () => {
        if (logged) {
            AsyncStorage.setItem('userLoggedIn', 'none', () => {
                setLogged(false);
                Alert.alert(`${userLoggedIn} logged out`);
                setUserLoggedIn(false);
            });
            return;
        }
        props.navigation.navigate('Login'); 
    }

    useEffect(() => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('none');
                return;
            }
            if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('set to none');
                    return;
                })
            }
            setLogged(true);
            setUserLoggedIn(result);
        })
    }, [props])

    return ( 
        <View style={styles.headStyle}>
            <Image style={styles.logoStyle} source={require('./img/kek.png')} />
            <Text style={styles.headText} onPress={toggleUser}>{display}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 50,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android' ? 'black' : '#31e981',
        flex: 1,
        flexDirection: 'row',
        borderColor: '#000000',
        borderBottomWidth: 2
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    }
})