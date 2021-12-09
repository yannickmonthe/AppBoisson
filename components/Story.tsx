import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const img1 = require('../assets/logos/Fanta.jpeg')
const img2 = require('../assets/logos/sprite.jpg')
 
interface DataStoryProps {
    imageUrl: string
}

function DataStory(props: DataStoryProps) {
    
    return (
        <View>
            <Image style={styles.image} source={{uri: props.imageUrl}}/>
            <Image style={styles.image} source={img1}/>
            <Image style={styles.image} source={img2}/>
        </View>
    )
}


export default function Story() {
  
  const img = require('../assets/logos/aw.jpg')
  
  return (
    <View style={styles.container}>
        <DataStory imageUrl={img}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 10,
  },

  image: {
      height: 70,
      width: 70,
      borderRadius: 50,
      borderColor: '#50ae60',
      borderWidth: 3
  }
});
