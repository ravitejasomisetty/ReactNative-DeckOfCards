import React from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors';

export default function NewQuestion() {

    return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <View style={styles.textInputView}>
                <TextInput
                    placeholder='Question'
                    autoFocus={true}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.textInputView}>
                <TextInput
                    placeholder='Answer'
                    style={styles.textInput}
                />
            </View>

            <View style={[styles.center, { flex: 0.25, padding: 10, margin: 10 }]}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 5, padding: 10, margin: 10 }}>
                    <Text style={{ color: white, fontSize: 20 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputView: {
        flex: 0.375,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    textInput: {
        height: 50,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        color: 'black'
    }
})