// Background.js
import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const Background = ({ children }) => {
  return (
    <ImageBackground source={require('../assets/fundo.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;




