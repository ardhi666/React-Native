import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity } from 'react-native'

export default function State() {

    const [counter, setCounter] = useState(0)

    function Add(){
        return setCounter(counter + 1)
    }
    function Less(){
        return setCounter(counter - 1)
    }

  return (
    <View>
        <StatusBar/>
        <Text>
            If you press add it will increase, but if you click less it will decrease
        </Text>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={Add}>
            <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Less}>
            <Text>Less</Text>
        </TouchableOpacity>
    </View>
  )
}
