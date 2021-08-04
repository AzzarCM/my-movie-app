import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'

const SignIn = () => {
    return (
        <View style={style.mainContainer}>
            <LoginForm/>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SignIn
