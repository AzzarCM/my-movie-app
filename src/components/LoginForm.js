import React, {useState, useEffect} from 'react'
import { TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { Button } from 'react-native-paper'
import {getToken} from '../api/apicalls'
import { useFormik } from 'formik'

const LoginForm = () => {

    const data = useFormik({
        initialValues:{
            "email": '',
            "password": '',
        },
        validate: (values) =>{
            let errors = {};

            return errors;
        }
    })

    const login = () =>{
        getToken(data.values);
    }

    return (
        <>
            <TextInput
            nativeID="email"
            placeholder="Correo electronico"
            placeholderTextColor="#969696"
            style={styles.input}
            value={data.values.email}
            onChangeText={data.handleChange('email')}
            />  
            <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor="#969696"
            style={styles.input}
            value={data.values.password}
            onChangeText={data.handleChange('password')}
            /> 
            <Button 
                style={styles.button} 
                mode="contained"
                onPress={() => login()}  
            >
            Log In
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color: "#fff",
        fontSize: 18,
    },
    input:{
        height: 50,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040",
    },
    register:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
    },
    error:{
        borderColor: "#940c0c",
    },
    button:{
        width: '80%'
    }
})

export default LoginForm
