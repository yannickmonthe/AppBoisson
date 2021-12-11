import React from 'react';
import {StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconProps {
    iconName: string,
    iconColor: string
}

function isSelected() {
    //todo si icon est toucher deviens vert
}

function IconFooter(props :IconProps){
    return(
    <TouchableOpacity style={styles.icon}>
        <Icon name={props.iconName} size={40} color={props.iconColor} />
    </TouchableOpacity>
)}


export default function Footer() {
  return (
    <View style={styles.container}>
      <IconFooter iconName='grid-outline' iconColor='#3ac730'/>
      <IconFooter iconName='cart-outline' iconColor='white'/>
      <IconFooter iconName='add-circle' iconColor='white'/>
      <IconFooter iconName='cellular' iconColor='white'/>
      <IconFooter iconName='person-outline' iconColor='white'/>
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
