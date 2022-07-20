import React from 'react';

import {View} from 'react-native';

import Video from 'react-native-video';

import {EventsList} from '../../components/EventsList';
import {DemoVideo} from '../../components/DemoVideo';

import {styles} from './styles';

export const Home = () => {
    return (
        <View style={styles.container}>
            <DemoVideo />
        </View>
    );
};
