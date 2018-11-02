import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk);

export const store = createStore(
    rootReducer,
    middleware
);