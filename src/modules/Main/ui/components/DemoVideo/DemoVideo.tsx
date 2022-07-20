import React from 'react';

import {StyleSheet} from 'react-native';

import Video from 'react-native-video';

export const DemoVideo = () => {
    return (
        <Video
            source={require('@src/shared/assets/videos/demo1.mp4')}
            style={styles.backgroundVideo}
            resizeMode={'cover'}
            paused={false}
        />
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
