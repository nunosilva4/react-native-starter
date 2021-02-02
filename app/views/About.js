import React from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';

const randomText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus nullam eget. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Odio euismod lacinia at quis. Sit amet volutpat consequat mauris nunc congue. Ac tortor vitae purus faucibus ornare suspendisse. Lacus viverra vitae congue eu consequat ac felis donec et. Turpis massa tincidunt dui ut. Nunc sed blandit libero volutpat sed cras ornare arcu. Sit amet mattis vulputate enim nulla aliquet. Tempor commodo ullamcorper a lacus vestibulum. Viverra mauris in aliquam sem.';
const randomText2 = 'Id leo in vitae turpis massa sed. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ornare quam viverra orci sagittis eu. Tristique senectus et netus et malesuada fames ac turpis. Sodales ut eu sem integer. Ac felis donec et odio pellentesque diam volutpat. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. At lectus urna duis convallis convallis. Amet cursus sit amet dictum sit amet. Maecenas volutpat blandit aliquam etiam erat. Iaculis nunc sed augue lacus viverra. Amet aliquam id diam maecenas ultricies mi. Urna cursus eget nunc scelerisque. Posuere ac ut consequat orci nulla.';

export default function About({navigation}) {
    return (
        <ScrollView style={styles.container}>

            <Image style={styles.pics} source={require('../sections/img/kek.png')} />
            <Text style={styles.aboutTitle}>Random Title 1</Text>
            <Text style={styles.aboutText}>{randomText1}</Text>

            <Image style={styles.pics} source={require('../sections/img/kek.png')} />
            <Text style={styles.aboutTitle}>Random Title 2</Text>
            <Text style={styles.aboutText}>{randomText2}</Text>

            <Text onPress={() => navigation.goBack()} style={styles.backBtn}>GO BACK</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300,
        width: undefined
    },
    aboutTitle:{
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20
    },
    aboutText: {
        paddingBottom: 20
    },
    backBtn: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})