import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconProps {
    iconName: string,
    iconColor: string
}

function IconFooter(props :IconProps){
    return(
        <Icon style={styles.icon} name={props.iconName} size={40} color={props.iconColor} />
)}

const whiteColor = 'white';
const greenColor = "#3ac730";

export default function Footer() {

  const [gridColor, setGridColor] = useState(greenColor);
  const [cartColor, setCartColor] = useState(whiteColor);
  const [circleColor, setCircleColor] = useState(whiteColor);
  const [signalColor, setSignalColor] = useState(whiteColor);
  const [personColor, setPersonColor] = useState(whiteColor);

  function isSetColor(name: string) {
    

    switch(name) {
      case 'grid': {
        setGridColor(greenColor);
        setCircleColor(whiteColor);
        setPersonColor(whiteColor);
        setCartColor(whiteColor);
        setSignalColor(whiteColor);
        break;
      }

      case 'cart': {
        setGridColor(whiteColor);
        setCircleColor(whiteColor);
        setPersonColor(whiteColor);
        setCartColor(greenColor);
        setSignalColor(whiteColor);
        break;
      }

      case 'circle': {
        setGridColor(whiteColor);
        setCircleColor(greenColor);
        setPersonColor(whiteColor);
        setCartColor(whiteColor);
        setSignalColor(whiteColor);
        break;
      }

      case 'cellular': {
        setGridColor(whiteColor);
        setCircleColor(whiteColor);
        setPersonColor(whiteColor);
        setCartColor(whiteColor);
        setSignalColor(greenColor);
        break;
      }

      case 'person': {
        setGridColor(whiteColor);
        setCircleColor(whiteColor);
        setPersonColor(greenColor);
        setCartColor(whiteColor);
        setSignalColor(whiteColor);
        break;
      }
    }
  }


  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={ () => { isSetColor('grid') }}>
        <IconFooter iconName='grid-outline' iconColor={gridColor}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => { isSetColor('cart') }}>
        <IconFooter iconName='cart-outline' iconColor={cartColor}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => { isSetColor('circle') }}>
        <IconFooter iconName='add-circle' iconColor={circleColor}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => { isSetColor('cellular') }}>
      <IconFooter iconName='cellular' iconColor={signalColor}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => { isSetColor('person') }}>
        <IconFooter iconName='person-outline' iconColor={personColor}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#3f3f3f',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100
    },

    icon: {
    }
});
