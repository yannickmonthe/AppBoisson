import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import DATA from '../Data/data.json';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Images from "../global";

interface ItemPanierProps {
  name: string;
  prix: number;
  image: any;
}

function ItemPanier(props: ItemPanierProps) {
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

export default function PanierList() {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={({ item }) => (
          <ItemPanier
            name={item.name}
            image={Images.canette[item.name]}
            prix={item.prix}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
  },
  image: {
    display: "flex",
    shadowColor: "black",
    shadowOffset: {
      width: -30,
      height: -3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 29.0,

    elevation: 24,
    width: 180,
    height: 400,
  },
  texte: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 20,
  },
  prix: {
    fontSize: 20,
    fontWeight: "bold",
  },
});