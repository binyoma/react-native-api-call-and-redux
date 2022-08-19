import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Card, IconButton, Button, Icon} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Movie = props => {
  const {title, release, path, id, description} = props;
  const navigation = useNavigation();
  const dayjs = require('dayjs');
  const release_date = dayjs(release).format('DD-MM-YYYY');
  return (
    <View>
      <Card  style={styles.card}>
        <Card.Title
          titleStyle={{color:'red'}}
          title={title}
          subtitle={release_date}
          right={() => (
            <View style={styles.details}>
              <IconButton icon="cards-heart-outline" size={20} style={{ backgroundColor:'white'}}/>
              <Button
                icon="dots-horizontal"
                onPress={() => {
                  navigation.navigate('details', {id: id});
                }}
              />
            </View>
          )}
        />
        <Card.Cover source={{uri: `https://image.tmdb.org/t/p/w500${path}`}} />
      </Card>
      <View>
        <Text>{description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: 'row',
  },
  card:{
    backgroundColor:'black'
  }
});

export default Movie;
