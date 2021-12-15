import React from 'react';
import { StyleSheet, View, Image, FlatList , Text} from 'react-native';
import DATA from '../Data/data.json';
import Images from '../global'

interface DataStoryProps {
    name: string,
    image: any
}

function DataStory(props: DataStoryProps) {
  return(
    <View style={styles.Box}>
      <View>
        <Image style={styles.image}  source={props.image}/>
      </View>
      <View>
        <Text numberOfLines={1} style={styles.text}>{props.name}</Text>
      </View>
    </View>
  );
}


export default function Story() {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={({item}) => <DataStory name={item.name} image={Images.logo[item.name]}></DataStory>}
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
      fontSize: 13
    }
});
