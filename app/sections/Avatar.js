import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Avatar() {
    return(
        <Image style={styles.avatarImage} source={require('./img/myAvatar.png')}/>
    )
}

const styles = StyleSheet.create({
    avatarImage: {
        flex: 8,
        width: undefined,
        height:undefined
    }
});