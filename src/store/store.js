import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist'


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig,reducers)

export default () => {
    let store = createStore(persistedReducer);

    let persistor = persistStore(store);
    return {store, persistor}
}


//export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());