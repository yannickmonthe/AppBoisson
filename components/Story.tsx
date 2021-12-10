import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import DATA from '../Data/data.json'

interface DataStoryProps {
    name: string
}


function DataStory(props: DataStoryProps) {
  const boissonName: string = props.name.toLowerCase();
console.log('------------------------------')
console.log(' image name :', boissonName);


  switch(boissonName) {
    case "a&w": {
        return (
          <View>
            <Image style={styles.image}  source={require("../assets/logos/aw.jpg")}/>
          </View>
        )}
    case "coca-cola": {
      return (
        <View>
          <Image style={styles.image}  source={require("../assets/logos/coca-cola.png")}/>
        </View>
      )}

    case "pepsi": {
      return (
        <View>
          <Image style={styles.image}  source={require("../assets/logos/pepsi.jpg")}/>
        </View>
      )}
    
    case "orangina": {
      return (
        <View>
          <Image style={styles.image}  source={require("../assets/logos/orangina.jpeg")}/>
        </View>
      )}

    case "mtn-dew": {
      return (
        <View>
          <Image style={styles.image}  source={require("../assets/logos/mtn-dew.png")}/>
        </View>
      )}

    case "fanta": {
      return (
        <View>
          <Image style={styles.image}  source={require("../assets/logos/Fanta.jpeg")}/>
        </View>
      )}

  case "sprite": {
    return (
      <View>
        <Image style={styles.image}  source={require("../assets/logos/sprite.jpg")}/>
      </View>
    )}

  default: { return (<></>)}
  }
}


export default function Story() {
  return (
    <View style={styles.container}>
       <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => <DataStory name={item.name}></DataStory>}
        keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20,
  },

  image: {
      height: 70,
      width: 70,
      borderRadius: 50,
      borderColor: '#50ae60',
      borderWidth: 3,
      marginRight: 10,
      marginLeft: 10
  }
});
