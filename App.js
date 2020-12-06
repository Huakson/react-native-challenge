import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { Provider as PaperProvider } from 'react-native-paper';
import UserContextProvider from './src/contexts/UserContext';

export default () => {
  return (
    <UserContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </UserContextProvider>
  );
} 