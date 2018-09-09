import React from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';

class NewDeck extends React.Component {
    state = { title: '' }

    submitEdit() {
        const { addNewDeck, navigation } = this.props
        const { title } = this.state

        if (title) {
            addNewDeck(title)
            this.setState({ title: '' })
            navigation.goBack()
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
                <View style={[styles.textsView, styles.center]}>
                    <Text style={styles.questionText}>What is the title of your new deck?</Text>

                    <TextInput
                        placeholder='Deck Title'
                        autoFocus={true}
                        style={styles.textInputView}
                        onChangeText={(title) => this.setState({ title })}
                        value={this.state.title}
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
        flex: 1,
        margin: 10,
        padding: 10
    },
    questionText: {
        color: 'black',
        fontSize: 35
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textsView: {
        flex: 0.75,
        padding: 20
    },
    textInputView: {
        margin: 20,
        height: 40,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        color: 'black',
        alignSelf: 'stretch'
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
        addNewDeck: (title) => dispatch(handleAddDeck(title))
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)