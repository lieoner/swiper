import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';

import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';

export let EXPORTED_INSETS: EdgeInsets;

const Navigation = () => {
    const navigationRef = useNavigationContainerRef();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        EXPORTED_INSETS = insets;
    }, [insets]);

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={'light-content'}
            />
        </NavigationContainer>
    );
};

export default Navigation;
