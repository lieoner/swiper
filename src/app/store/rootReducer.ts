import {AnyAction} from 'redux';
import {combineReducers} from '@reduxjs/toolkit';

const initialState = {};

const appReducer = combineReducers({});

const rootReducer = (state = initialState, action: AnyAction) => {
    return appReducer(state, action);
};

export default rootReducer;
