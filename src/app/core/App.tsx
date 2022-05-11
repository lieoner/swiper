import React from 'react';

import {enableFreeze} from 'react-native-screens';

import {AppProvider} from '@app/providers/app-provider/AppProvider';
import Navigation from '@app/navigation/Navigation';

enableFreeze(true);

if (__DEV__) {
    import('../../../reactotron.config').then(() =>
        console.log('Reactotron Configured'),
    );
}

const App = () => {
    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
};

export default App;
