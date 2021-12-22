import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList , TouchableOpacity} from 'react-native';
import DATA from '../Data/data.json';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Images from "../global";

function BoutonForward() {
  return(
    <View style={styles.backPage}> 
      <Text style={styles.titre}>Faites defiler</Text>   
      <Text style={styles.icon}><MaterialCommunityIcons name="arrow-left" color={"white"} size={30} /> <MaterialCommunityIcons name="arrow-right" color={"white"} size={30} /> </Text>
    </View>
  )
}

interface ItemPanierProps {
  name: string;
  prix: number;
  image: any;
}

function Item(props: ItemPanierProps) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.texte}>{props.name}</Text>
      <View style={styles.description}>
        <Text style={styles.prix}>{props.prix} CFA</Text>
        <MaterialCommunityIcons name="cart-outline" color="white" size={26} />
      </View>
    </View>
  );
}

export default function Items() {
  return (
    <>
      <BoutonForward/>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              image={Images.canette[item.name]}
              prix={item.prix}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#8b8b8b",
    borderRadius: 20,
    margin: 10,
  },

  image: {
    shadowOffset: {
      width: -20,
      height: -3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 29.0,
    width: 250,
    height: 350,
  },

  texte: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: 'white'
  },

  description: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 20,
  },

  prix: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },

  backPage: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginBottom: 10
  },

  titre: {
    flex: 1,
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  icon: {
    paddingRight: 20,
  }
});