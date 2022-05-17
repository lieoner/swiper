import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {SLICES_TYPES} from '@app/store/types';

import {IEvent} from '../entities/IEvent';

interface IMainAppState {
    events: null | IEvent[];
}

export const mainInitialState: IMainAppState = {
    events: null,
};

export const mainSlice = createSlice({
    name: SLICES_TYPES.main,
    initialState: mainInitialState,
    reducers: {
        setEvents(state, action: PayloadAction<null | IEvent[]>) {
            state.events = action.payload;
        },
        clearState(state) {
            Object.assign(state, mainInitialState);
        },
    },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
