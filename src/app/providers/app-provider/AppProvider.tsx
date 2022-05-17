import React, {FC} from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {persistor, store} from '@app/store/store';

export const AppProvider: FC = ({children}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <BottomSheetModalProvider>
                        {children}
                    </BottomSheetModalProvider>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};
