import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const ActorComponent = (props) => {
    const {path, character, name}=props 
    if(path && character && name)
  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={{uri:`https://image.tmdb.org/t/p/w500${path}`}}/>
      <Text style={styles.text}>{name}</Text>
      <Text style={{color:'white'}}>     as</Text>
      <Text style={styles.text}>{character}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        marginHorizontal:2
    },
    text:{
        color:'red'
    }
})
export default ActorComponent