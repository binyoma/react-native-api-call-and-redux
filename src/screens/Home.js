import { View, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Movie from '../components/Movie';
import MoviesContext from '../context/MoviesContext';
import { Searchbar } from 'react-native-paper';
import { getMovies } from '../utils/apiCall';

const Home = () => {
  const [movies, setMovies]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    getMovies().then((data)=>{
      setMovies(data.results);
      setLoading(false)
    })
  },[])
  const [searchQuery, setSearchQuery]=useState('')
  const onChangeSearch=query=>{
    setSearchQuery(query);
  }
  return (
    <View>
      <Searchbar
       placeholder='search by title'
       onChangeText={onChangeSearch}
       value={searchQuery}
      />
    <FlatList
     data={movies}
     renderItem={({item})=>(
        <Movie 
            title={item.title}  
            release={item.release_date} 
            path={item.poster_path} 
            id={item.id}
            description={item.overview}
            />
            )}
     keyExtractor={(item,index )=>index}
    />
    </View>
  )
}

export default Home