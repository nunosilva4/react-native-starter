import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { QuizData } from '../data/QuizQuestions.js';
import Question from '../sections/Questions.js';

export default function Quiz({navigation}) {

    const [questLoaded, setQuestLoaded] = useState(false);
    const [totalScore, setTotalScore] = useState(100);
    const [completedQuiz, setCompletedQuiz] = useState(false);
    const [questList, setQuestList] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState('');
    const [incorrect, setIncorrect] = useState('');
    const [questionsAnswered, setQuestionsAnswered] = useState('');

    useEffect(() => {
        let numQuestions = Array.from(QuizData.questions).length;
        setQuestLoaded(true);
        setQuestList(Array.from(QuizData.questions));
        setNumberOfQuestions(numQuestions);
        setIncorrect(0);
        setQuestionsAnswered(0)
        
        return() => {
            setQuestLoaded(false)
        }
    }, [])

    let updateScore = (penalty) => {
        let tempScore = totalScore;
        let missed = incorrect;
        let questionsTotal = numberOfQuestions;
        let questionsDone = questionsAnswered;

        let newScore = tempScore - penalty;
        let totalAnswered = questionsDone + 1;
        let totalMissed = penalty ? missed + 1 : missed;

        setTotalScore(newScore);
        setIncorrect(totalMissed);
        setQuestionsAnswered(totalAnswered);

        if (totalAnswered === questionsTotal) {
            setCompletedQuiz(true);
        }
    }

    let finishQuiz = () => {
        navigation.navigate('QuizFinish', {
            score: totalScore,
            missed: incorrect,
            questions: numberOfQuestions
        })
    }

    return (
        <View style={styles.container}>
            {questLoaded && (
                <FlatList
                    data={questList}
                    renderItem={({ item }) =>
                        <Question
                            question={item.question}
                            answer1={item.answer1}
                            answer2={item.answer2}
                            answer3={item.answer3}
                            answer4={item.answer4}
                            correctAnswer={item.correctAnswer}
                            scoreUpdate={updateScore}
                        />
                    }
                />
            )}

            {!completedQuiz && (
                <TouchableOpacity style={styles.disabled}>
                    <Text>Answer all the questions</Text>
                </TouchableOpacity>
            )}

            {completedQuiz && (
                <TouchableOpacity onPress={finishQuiz} style={styles.enabled}>
                    <Text>Finished</Text>
                </TouchableOpacity>
            )}

            {!questLoaded && (
                <Text>LOADING</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    disabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        height: '10%'
    },
    enabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#90ee90',
        height: '10%'
    }
})