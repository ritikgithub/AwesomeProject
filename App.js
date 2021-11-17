
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import MyFlatList from './android/app/src/Components/Flatlist';

import  House from './android/app/src/Components/House';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="House"
          component={House} />
        <Stack.Screen
            name="flatlist" 
            component={MyFlatList} />
           
        </Stack.Navigator>


   </NavigationContainer>

  )
  
}



export default App;
