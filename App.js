import React from 'react';
import type {Node} from 'react';
import {
  View,
} from 'react-native';
import MainStackNavigator from './navigation/AppNavigator';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
const App: () => Node = () => {
  return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  );
};

export default App;
