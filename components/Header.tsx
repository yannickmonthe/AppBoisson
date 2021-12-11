import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface HeaderProps {
    name: string,
    surname: string,
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.BigText}>{props.name} {props.surname}</Text>
        <Text style={styles.smallText}>Welcome, {props.surname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },

  BigText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
    color: 'white'
  },

  smallText: {
    fontSize: 20,
    color: 'white'
  }
});
