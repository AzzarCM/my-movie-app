import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { IconButton } from 'react-native-paper'
import Home from "../Screens/Home"
import Search from '../Screens/Search'
import SignIn from '../Screens/SignIn'
import {useSelector} from 'react-redux'

const Stack = createStackNavigator();

export default function StackNavigation() {
    const token = useSelector(state => state.auth.token.token)
    const {searchText} = useSelector(state => state.ui)
    return (
        <Stack.Navigator>
            {
                token !== undefined ? 
                <>
                <Stack.Screen
                    name="home" 
                    component={Home} 
                    options={{ title: 'Home'}} 
                />
                <Stack.Screen
                    name="search" 
                    component={Search} 
                    options={{ title: `Search: ${searchText}` }} 
                />
                </>
                :
                <Stack.Screen
                name="signin" 
                component={SignIn} 
                options={{ title:'', headerTransparent:true }} 
                />
            }  
        </Stack.Navigator>
    )
}
