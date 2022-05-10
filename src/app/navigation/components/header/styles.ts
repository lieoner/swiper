import {StyleSheet} from 'react-native';

import {SCREEN_PADDING} from '@constants/ui';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        paddingHorizontal: SCREEN_PADDING,
        paddingBottom: 12,
    },
    backButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 44,
    },

    backgroundGradient: {
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    headerTitle: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        flex: 1,
    },
});
