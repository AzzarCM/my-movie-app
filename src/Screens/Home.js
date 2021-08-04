import React from 'react'
import { View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import {logout} from '../actions/auth'

const Home = () => {
    const dispatch = useDispatch();

    const cerrar = () =>{
        dispatch(logout());
    }

    return (
        <View>
            <Button
                onPress={()=>cerrar()}
            >Log Out</Button>
        </View>
    )
}

export default Home
