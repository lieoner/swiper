import React from 'react';

import {enableFreeze} from 'react-native-screens';

import {AppProvider} from '@app/providers/app-provider/AppProvider';
import Navigation from '@app/navigation/Navigation';

enableFreeze(true);

const App = () => {
    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
};

export default App;
