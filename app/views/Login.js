import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let cancelLogin = () => {
        Alert.alert('Login cancelled');
        navigation.navigate('Home');
    }

    let loginUser = () => {
        if (!username || !password) {
            Alert.alert('Please fill all fields')
            return;
        }
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result !== 'none') {
                Alert.alert('Already logged in');
                navigation.navigate('Home');
                return;
            }
            AsyncStorage.getItem(username, (err, result) => {
                if (result !== null) {
                    if (result !== password) {
                        Alert.alert('Incorrect Password');
                        return;
                    }
                    AsyncStorage.setItem('userLoggedIn', username, (err, result) => {
                        Alert.alert(`${username} logged in`);
                        navigation.navigate('Home', Math.random());
                        return;
                    })
                }
                else{
                    Alert.alert(`No account for user: ${username}`);
                }
            })
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>

            <TextInput
                style={styles.inputs}
                onChangeText={text => setUsername(text)}
                value={username}
            />

            <Text style={styles.label}>Enter Username</Text>

            <TextInput
                style={styles.inputs}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Enter Password</Text>

            <TouchableHighlight onPress={loginUser} underlayColor='transparent'>
                <Text style={styles.buttons}>
                    Login
                </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={cancelLogin} underlayColor='transparent'>
                <Text style={styles.buttons}>
                    Cancel
                </Text>
            </TouchableHighlight>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 25,
        flex: 1,
        paddingTop: 10
    },
    inputs: {
        flex: 1,
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        textAlign: 'center'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        backgroundColor: 'salmon',
        minWidth: '50%',
        textAlign: 'center',
        borderRadius: 4
    },
    label: {
        paddingBottom: 10,
        fontSize: 20
    }
});