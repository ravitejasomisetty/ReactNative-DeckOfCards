import React from 'react'
import { KeyboardAvoidingView, TextInput } from 'react-native'

//Yet to be fixed
export default function KeyboardInput(props) {
    const { placeholderText } = props
    
    return (
        <KeyboardAvoidingView behavior='padding' enabled>
            <TextInput
                placeholder={placeholderText}
                autoFocus={true}
                style={{
                    height: 40,
                    padding: 20,
                    borderRadius: 5,
                    borderWidth: 1
                }}
            />
        </KeyboardAvoidingView>
    )
}