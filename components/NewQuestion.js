import React from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors';
import { handleAddCard } from '../actions';
import { connect } from 'react-redux';

class NewQuestion extends React.Component {
    state = { question: '', answer: '' }

    submitEdit = () => {
        const { navigation, addQuestion } = this.props
        const { title } = navigation.state.params
        const { question, answer } = this.state

        if (title && question && answer) {
            addQuestion(title, this.state)
            navigation.goBack()
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder='Question'
                        autoFocus={true}
                        style={styles.textInput}
                        onChangeText={(question) => this.setState({ question })}
                        value={this.state.question}
                    />
                </View>

                <View style={styles.textInputView}>
                    <TextInput
                        placeholder='Answer'
                        style={styles.textInput}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={this.state.answer}
                    />
                </View>

                <View style={[styles.center, { flex: 0.25, padding: 10, margin: 10 }]}>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submitEdit()}>
                        <Text style={{ color: white, fontSize: 20 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputView: {
        flex: 0.375,
        margin:10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    textInput: {
        height: 50,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        color: 'black'
    },
    submitBtn: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
})

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (title, card) => dispatch(handleAddCard(title, card))
    }
}

export default connect(null, mapDispatchToProps)(NewQuestion)