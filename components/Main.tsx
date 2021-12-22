import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import DATA from '../Data/data.json';

interface componentNameProps {}
interface ItemProps {
    imageUrl: string,
    nom: string,
    prix:string,
    test:string
}

function ItemStory(props: ItemProps) {
  let boissonName: string = "";
  if (props != undefined) {
         boissonName = props.nom.toLowerCase();
  }
 // console.log('------------------------------')
 // console.log(' image name :', boissonName);


  switch(boissonName) {
    case "a&w": {
        return (
        <View style={stylesMain.Box}>
          <View>
            <Image style={stylesMain.image}  source={require("../assets/logos/aw.jpg")}/>
          </View>
          <View>
            <Text style={stylesMain.text}>{boissonName}</Text>
          </View>
        </View>
        )}
    case "coca-cola": {
      return (
        <View style={stylesMain.Box}>
        <View>
          <Image style={stylesMain.image}  source={require("../assets/logos/coca-cola.png")}/>
        </View>
        <View>
          <Text style={stylesMain.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "pepsi": {
      return (
        <View style={stylesMain.Box}>
        <View>
          <Image style={stylesMain.image}  source={require("../assets/logos/pepsi.jpg")}/>
        </View>
        <View>
          <Text style={stylesMain.text}>{boissonName}</Text>
        </View>
      </View>

      )}

    case "orangina": {
      return (
        <View style={stylesMain.Box}>
        <View>
          <Image style={stylesMain.image}  source={require("../assets/logos/orangina.jpeg")}/>
        </View>
        <View>
          <Text style={stylesMain.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "mtn-dew": {
      return (
        <View style={stylesMain.Box}>
        <View>
          <Image style={stylesMain.image}  source={require("../assets/logos/mtn-dew.png")}/>
        </View>
        <View>
          <Text style={stylesMain.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "fanta": {
      return (
        <View style={stylesMain.Box}>
        <View>
          <Image style={stylesMain.image}  source={require("../assets/logos/Fanta.jpeg")}/>
        </View>
        <View>
          <Text style={stylesMain.text}>{boissonName}</Text>
        </View>
      </View>
      )}

  case "sprite": {
    return (
      <View style={stylesMain.Box}>
      <View>
        <Image style={stylesMain.image}  source={require("../assets/logos/sprite.jpg")}/>
      </View>
      <View>
        <Text style={stylesMain.text}>{boissonName}</Text>
      </View>
    </View>

    )}

  default: { return (<></>)}
  }
}
const Item = (props: ItemProps) => (

    <View style={stylesMain.item}>
    {/* <Image style={stylesMain.image}  source={require("../assets/logos/aw.jpg")}/> */}
        <View>
          <Text style={stylesMain.nom}>{props.nom}</Text>
          <Text style={stylesMain.nom}>{props.prix}</Text>
        </View>

    </View>
);

const componentName = (props: componentNameProps) => {
    const renderItem = ({ item }) => (
      <Item imageUrl={item.imageUrl} nom={item.nom} prix={ item.prix}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={({item}) => <ItemStory />}
        keyExtractor={(item: { id: any; }) => item.id} />
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {height: 100}
});

const stylesMain = StyleSheet.create({
  item: {},
  image: {
    height: 70,
    width: 70,
    borderColor: "#50ae60",
    borderWidth: 3,
  },
  nom: {},
  prix: {},
  text: {
    marginTop: 8,
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  Box: {
    width: 70,
    marginRight: 12,
  },
});