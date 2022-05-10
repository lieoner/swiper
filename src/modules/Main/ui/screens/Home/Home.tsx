import React, {useCallback, useEffect} from 'react';

import {FlatList, View} from 'react-native';

import {useEvents} from '@modules/Main/presenter/useEvents';

import {EventRow} from '../../components/EventRow';
import {IEvent} from '../../../entities/IEvent';

import {styles} from './styles';

export const Home = () => {
    const {events, fetchEvents} = useEvents();

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const onPressItem = useCallback((item: IEvent) => {
        console.log(item);
    }, []);

    const renderItem = useCallback(
        ({item}) => (
            <EventRow
                item={item}
                onPress={() => {
                    onPressItem(item);
                }}
            />
        ),
        [onPressItem],
    );

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                data={events}
            />
        </View>
    );
};
