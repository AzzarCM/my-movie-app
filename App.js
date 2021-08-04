import React from 'react'
import { View, Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
//import Navigation from './src/navigation/Navigation';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  
  return (
    <PaperProvider>
      <NavigationContainer> 
        <StackNavigation/>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
