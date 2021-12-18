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
          <Text>TEST</Text>
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
      marginLeft: 30,
      marginTop: 20,
      backgroundColor: '#656565',
      height: 150,
      width: 100,
      borderRadius: 20
  },

  desc: {
    marginLeft: 30,
    marginTop: 20,
  }
});
