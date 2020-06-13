import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { StateProvider } from './state/store';
import {AppContainer} from './components/AppContainer';

export default function App() {



  return (
    <StateProvider>
      <AppContainer />
    </StateProvider>

  );
}


