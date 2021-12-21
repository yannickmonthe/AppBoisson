import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import PanierList from './PanierList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Inventaire({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.backPage}> 
      <TouchableOpacity onPress={ () => { navigation.push('Home') }}>
          <Text style={styles.icon}><MaterialCommunityIcons name="arrow-left" color={"white"} size={30} /> </Text>
      </TouchableOpacity>
      <Text style={styles.titre}>Inventaire de boissons</Text>   
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
