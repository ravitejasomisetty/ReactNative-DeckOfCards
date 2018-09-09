import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { gray, white, red, green } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helper';

export default class Quiz extends React.Component {
    state = { index: 0, score: 0, showAnswer: false }

    submitCorrect = () => {
        this.setState((prevState) => ({ ...prevState, index: prevState.index + 1, score: prevState.score + 1 }))
    }

    submitIncorrect = () => {
        this.setState((prevState) => ({ ...prevState, index: prevState.index + 1 }))
    }

    flipCard = () => {
        this.setState((prevState) => ({ ...prevState, showAnswer: !prevState.showAnswer }))
    }

    reset = () => {
        this.setState({ index: 0, score: 0, showAnswer: false })
    }

    render() {
        const { deck } = this.props.navigation.state.params
        const { index, score, showAnswer } = this.state

        if (index >= deck.questions.length) {
            clearLocalNotification()
            setLocalNotification()

            return (
                <View style={styles.container}>
                    <View style={[styles.textsView, styles.center]}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: red }}>Well done!</Text>
                        <Text style={{ fontSize: 15, color: gray }}>{`Your final score: ${score} / ${deck.questions.length}`}</Text>
                    </View>
                    <View style={[styles.buttonsView, styles.center]}>
                        <TouchableOpacity style={styles.reTakeQuizBtn} onPress={() => this.reset()}>
                            <Text style={{ color: white, fontSize: 20 }}>Retake Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        const quiz = deck.questions[index]

        return (<View style={styles.container}>
            <View style={{ flex: 0.05 }}>
                <Text style={{ alignSelf: 'flex-start', color: 'black', fontSize: 15, marginBottom: 'auto' }}>
                    {`${index + 1}/${deck.questions.length}`}
                </Text>
            </View>
            <View style={[styles.textsView, styles.center]}>
                <Text style={styles.questionText}>{showAnswer ? quiz.answer : quiz.question}</Text>
                <TouchableOpacity onPress={() => this.flipCard()}>
                    <Text style={{ color: red, margin: 10, fontSize: 25, fontWeight: 'bold' }}>
                        {showAnswer ? 'Question' : 'Answer'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.buttonsView, styles.center]}>
                <TouchableOpacity style={[styles.correct, styles.center]} onPress={() => this.submitCorrect()}>
                    <Text style={{ color: white, fontSize: 20 }}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.incorrect, styles.center]} onPress={() => this.submitIncorrect()}>
                    <Text style={{ color: white, fontSize: 20 }}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    textsView: {
        flex: 0.70,
    },
    buttonsView: {
        flex: 0.25,
    },
    questionText: {
        color: 'black',
        fontSize: 60
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    incorrect: {
        backgroundColor: red,
        width: 150,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    correct: {
        backgroundColor: green,
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    reTakeQuizBtn: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
})