import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';
import RankingScreen from './screens/RankingScreen';
import FinishScreen from './screens/FinishScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="RankingScreen" component={RankingScreen} />
      <Stack.Screen name="FinishScreen" component={FinishScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
