import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Details from '../screens/Details'

const stack =createNativeStackNavigator()
const Stack = () => {
  return (
    <stack.Navigator>
        <stack.Screen name='home' component={Home}/>
        <stack.Screen name='details' component={Details}/>
    </stack.Navigator>
  )
}

export default Stack