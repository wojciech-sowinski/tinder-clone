import {
    combineReducers
} from 'redux'
import modalReducer from './modalReducer'
import userData from './userData'

const rootReducer = combineReducers({
    modalReducer,
    userData
})


export default rootReducer