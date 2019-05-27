// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
// reducers
import { BloodBankReducer } from './reducer/bloodbankreducer';
import thunk from 'redux-thunk';


// Application Reducers
const rootReducer = combineReducers({
    BloodBankReducer
});

export let store = createStore(rootReducer,{},applyMiddleware(thunk));
