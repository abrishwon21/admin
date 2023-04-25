import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { subjectReducer } from './reducers.js/subject';

const initialState ={};
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const Store = createStore(
    combineReducers({
        subjects: subjectReducer,
    }),
    initialState,
composeEnhancer(
    applyMiddleware(thunk)
)
);
export default Store;