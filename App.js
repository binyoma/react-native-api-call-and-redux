import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./src/navigation/Tab";
import { getMovies } from "./src/utils/apiCall";
import MoviesContext from "./src/context/MoviesContext";
import { ActivityIndicator } from "react-native";


const App = () => {
  const [movies, setMovies]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    getMovies().then((data)=>{
      setMovies(data.results);
      setLoading(false)
    })
  },[])
  return loading?<ActivityIndicator/>:(
    <MoviesContext.Provider value={movies}>
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
    </MoviesContext.Provider>
   
  )
};



export default App;
