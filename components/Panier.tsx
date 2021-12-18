import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import PanierList from './PanierList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Panier() {

  return (
    <View style={styles.container}>
      <View style={styles.backPage}> 
        <Text style={styles.icon}><MaterialCommunityIcons name="arrow-left" color={"white"} size={30} /> </Text>
        <Text style={styles.titre}>Panier d'achat</Text>   
      </View>
      <PanierList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#747474'
  },

  backPage: {
    flexDirection: 'row',
    height: 100,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  titre: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  icon: {
    paddingLeft: 20,
  }
});
