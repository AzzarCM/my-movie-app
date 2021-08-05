import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import StackNavigation from './StackNavigation';
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen options={{drawerHideStatusBarOnOpen: true, title: ''}} name="app" component={StackNavigation}/>
        </Drawer.Navigator>
    )
    
}