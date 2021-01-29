import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default function Header(props) {

    const [logged, setLogged] = useState(false);

    let display = logged ? 'Sample User' : props.message;

    return (
        <View style={styles.headStyle}>
            <Image style={styles.logoStyle} source={require('./img/kek.png')} />
            <Text style={styles.headText} onPress={() => setLogged(!logged)}>{display}</Text>
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