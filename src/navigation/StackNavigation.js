import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../Screens/Home"
import Search from '../Screens/Search'
import SignIn from '../Screens/SignIn'

const Stack = createStackNavigator();

export default function StackNavigation(props) {
    //console.log(props);
    const { navigation } = props
    console.log(navigation);
    const [state, setState] = useState(false)
   
    return (
        <Stack.Navigator>
            {
                state ? 
                <>
                <Stack.Screen
                    name="home" 
                    component={Home} 
                    options={{ title: 'Home' }} 
                />
                <Stack.Screen
                    name="search" 
                    component={Search} 
                    options={{ title: 'Search' }} 
                />
                </>
                :
                <Stack.Screen
                name="signin" 
                component={SignIn} 
                options={{ title: 'Sign In' }} 
            />
            }
           
            
        </Stack.Navigator>
    )
}
