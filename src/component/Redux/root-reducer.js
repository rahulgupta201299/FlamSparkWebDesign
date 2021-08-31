import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import NavReducer from './NavChange/NavChange-reducer'
const persistConfig={
    key: 'root',
    storage,
    blacklist: ['change'] ,
    whitelist: []
}

const rootReducer = combineReducers({
    change: NavReducer
})

export default persistReducer(persistConfig,rootReducer)
