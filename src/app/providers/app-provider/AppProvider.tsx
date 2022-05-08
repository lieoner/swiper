import React, {FC} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const AppProvider: FC = ({children}) => {
    return (
        <SafeAreaProvider>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </SafeAreaProvider>
    );
};
