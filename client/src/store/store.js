import {
    createStore,
    applyMiddleware
} from 'redux'
import rootReducer from '../reducers/rootReducer'
import isLoggedMiddleware from './middleware'

const middleware = applyMiddleware(isLoggedMiddleware)

const store = createStore(rootReducer, middleware)


export default store