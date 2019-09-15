import {combineReducers} from 'redux'
import authReducer from './authReducer'
import metaReducer from './metaReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    meta:metaReducer,
    error:errorReducer
})


export default rootReducer