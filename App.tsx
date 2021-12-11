import React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Story from './components/Story';


export default function App() {
  return (
    <View style={styles.container}>
      <Header name='Monthe' surname='Yannick'/>
      <Story/>

      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#747474',
    paddingLeft: 10
  },
});
