import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const RankingScreen = ({ navigation }) => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const loadRanking = async () => {
      try {
        const storedRanking = await SecureStore.getItemAsync('ranking');
        if (storedRanking) {
          setRanking(JSON.parse(storedRanking));
        }
      } catch (error) {
        console.error('Erro ao carregar o ranking:', error);
      }
    };
    loadRanking();
  }, []);

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>RANKING</Text>
          
          <FlatList
            data={ranking}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.rank}>{index + 1}º</Text>
                <Text style={styles.playerName}>{item.playerName}</Text>
                <Text style={styles.score}>{item.score} Pontos</Text>
              </View>
            )}
          />
        </View>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55, 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#403630',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    top: 20
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
    color: '#55463d'
  },
  playerName: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    marginRight: 8,
  },
  score: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red'
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
  },
});

export default RankingScreen;
