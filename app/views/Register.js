import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let cancelRegister = () => {
        Alert.alert('Registration cancelled');
        navigation.navigate('Home')
    }

    let registerAccount = () => {
        if (!username || !password) {
            Alert.alert('Please fill all fields')
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match')
            return;
        }
        AsyncStorage.getItem(username, (err, result) => {
            if (result !== null) {
                Alert.alert(`${username} already exists`);
                return;
            }
            AsyncStorage.setItem(username, password, () => {
                Alert.alert(`${username} account created`);
                navigation.navigate('Home');
            })
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register Account</Text>

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

            <TextInput
                style={styles.inputs}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Confirm Password</Text>

            <TouchableHighlight onPress={registerAccount} underlayColor='transparent'>
                <Text style={styles.buttons}>
                    Register
                </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={cancelRegister} underlayColor='transparent'>
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