import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {transitionInterpolator} from './transition';
import {MainStack} from './main';

import {AppStackParamList} from '@navigationTypes';

import {
    NAVIGATION_OPTIONS_NO_HEADER,
    NAVIGATION_STACKS,
} from '@constants/navigation';

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackSwitcher = () => {
    return (
        <AppStack.Navigator
            initialRouteName={NAVIGATION_STACKS.APP_MAIN}
            screenOptions={NAVIGATION_OPTIONS_NO_HEADER}>
            <AppStack.Screen
                component={MainStack}
                name={NAVIGATION_STACKS.APP_MAIN}
                options={{
                    cardStyleInterpolator: transitionInterpolator,
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppStackSwitcher;
