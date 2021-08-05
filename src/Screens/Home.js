import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Button, Title} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import {logout} from '../actions/auth'
import PopularMovies from '../components/PopularMovies'

const Home = (props) => {
    
    const { navigation} = props;
    const dispatch = useDispatch();
    const cerrar = () =>{
        dispatch(logout());
    }

    return (
        <View>
            <View style={styles.buttonsContainer}>
                <Button
                    mode="contained"
                    onPress={()=> navigation.navigate('search')}
                >Buscar</Button>
                <Button
                    mode="contained"
                    onPress={()=>cerrar()}
                >Log Out</Button>
                
            </View>
            <Title style={styles.title}>Popular Movies</Title>
            <PopularMovies/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
        marginBottom: 25,
    },
    title:{
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: "bold",
        fontSize: 24,
    },
})

export default Home
