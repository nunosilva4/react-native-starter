import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function QuizFinish({route, navigation}) {

    let exitQuiz = () => {
        navigation.navigate('Home');
    }

    let userScore = route.params ? route.params.score : 'No score returned';
    let questionsMissed = route.params ? route.params.missed : 'No missed questions returned';
    let totalQuestions = route.params ? route.params.questions : 'No questions returned';

    return(
        <View style={styles.container}>
            <Text>Your quiz score was {userScore}</Text>
            <Text>You missed on {questionsMissed} out of {totalQuestions} questions</Text>

            <TouchableOpacity onPress={exitQuiz} style={styles.button}>
                <Text>Finish Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
})