import React from 'react';
import { StyleSheet, View, FlatList, Image, Text } from 'react-native';
import DATA from '../Data/data.json';
import Images from '../global'


interface ItemPanierProps {
    name: string,
    description: string,
    prix: number,
    image: any,
  }
  
function ItemPanier(props: ItemPanierProps) {
  return(
    <View style={styles.item}>
      <View>
        <Image style={styles.image} source={props.image}/>
      </View>

      <View style={styles.desc}>
          <Text style={styles.titre}>{props.name}</Text>
          <Text style={{...styles.titre, fontSize:12, fontWeight: 'normal'} } numberOfLines={4}>{props.description}</Text>
          <Text style={styles.titre}>{props.prix} CFA</Text>
      </View>
    </View>
  );
}

export default function PanierList() {

  return (
    <View style={styles.container}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <ItemPanier name={item.name} image={Images.canette[item.name]} description={item.description} prix={item.prix}  />}
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
      height: 150,
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
