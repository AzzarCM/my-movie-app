import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginForm from '../components/LoginForm'
import { SvgCssUri } from 'react-native-svg';

const SignIn = () => {
    return (
        <View style={style.mainContainer}>
            <SvgCssUri
                style={style.svgContainer}
                width="100%"
                height="25%"
                uri="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            />
            <LoginForm />
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 500,
        height: 500,
    },
    svgContainer:{
        marginBottom: 20,
    }
})

export default SignIn
