import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const DetailsComponent = (props) => {
  const {title,originalTitle, originalLanguage,released,average_vote,average_count}=props
  const dayjs= require('dayjs');
  const release_date = dayjs(released).format('DD-MM-YYYY');
  return (
    <View style={styles.container}>
      <View style={styles.detailBox}>
        <View style={styles.detailName}><Text>Title:</Text></View>
        <View style={styles.detailValue}><Text>{title}</Text></View>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.detailName}><Text>Original title:</Text></View>
        <View style={styles.detailValue}><Text>{originalTitle}</Text></View>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.detailName}><Text>Released:</Text></View>
        <View style={styles.detailValue}><Text>{release_date}</Text></View>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.detailName}><Text>Original langage</Text></View>
        <View style={styles.detailValue}><Text>{originalLanguage}</Text></View>
      </View>
      <View style={styles.detailBox}>
        <View style={styles.detailName}><Text>Average vote (vote count)</Text></View>
        <View style={styles.detailValue}><Text>{average_vote}({average_count})</Text></View>
      </View>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1
  },
  detailBox:{
    flex:1,
    flexDirection:"row"
  },
  detailName:{
    flex:1
  },
  detailValue:{
    flex:3
  }
})

export default DetailsComponent