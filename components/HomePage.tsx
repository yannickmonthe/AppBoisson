import React from 'react';
import { StyleSheet, View  } from 'react-native';
import Header from './Header';
import Story from './Story';
import Menu from './Menu';


export default function HomePage() {

  return (
    <View style={styles.container}>
        <Header name='User' surname='Test 1'/>
        <Story/>
        <Menu/>
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
