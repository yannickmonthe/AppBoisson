import React from 'react';
import { StyleSheet, View  } from 'react-native';
import Header from './Header';
import Story from './Story';


export default function HomePage() {

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
    backgroundColor: '#747474',
    paddingLeft: 10
  },
});
