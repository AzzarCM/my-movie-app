import React, {useState} from 'react'
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Drawer, Switch, TouchableRipple, Text} from "react-native-paper";

export default function DrawerContent(props) {
    const [active, setActive] = useState("home");

    return(
        <DrawerContentScrollView>
            
        </DrawerContentScrollView>
    )
}