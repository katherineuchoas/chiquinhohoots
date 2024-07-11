import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

const { width } = Dimensions.get('window'); 

const FinishScreen = ({ navigation, route }) => {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(route.params.score);

  const handleInsertRanking = async () => {
    await saveRanking(playerName, score);
    navigation.navigate('Home');
  };

  const saveRanking = async (playerName, score) => {
    try {
      let ranking = await SecureStore.getItemAsync('ranking');
      ranking = ranking ? JSON.parse(ranking) : [];
      ranking.push({ playerName, score });
      ranking.sort((a, b) => b.score - a.score);
      await SecureStore.setItemAsync('ranking', JSON.stringify(ranking));
    } catch (error) {
      console.error('Erro ao salvar o ranking:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>FIM DA RODADA!</Text>
        <Text style={styles.subtitle}>Sua pontuação:</Text>
        <Text style={styles.score}>{score}</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={text => setPlayerName(text)}
          value={playerName}
        />
        <TouchableOpacity style={styles.button} onPress={handleInsertRanking}>
          <Text style={styles.buttonText}>Inserir no Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: width * 0.8, 
    height: 40,
    borderColor: '#c4bcb4',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    width: width * 0.6, 
    height: 40, 
    backgroundColor: '#e5d8c2',
    borderColor: '#f1d7b7',
    borderWidth: 2,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default FinishScreen;
