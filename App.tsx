import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes';


export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Routes/>
    </SafeAreaView>
  );
}
