import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage';
import Panier from './components/Panier';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tabs = createBottomTabNavigator();

export default function App() {
const IconSize = 40;
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#747474',   shadowOpacity: 0}, tabBarActiveTintColor: "#3ac730", headerShown: false, tabBarShowLabel: false}}>

        <Tabs.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-grid-outline" color={color} size={IconSize} />
          ),
        }}/>


        <Tabs.Screen name="Panier" component={Panier} options={{
          tabBarBadge: 1,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={IconSize} />
          ),
        }}/>


        <Tabs.Screen name="Add" component={HomePage} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle-outline" color={color} size={IconSize} />
          ),
        }}/>


        <Tabs.Screen name="Signal" component={HomePage} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="signal" color={color} size={IconSize} />
          ),
        }}/>


        <Tabs.Screen name="Personne" component={HomePage} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={IconSize} />
          ),
        }}/>
      </Tabs.Navigator>
       
    </NavigationContainer>
  );
}


/*

<HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomePage}
        />

        <HomeStack.Screen
          name="Panier"
          component={Panier}
        />
        
      </HomeStack.Navigator>

*/