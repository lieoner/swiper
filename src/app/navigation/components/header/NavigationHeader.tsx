import React from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackHeaderProps} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/core';

import {AppStackParamList} from '@navigationTypes';

import {THEMES} from '@constants/themes';

import {styles} from './styles';

export const NavigationHeader = (
    props: StackHeaderProps & {
        navigation: NavigationProp<AppStackParamList>;
        theme?: keyof typeof THEMES;
    },
) => {
    const {navigation, options, back} = props;

    const {top} = useSafeAreaInsets();

    const theme = props?.theme ?? THEMES.DARK;
    const textColor = theme === THEMES.LIGHT ? 'white' : 'black';

    return (
        <View style={{...styles.container, paddingTop: top + 12}}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={
                    theme === THEMES.LIGHT ? 'dark-content' : 'light-content'
                }
            />
            <Text
                style={[
                    styles.headerTitle,
                    {
                        color: textColor,
                    },
                ]}>
                {options.title?.toUpperCase()}
            </Text>
        </View>
    );
};
