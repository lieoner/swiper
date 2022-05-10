import {useCallback, useState} from 'react';

import {IEvent} from '../entities/IEvent';

const MAX_EVENTS_COUNT = 25;

export const useEvents = () => {
    const [events, setEvents] = useState<IEvent[]>([]);

    const fetchEvents = useCallback(async () => {
        const response = await fetch(
            `https://api.github.com/events?per_page=${MAX_EVENTS_COUNT}`,
        );
        try {
            setEvents(await response.json());
        } catch (error) {
            console.error(error);
        }
    }, []);

    return {events, fetchEvents};
};
