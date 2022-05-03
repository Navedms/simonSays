/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './app/redux/store';
import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </NavigationContainer>
    </Provider >
  );
}