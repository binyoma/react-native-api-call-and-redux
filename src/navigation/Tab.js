import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Stack from './Stack'
import Favoris from '../screens/Favoris'
const tab =createBottomTabNavigator()


const Tab = () => {
  return (
    <tab.Navigator>
        <tab.Screen name='Home' component={Stack} options={{ headerShown:false}}/>
        <tab.Screen name='favori' component={Favoris}/>
    </tab.Navigator>
  )
}

export default Tab