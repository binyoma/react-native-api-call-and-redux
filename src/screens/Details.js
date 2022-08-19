import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MoviesContext from '../context/MoviesContext';
import { Card } from 'react-native-paper';
import { getCredits, getMovies } from '../utils/apiCall';
import DetailsComponent from '../components/DetailsComponent';
import ActorComponent from '../components/ActorComponent';


const Details = (route, navigation) => {
  const [films, setFilms]=useState([])
  const [credits, setCredits]=useState([]);
  const [loading, setLoading]=useState(true);
  const {id}=route.route.params;
  
  
  
  useEffect(()=>{
    getMovies().then((data)=>{
      setFilms(data.results);
      setLoading(false)
    })
    getCredits(id).then((data)=>{
      setCredits(data);
      
    })
  },[])
  if(loading){return <ActivityIndicator/>}

  const film=films.find(item=>item.id==id)
  const cast =credits.cast
  return (
    <ScrollView>
      <Card>
        <Card.Cover  source={{ uri :`https://image.tmdb.org/t/p/w500${film.poster_path}`}}/>
      </Card>
      <View><Text>{film.overview}</Text></View>
      <DetailsComponent 
      title={film.title}
      originalTitle={film.original_title}
      originalLanguage={film.original_language}
      released={film.release_date}
      average_vote={film.vote_average}
      average_count={film.vote_count}
      />
      <Text>Actors:</Text>
      <FlatList 
      data={cast}
      keyExtractor={(item,index)=>index}
      horizontal={true}
      renderItem ={({item})=>(<ActorComponent path={item.profile_path} character={item.character} name={item.original_name}/>)
      }
      />
   </ScrollView>
  )
}

export default Details