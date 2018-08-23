import { createStore } from 'redux'
import reducer from './src/reducers/videos.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

/* const store = createStore(reducer,{
    categoriesList:[],
    suggestionList: []
}) */

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
    const store = createStore(persistedReducer)
    const persistor = persistStore(store)
    return { store, persistor }
}
