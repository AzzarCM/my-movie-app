import React from 'react'
import { View, Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  
  return (
    <NavigationContainer>
      <PaperProvider>
        <View>
          <Text>Hola Mundo</Text>
        </View>
      </PaperProvider>
    </NavigationContainer>
   
  )
}

export default App
