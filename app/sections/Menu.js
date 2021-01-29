import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

export default function Menu({navigation}) {

    let onPress = () => {
        Alert.alert('Why Hello There !');
    }

    return (
        <View style={styles.container}>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.buttonText}>CONTACT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>SECOND</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>THIRD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>FORTH</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>FIFTH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>SIXTH</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: 'black'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    buttonStyles: {
        backgroundColor: 'black',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});