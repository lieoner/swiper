import React from 'react';

import {View} from 'react-native';

import {EventsList} from '../../components/EventsList';

import {styles} from './styles';

export const Home = () => {
    return (
        <View style={styles.container}>
            <EventsList />
        </View>
    );
};
