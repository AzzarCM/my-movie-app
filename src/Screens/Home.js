import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import {logout} from '../actions/auth'
import { getPopularMoviesApi } from '../api/movies'
import PopularMovies from '../components/PopularMovies'

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
            <PopularMovies/>
        </View>
    )
}

export default Home
