// VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ source, onEnd }) => {
  const video = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        await video.current.playAsync();
      } catch (error) {
        console.error('Erro ao reproduzir o vídeo:', error.message);
      }
    };

    const onPlaybackStatusUpdate = (status) => {
      if (status.didJustFinish) {
        onEnd();
      }
    };

    video.current.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    playVideo();

    return () => {
      video.current.unloadAsync();
    };
  }, [onEnd, source]);

  return (
    <Video
      ref={video}
      style={styles.video}
      source={source}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
