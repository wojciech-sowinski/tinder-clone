import {
    createStore,
    applyMiddleware
} from 'redux'
import rootReducer from '../reducers/rootReducer'
import isLoggedMiddleware from './middleware'
import thunkMiddleware from 'redux-thunk'

const middleware = applyMiddleware(isLoggedMiddleware, thunkMiddleware)

const store = createStore(rootReducer, middleware)


export default store