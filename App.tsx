import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';

export default function App() {
  return (
    <View style={styles.container}>
      <Header name='Monthe' surname='Yannick'/>
      <Story/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#747474'
  },
});
