import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ videoPlayed }) => {
  const navigation = useNavigation();

  const handleStartQuiz = () => {
    navigation.navigate('GameScreen');
  };

  const handleButtonRanking = () => {
    navigation.navigate('RankingScreen');
  };

  return (
    <View style={styles.container}>
      {videoPlayed ? (
        <ImageBackground source={require('../assets/fundo.png')} style={styles.backgroundImage}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button1} onPress={handleStartQuiz}>
              <Text style={styles.buttonText}>INICIAR QUIZZ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleButtonRanking}>
              <Text style={styles.buttonText}>RANKING</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  button1: {
    width: '68%',
    height: 80,
    backgroundColor: '#e5d8c2',
    borderColor: '#f1d7b7',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: '68%',
    height: 80,
    backgroundColor: '#e5d8c2',
    borderColor: '#f1d7b7',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#55463d',
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: '#f8c655',
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5,
  },
});

export default HomeScreen;
