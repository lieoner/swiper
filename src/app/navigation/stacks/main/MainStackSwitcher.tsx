import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationHeader} from '@app/navigation/components/header';

import {Home} from '@modules/Main';

import {MainStackParamList} from '@navigationTypes';

import {MAIN_STACK_SCREENS} from '@constants/navigation';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackSwitcher = () => {
    return (
        <MainStack.Navigator
            initialRouteName={MAIN_STACK_SCREENS.HOME}
            screenOptions={{
                header: NavigationHeader,
                headerTransparent: false,
            }}>
            <MainStack.Screen
                name={MAIN_STACK_SCREENS.HOME}
                component={Home}
                options={{
                    title: MAIN_STACK_SCREENS.HOME,
                }}
            />
        </MainStack.Navigator>
    );
};
