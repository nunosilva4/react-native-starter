import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, TextInput } from 'react-native';
import Header from '../sections/Header.js';

export default function FirstScreen(props) {

    const [name, setName] = useState('Enter Name');
    const [msg, setMsg] = useState('Enter Message');
    const [email, setEmail] = useState('Enter Email Address');

    let clearFields = () => {
        setName('');
        setEmail('');
        setMsg('');
    }

    let sendMessage = () => {
        Alert.alert(name, msg);
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} message='Press to Login'/>
            <Text style={styles.heading}>Contact me</Text>

            <TextInput
                style={styles.inputs}
                onChangeText={text => setName(text)}
                value={name}
            />

            <TextInput
                style={styles.inputs}
                onChangeText={text => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.multiInput}
                onChangeText={text => setMsg(text)}
                value={msg}
                multiline={true}
                numberOfLines={4}
            />

            <TouchableHighlight onPress={sendMessage} underlayColor='transparent'>
                <Text style={styles.buttons}>
                    Send Message
                </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={clearFields} underlayColor='transparent'>
                <Text style={styles.buttons}>
                    Reset Form
                </Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
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
        textAlign: 'center',
        fontSize: 20
    },
    multiInput: {
        flex: 2,
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        textAlign: 'center',
        fontSize: 20
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
    }
});