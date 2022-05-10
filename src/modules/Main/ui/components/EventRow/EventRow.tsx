import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {IEvent} from '@modules/Main/entities/IEvent';

import {ACTIVE_OPACITY} from '@constants/ui';

import {styles} from './styles';

interface IProps {
    item: IEvent;
    onPress(): void;
}

export const EventRow: React.FC<IProps> = ({item, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
            <View style={styles.default}>
                <Text>{item.id}</Text>
                <Text>{item.type}</Text>
                <Text>{item.created_at}</Text>
            </View>
        </TouchableOpacity>
    );
};
