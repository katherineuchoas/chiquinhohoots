import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuizData from '../components/QuizData';

const GameScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [gameFinished, setGameFinished] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);

  useEffect(() => {
    const shuffleQuestions = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setRandomizedQuestions(shuffleQuestions(QuizData));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameFinished(true);
      navigation.navigate('FinishScreen', { score }); 
    }
  };

  const renderQuestion = () => {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    if (!currentQuestion) {
      return null;
    }
    return (
      <>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option.isCorrect)}>
            <Text style={styles.optionButtonText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return (
    <ImageBackground source={require('./gamebackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.content}>
          {renderQuestion()}
        </View>
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    width:'80%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#403630',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10
  },
  optionButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#c4bcb4',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30
  },
  optionButtonText: {
    color: '#403630',
    fontWeight: 'bold',
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

export default GameScreen;
