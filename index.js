import {AppRegistry} from 'react-native';

import App from './src/app/core/App';
import {name as appName} from './app.json';

function HeadlessCheck({isHeadless}) {
    if (isHeadless) {
        return null;
    }

    return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
