import React from 'react';
import { StyleSheet, View, Image, FlatList , Text} from 'react-native';
import DATA from '../Data/data.json'

interface DataStoryProps {
    name: string
}


function DataStory(props: DataStoryProps) {
  const boissonName: string = props.name.toLowerCase();
 // console.log('------------------------------')
 // console.log(' image name :', boissonName);


  switch(boissonName) {
    case "a&w": {
        return (
        <View style={styles.Box}>
          <View>
            <Image style={styles.image}  source={require("../assets/logos/aw.jpg")}/>
          </View>
          <View>
            <Text style={styles.text}>{boissonName}</Text>
          </View>
        </View>
        )}
    case "coca-cola": {
      return (
        <View style={styles.Box}>
        <View>
          <Image style={styles.image}  source={require("../assets/logos/coca-cola.png")}/>
        </View>
        <View>
          <Text style={styles.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "pepsi": {
      return (
        <View style={styles.Box}>
        <View>
          <Image style={styles.image}  source={require("../assets/logos/pepsi.jpg")}/>
        </View>
        <View>
          <Text style={styles.text}>{boissonName}</Text>
        </View>
      </View>
        
      )}
    
    case "orangina": {
      return (
        <View style={styles.Box}>
        <View>
          <Image style={styles.image}  source={require("../assets/logos/orangina.jpeg")}/>
        </View>
        <View>
          <Text style={styles.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "mtn-dew": {
      return (
        <View style={styles.Box}>
        <View>
          <Image style={styles.image}  source={require("../assets/logos/mtn-dew.png")}/>
        </View>
        <View>
          <Text style={styles.text}>{boissonName}</Text>
        </View>
      </View>
      )}

    case "fanta": {
      return (
        <View style={styles.Box}>
        <View>
          <Image style={styles.image}  source={require("../assets/logos/Fanta.jpeg")}/>
        </View>
        <View>
          <Text style={styles.text}>{boissonName}</Text>
        </View>
      </View>
      )}

  case "sprite": {
    return (
      <View style={styles.Box}>
      <View>
        <Image style={styles.image}  source={require("../assets/logos/sprite.jpg")}/>
      </View>
      <View>
        <Text style={styles.text}>{boissonName}</Text>
      </View>
    </View>
      
    )}

  default: { return (<></>)}
  }
}


export default function Story() {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
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
  
  Box: {
    width: 70,
    marginRight: 12,
  },

  image: {
      height: 70,
      width: 70,
      borderRadius: 50,
      borderColor: '#50ae60',
      borderWidth: 3,
      marginRight: 10,
  },

  text: {
      marginTop: 8,
      textAlign: 'center',
      color: 'white',
      fontSize: 15
    }
});
