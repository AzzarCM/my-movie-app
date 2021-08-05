import React from 'react'
import { TextInput, StyleSheet, Text, Alert, Platform } from 'react-native'
import { Button } from 'react-native-paper'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setToken } from '../actions/auth'
import { API_LOGIN_HOST } from '../utils/constants'
import validator from 'validator'
import { useSelector } from 'react-redux'
const LoginForm = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const data = useFormik({
        initialValues: {
            "email": '',
            "password": '',
        },
        validate: (values) => {
            let errors = {};
            if (validator.isEmpty(values.email)) {
                errors.email = "Email is require"
            } else if (!validator.isEmail(values.email)) {
                errors.email = "Invalid email address"
            }
            if (validator.isEmpty(values.password)) {
                errors.password = "Password is require"
            }
            return errors;
        }
    })

    const login = () => {
        const url = `${API_LOGIN_HOST}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.values),
        })
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                if (data.values.email.length > 1 && JSON.stringify(data.errors) == "{}") {
                    dispatch(setToken(result))
                } else {
                    Platform.OS == 'ios' ? Alert.prompt('Error', result.error) : Alert.alert('Error', result.error)
                }

            })
    }
    return (
        <>
            {data.errors.email && (<Text style={styles.error}>{data.errors.email}</Text>)}
            <TextInput
                nativeID="email"
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                style={styles.input}
                value={data.values.email}
                onChangeText={data.handleChange('email')}
            />
            {data.errors.password && (<Text style={styles.error}>{data.errors.password}</Text>)}
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
                color="#01b4e4"
                onPress={() => login()}
            >
                Log In
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 18,
    },
    input: {
        height: 50,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#0d253f",
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#0d253f",
    },
    register: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
    },
    error: {
        color: "#EC7063",
    },
    button: {
        width: '80%',
    }
})

export default LoginForm
