import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import FinishScreen from './screens/FinishScreen';
import VideoPlayer from './components/VideoPlayer';
import RankingScreen from './screens/RankingScreen';

const Stack = createStackNavigator();

const App = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} videoPlayed={videoPlayed} />}
        </Stack.Screen>
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="FinishScreen" component={FinishScreen} />
        <Stack.Screen name="RankingScreen" component={RankingScreen} />
      </Stack.Navigator>
      {!videoPlayed && <VideoPlayer source={require('./assets/intro.mp4')} onEnd={handleVideoEnd} />}
    </NavigationContainer>
  );
};

export default App;
