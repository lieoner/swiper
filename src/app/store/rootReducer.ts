import {AnyAction} from 'redux';
import {combineReducers} from '@reduxjs/toolkit';

import {mainInitialState, mainReducer} from '@modules/Main';

const initialState = {
    mainReducer: mainInitialState,
};

const appReducer = combineReducers({
    mainReducer,
});

const rootReducer = (state = initialState, action: AnyAction) => {
    return appReducer(state, action);
};

export default rootReducer;
