import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function VideoScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const video = setTimeout(() => {
      navigation.navigate('App'); // Navegar de volta para a página App após a conclusão do vídeo
    }, 5000); // Tempo de espera simulado de 5 segundos. Substitua pelo tempo real do seu vídeo.

    return () => clearTimeout(video); // Limpar timeout quando o componente for desmontado
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/intro.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
