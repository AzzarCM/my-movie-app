import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux'
import reduxStore from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {

  const {store, persistor} = reduxStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer> 
            <StackNavigation/> 
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
    
  )
}

export default App
