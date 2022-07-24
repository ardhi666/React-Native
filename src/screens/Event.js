import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity } from 'react-native'

function Event() {

    function Greeting(){
        return alert("Hello World")
    }
    return (
        <View>
            <StatusBar />
            <Text>If You Press "Click Here"</Text>
            <TouchableOpacity onPress={() => alert('Hello React Native')}>
                <Text>Click Here</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Greeting}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Event