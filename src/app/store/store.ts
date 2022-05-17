import promiseMiddleware from 'redux-promise';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import {reactotron} from 'reactotron.config';
import {StoreEnhancer, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';

import {SLICES_TYPES} from './types';

const loggerMiddleware = createLogger({
    predicate: () => __DEV__,
    collapsed: true,
    timestamp: true,
});

const reduxPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    stateReconciler: autoMergeLevel2,
};

const middlewares = [promiseMiddleware, loggerMiddleware];
const enchanters: StoreEnhancer[] = [];

if (__DEV__) {
    const reactotronEnhancer =
        !!reactotron?.createEnhancer && reactotron.createEnhancer();
    !!reactotronEnhancer && enchanters.push(reactotronEnhancer);
}

const persistedReducer = persistReducer<RootState>(
    reduxPersistConfig,
    rootReducer,
);

const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(middlewares),
        devTools: true,
        enhancers: enchanters,
    });
};

const store = setupStore();

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const getStoreRedux = () => store.getState();

export {store, persistor};
