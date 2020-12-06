import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { Provider as PaperProvider } from 'react-native-paper';

export default () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
} 