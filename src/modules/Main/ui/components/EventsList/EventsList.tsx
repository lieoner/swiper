import React, {useCallback, useEffect} from 'react';

import {FlatList} from 'react-native';

import {useEvents} from '@modules/Main/presenter/useEvents';
import {IEvent} from '@modules/Main/entities/IEvent';

import {EventRow} from '../EventRow';

export const EventsList = () => {
    const {events, fetchEvents} = useEvents();

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const keyExtractor = useCallback((item) => item.id, []);

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
        <FlatList
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={events}
        />
    );
};
