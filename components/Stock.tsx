import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import DATA from '../Data/data.json';
import Images from '../global'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AjoutRetirerProps {
  nombre: number,
  onPressMinus?: any,
  onPressPlus?: any,
}
function AjoutRetirer(props: AjoutRetirerProps) {
  return(
    <View style={{ flexDirection: 'row',justifyContent: 'flex-start', 
    alignItems: 'center', height: 40}}>
      <TouchableOpacity onPress={() => { props.onPressMinus }}><MaterialCommunityIcons name="minus-circle-outline" color={"white"} size={30}/></TouchableOpacity>
      <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center', marginLeft: 10, marginRight: 10 }}>{props.nombre}</Text>
      <TouchableOpacity onPress={() => { props.onPressPlus }}><MaterialCommunityIcons name="plus-circle-outline" color={"white"} size={30}/></TouchableOpacity>
    </View>
  )
}


interface ItemPanierProps {
    name: string,
    description: string,
    prix: number,
    image: any,
  }
  
function ItemStock(props: ItemPanierProps) {
  return(
    <View style={styles.item}>
      <View>
        <Image style={styles.image} source={props.image}/>
      </View>

      <View style={styles.desc}>
          <Text style={styles.titre}>{props.name}</Text>
          <Text style={{...styles.titre, fontSize:12, fontWeight: 'normal'} } numberOfLines={4}>{props.description}</Text>
          <Text style={styles.titre}>{props.prix} CFA</Text>
          <AjoutRetirer nombre={2}/>
      </View>
    </View>
  );
}

export default function Stock() {

  return (
    <View style={styles.container}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <ItemStock name={item.name} image={Images.canette[item.name]} description={item.description} prix={item.prix}  />}
        keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3f3f',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },

  image: {
      margin: 20,
      backgroundColor: '#656565',
      height: 170,
      width: 100,
      borderRadius: 20
  },

  desc: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20
  },

  titre: {
    marginBottom: 7,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
