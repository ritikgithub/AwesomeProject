import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react'

var styles = StyleSheet.create({
  
    container : {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  
    },
  
    text : {
      fontSize: 20,
      padding: 10
    },
  
    textinput : {
        borderWidth: 1,
        borderColor: 'blue',
        minWidth: 200,
        padding: 0,
        marginBottom: 10
    }
  
    
  })
  
const House = ({navigation}) => {
    return (
        <View style={styles.container}>
     
        <Text style={styles.text}>
          Search For House To Buy
        </Text>
     

      <Text style={styles.text}>
        Search By Plarcee Name ors Post Code
      </Text>
      <TextInput style={styles.textinput} placeholder="Search..." />
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          }} />
      </View>
      <Button title="Goto Flatlist" onPress={()=>{navigation.navigate('flatlist')}} />

    </View>

    )
}

export default House;